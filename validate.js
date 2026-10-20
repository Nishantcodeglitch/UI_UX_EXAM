const fs = require('fs');
global.window = {};
for (const f of ['js/data-unit1.js','js/data-unit2.js','js/data-unit3.js']) require('./'+f);
const units = window.UNITS;
let errors = [], warnings = [];
const chapterIds = new Set();
units.forEach(u => {
  if (!u.id) errors.push('unit missing id');
  if (!u.chapters?.length) errors.push(u.id+' no chapters');
  u.chapters.forEach(c => {
    if (chapterIds.has(c.id)) errors.push('duplicate chapter id '+c.id);
    chapterIds.add(c.id);
    if (!c.title || !c.summary || !c.subtitle) errors.push(c.id+' missing title/summary/subtitle');
    if (!c.objectives?.length) errors.push(c.id+' no objectives');
    if (!c.chunks?.length) errors.push(c.id+' no chunks');
    if (!c.terms?.length) errors.push(c.id+' no terms');
    if (!c.quiz?.length) errors.push(c.id+' no quiz');
    c.quiz.forEach((q,i) => {
      if (!q.q) errors.push(c.id+' q'+i+' missing question');
      if (!Array.isArray(q.opts) || q.opts.length < 2) errors.push(c.id+' q'+i+' bad options');
      if (new Set(q.opts).size !== q.opts.length) warnings.push(c.id+' q'+i+' duplicate options');
      if (!Number.isInteger(q.a) || q.a < 0 || q.a >= q.opts.length) errors.push(c.id+' q'+i+' answer index out of range');
      if (!q.e) errors.push(c.id+' q'+i+' missing explanation');
      if (q.opts.some(o => /undefined|null/.test(o))) errors.push(c.id+' q'+i+' placeholder option');
    });
    c.chunks.forEach((ch,i) => {
      if (!ch.title || !ch.points?.length) errors.push(c.id+' chunk'+i+' incomplete');
    });
    c.terms.forEach((t,i) => { if(!t.t||!t.d) errors.push(c.id+' term'+i+' incomplete'); });
  });
});
const counts = units.map(u=>({unit:u.number, chapters:u.chapters.length, questions:u.chapters.reduce((s,c)=>s+c.quiz.length,0), minutes:u.chapters.reduce((s,c)=>s+c.minutes,0)}));
console.log(JSON.stringify(counts,null,2));
console.log('total chapters', chapterIds.size, 'questions', counts.reduce((s,c)=>s+c.questions,0));
console.log('ERRORS', errors.length); errors.forEach(e=>console.log(' -',e));
console.log('WARNINGS', warnings.length); warnings.forEach(w=>console.log(' -',w));
