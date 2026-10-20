/* =========================================================
   UI/UX Field Notes — application logic
   Vanilla JS, hash routing, localStorage progress.
   ========================================================= */

(() => {
  "use strict";

  const UNITS = window.UNITS || [];
  const app = document.getElementById("app");
  const sidebarToc = document.getElementById("sidebar-toc");
  const sidebarFill = document.getElementById("sidebar-progress-fill");
  const sidebarLabel = document.getElementById("sidebar-progress-label");
  const scrim = document.getElementById("scrim");
  const searchOverlay = document.getElementById("search-overlay");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const toastStack = document.getElementById("toast-stack");

  const STORE_KEY = "uiux-field-notes-v1";
  const PASS_CHAPTER = 60;
  const PASS_TEST = 70;

  const ALL_CHAPTERS = UNITS.flatMap((unit) =>
    unit.chapters.map((chapter) => ({ unit, chapter }))
  );
  const CHAPTER_LOOKUP = new Map(ALL_CHAPTERS.map((entry) => [entry.chapter.id, entry]));
  const UNIT_LOOKUP = new Map(UNITS.map((unit) => [unit.id, unit]));

  let session = null;
  let activeRoute = "home";

  /* ---------------- storage ---------------- */

  function defaultProgress() {
    return {
      chapters: {},
      unitTests: {},
      final: {},
      xp: 0,
      streak: { count: 0, last: null },
      last: null,
      theme: null
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultProgress();
      const parsed = JSON.parse(raw);
      return {
        ...defaultProgress(),
        ...parsed,
        chapters: parsed.chapters || {},
        unitTests: parsed.unitTests || {},
        final: parsed.final || {},
        streak: parsed.streak || { count: 0, last: null }
      };
    } catch (err) {
      console.warn("Could not read saved progress", err);
      return defaultProgress();
    }
  }

  let progress = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    } catch (err) {
      console.warn("Could not save progress", err);
    }
  }

  function chapterState(id) {
    if (!progress.chapters[id]) {
      progress.chapters[id] = { read: false, chunks: {}, best: 0, attempts: 0, completed: false };
    }
    return progress.chapters[id];
  }

  function bestFor(id) {
    return progress.chapters[id]?.best || 0;
  }

  function isComplete(id) {
    return bestFor(id) >= PASS_CHAPTER;
  }

  function chapterStudyPct(chapter) {
    const st = progress.chapters[chapter.id];
    if (!st) return 0;
    const total = chapter.chunks.length;
    const done = Object.values(st.chunks || {}).filter(Boolean).length;
    return total ? Math.round((done / total) * 100) : 0;
  }

  function overallStats() {
    const total = ALL_CHAPTERS.length;
    const completed = ALL_CHAPTERS.filter(({ chapter }) => isComplete(chapter.id)).length;
    const started = ALL_CHAPTERS.filter(({ chapter }) => {
      const st = progress.chapters[chapter.id];
      return st && (st.attempts > 0 || Object.values(st.chunks || {}).some(Boolean));
    }).length;
    const scores = ALL_CHAPTERS.map(({ chapter }) => bestFor(chapter.id)).filter((n) => n > 0);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    return {
      total,
      completed,
      started,
      avg,
      pct: total ? Math.round((completed / total) * 100) : 0
    };
  }

  function unitStats(unit) {
    const total = unit.chapters.length;
    const completed = unit.chapters.filter((ch) => isComplete(ch.id)).length;
    return { total, completed, pct: total ? Math.round((completed / total) * 100) : 0 };
  }

  function totalQuestions() {
    return UNITS.reduce(
      (sum, unit) => sum + unit.chapters.reduce((s, ch) => s + ch.quiz.length, 0),
      0
    );
  }

  function totalMinutes() {
    return UNITS.reduce(
      (sum, unit) => sum + unit.chapters.reduce((s, ch) => s + ch.minutes, 0),
      0
    );
  }

  /* ---------------- helpers ---------------- */

  const esc = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const pad = (n) => String(n).padStart(2, "0");

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function yesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function routeFromHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) return { name: "home" };
    const [name, param] = raw.split("/");
    return { name: name || "home", param };
  }

  function go(hash) {
    if (location.hash === hash) {
      render();
    } else {
      location.hash = hash;
    }
  }

  function toast(message) {
    if (!toastStack) return;
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `<span class="tick" aria-hidden="true">✓</span><span>${esc(message)}</span>`;
    toastStack.appendChild(el);
    window.setTimeout(() => {
      el.classList.add("leaving");
      window.setTimeout(() => el.remove(), 260);
    }, 2600);
  }

  function unitAccent(unit) {
    return unit.number === 2 ? "teal" : unit.number === 3 ? "gold" : "coral";
  }

  function nextInCourse(entry) {
    const i = ALL_CHAPTERS.findIndex((item) => item.chapter.id === entry.chapter.id);
    return ALL_CHAPTERS[i + 1] || null;
  }

  function prevInCourse(entry) {
    const i = ALL_CHAPTERS.findIndex((item) => item.chapter.id === entry.chapter.id);
    return ALL_CHAPTERS[i - 1] || null;
  }

  function resumeEntry() {
    if (progress.last && CHAPTER_LOOKUP.has(progress.last)) {
      return CHAPTER_LOOKUP.get(progress.last);
    }
    const incomplete = ALL_CHAPTERS.find(({ chapter }) => !isComplete(chapter.id));
    return incomplete || ALL_CHAPTERS[0];
  }

  /* ---------------- theme ---------------- */

  function applyTheme() {
    const stored = progress.theme;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').setAttribute(
      "content",
      theme === "dark" ? "#14120f" : "#f5f1e8"
    );
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    progress.theme = current === "dark" ? "light" : "dark";
    saveProgress();
    applyTheme();
  }

  /* ---------------- rendering: shell ---------------- */

  function renderSidebar(route) {
    sidebarToc.innerHTML = UNITS.map((unit) => {
      const stats = unitStats(unit);
      const chapters = unit.chapters
        .map((chapter) => {
          const st = progress.chapters[chapter.id];
          const done = isComplete(chapter.id);
          const partial = !done && st && (st.attempts > 0 || Object.values(st.chunks || {}).some(Boolean));
          const active = route.name === "chapter" && route.param === chapter.id ? " active" : "";
          return `<a class="toc-chapter${active}" href="#chapter/${chapter.id}">
            <span class="num">${esc(chapter.number)}</span>
            <span>${esc(chapter.title)}</span>
            <span class="dot${done ? " done" : partial ? " partial" : ""}" aria-label="${done ? "Completed" : partial ? "In progress" : "Not started"}"></span>
          </a>`;
        })
        .join("");
      return `<div class="toc-unit" data-unit="${unit.id}">
        <div class="toc-unit-head">
          <span class="toc-unit-num">U${unit.number}</span>
          <span class="toc-unit-title">${esc(unit.title)}</span>
          <span class="pill" style="margin-left:auto">${stats.completed}/${stats.total}</span>
        </div>
        <div class="toc-chapters">${chapters}</div>
      </div>`;
    }).join("");

    const stats = overallStats();
    sidebarFill.style.width = `${stats.pct}%`;
    sidebarLabel.textContent = `${stats.pct}%`;
  }

  function render() {
    const route = routeFromHash();
    activeRoute = route.name;

    document.querySelectorAll(".topnav a").forEach((link) => {
      const key = link.dataset.nav;
      const isActive =
        key === route.name ||
        (key === "toc" && route.name === "toc") ||
        (key === "progress" && route.name === "progress") ||
        (key === "final" && route.name === "final") ||
        (key === "home" && route.name === "home");
      link.classList.toggle("active", Boolean(isActive));
    });

    if (route.name === "chapter") {
      const entry = CHAPTER_LOOKUP.get(route.param);
      if (!entry) {
        app.innerHTML = notFound("That chapter does not exist.");
      } else {
        renderChapter(entry);
        progress.last = entry.chapter.id;
        saveProgress();
      }
    } else if (route.name === "quiz") {
      const entry = CHAPTER_LOOKUP.get(route.param);
      if (!entry) {
        app.innerHTML = notFound("That quiz does not exist.");
      } else {
        if (!session || session.chapterId !== entry.chapter.id || session.mode !== "chapter") {
          createChapterSession(entry);
        }
        renderQuiz();
      }
    } else if (route.name === "test") {
      const unit = UNIT_LOOKUP.get(route.param);
      if (!unit) {
        app.innerHTML = notFound("That unit test does not exist.");
      } else {
        if (!session || session.mode !== "unit" || session.unitId !== unit.id) {
          createUnitSession(unit);
        }
        renderQuiz();
      }
    } else if (route.name === "final") {
      renderFinalLanding();
    } else if (route.name === "progress") {
      renderProgress();
    } else if (route.name === "toc") {
      renderContentsPage();
    } else {
      renderHome();
    }

    renderSidebar(route);
    closeSidebar();
  }

  function notFound(message) {
    return `<div class="empty-state fade-in">
      <p class="eyebrow">404 · Lost in the flow</p>
      <h2>Page not found</h2>
      <p>${esc(message)}</p>
      <p style="margin-top:18px"><a class="btn btn-primary" href="#home">Back to home</a></p>
    </div>`;
  }

  /* ---------------- home ---------------- */

  function renderHome() {
    const stats = overallStats();
    const resume = resumeEntry();
    const resumeUnit = resume.unit;
    const unitOne = UNITS[0];
    const u1Stats = unitStats(unitOne);
    const u1Questions = unitOne.chapters.reduce((sum, ch) => sum + ch.quiz.length, 0);

    app.innerHTML = `
      <div class="home">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-grid">
            <div class="hero-copy">
              <p class="eyebrow">CSA-300 · Semester V · UI/UX Design</p>
              <h1 id="hero-title">Learn the interface, <em>one chunk at a time.</em></h1>
              <p class="hero-lede">
                Two sets of lecture notes, distilled into short study cards, key terms and
                quick quizzes. Start with Unit 1, then follow the table of contents through
                UX foundations, research, prototyping and testing.
              </p>
              <div class="hero-actions">
                <a class="btn btn-coral" href="#chapter/${resume.chapter.id}">
                  ${stats.started ? "Continue studying" : "Start Unit 1"}
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
                <a class="btn btn-ghost" href="#toc">See the contents</a>
              </div>
              <p class="hero-note">
                <b>${stats.total} chapters</b> · ${totalQuestions()} questions · ${Math.round(totalMinutes() / 60)} hours of reading
              </p>
            </div>

            <div class="hero-stack" aria-hidden="true">
              <div class="stack-card">
                <div class="stack-top"><span class="stack-label">Unit 2 · UX</span><span class="stack-dots"><i></i><i></i><i></i></span></div>
                <div class="stack-body">
                  <div class="stack-line accent"></div>
                  <div class="stack-line w88"></div>
                  <div class="stack-line w70"></div>
                  <div class="stack-line w45"></div>
                  <div class="stack-grid"><div class="stack-tile"></div><div class="stack-tile"></div><div class="stack-tile"></div><div class="stack-tile"></div></div>
                </div>
              </div>
              <div class="stack-card">
                <div class="stack-top"><span class="stack-label">Unit 3 · Testing</span><span class="stack-dots"><i></i><i></i><i></i></span></div>
                <div class="stack-body">
                  <div class="stack-line teal" style="height:9px;width:48%"></div>
                  <div class="stack-line w70"></div>
                  <div class="stack-line w88"></div>
                  <div class="stack-line w45"></div>
                </div>
              </div>
              <div class="stack-card">
                <div class="stack-top"><span class="stack-label">Field note · 01</span><span class="stack-chip">Unit 1</span></div>
                <div class="stack-body">
                  <span class="stack-title">Formal &amp; active elements</span>
                  <span class="stack-sub">Static structure meets interactive behaviour.</span>
                  <div class="stack-line w88"></div>
                  <div class="stack-line w70"></div>
                  <div class="stack-grid"><div class="stack-tile"></div><div class="stack-tile"></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="u1-title">
          <div class="unit-feature">
            <div class="unit-feature-copy">
              <span class="pill coral">Unit 1 · Start here</span>
              <h2 id="u1-title">${esc(unitOne.title)}</h2>
              <p>${esc(unitOne.intro)}</p>
              <div class="feature-outcome">
                <strong>What you'll be able to do</strong>
                ${esc(unitOne.outcome)}
              </div>
              <div class="feature-stats">
                <div class="feature-stat"><strong>${u1Stats.total}</strong><span>Chapters</span></div>
                <div class="feature-stat"><strong>${u1Questions}</strong><span>Quiz questions</span></div>
                <div class="feature-stat"><strong>${Math.round(unitOne.chapters.reduce((s, c) => s + c.minutes, 0) / 60 * 10) / 10}h</strong><span>Reading</span></div>
                <div class="feature-stat"><strong>${u1Stats.pct}%</strong><span>Complete</span></div>
              </div>
              <div class="hero-actions" style="margin-top:26px">
                <a class="btn btn-primary" href="#chapter/${unitOne.chapters[0].id}">Open chapter 01</a>
                <a class="btn btn-ghost" href="#toc">Full contents</a>
              </div>
            </div>
            <div class="unit-feature-side">
              <div class="giant-num" aria-hidden="true">01</div>
              <div class="mini-toc">
                ${unitOne.chapters.slice(0, 6).map((chapter) => `
                  <a href="#chapter/${chapter.id}">
                    <span class="num">${esc(chapter.number)}</span>
                    <span>${esc(chapter.title)}</span>
                  </a>`).join("")}
                <a class="more" href="#toc">See all ${unitOne.chapters.length} chapters →</a>
              </div>
            </div>
          </div>
        </section>

        ${renderProgressStrip(stats)}

        <section class="home-section" aria-labelledby="contents-title">
          <div class="section-head">
            <div>
              <p class="eyebrow">Table of contents</p>
              <h2 id="contents-title">Three units, one learning path</h2>
              <p>Each chapter is a short read followed by a quiz. Pass at 60% to mark it complete; retake any time.</p>
            </div>
            <a class="section-link" href="#toc">Open full contents →</a>
          </div>
          <div class="toc-grid">
            ${UNITS.map((unit) => {
              const s = unitStats(unit);
              const q = unit.chapters.reduce((sum, ch) => sum + ch.quiz.length, 0);
              return `<article class="unit-card" data-unit="${unit.id}">
                <div class="unit-card-top">
                  <span class="unit-index">0${unit.number}</span>
                  <span class="pill ${unitAccent(unit)}">${s.total} chapters</span>
                </div>
                <h3>${esc(unit.title)}</h3>
                <p>${esc(unit.tagline)}</p>
                <div class="unit-card-meta"><span>${q} questions</span><i></i><span>${s.completed} done</span></div>
                <div class="progress-track"><span style="width:${s.pct}%;background:var(--${unit.number === 1 ? "coral" : unit.number === 2 ? "teal" : "gold"})"></span></div>
                <a class="btn btn-quiet btn-sm" href="#chapter/${unit.chapters[0].id}">${s.completed ? "Review unit" : s.completed > 0 ? "Keep going" : "Start unit"} →</a>
              </article>`;
            }).join("")}
          </div>
        </section>

        <section class="home-section" aria-labelledby="how-title">
          <div class="section-head">
            <div>
              <p class="eyebrow">How it works</p>
              <h2 id="how-title">Read small. Recall often.</h2>
              <p>Built for the way the notes are structured: short concepts, quick checks, then a chapter test.</p>
            </div>
          </div>
          <div class="how-grid">
            <div class="how-card">
              <div class="how-num">01</div>
              <h3>Study a chunk</h3>
              <p>Every chapter is split into focused study cards. Tick <code>Got it</code> as you go and reveal key terms only when you want to test yourself.</p>
            </div>
            <div class="how-card">
              <div class="how-num">02</div>
              <h3>Check your recall</h3>
              <p>Answer multiple-choice questions with instant explanations. Choose with keys <code>1–4</code>, check with <code>Enter</code>.</p>
            </div>
            <div class="how-card">
              <div class="how-num">03</div>
              <h3>Track the path</h3>
              <p>Scores, XP, streaks and per-unit progress live in your browser. When a unit is done, take its test — or the final mixed test.</p>
            </div>
          </div>
        </section>

        <section class="quote-band" aria-label="How this site works">
          <div>
            <blockquote>“Good UI design is invisible — users shouldn't notice the interface, but rather easily accomplish their goals.”</blockquote>
            <small>Key takeaway · Unit 1</small>
          </div>
          <a class="btn" href="#chapter/${unitOne.chapters[unitOne.chapters.length - 1].id}">
            Jump to interaction design
          </a>
        </section>
      </div>
    `;
  }

  function renderProgressStrip(stats) {
    return `<section class="progress-strip" aria-label="Overall progress">
      <div class="progress-cell">
        <div class="value">${stats.pct}<small>%</small></div>
        <div class="label">Course complete</div>
        <div class="bar"><span style="width:${stats.pct}%"></span></div>
      </div>
      <div class="progress-cell">
        <div class="value">${stats.completed}<small>/${stats.total}</small></div>
        <div class="label">Chapters passed</div>
        <div class="bar"><span style="width:${stats.pct}%"></span></div>
      </div>
      <div class="progress-cell">
        <div class="value">${stats.avg}<small>%</small></div>
        <div class="label">Average quiz score</div>
        <div class="bar"><span style="width:${stats.avg}%"></span></div>
      </div>
      <div class="progress-cell">
        <div class="value">${progress.xp}<small> XP</small></div>
        <div class="label">${progress.streak.count || 0}-day streak</div>
        <div class="bar"><span style="width:${Math.min(100, progress.xp % 100)}%"></span></div>
      </div>
    </section>`;
  }

  /* ---------------- contents ---------------- */

  function renderContentsPage() {
    const stats = overallStats();
    app.innerHTML = `
      <div class="contents fade-in">
        <header class="page-head">
          <p class="eyebrow">Table of contents</p>
          <h1>Everything in the notes.</h1>
          <p>
            ${stats.total} chapters across three units, ordered the way the material builds.
            Open any chapter to read the chunks, reveal key terms and take its quiz.
          </p>
        </header>

        ${UNITS.map((unit) => {
          const s = unitStats(unit);
          return `<section class="unit-block" data-unit="${unit.id}" aria-labelledby="${unit.id}-heading">
            <div class="unit-block-head">
              <span class="num">0${unit.number}</span>
              <div>
                <h2 id="${unit.id}-heading">${esc(unit.title)}</h2>
                <p>${esc(unit.tagline)} · ${s.completed} of ${s.total} complete</p>
              </div>
              <div class="unit-actions">
                <a class="btn btn-quiet btn-sm" href="#chapter/${unit.chapters[0].id}">Start unit</a>
                <button class="btn btn-ghost btn-sm" type="button" data-action="start-unit-test" data-unit="${unit.id}">Unit test</button>
              </div>
            </div>
            <div class="chapter-list">
              ${unit.chapters.map((chapter) => {
                const best = bestFor(chapter.id);
                const done = isComplete(chapter.id);
                const st = progress.chapters[chapter.id];
                const partial = !done && st && (st.attempts > 0 || Object.values(st.chunks || {}).some(Boolean));
                return `<a class="chapter-row" href="#chapter/${chapter.id}">
                  <span class="cnum">${esc(chapter.number)}</span>
                  <span>
                    <h3>${esc(chapter.title)}</h3>
                    <p>${esc(chapter.subtitle)}</p>
                  </span>
                  <span class="cmeta">
                    <span>${chapter.minutes} min</span>
                    ${best ? `<span class="score">${best}%</span>` : ""}
                  </span>
                  <span class="status-dot${done ? " done" : partial ? " partial" : ""}" title="${done ? "Completed" : partial ? "In progress" : "Not started"}"></span>
                </a>`;
              }).join("")}
            </div>
          </section>`;
        }).join("")}

        <section class="card" style="padding:26px;margin-top:8px">
          <div class="section-head" style="margin-bottom:10px">
            <div>
              <p class="eyebrow">Mixed practice</p>
              <h2 style="font-size:26px">Ready for everything?</h2>
            </div>
          </div>
          <p style="color:var(--muted);font-size:13px;max-width:62ch">
            The final test samples 20 questions from all three units. Unit tests sample 12 questions
            from a single unit. Both are drawn from the chapter quizzes, so every question has an explanation.
          </p>
          <div class="hero-actions" style="margin-top:18px">
            <a class="btn btn-primary" href="#final">Open final test</a>
            <a class="btn btn-ghost" href="#progress">View progress</a>
          </div>
        </section>
      </div>
    `;
  }

  /* ---------------- chapter ---------------- */

  function renderChapter(entry) {
    const { unit, chapter } = entry;
    const st = chapterState(chapter.id);
    const studyPct = chapterStudyPct(chapter);
    const best = st.best || 0;
    const prev = prevInCourse(entry);
    const next = nextInCourse(entry);
    const qCount = chapter.quiz.length;

    app.innerHTML = `
      <div class="chapter-page">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="#home">Home</a><span class="sep">/</span>
          <a href="#toc">Unit ${unit.number}</a><span class="sep">/</span>
          <span class="current">Chapter ${esc(chapter.number)}</span>
        </nav>

        <header class="chapter-head">
          <div class="chapter-head-top">
            <span class="pill ${unitAccent(unit)}">Unit ${unit.number} · ${esc(unit.title)}</span>
            ${st.completed ? '<span class="pill good">Completed</span>' : studyPct > 0 ? '<span class="pill">In progress</span>' : ""}
          </div>
          <h1>${esc(chapter.title)}</h1>
          <p class="chapter-sub">${esc(chapter.subtitle)}</p>
          <div class="chapter-meta">
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>${chapter.minutes} min read</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"/></svg>${chapter.chunks.length} study chunks</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>${qCount} quiz questions</span>
            ${best ? `<span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8M12 17v4M17 5h3v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5h3"/><path d="M7 3h10v6a5 5 0 0 1-10 0Z"/></svg>Best score ${best}%</span>` : ""}
          </div>
        </header>

        <div class="chapter-layout">
          <div class="chapter-body">
            <div class="objectives">
              <h2>After this chapter</h2>
              <ul>${chapter.objectives.map((objective) => `<li>${esc(objective)}</li>`).join("")}</ul>
            </div>

            <p class="chapter-summary">${esc(chapter.summary)}</p>

            ${chapter.chunks.map((chunk, index) => {
              const done = Boolean(st.chunks && st.chunks[index]);
              return `<section class="chunk" id="chunk-${index + 1}" data-done="${done}" data-chunk-index="${index}">
                <div class="chunk-head">
                  <span class="chunk-num" aria-hidden="true">${pad(index + 1)}</span>
                  <div>
                    <span class="chunk-tag">Study chunk ${pad(index + 1)}</span>
                    <h2>${esc(chunk.title)}</h2>
                  </div>
                </div>
                <ul>${chunk.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>
                <div class="chunk-foot">
                  <button class="check-chunk" type="button" data-action="toggle-chunk" data-chapter="${chapter.id}" data-index="${index}" aria-pressed="${done}">
                    <span class="tick" aria-hidden="true">✓</span>
                    <span>${done ? "Studied" : "Got it — mark studied"}</span>
                  </button>
                </div>
              </section>`;
            }).join("")}

            <section class="terms-block" aria-labelledby="terms-heading">
              <h2 id="terms-heading">Key terms</h2>
              <p>Tap a card to reveal the definition. Try recalling it first.</p>
              <div class="terms-grid">
                ${chapter.terms.map((term) => `
                  <button class="term-card" type="button" data-action="reveal-term" aria-expanded="false">
                    <strong>${esc(term.t)}</strong>
                    <span class="def" aria-hidden="true">${esc(term.d)}</span>
                    <span class="tap-hint">Tap to reveal</span>
                  </button>`).join("")}
              </div>
            </section>

            <div class="chapter-end">
              <div>
                <h2>Ready to check yourself?</h2>
                <p>${qCount} questions on this chapter. Score 60% to mark it complete. Every answer has an explanation.</p>
              </div>
              <a class="btn btn-primary" href="#quiz/${chapter.id}">
                Take the chapter quiz
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </div>

            <nav class="chapter-pager" aria-label="Chapter navigation">
              ${prev ? `<a class="pager-link" href="#chapter/${prev.chapter.id}"><small>Previous</small><strong>← ${esc(prev.chapter.title)}</strong></a>` : `<span></span>`}
              ${next ? `<a class="pager-link next" href="#chapter/${next.chapter.id}"><small>Next</small><strong>${esc(next.chapter.title)} →</strong></a>` : `<span></span>`}
            </nav>
          </div>

          <aside class="chapter-rail" aria-label="Chapter tools">
            <div class="rail-card rail-primary">
              <h3>Chapter check</h3>
              <div class="rail-progress-ring">
                <div>
                  <span class="pct">${studyPct}%</span>
                  <small>chunks studied</small>
                </div>
              </div>
              <div class="progress-track" style="margin-top:12px"><span style="width:${studyPct}%"></span></div>
              <p style="margin-top:12px">${best ? `Best quiz score: <strong style="color:var(--good)">${best}%</strong>` : "No quiz attempt yet."}</p>
              <a class="btn btn-coral btn-sm" href="#quiz/${chapter.id}">${best ? "Retake quiz" : "Start quiz"} →</a>
              <button class="btn btn-ghost btn-sm" type="button" data-action="start-unit-test" data-unit="${unit.id}" style="margin-top:7px">Unit ${unit.number} test</button>
            </div>

            <div class="rail-card">
              <h3>In this chapter</h3>
              <div class="rail-list">
                ${chapter.chunks.map((chunk, index) => `<button class="rail-link" type="button" data-action="scroll-to" data-target="chunk-${index + 1}"><span>${esc(chunk.title)}</span><span>${pad(index + 1)}</span></button>`).join("")}
                <button class="rail-link" type="button" data-action="scroll-to" data-target="terms-heading"><span>Key terms</span><span>${chapter.terms.length}</span></button>
              </div>
            </div>

            <div class="rail-card">
              <h3>Unit ${unit.number} chapters</h3>
              <div class="rail-list">
                ${unit.chapters.map((c) => `<a class="rail-link" href="#chapter/${c.id}" style="${c.id === chapter.id ? "color:var(--coral);font-weight:700" : ""}"><span>${esc(c.number)} · ${esc(c.title)}</span><span>${isComplete(c.id) ? "✓" : ""}</span></a>`).join("")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  /* ---------------- quiz session ---------------- */

  function randomiseOptions(questions) {
    return questions.map((question) => {
      const options = shuffle(
        question.opts.map((text, index) => ({ text, correct: index === question.a }))
      );
      return {
        ...question,
        opts: options.map((option) => option.text),
        a: options.findIndex((option) => option.correct)
      };
    });
  }

  function createChapterSession(entry) {
    const { unit, chapter } = entry;
    session = {
      mode: "chapter",
      unitId: unit.id,
      chapterId: chapter.id,
      title: chapter.title,
      subtitle: `Unit ${unit.number} · Chapter ${chapter.number}`,
      questions: randomiseOptions(chapter.quiz),
      index: 0,
      answers: Array(chapter.quiz.length).fill(null),
      checked: false,
      passMark: PASS_CHAPTER
    };
  }

  function createUnitSession(unit) {
    const pool = unit.chapters.flatMap((chapter) => chapter.quiz);
    const questions = randomiseOptions(
      shuffle(pool).slice(0, Math.min(12, pool.length))
    );
    session = {
      mode: "unit",
      unitId: unit.id,
      chapterId: null,
      title: `Unit ${unit.number} test`,
      subtitle: unit.title,
      questions,
      index: 0,
      answers: Array(questions.length).fill(null),
      checked: false,
      passMark: PASS_TEST
    };
    toast(`Unit ${unit.number} test started · ${questions.length} questions`);
    go("#test/" + unit.id);
    renderQuiz();
  }

  function createFinalSession() {
    const pool = UNITS.flatMap((unit) =>
      unit.chapters.flatMap((chapter) =>
        chapter.quiz.map((q) => ({ ...q, chapterTitle: chapter.title }))
      )
    );
    const questions = randomiseOptions(shuffle(pool).slice(0, 20));
    session = {
      mode: "final",
      unitId: null,
      chapterId: null,
      title: "Final mixed test",
      subtitle: "20 questions from all three units",
      questions,
      index: 0,
      answers: Array(questions.length).fill(null),
      checked: false,
      passMark: PASS_TEST
    };
    renderQuiz();
  }

  function startQuizForChapter(chapterId) {
    const entry = CHAPTER_LOOKUP.get(chapterId);
    if (!entry) return;
    createChapterSession(entry);
    go("#quiz/" + chapterId);
  }

  function renderQuiz() {
    if (!session) {
      render();
      return;
    }
    const s = session;
    const q = s.questions[s.index];
    const answered = s.answers[s.index];
    const isChecked = s.checked;
    const correctIndex = q.a;
    const questionPct = Math.round((s.index / s.questions.length) * 100);

    app.innerHTML = `
      <div class="quiz-page">
        <h1 class="sr-only">${esc(s.title)} quiz</h1>
        <div class="quiz-top">
          <button class="close-quiz" type="button" data-action="close-quiz" aria-label="Close quiz">✕</button>
          <div class="quiz-title">
            ${esc(s.title)}
            <small>${esc(s.subtitle)}</small>
          </div>
          <div class="quiz-count">${s.index + 1} / ${s.questions.length}</div>
        </div>

        <div class="quiz-progress" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${questionPct}" aria-valuetext="Question ${s.index + 1} of ${s.questions.length}">
          <span style="width:${questionPct}%"></span>
        </div>

        <article class="question-card">
          <div class="q-kicker">
            <span class="eyebrow">Question ${pad(s.index + 1)}</span>
            <span class="tag">${s.mode === "chapter" ? "Chapter quiz" : s.mode === "unit" ? "Unit test" : "Final test"}</span>
          </div>
          <h2>${esc(q.q)}</h2>

          <div class="options" role="group" aria-label="Answer options">
            ${q.opts.map((opt, i) => {
              let cls = "option";
              if (isChecked) {
                if (i === correctIndex) cls += " correct";
                else if (i === answered) cls += " wrong";
                else cls += " dim";
              } else if (i === answered) {
                cls += " selected";
              }
              return `<button class="${cls}" type="button" data-action="choose-option" data-option="${i}" ${isChecked ? "disabled" : ""} aria-pressed="${i === answered}">
                <span class="key" aria-hidden="true">${String.fromCharCode(65 + i)}</span>
                <span>${esc(opt)}</span>
              </button>`;
            }).join("")}
          </div>

          ${isChecked ? `
            <div class="answer-panel ${answered === correctIndex ? "good" : "bad"}" role="status">
              <div class="verdict">${answered === correctIndex ? "✓ Correct" : `✕ Not quite — answer ${String.fromCharCode(65 + correctIndex)}`}</div>
              <p>${esc(q.e)}</p>
            </div>` : ""}

          <div class="quiz-actions">
            <span class="quiz-hint">${isChecked ? `<kbd>Enter</kbd> for next question` : `Choose with <kbd>1</kbd>–<kbd>${Math.min(4, q.opts.length)}</kbd> · <kbd>Enter</kbd> to check`}</span>
            ${isChecked
              ? `<button class="btn btn-primary" type="button" data-action="next-question">${s.index === s.questions.length - 1 ? "See results" : "Next question"} →</button>`
              : `<button class="btn btn-primary" type="button" data-action="check-answer" ${answered === null ? "disabled" : ""}>Check answer</button>`}
          </div>
        </article>
      </div>
    `;
  }

  function chooseOption(index) {
    if (!session || session.checked) return;
    if (index < 0 || index >= session.questions[session.index].opts.length) return;
    session.answers[session.index] = index;
    const buttons = app.querySelectorAll("[data-action='choose-option']");
    buttons.forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
      btn.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
    const check = app.querySelector("[data-action='check-answer']");
    if (check) check.disabled = false;
  }

  function checkAnswer() {
    if (!session || session.checked) return;
    if (session.answers[session.index] === null) return;
    session.checked = true;
    renderQuiz();
  }

  function nextQuestion() {
    if (!session) return;
    if (session.index < session.questions.length - 1) {
      session.index += 1;
      session.checked = false;
      renderQuiz();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    if (!session) return;
    const s = session;
    const correct = s.questions.reduce(
      (sum, q, i) => sum + (s.answers[i] === q.a ? 1 : 0),
      0
    );
    const score = Math.round((correct / s.questions.length) * 100);
    const passed = score >= s.passMark;
    const practice = Boolean(s.practice);

    let newlyPassed = false;
    let xpGain = correct * (practice ? 1 : 2);

    if (!practice) {
      if (s.mode === "chapter") {
        const prev = chapterState(s.chapterId);
        const wasComplete = prev.completed;
        prev.best = Math.max(prev.best || 0, score);
        prev.attempts = (prev.attempts || 0) + 1;
        prev.completed = prev.best >= PASS_CHAPTER;
        prev.read = prev.read || prev.completed;
        prev.lastScore = score;
        prev.lastAt = new Date().toISOString();
        if (prev.completed) progress.last = s.chapterId;
        if (!wasComplete && prev.completed) {
          newlyPassed = true;
          xpGain += 20;
          toast("Chapter complete — +20 XP");
        }
      } else if (s.mode === "unit") {
        const prev = progress.unitTests[s.unitId] || { best: 0, attempts: 0, passed: false };
        prev.best = Math.max(prev.best || 0, score);
        prev.attempts = (prev.attempts || 0) + 1;
        prev.passed = prev.best >= PASS_TEST;
        progress.unitTests[s.unitId] = prev;
        if (passed) xpGain += 30;
      } else {
        const prev = progress.final || { best: 0, attempts: 0, passed: false };
        prev.best = Math.max(prev.best || 0, score);
        prev.attempts = (prev.attempts || 0) + 1;
        prev.passed = prev.best >= PASS_TEST;
        progress.final = prev;
        if (passed) xpGain += 30;
      }

      if (score === 100) xpGain += 15;
    }

    progress.xp = (progress.xp || 0) + xpGain;

    const today = todayKey();
    if (progress.streak.last !== today) {
      progress.streak.count = progress.streak.last === yesterdayKey() ? (progress.streak.count || 0) + 1 : 1;
      progress.streak.last = today;
    }
    saveProgress();

    renderResult({ correct, score, passed, xpGain, newlyPassed });
  }

  function renderResult(result) {
    if (!session) {
      render();
      return;
    }
    const s = session;
    const { correct, score, passed } = result;
    const total = s.questions.length;
    const practice = Boolean(s.practice);
    const circumference = 2 * Math.PI * 74;
    const offset = circumference - (score / 100) * circumference;
    const entry = s.chapterId ? CHAPTER_LOOKUP.get(s.chapterId) : null;
    const next = entry ? nextInCourse(entry) : null;
    const wrongCount = total - correct;
    const ringPassed = passed && !practice;

    app.innerHTML = `
      <div class="result-page">
        <div class="result-card">
          <span class="result-badge ${practice ? "practice" : passed ? "pass" : "fail"}">${practice ? "Practice set" : passed ? "Passed" : "Keep going"}</span>
          <h1>${practice ? "Practice complete." : passed ? "Nice work." : "Almost there."}</h1>
          <p>${practice
            ? `You worked through ${total} missed ${total === 1 ? "question" : "questions"}. Your best scores are unchanged.`
            : passed
              ? `You scored ${score}% on ${esc(s.title)}.`
              : `You need ${s.passMark}% to pass. Review the explanations and try again.`}</p>

          <div class="score-ring ${ringPassed ? "pass" : ""}" aria-label="${score} percent">
            <svg viewBox="0 0 168 168" aria-hidden="true">
              <circle class="track" cx="84" cy="84" r="74"></circle>
              <circle class="value" cx="84" cy="84" r="74"
                stroke-dasharray="${circumference.toFixed(1)}"
                stroke-dashoffset="${circumference.toFixed(1)}"
                data-offset="${offset.toFixed(1)}"></circle>
            </svg>
            <div class="center"><strong>${score}%</strong><span>${practice ? "Practice" : passed ? "Passed" : `${s.passMark}% to pass`}</span></div>
          </div>

          <div class="result-stats">
            <div class="result-stat"><strong>${correct}/${total}</strong><span>Correct</span></div>
            <div class="result-stat"><strong>+${result.xpGain}</strong><span>XP earned</span></div>
            <div class="result-stat"><strong>${progress.streak.count || 0}</strong><span>Day streak</span></div>
          </div>

          <div class="result-actions">
            ${entry ? `<a class="btn btn-ghost" href="#chapter/${entry.chapter.id}">Review notes</a>` : `<a class="btn btn-ghost" href="#toc">Contents</a>`}
            ${wrongCount > 0 ? `<button class="btn btn-quiet" type="button" data-action="retry-wrong">Retry ${wrongCount} missed</button>` : ""}
            <button class="btn btn-primary" type="button" data-action="retry-quiz">${practice && entry ? "Take full chapter quiz" : "Retake test"}</button>
            ${practice ? "" : next ? `<a class="btn btn-coral" href="#chapter/${next.chapter.id}">Next chapter →</a>` : `<a class="btn btn-coral" href="#final">Try the final test →</a>`}
          </div>

          <p class="result-note">${practice
            ? "Practice retries award a little XP but do not change best scores, unit-test results or chapter completion."
            : `Best score and attempts are saved in this browser. ${passed ? "This chapter now counts towards your course progress." : "You can retake the quiz as many times as you like."}`}</p>
        </div>

        <section class="review-section">
          <h2>Review the answers</h2>
          <p>Open any question to see your choice, the correct answer and the explanation.</p>
          <div class="review-list">
            ${s.questions.map((q, i) => {
              const picked = s.answers[i];
              const ok = picked === q.a;
              return `<div class="review-item ${ok ? "correct" : "wrong"}">
                <button class="review-q" type="button" data-action="review-toggle">
                  <span class="mk" aria-hidden="true">${ok ? "✓" : "✕"}</span>
                  <span>${esc(q.q)}</span>
                  <span class="chev" aria-hidden="true">›</span>
                </button>
                <div class="review-detail">
                  <p><b>Your answer:</b> ${picked === null ? "Not answered" : esc(q.opts[picked])}</p>
                  ${ok ? "" : `<p><b>Correct answer:</b> ${esc(q.opts[q.a])}</p>`}
                  <p><b>Why:</b> ${esc(q.e)}</p>
                </div>
              </div>`;
            }).join("")}
          </div>
        </section>
      </div>
    `;

    requestAnimationFrame(() => {
      const ring = app.querySelector(".score-ring .value");
      if (ring) ring.style.strokeDashoffset = ring.dataset.offset;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function retryQuiz() {
    if (!session) return;
    if (session.mode === "chapter") {
      const entry = CHAPTER_LOOKUP.get(session.chapterId);
      if (entry) createChapterSession(entry);
    } else if (session.mode === "unit") {
      const unit = UNIT_LOOKUP.get(session.unitId);
      if (unit) createUnitSession(unit);
    } else {
      createFinalSession();
    }
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function retryWrong() {
    if (!session) return;
    const wrong = session.questions.filter((q, i) => session.answers[i] !== q.a);
    if (!wrong.length) return;
    const s = session;
    session = {
      ...s,
      questions: shuffle(wrong),
      index: 0,
      answers: Array(wrong.length).fill(null),
      checked: false,
      title: `${s.title} · missed questions`,
      subtitle: "Focused retry",
      mode: s.mode,
      practice: true
    };
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- progress page ---------------- */

  function renderProgress() {
    const stats = overallStats();
    const badges = computeBadges();

    app.innerHTML = `
      <div class="progress-page">
        <header class="page-head">
          <p class="eyebrow">Your progress</p>
          <h1>The long view.</h1>
          <p>Progress is saved in this browser only. A chapter counts as complete once you score at least 60% on its quiz.</p>
        </header>

        <div class="stats-hero">
          <div class="stat-box"><strong>${stats.pct}%</strong><span>Course complete</span></div>
          <div class="stat-box"><strong>${stats.completed}</strong><span>Chapters passed</span></div>
          <div class="stat-box"><strong>${stats.avg}%</strong><span>Average score</span></div>
          <div class="stat-box"><strong>${progress.xp}</strong><span>Total XP</span></div>
        </div>

        <h2 style="font-size:26px;margin-bottom:14px">Units</h2>
        <div class="unit-progress-list">
          ${UNITS.map((unit) => {
            const s = unitStats(unit);
            const test = progress.unitTests[unit.id];
            return `<article class="unit-progress-card card" data-unit="${unit.id}">
              <div class="badge">0${unit.number}</div>
              <div>
                <h3>${esc(unit.title)}</h3>
                <p>${s.completed} of ${s.total} chapters complete${test ? ` · Unit test best ${test.best}%` : ""}</p>
                <div class="progress-track"><span style="width:${s.pct}%;background:var(--${unit.number === 1 ? "coral" : unit.number === 2 ? "teal" : "gold"})"></span></div>
              </div>
              <div class="pct">${s.pct}%<small>${test?.passed ? "Test passed" : test ? "Test attempted" : "No unit test"}</small></div>
            </article>`;
          }).join("")}
        </div>

        <div class="section-head" style="margin-bottom:12px">
          <div><h2 style="font-size:26px">Chapter log</h2></div>
          <a class="section-link" href="#toc">Open contents →</a>
        </div>
        <div class="card" style="overflow:auto">
          <table class="chapter-table">
            <thead><tr><th>Chapter</th><th>Unit</th><th>Best score</th><th>Status</th></tr></thead>
            <tbody>
              ${ALL_CHAPTERS.map(({ unit, chapter }) => {
                const best = bestFor(chapter.id);
                const done = isComplete(chapter.id);
                const st = progress.chapters[chapter.id];
                const partial = !done && st && (st.attempts > 0 || Object.values(st.chunks || {}).some(Boolean));
                return `<tr>
                  <td><a href="#chapter/${chapter.id}">${esc(chapter.number)} · ${esc(chapter.title)}</a></td>
                  <td>Unit ${unit.number}</td>
                  <td>${best ? `${best}%` : "—"}</td>
                  <td><span class="status-label ${done ? "done" : partial ? "partial" : "todo"}">${done ? "Complete" : partial ? "In progress" : "Not started"}</span></td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>

        <div class="section-head" style="margin:32px 0 0">
          <div><h2 style="font-size:26px">Badges</h2><p>Small signals of steady work.</p></div>
        </div>
        <div class="badge-grid">
          ${badges.map((badge) => `<div class="badge-card ${badge.earned ? "earned" : ""}">
            <div class="bicon" aria-hidden="true">${badge.icon}</div>
            <strong>${esc(badge.name)}</strong>
            <span>${esc(badge.desc)}</span>
          </div>`).join("")}
        </div>

        <div class="danger-zone">
          <p>Reset removes quiz scores, chapter ticks, streaks and XP from this browser. The notes themselves are untouched.</p>
          <button class="btn btn-ghost btn-sm" type="button" data-action="reset-progress">Reset my progress</button>
        </div>
      </div>
    `;
  }

  function computeBadges() {
    const stats = overallStats();
    const anyQuiz = Object.values(progress.chapters).some((c) => c.attempts > 0);
    const unit1 = unitStats(UNITS[0]);
    const unit2 = unitStats(UNITS[1]);
    const unit3 = unitStats(UNITS[2]);
    const perfect = Object.values(progress.chapters).some((c) => c.best === 100);
    return [
      { icon: "◐", name: "First check", desc: "Complete a quiz", earned: anyQuiz },
      { icon: "01", name: "UI foundations", desc: "Finish Unit 1", earned: unit1.completed === unit1.total },
      { icon: "02", name: "UX foundations", desc: "Finish Unit 2", earned: unit2.completed === unit2.total },
      { icon: "03", name: "Design & testing", desc: "Finish Unit 3", earned: unit3.completed === unit3.total },
      { icon: "✦", name: "Halfway", desc: "50% of chapters passed", earned: stats.pct >= 50 },
      { icon: "★", name: "Perfect score", desc: "Get 100% on a chapter", earned: perfect },
      { icon: "↗", name: "Unit tester", desc: "Pass a unit test", earned: Object.values(progress.unitTests).some((t) => t.passed) },
      { icon: "✓", name: "Course complete", desc: "Pass the final test", earned: Boolean(progress.final?.passed) }
    ];
  }

  /* ---------------- final landing ---------------- */

  function renderFinalLanding() {
    const totalQ = totalQuestions();
    const final = progress.final;
    app.innerHTML = `
      <div class="exam-page">
        <nav class="breadcrumb"><a href="#home">Home</a><span class="sep">/</span><span class="current">Final test</span></nav>
        <section class="exam-hero">
          <p class="eyebrow">Mixed practice · All units</p>
          <h1>Put the whole course together.</h1>
          <p>
            Twenty questions sampled from every chapter, covering UI foundations, UX research,
            information architecture, responsive design, prototyping and evaluation. Explanations
            appear after each answer.
          </p>
          <div class="exam-specs">
            <div><strong>20</strong><span>Questions</span></div>
            <div><strong>${PASS_TEST}%</strong><span>To pass</span></div>
            <div><strong>${totalQ}</strong><span>Question bank</span></div>
            <div><strong>${final?.best ? final.best + "%" : "—"}</strong><span>Your best</span></div>
          </div>
          <div class="hero-actions" style="margin-top:0">
            <button class="btn btn-coral" type="button" data-action="start-final">Start final test →</button>
            <a class="btn btn-ghost" href="#progress">See progress</a>
          </div>
          <p class="exam-note">Questions are drawn at random, so each attempt is different. Progress is saved locally.</p>
        </section>

        <div class="card" style="padding:26px">
          <h2 style="font-size:24px">What can appear</h2>
          <p style="color:var(--muted);font-size:12.5px;margin-top:5px">Every question comes from a chapter quiz, so you can always go back to the source.</p>
          <div class="exam-chapters">
            ${ALL_CHAPTERS.map(({ unit, chapter }) => `<div class="exam-chapter"><span class="n">U${unit.number}·${esc(chapter.number)}</span><span>${esc(chapter.title)}</span></div>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------- search ---------------- */

  function buildSearchIndex() {
    const index = [];
    UNITS.forEach((unit) => {
      unit.chapters.forEach((chapter) => {
        index.push({
          type: "Chapter",
          title: `${chapter.number} · ${chapter.title}`,
          body: `${chapter.subtitle}. ${chapter.summary}`,
          chapterId: chapter.id,
          unitNumber: unit.number
        });
        chapter.chunks.forEach((chunk) => {
          index.push({
            type: `Unit ${unit.number} · chunk`,
            title: chunk.title,
            body: chunk.points.join(" "),
            chapterId: chapter.id,
            unitNumber: unit.number
          });
        });
        chapter.terms.forEach((term) => {
          index.push({
            type: "Key term",
            title: term.t,
            body: term.d,
            chapterId: chapter.id,
            unitNumber: unit.number
          });
        });
      });
    });
    return index;
  }

  const SEARCH_INDEX = buildSearchIndex();

  function openSearch() {
    searchOverlay.hidden = false;
    document.body.style.overflow = "hidden";
    searchInput.value = "";
    renderSearchResults("");
    window.setTimeout(() => searchInput.focus(), 30);
  }

  function closeSearch() {
    searchOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  function highlight(text, query) {
    const safe = esc(text);
    if (!query) return safe;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp(`(${escapedQuery})`, "ig"), "<mark>$1</mark>");
  }

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      const suggestions = ALL_CHAPTERS.slice(0, 6);
      searchResults.innerHTML = `<p class="search-group-label">Jump back in</p>` +
        suggestions.map(({ unit, chapter }) => `
          <button class="search-result" type="button" data-action="open-chapter" data-chapter="${chapter.id}">
            <strong>${esc(chapter.number)} · ${esc(chapter.title)}</strong>
            <span>Unit ${unit.number} — ${esc(chapter.subtitle)}</span>
          </button>`).join("") +
        `<p class="search-group-label">Try a key term</p>` +
        `<button class="search-result" type="button" data-action="search-term" data-term="affordance"><strong>Affordance</strong><span>How an object's appearance suggests its use.</span></button>
         <button class="search-result" type="button" data-action="search-term" data-term="five elements"><strong>Five elements of UX</strong><span>Strategy, scope, structure, skeleton, surface.</span></button>`;
      return;
    }

    const terms = q.split(/\s+/).filter(Boolean);
    const scored = [];
    SEARCH_INDEX.forEach((item) => {
      const haystack = `${item.title} ${item.body}`.toLowerCase();
      let score = 0;
      terms.forEach((term) => {
        if (item.title.toLowerCase().includes(term)) score += 5;
        if (haystack.includes(term)) score += 1;
      });
      if (score > 0) scored.push({ ...item, score });
    });
    scored.sort((a, b) => b.score - a.score);

    if (!scored.length) {
      searchResults.innerHTML = `<p class="search-hint">No matches for “${esc(query)}”. Try a broader term like <strong>colour</strong>, <strong>research</strong> or <strong>prototype</strong>.</p>`;
      return;
    }

    const visible = scored.slice(0, 14);
    const groups = {};
    visible.forEach((item) => {
      const key = item.type.startsWith("Key term")
        ? "Key terms"
        : item.type.startsWith("Chapter")
        ? "Chapters"
        : "Study chunks";
      (groups[key] = groups[key] || []).push(item);
    });

    searchResults.innerHTML = Object.entries(groups).map(([label, items]) => `
      <p class="search-group-label">${esc(label)}</p>
      ${items.map((item) => `
        <button class="search-result" type="button" data-action="open-chapter" data-chapter="${item.chapterId}">
          <strong>${highlight(item.title, query)}</strong>
          <span>Unit ${item.unitNumber} · ${highlight(item.body.slice(0, 150), query)}${item.body.length > 150 ? "…" : ""}</span>
        </button>`).join("")}
    `).join("");
  }

  function searchTerm(term) {
    searchInput.value = term;
    renderSearchResults(term);
    searchInput.focus();
  }

  /* ---------------- events ---------------- */

  document.addEventListener("click", (event) => {
    const actionEl = event.target.closest("[data-action]");
    if (!actionEl) {
      if (event.target === scrim) closeSidebar();
      return;
    }
    const action = actionEl.dataset.action;

    switch (action) {
      case "go-home":
        event.preventDefault();
        go("#home");
        break;
      case "toggle-theme":
        toggleTheme();
        break;
      case "toggle-sidebar":
        toggleSidebar();
        break;
      case "close-sidebar":
        closeSidebar();
        break;
      case "open-search":
        openSearch();
        break;
      case "close-search":
        closeSearch();
        break;
      case "open-chapter":
        closeSearch();
        go("#chapter/" + actionEl.dataset.chapter);
        break;
      case "search-term":
        searchTerm(actionEl.dataset.term);
        break;
      case "toggle-chunk": {
        const chapterId = actionEl.dataset.chapter;
        const index = actionEl.dataset.index;
        const st = chapterState(chapterId);
        st.chunks = st.chunks || {};
        st.chunks[index] = !st.chunks[index];
        saveProgress();
        const chunk = actionEl.closest(".chunk");
        if (chunk) {
          chunk.dataset.done = String(st.chunks[index]);
          actionEl.setAttribute("aria-pressed", String(st.chunks[index]));
          const label = actionEl.querySelector("span:last-child");
          if (label) label.textContent = st.chunks[index] ? "Studied" : "Got it — mark studied";
        }
        const entry = CHAPTER_LOOKUP.get(chapterId);
        if (entry) {
          const pct = chapterStudyPct(entry.chapter);
          const pctEl = app.querySelector(".rail-primary .pct");
          const bar = app.querySelector(".rail-primary .progress-track span");
          if (pctEl) pctEl.textContent = `${pct}%`;
          if (bar) bar.style.width = `${pct}%`;
        }
        renderSidebar(routeFromHash());
        break;
      }
      case "reveal-term": {
        const card = actionEl.closest(".term-card");
        if (card) {
          const isRevealed = card.classList.toggle("revealed");
          actionEl.setAttribute("aria-expanded", String(isRevealed));
          card.querySelector(".def")?.setAttribute("aria-hidden", String(!isRevealed));
        }
        break;
      }
      case "scroll-to": {
        const target = document.getElementById(actionEl.dataset.target);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
        break;
      }
      case "start-unit-test": {
        const unit = UNIT_LOOKUP.get(actionEl.dataset.unit);
        if (unit) createUnitSession(unit);
        break;
      }
      case "start-final":
        createFinalSession();
        break;
      case "choose-option":
        chooseOption(Number(actionEl.dataset.option));
        break;
      case "check-answer":
        checkAnswer();
        break;
      case "next-question":
        nextQuestion();
        break;
      case "close-quiz":
        if (session?.chapterId) go("#chapter/" + session.chapterId);
        else go("#toc");
        break;
      case "retry-quiz":
        retryQuiz();
        break;
      case "retry-wrong":
        retryWrong();
        break;
      case "review-toggle": {
        const item = actionEl.closest(".review-item");
        if (item) item.classList.toggle("open");
        break;
      }
      case "reset-progress":
        if (window.confirm("Reset all scores, chapter ticks and XP? This cannot be undone.")) {
          progress = defaultProgress();
          progress.theme = document.documentElement.dataset.theme;
          saveProgress();
          session = null;
          toast("Progress reset");
          render();
        }
        break;
      default:
        break;
    }
  });

  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName;
    const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

    if (event.key === "Escape") {
      if (!searchOverlay.hidden) {
        closeSearch();
        return;
      }
      if (document.body.classList.contains("sidebar-open")) {
        closeSidebar();
        return;
      }
    }

    if (event.key === "/" && !typing && searchOverlay.hidden) {
      event.preventDefault();
      openSearch();
      return;
    }

    if (!searchOverlay.hidden || typing) return;

    if (activeRoute === "quiz" || activeRoute === "test" || (activeRoute === "final" && session)) {
      if (!session) return;
      if (/^[1-4]$/.test(event.key) && !session.checked) {
        event.preventDefault();
        chooseOption(Number(event.key) - 1);
      } else if (event.key === "Enter") {
        event.preventDefault();
        if (session.checked) nextQuestion();
        else if (session.answers[session.index] !== null) checkAnswer();
      }
    }
  });

  searchInput.addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });

  searchOverlay.addEventListener("click", (event) => {
    if (event.target === searchOverlay) closeSearch();
  });

  scrim.addEventListener("click", closeSidebar);

  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", () => closeSidebar());
  });

  function toggleSidebar() {
    const open = !document.body.classList.contains("sidebar-open");
    document.body.classList.toggle("sidebar-open", open);
    scrim.hidden = !open;
    document.querySelector("[data-action='toggle-sidebar']")?.setAttribute("aria-expanded", String(open));
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    scrim.hidden = true;
    document.querySelector("[data-action='toggle-sidebar']")?.setAttribute("aria-expanded", "false");
  }

  window.addEventListener("hashchange", () => {
    session = null;
    closeSearch();
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  /* ---------------- boot ---------------- */

  applyTheme();
  if (!location.hash) {
    history.replaceState(null, "", "#home");
  }
  render();
})();
