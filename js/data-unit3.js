/* Unit 3 — UI/UX Design and Testing
   Source: unit2-to3.txt (Unit-3 Part 1 and Part 2 PDFs) */

window.UNITS = window.UNITS || [];
window.UNITS.push({
  id: "unit3",
  number: 3,
  title: "UI/UX Design and Testing",
  tagline: "Research, IA, context, responsive design, prototypes and evaluation",
  intro:
    "Unit 3 turns principles into practice. You will move from user research and interviews through personas, flows and information architecture, then into user context, responsive design, wireframes, wireflows, prototypes, high-fidelity mockups and usability evaluation.",
  outcome:
    "By the end you should be able to plan research, synthesise findings into personas and flows, design responsively, build and test wireframes and prototypes, and choose an appropriate evaluation method.",
  chapters: [
    {
      id: "u3c1",
      number: "01",
      title: "User Research Foundations",
      subtitle: "Why research leads, how it is structured and how to plan it",
      minutes: 10,
      summary:
        "User research is the foundation of user-centred design. It turns assumptions into evidence about who users are, what they need and where products fail them.",
      objectives: [
        "Explain the purpose of user research",
        "Distinguish qualitative, quantitative and mixed research",
        "Describe a structured research process",
        "Account for the Indian research context"
      ],
      chunks: [
        {
          title: "What user research does",
          points: [
            "User research helps designers understand users' behaviours, needs, motivations and pain points.",
            "It reduces risk by testing assumptions before expensive design and development work.",
            "It informs every stage: strategy, structure, interface, content and evaluation.",
            "It is continuous, not a one-time phase at the start of a project.",
            "Good research combines evidence with judgement; data alone does not design the product."
          ]
        },
        {
          title: "Types of research",
          points: [
            "Qualitative research explores experiences and meanings through interviews, observation and diaries. It answers 'why' and 'how'.",
            "Quantitative research measures patterns at scale through surveys, analytics and metrics. It answers 'how many' and 'how often'.",
            "Mixed-methods research combines both to explain the numbers with lived experience.",
            "Primary research collects new data directly from users; secondary research uses existing studies and data.",
            "The right mix depends on the question, stage and resources."
          ]
        },
        {
          title: "The research process",
          points: [
            "Planning: define objectives, research questions and the decisions the research will inform.",
            "Recruitment: identify and recruit participants who represent the target users.",
            "Data collection: conduct interviews, observations, surveys or tests consistently.",
            "Analysis: organise, code and synthesise findings into themes and insights.",
            "Reporting: communicate actionable findings to the team and connect them to design decisions.",
            "Ethics, consent and privacy apply throughout."
          ]
        },
        {
          title: "Research in India",
          points: [
            "Linguistic diversity: 22 scheduled languages and a wide range of dialects create opportunities and logistical challenges.",
            "Variation in literacy, digital literacy, device capability and connectivity.",
            "Recruit beyond metro users; rural and low-income contexts are often under-represented.",
            "Use local researchers, translators and culturally appropriate methods where needed.",
            "Avoid treating 'India' as one user group; segment by context and behaviour."
          ]
        }
      ],
      terms: [
        { t: "User research", d: "Systematic study of users' behaviours, needs and motivations to inform design." },
        { t: "Primary research", d: "New data collected directly for the current project." },
        { t: "Secondary research", d: "Existing data and studies reused to inform the project." },
        { t: "Synthesis", d: "Organising raw research data into themes, patterns and actionable insights." }
      ],
      quiz: [
        {
          q: "User research is best described as...",
          opts: ["A continuous process of understanding users to inform design", "A one-time step before design begins", "A way to prove the designer's opinion", "Only a quantitative survey"],
          a: 0,
          e: "Research informs decisions throughout the product lifecycle."
        },
        {
          q: "Qualitative research is strongest for answering...",
          opts: ["Why and how users behave", "How many users clicked", "What the server latency is", "Which colour has higher contrast"],
          a: 0,
          e: "Qualitative methods reveal motivations and experience."
        },
        {
          q: "Which is the correct early sequence in a research process?",
          opts: ["Define objectives → recruit participants → collect data", "Analyse → recruit → define objectives", "Report → collect → plan", "Design → launch → research"],
          a: 0,
          e: "Clear objectives come first, then recruitment and data collection."
        },
        {
          q: "Why is India especially challenging for research recruitment?",
          opts: ["Its diversity of language, literacy, devices and connectivity", "It has only one language", "All users have identical devices", "There are no rural users"],
          a: 0,
          e: "A representative sample must span very different contexts."
        },
        {
          q: "Mixed-methods research...",
          opts: ["Combines qualitative and quantitative evidence", "Uses only interviews", "Uses only analytics", "Avoids participant contact"],
          a: 0,
          e: "Mixed methods pair depth with scale."
        },
        {
          q: "What is the purpose of synthesis?",
          opts: ["Turning raw data into themes and actionable insights", "Collecting more survey responses", "Writing the final code", "Choosing the brand colour"],
          a: 0,
          e: "Synthesis connects observations to design implications."
        }
      ]
    },
    {
      id: "u3c2",
      number: "02",
      title: "User Interviews",
      subtitle: "Structured, semi-structured, contextual and group conversations",
      minutes: 10,
      summary:
        "Interviews are guided conversations that reveal how users think, behave and feel. The format should match the research goal, and good interviewing depends on preparation, neutrality and careful listening.",
      objectives: [
        "Explain the benefits of user interviews",
        "Compare the main interview types",
        "Apply best practices before, during and after an interview",
        "Recognise practical challenges in the Indian context"
      ],
      chunks: [
        {
          title: "What interviews give you",
          points: [
            "A guided conversation with existing or potential users, focused on understanding experience.",
            "Direct insight into language, emotions, motivations and workarounds.",
            "The chance to follow up on unexpected answers, which surveys cannot do.",
            "Rich context about how a product fits into someone's life.",
            "Interviews are especially valuable early, when the problem space is still unclear."
          ]
        },
        {
          title: "Interview formats",
          points: [
            "Structured: a rigid set of predetermined questions, useful for comparability.",
            "Unstructured: conversational and informal, useful for exploration.",
            "Semi-structured: a guide plus flexibility to probe, the most common balance.",
            "Contextual: conducted in the user's natural environment to observe real behaviour.",
            "Expert: with subject-matter experts who understand a domain deeply.",
            "Remote: by video call or phone, widening reach and lowering cost.",
            "Group: multiple participants at once, useful for shared or contrasting views.",
            "Stakeholder: with internal team members to understand goals and constraints."
          ]
        },
        {
          title: "Best practices",
          points: [
            "Prepare: research the participant and write a clear interview guide with objectives and questions.",
            "Ask open questions and avoid leading the participant.",
            "Listen more than you speak; allow silence and follow interesting threads.",
            "Separate observation from interpretation in your notes.",
            "Record with consent, transcribe or summarise promptly, and debrief with the team.",
            "Recruit thoughtfully and compensate participants fairly."
          ]
        },
        {
          title: "Challenges in India",
          points: [
            "Language barriers may require translators or multilingual researchers.",
            "Power distance and politeness can make participants reluctant to criticise.",
            "Group settings may be dominated by senior or more confident voices.",
            "Remote access can exclude users with poor connectivity.",
            "Cultural norms affect scheduling, privacy and who can speak in a household."
          ]
        }
      ],
      terms: [
        { t: "Semi-structured interview", d: "An interview with a guide of key questions but freedom to probe further." },
        { t: "Contextual interview", d: "An interview conducted in the user's own environment while observing their work." },
        { t: "Leading question", d: "A question that suggests a preferred answer and biases the response." },
        { t: "Stakeholder interview", d: "An internal interview with team members to understand goals, constraints and expectations." }
      ],
      quiz: [
        {
          q: "Which interview type follows a rigid set of predetermined questions?",
          opts: ["Structured", "Unstructured", "Contextual", "Group"],
          a: 0,
          e: "Structured interviews prioritise consistency across participants."
        },
        {
          q: "A semi-structured interview is popular because it...",
          opts: ["Combines a question guide with flexibility to probe", "Has no questions prepared", "Requires no listening", "Only works with experts"],
          a: 0,
          e: "It balances coverage with the freedom to follow unexpected insights."
        },
        {
          q: "Contextual interviews are conducted...",
          opts: ["In the user's natural environment", "Only in a laboratory", "Only over email", "With a group of strangers"],
          a: 0,
          e: "Observing users in context reveals constraints that a meeting room hides."
        },
        {
          q: "Which is a best practice for interviewing?",
          opts: ["Ask open questions and listen more than you speak", "Ask leading questions", "Fill every silence immediately", "Avoid recording consent"],
          a: 0,
          e: "Open, neutral questions and active listening produce better evidence."
        },
        {
          q: "Why might group interviews be risky?",
          opts: ["Dominant voices can suppress quieter participants", "They always produce too much data", "They cannot be recorded", "They require no preparation"],
          a: 0,
          e: "Group dynamics can distort whose views are heard."
        },
        {
          q: "A stakeholder interview is useful for understanding...",
          opts: ["Internal goals, constraints and expectations", "Only end-user emotions", "Server logs", "Competitor pricing only"],
          a: 0,
          e: "Stakeholders clarify business context and project boundaries."
        },
        {
          q: "In the Indian context, politeness and power distance may cause participants to...",
          opts: ["Avoid criticising the product", "Speak too quickly", "Refuse all interviews", "Ignore the researcher"],
          a: 0,
          e: "Participants may give socially desirable answers rather than honest criticism."
        }
      ]
    },
    {
      id: "u3c3",
      number: "03",
      title: "Personas, User Stories and Scenarios",
      subtitle: "Turning research into characters, needs and narratives",
      minutes: 11,
      summary:
        "Personas humanise research, user stories capture needs in a sentence, and scenarios show how a persona behaves in context. Together they keep design decisions anchored to real people rather than abstract 'users'.",
      objectives: [
        "Build a research-based persona",
        "Distinguish proto-personas and device personas",
        "Write a user story in the standard format",
        "Describe the components and types of user scenarios"
      ],
      chunks: [
        {
          title: "Personas",
          points: [
            "A user persona is a fictional character created from research to represent a user type.",
            "Personas focus design on specific people rather than a generic 'everyone'.",
            "Essential components include name and photo, demographics, goals, behaviours, pain points and context.",
            "Personas should be based on evidence, not stereotypes or guesses.",
            "A well-crafted persona helps teams prioritise features and evaluate design decisions."
          ]
        },
        {
          title: "Types of personas",
          points: [
            "Proto-personas are based on assumptions rather than research; they are quick and useful for early alignment but must be validated.",
            "Research-based personas are derived from interviews, surveys and analytics.",
            "Device personas describe the characteristics and constraints of the devices users rely on.",
            "A device persona might include device type, screen size, performance, connectivity and usage patterns.",
            "Example: a budget Indian smartphone persona highlights limited RAM, storage and intermittent connectivity.",
            "The notes' food-delivery persona, Priya Sharma, a 32-year-old marketing manager in Bangalore, shows how demographics, goals and context combine."
          ]
        },
        {
          title: "User stories",
          points: [
            "A user story is a short description of a feature from the perspective of the person who wants it.",
            "Structure: As a [type of user], I want [an action] so that [a benefit or value].",
            "Stories keep attention on user value rather than technical implementation.",
            "Good stories are specific, testable and grounded in research.",
            "Example: 'As a senior citizen with limited tech experience, I want a simple payment confirmation so that I know my money was sent.'",
            "Stories are not requirements documents; they are conversation starters for the team."
          ]
        },
        {
          title: "Scenarios",
          points: [
            "A user scenario is a detailed narrative of how a persona might interact with a product in a specific situation.",
            "Scenarios add context: setting, constraints, goals, actions and obstacles.",
            "Task-based scenarios focus on completing a specific task.",
            "Good scenarios are grounded in research and describe realistic behaviour, not ideal behaviour.",
            "The notes also give a separate scenario: Priya, a 35-year-old working mother in Pune, uses her phone on a crowded bus with intermittent data.",
            "Scenarios help teams test flows and uncover edge cases before building."
          ]
        }
      ],
      terms: [
        { t: "Proto-persona", d: "A lightweight persona based on assumptions, used before research is available." },
        { t: "Device persona", d: "A profile of the device characteristics and constraints that shape use." },
        { t: "User story", d: "A short need statement in the form 'As a…, I want…, so that…'." },
        { t: "User scenario", d: "A narrative of a persona pursuing a goal in a specific context." }
      ],
      quiz: [
        {
          q: "A research-based persona should be built from...",
          opts: ["Interviews, surveys and observed behaviour", "The designer's favourite user", "Competitor assumptions only", "Random demographic data"],
          a: 0,
          e: "Personas need evidence to represent real user groups credibly."
        },
        {
          q: "A proto-persona differs from a research-based persona because it...",
          opts: ["Is based on assumptions and needs validation", "Is always more accurate", "Requires no team discussion", "Cannot be used early"],
          a: 0,
          e: "Proto-personas are quick hypotheses, not validated findings."
        },
        {
          q: "A device persona focuses on...",
          opts: ["Device capabilities and constraints", "The user's personality only", "The brand's colour palette", "The company's revenue"],
          a: 0,
          e: "Device personas capture screen size, performance, connectivity and usage context."
        },
        {
          q: "Which is the correct user story format?",
          opts: ["As a [user], I want [action] so that [benefit]", "If [condition], then [output]", "Problem, solution, price", "Title, date, author"],
          a: 0,
          e: "The format keeps the user, desired capability and value explicit."
        },
        {
          q: "What do scenarios add beyond personas?",
          opts: ["A specific situation with context, goals and obstacles", "Only demographic data", "The final visual design", "The server configuration"],
          a: 0,
          e: "Scenarios show a persona acting in realistic circumstances."
        },
        {
          q: "Why are good user stories specific and testable?",
          opts: ["They allow the team to verify that the user value was delivered", "They make design harder", "They replace all research", "They remove the need for scenarios"],
          a: 0,
          e: "Specific stories can be evaluated against real user outcomes."
        },
        {
          q: "The Priya examples in the notes illustrate...",
          opts: ["How demographics, goals and everyday context shape needs", "A generic user with no constraints", "Only device specifications", "A business revenue target"],
          a: 0,
          e: "Personas and scenarios become useful when goals and context are concrete."
        }
      ]
    },
    {
      id: "u3c4",
      number: "04",
      title: "Flow Diagrams and Information Architecture",
      subtitle: "Mapping journeys and organising content",
      minutes: 12,
      summary:
        "Flows show the path a user takes to complete a task. Information architecture shapes how content is organised, labelled and found. Together they make a product navigable before a single screen is polished.",
      objectives: [
        "Read and create a basic flow diagram",
        "Distinguish task flows from other flow types",
        "Define information architecture and its components",
        "Apply the eight IA principles and card sorting"
      ],
      chunks: [
        {
          title: "Flow diagrams",
          points: [
            "Flow diagrams, also called user flows or UX flows, visually represent the path a user takes to complete a task.",
            "Common symbols: oval for start or end, rectangle for a process or screen, diamond for a decision, arrows for direction, and a parallelogram for input or output.",
            "Task flows focus on a single path to complete a specific task.",
            "Flows can include branches, error states and system responses.",
            "Flow mapping traces and documents the user's path to reveal friction and missing states."
          ]
        },
        {
          title: "Creating effective flows",
          points: [
            "Start with the user's goal and the main happy path.",
            "Add decision points, alternate paths and failure states only after the main flow is clear.",
            "Use clear labels and consistent symbols so others can read the diagram.",
            "Annotate assumptions, inputs and system responses.",
            "Test the flow with users or a paper walkthrough to find gaps.",
            "Keep flows simple; a diagram that cannot be understood does not help the team."
          ]
        },
        {
          title: "Information architecture",
          points: [
            "Information architecture (IA) is the structural design of information spaces.",
            "It organises, labels and connects content so users can find what they need and understand where they are.",
            "Core components include organisation systems, labelling systems, navigation systems and search systems.",
            "IA should reflect users' mental models rather than the company's internal org chart.",
            "Good IA scales as content grows and supports multiple entry points."
          ]
        },
        {
          title: "The eight IA principles",
          points: [
            "Objects: treat content as living things with lifecycles and attributes.",
            "Choices: offer meaningful choices, not overwhelming ones.",
            "Disclosure: reveal only enough information to help users decide whether to go deeper.",
            "Exemplars: show examples of content categories to make them concrete.",
            "Front doors: anticipate that users may enter from search, social or a direct link, not only the home page.",
            "Multiple classification: support different ways of finding the same content.",
            "Focused navigation: provide navigation that stays oriented to the user's current task.",
            "Growth: design the structure so it can accommodate future content."
          ]
        },
        {
          title: "Card sorting and local context",
          points: [
            "Card sorting asks users to group and label content, revealing their mental categories.",
            "It can be open (users create categories) or closed (users sort into predefined categories).",
            "Results inform navigation labels and hierarchy.",
            "In India, multilingual support and regional content variation add complexity to IA.",
            "Example: an Indian fashion e-commerce site might organise by style, gender, occasion or region depending on user expectations."
          ]
        }
      ],
      terms: [
        { t: "User flow", d: "A visual representation of the path a user takes to complete a task." },
        { t: "Task flow", d: "A flow focused on one task and the screens or steps needed to complete it." },
        { t: "Information architecture (IA)", d: "The organisation, labelling and navigation of content in a product." },
        { t: "Card sorting", d: "A research method in which users group content to reveal mental categories." },
        { t: "Disclosure", d: "Showing enough information for a decision without overwhelming the user." }
      ],
      quiz: [
        {
          q: "In a flow diagram, what does a diamond usually represent?",
          opts: ["A decision point", "The start or end", "A process or screen", "A data store"],
          a: 0,
          e: "Diamonds mark branches where the path depends on a condition."
        },
        {
          q: "A task flow focuses on...",
          opts: ["One path to complete a specific task", "The entire company strategy", "The visual style guide", "The server architecture"],
          a: 0,
          e: "Task flows map the steps for a single user goal."
        },
        {
          q: "Information architecture is mainly concerned with...",
          opts: ["Organising, labelling and navigating content", "Choosing brand colours", "Writing backend APIs", "Setting the marketing budget"],
          a: 0,
          e: "IA structures information so users can find and understand it."
        },
        {
          q: "The IA principle of 'front doors' reminds designers that...",
          opts: ["Users may enter from search or direct links, not only the home page", "Every user starts at the homepage", "Navigation should be hidden", "Content should never be linked"],
          a: 0,
          e: "Users arrive from many entry points, so every page needs orientation."
        },
        {
          q: "Card sorting is used to...",
          opts: ["Reveal how users group and label content", "Test server performance", "Select a typeface", "Measure advertising reach"],
          a: 0,
          e: "It surfaces users' mental categories to inform navigation."
        },
        {
          q: "Which IA principle is about accommodating future content?",
          opts: ["Growth", "Objects", "Exemplars", "Choices"],
          a: 0,
          e: "A growth-ready structure can expand without becoming disorganised."
        },
        {
          q: "Why should a flow be tested with users?",
          opts: ["To find missing states and points of confusion", "To prove the diagram is pretty", "To avoid creating wireframes", "To replace information architecture"],
          a: 0,
          e: "Walkthroughs reveal gaps between the intended and actual path."
        }
      ]
    },
    {
      id: "u3c5",
      number: "05",
      title: "User Context and Contextual Design",
      subtitle: "Designing for real environments, devices and cultures",
      minutes: 12,
      summary:
        "User context is the full set of circumstances around use: physical, social, temporal, task-related, technological and cultural. Contextual design observes users in those circumstances instead of assuming a quiet desk and perfect Wi-Fi.",
      objectives: [
        "Define user context and its components",
        "Conduct and analyse contextual inquiry",
        "Use affinity diagrams, contextual personas and journey maps",
        "Adapt design to Indian device, connectivity and cultural contexts"
      ],
      chunks: [
        {
          title: "What context includes",
          points: [
            "Physical environment: location, lighting, noise and movement.",
            "Social setting: alone or with others, public or private space.",
            "Temporal context: time of day, available time and urgency.",
            "Task context: the user's goal, workflow and pressure.",
            "Technological environment: device, connectivity and screen size.",
            "Cultural background and expectations.",
            "Understanding context makes experiences more relevant, usable and trustworthy."
          ]
        },
        {
          title: "Researching context",
          points: [
            "Contextual inquiry observes and interviews users in their natural environment.",
            "Field research includes contextual inquiry, diary studies and ethnographic research.",
            "Remote methods include contextual surveys, digital ethnography and analytics.",
            "Prepare by respecting cultural norms; observe constraints and social dynamics; interview to clarify; analyse for patterns.",
            "Combining field and remote methods gives both depth and breadth.",
            "Example: in-home visits plus analytics can reveal how shared family devices are actually used."
          ]
        },
        {
          title: "Making sense of contextual data",
          points: [
            "Affinity diagrams group observations into categories to reveal patterns.",
            "Contextual personas focus on environmental factors such as device, connectivity and language.",
            "Journey maps show interactions, contextual shifts and emotional highs and lows.",
            "Context scenarios narrate interaction in a specific setting.",
            "The goal is to move from scattered observations to design implications."
          ]
        },
        {
          title: "Indian context",
          points: [
            "Diverse devices: entry-level phones with limited memory, mid-range devices and premium devices.",
            "Connectivity varies from congested 4G/5G in cities to intermittent 2G/3G in rural areas.",
            "Cultural design considerations include auspicious colours, regional imagery, family-oriented sharing and Indian name/address formats.",
            "Date and time conventions such as DD/MM/YYYY and 12-hour clocks matter.",
            "PhonePe's contextual adaptations include lite mode, multiple languages, entry-level optimisation and voice-guided navigation.",
            "Avoid one-size-fits-all design; build adaptable interfaces and progressive disclosure."
          ]
        },
        {
          title: "Challenges and best practices",
          points: [
            "Contexts vary widely, making representative research resource-intensive.",
            "Findings can age quickly as devices and connectivity change.",
            "Balancing local specificity with universal recognisability is difficult.",
            "Recruit across geography, language and socio-economic spectrum.",
            "Design for adaptability, offline-first behaviour and progressive complexity.",
            "Test in realistic conditions, including low light, noise and poor networks."
          ]
        }
      ],
      terms: [
        { t: "User context", d: "The circumstances surrounding use, including physical, social, temporal, task, technological and cultural factors." },
        { t: "Contextual inquiry", d: "Observing and interviewing users in their natural environment." },
        { t: "Affinity diagram", d: "A grouping technique that clusters observations into themes." },
        { t: "Journey map", d: "A visual timeline of a user's experience, including actions, context and emotions." },
        { t: "Offline-first", d: "Designing the product to remain useful without a reliable connection." }
      ],
      quiz: [
        {
          q: "Which is a component of user context?",
          opts: ["Physical environment and social setting", "Only the user's age", "Only the brand colour", "Only the database schema"],
          a: 0,
          e: "Context spans physical, social, temporal, task, technological and cultural factors."
        },
        {
          q: "Contextual inquiry means...",
          opts: ["Observing and interviewing users in their natural environment", "Sending a survey by email", "Testing in a lab with no context", "Reading competitor reviews only"],
          a: 0,
          e: "It studies real behaviour where it happens."
        },
        {
          q: "An affinity diagram is used to...",
          opts: ["Group observations into themes", "Choose a font", "Measure server latency", "Write production code"],
          a: 0,
          e: "Affinity mapping turns raw observations into patterns."
        },
        {
          q: "Why is offline-first design valuable in India?",
          opts: ["Connectivity can be intermittent, especially outside cities", "All users have unlimited 5G", "It removes the need for data", "It makes screens larger"],
          a: 0,
          e: "Reliable use cannot assume constant high-speed connectivity."
        },
        {
          q: "Which is an example of cultural context affecting UI?",
          opts: ["Using auspicious colours and regional imagery", "Ignoring local festivals", "Using only one date format worldwide", "Assuming all households have one user"],
          a: 0,
          e: "Colour meaning, imagery, language and sharing norms vary by culture."
        },
        {
          q: "Contextual personas differ from ordinary personas by emphasising...",
          opts: ["Environmental factors such as device, connectivity and language", "Only job titles", "Only brand preferences", "Only age"],
          a: 0,
          e: "They foreground the conditions in which the product is used."
        },
        {
          q: "What is a common challenge of contextual design?",
          opts: ["Balancing local specificity with universal usability", "Having too few contexts", "Users refusing all technology", "Design becoming too simple"],
          a: 0,
          e: "Designers must adapt to local conditions without fragmenting the experience."
        }
      ]
    },
    {
      id: "u3c6",
      number: "06",
      title: "Responsive Design",
      subtitle: "Fluid grids, mobile-first thinking and adaptive layouts",
      minutes: 11,
      summary:
        "Responsive design lets one product adapt to many screens. It relies on fluid grids, flexible images, media queries and content prioritisation, with mobile-first thinking often providing the strongest foundation.",
      objectives: [
        "Define responsive design and its core principles",
        "Explain the mobile-first approach",
        "Compare responsive layout patterns",
        "Apply responsive typography, images and testing"
      ],
      chunks: [
        {
          title: "Core principles",
          points: [
            "Responsive design ensures a site adapts and displays optimally across devices using HTML and CSS.",
            "Fluid grids use relative units such as %, em and rem so layouts scale proportionally.",
            "Flexible images scale within their containers while maintaining aspect ratio.",
            "Media queries apply styles based on characteristics such as width and orientation.",
            "Content prioritisation highlights the most important content for each device context."
          ]
        },
        {
          title: "Mobile-first",
          points: [
            "Design for mobile first, then enhance for larger displays.",
            "It forces content prioritisation because screen space is limited.",
            "It resolves constraints early and creates a solid foundation.",
            "It aligns with mobile-dominant markets such as India.",
            "It tends to produce lighter, faster designs and is future-proof as mobile usage grows."
          ]
        },
        {
          title: "Layout patterns",
          points: [
            "Mostly fluid: a multi-column layout that stacks on small screens and gains margins on large screens.",
            "Column drop: columns sit side by side on large screens and stack vertically on small ones.",
            "Layout shifter: uses genuinely different layouts for different sizes, not just resizing.",
            "Off canvas: less important content such as navigation is hidden off-screen and revealed on request.",
            "The choice depends on content priority and interaction needs."
          ]
        },
        {
          title: "Typography and images",
          points: [
            "Use relative units such as em and rem for font sizes.",
            "Body text should generally be at least 14–16px.",
            "Line height around 1.4–1.6 improves readability; line length around 45–75 characters is comfortable.",
            "Reduce size variation on mobile while preserving hierarchy.",
            "Responsive images can use basic scaling, art direction, resolution switching and modern formats such as WebP.",
            "Optimise images for screen size and network speed, especially on variable connections."
          ]
        },
        {
          title: "Testing responsive design",
          points: [
            "Use browser developer tools for device emulation and network throttling.",
            "Test on real devices, especially entry-level and older Android phones.",
            "Use multi-screen testing tools where physical devices are not available.",
            "Measure performance with tools such as Lighthouse, including 3G simulation.",
            "Case study: Swiggy used progressive loading, adaptive navigation, optimized images and location-specific content, reporting faster loads and higher conversion.",
            "Responsive design is not only visual: performance and content priority are part of the experience."
          ]
        }
      ],
      terms: [
        { t: "Responsive design", d: "An approach that adapts layout and content to different screen sizes and devices." },
        { t: "Media query", d: "A CSS rule that applies styles based on device characteristics such as width." },
        { t: "Mobile-first", d: "Designing for small screens first, then enhancing for larger ones." },
        { t: "Off-canvas", d: "A pattern that hides secondary content off-screen until the user reveals it." },
        { t: "Art direction", d: "Serving different image crops or compositions for different screen contexts." }
      ],
      quiz: [
        {
          q: "Which is a core principle of responsive design?",
          opts: ["Fluid grids using relative units", "Fixed pixel widths for every device", "Separate designs for every screen", "Removing all images"],
          a: 0,
          e: "Relative units let layouts scale instead of breaking at fixed widths."
        },
        {
          q: "The mobile-first approach means...",
          opts: ["Designing for small screens first, then enhancing upward", "Designing only for desktop", "Removing mobile support", "Using a separate app for each device"],
          a: 0,
          e: "Starting small forces prioritisation and produces a lighter foundation."
        },
        {
          q: "Which pattern hides navigation off-screen until requested?",
          opts: ["Off canvas", "Column drop", "Mostly fluid", "Layout shifter"],
          a: 0,
          e: "Off-canvas patterns conserve space by revealing secondary content on demand."
        },
        {
          q: "A comfortable line length for reading is about...",
          opts: ["45–75 characters", "5–10 characters", "200–300 characters", "Any length is equally readable"],
          a: 0,
          e: "The notes recommend roughly 45–75 characters per line."
        },
        {
          q: "Why test on real devices?",
          opts: ["Emulators may miss performance and rendering issues on actual hardware", "Real devices are always faster", "Emulators cannot show colour", "Testing is only needed on desktop"],
          a: 0,
          e: "Low-end real devices expose constraints that emulators can hide."
        },
        {
          q: "Responsive images can be optimised by...",
          opts: ["Art direction, resolution switching and modern formats", "Using one huge image everywhere", "Disabling compression", "Avoiding alt text"],
          a: 0,
          e: "Serving appropriate images improves quality and performance."
        },
        {
          q: "Which is NOT a benefit of mobile-first design?",
          opts: ["It guarantees no bugs", "It prioritises essential content", "It resolves constraints early", "It supports mobile-dominant markets"],
          a: 0,
          e: "Mobile-first helps structure and performance but cannot guarantee bug-free code."
        }
      ]
    },
    {
      id: "u3c7",
      number: "07",
      title: "Wireframing and Wireflows",
      subtitle: "Low-fidelity structure and connected screen journeys",
      minutes: 13,
      summary:
        "Wireframes show what goes where; wireflows show how screens connect. Both are cheap, fast ways to test structure and flow before visual design and development.",
      objectives: [
        "Define a wireframe and its focus",
        "Choose an appropriate fidelity level",
        "Apply wireframing patterns and best practices",
        "Build and test a wireflow"
      ],
      chunks: [
        {
          title: "What wireframes are",
          points: [
            "A wireframe is a low-fidelity blueprint that defines structure, layout, user flow and functionality.",
            "It prioritises content and structure over visual styling.",
            "Wireframes focus on layout, information hierarchy, functionality, content structure and intended behaviour.",
            "They are not mockups (visually complete) or prototypes (interactive simulations).",
            "Think of wireframes as the architectural blueprint: structure without decorative finishes."
          ]
        },
        {
          title: "Why wireframe",
          points: [
            "Rapid iteration: ideas can be created and changed quickly.",
            "Focus on structure by removing visual distractions.",
            "Clear communication: a shared language for teams and clients.",
            "Cost-effective: flaws caught early are much cheaper to fix.",
            "Early problem detection through user testing before visual design or code.",
            "Wireframes make assumptions visible and discussable."
          ]
        },
        {
          title: "Fidelity levels",
          points: [
            "Low-fidelity: hand-drawn sketches focused on structure, used for early brainstorming and quick validation.",
            "Medium-fidelity: digital wireframes with basic components and realistic placeholders, used for refinement and initial testing.",
            "High-fidelity: detailed digital layouts close to the final product, used for final decisions, handoff and comprehensive testing.",
            "Choose based on project stage, team size, stakeholder needs and feature complexity.",
            "Higher fidelity costs more time and can discourage honest feedback if it looks finished too early."
          ]
        },
        {
          title: "Patterns and practice",
          points: [
            "Navigation patterns: bottom navigation for frequent actions, hamburger for secondary items, tabs and breadcrumbs for sections or depth.",
            "Content patterns: cards for mixed content, lists for scannable items, grids for visual collections, carousels for featured content.",
            "Input patterns: forms, search, pickers and sliders.",
            "Feedback patterns: loading spinners, success and error messages, toasts.",
            "Best practices: focus on structure, keep detail consistent, design responsively, use real content and seek feedback.",
            "Avoid unnecessary visuals, over-detailing edge cases, wireframing every screen and working in isolation."
          ]
        },
        {
          title: "Wireflows",
          points: [
            "A wireflow combines wireframes with flowcharts to show dynamic user experiences.",
            "It represents screen connections, user paths, interactions, system responses and decision points.",
            "Use wireflows for complex multi-step journeys such as checkout, registration and payments.",
            "Types: linear (single path), branching (choices), state-based (changing states) and system (background processes).",
            "Steps: identify key flows → create wireframes for all states → connect with arrows → annotate → test and iterate.",
            "Paper walkthroughs are a quick, inexpensive way to test a wireflow."
          ]
        }
      ],
      terms: [
        { t: "Wireframe", d: "A low-fidelity structural blueprint of an interface focused on layout and function." },
        { t: "Wireflow", d: "A combination of wireframes and flowcharts showing screens and the paths between them." },
        { t: "Fidelity", d: "The level of detail and polish in a design artefact." },
        { t: "Paper walkthrough", d: "Testing a flow by having users trace tasks through printed screens." }
      ],
      quiz: [
        {
          q: "A wireframe focuses primarily on...",
          opts: ["Structure, layout and functionality", "Final colours and imagery", "Animation and sound", "Production code"],
          a: 0,
          e: "Wireframes deliberately strip visual polish to clarify structure."
        },
        {
          q: "Which is the main advantage of low-fidelity wireframes?",
          opts: ["They enable rapid, inexpensive iteration", "They look exactly like the final product", "They require no feedback", "They replace user testing"],
          a: 0,
          e: "Sketches are fast to produce and easy to change."
        },
        {
          q: "A wireflow combines wireframes with...",
          opts: ["Flowcharts", "High-fidelity mockups", "Brand guidelines", "Server diagrams"],
          a: 0,
          e: "Wireflows add paths, decisions and system responses to static screens."
        },
        {
          q: "Which wireflow type handles multiple paths based on user choices?",
          opts: ["Branching", "Linear", "System", "Static"],
          a: 0,
          e: "Branching wireflows represent conditional paths and outcomes."
        },
        {
          q: "What should you avoid when wireframing?",
          opts: ["Over-detailing and adding unnecessary visuals too early", "Using real content", "Designing responsively", "Seeking feedback"],
          a: 0,
          e: "Early over-detail slows iteration and can distract from structural problems."
        },
        {
          q: "When is high-fidelity wireframing most appropriate?",
          opts: ["For final design decisions, detailed testing and developer handoff", "Only during the first brainstorm", "When no users are available", "When skipping research"],
          a: 0,
          e: "High fidelity supports final validation and precise implementation."
        },
        {
          q: "A paper walkthrough is valuable because it...",
          opts: ["Quickly and cheaply exposes flow problems", "Requires expensive software", "Tests server performance", "Replaces all prototypes"],
          a: 0,
          e: "Printed screens let users trace tasks and reveal gaps early."
        }
      ]
    },
    {
      id: "u3c8",
      number: "08",
      title: "Prototyping and High-Fidelity Mockups",
      subtitle: "From clickable simulation to polished design system",
      minutes: 12,
      summary:
        "A prototype simulates the product; a high-fidelity mockup perfects its appearance. Together they validate behaviour and communicate visual intent before development.",
      objectives: [
        "Define a prototype and its purpose",
        "Choose low, medium or high fidelity",
        "Name prototyping methods and tools",
        "Describe mockup elements, design systems and handoff"
      ],
      chunks: [
        {
          title: "What a prototype is",
          points: [
            "A prototype is an interactive simulation of the product that lets users and stakeholders experience functionality before build.",
            "Prototypes validate ideas, test flows and reduce risk.",
            "They can be paper-based or digital, and vary in fidelity.",
            "Use prototypes to answer specific questions, not to demonstrate every feature.",
            "Testing a prototype early is cheaper than changing a developed product."
          ]
        },
        {
          title: "Fidelity and methods",
          points: [
            "Low-fidelity prototypes are rough and quick, useful for early concept testing.",
            "Medium-fidelity prototypes add realistic structure and some interactivity.",
            "High-fidelity prototypes closely resemble the final product, with visual design, micro-interactions and realistic data.",
            "Paper prototyping is cheap and collaborative; digital tools support realistic interaction.",
            "Common tools include Figma and Adobe XD.",
            "Focus on critical paths and the questions the prototype must answer."
          ]
        },
        {
          title: "Testing prototypes",
          points: [
            "Give users realistic tasks and observe where they hesitate or fail.",
            "Ask participants to think aloud and avoid guiding them too quickly.",
            "Test with representative users, including low-literacy or entry-level device users where relevant.",
            "Record observations, not just opinions.",
            "Iterate: fix the biggest issue, then test again.",
            "PhonePe's extensive prototype testing is cited as a practice that supports its scale."
          ]
        },
        {
          title: "High-fidelity mockups",
          points: [
            "High-fidelity mockups are detailed, visually polished representations of the final product.",
            "They include final colour, typography, imagery, spacing and component states.",
            "Create them after low-fidelity validation and before development handoff.",
            "They communicate brand and visual intent precisely to stakeholders and developers.",
            "Mockups are static; prototypes add interaction.",
            "Essential elements: colour palette, type system, grid, imagery, iconography and component states."
          ]
        },
        {
          title: "Design systems and handoff",
          points: [
            "A design system provides reusable components, standards and rules for consistent interfaces.",
            "Component libraries make it faster to design and easier for developers to implement consistently.",
            "Document colour, typography, spacing, components, states and usage guidance.",
            "Export assets in appropriate formats: vector for scalable logos and icons, raster for photographs.",
            "Handoff should include specifications, assets, interaction notes and edge cases.",
            "A good handoff reduces rework and keeps the shipped product faithful to the design."
          ]
        }
      ],
      terms: [
        { t: "Prototype", d: "An interactive simulation used to test a product concept before development." },
        { t: "High-fidelity mockup", d: "A polished, static representation of the final interface." },
        { t: "Design system", d: "A shared set of components, standards and rules for building consistent interfaces." },
        { t: "Component library", d: "A reusable collection of interface components used across a product." },
        { t: "Vector format", d: "An image format based on mathematical paths, scalable without quality loss." }
      ],
      quiz: [
        {
          q: "A prototype is valuable because it...",
          opts: ["Lets users experience and test functionality before development", "Replaces all research", "Is always pixel-perfect", "Requires no testing"],
          a: 0,
          e: "Prototypes make behaviour testable early and cheaply."
        },
        {
          q: "High-fidelity prototypes typically include...",
          opts: ["Visual design, micro-interactions and realistic data", "Only hand-drawn boxes", "No interactivity", "Only a written specification"],
          a: 0,
          e: "High-fidelity prototypes closely resemble the final experience."
        },
        {
          q: "Which is a prototyping method?",
          opts: ["Paper prototyping", "Card sorting", "Heuristic evaluation", "Usability benchmarking"],
          a: 0,
          e: "Paper prototypes are a quick, low-cost way to simulate screens."
        },
        {
          q: "When should high-fidelity mockups be created?",
          opts: ["After low-fidelity validation and before development handoff", "Before any research", "Only after launch", "Instead of prototypes"],
          a: 0,
          e: "They formalise a validated direction for stakeholders and developers."
        },
        {
          q: "A design system helps mainly by...",
          opts: ["Providing reusable components and consistent standards", "Removing the need for testing", "Making every screen unique", "Preventing developer collaboration"],
          a: 0,
          e: "Shared components and rules create consistency and efficiency."
        },
        {
          q: "Which format is best for a scalable logo or icon?",
          opts: ["Vector", "Low-resolution raster", "A screenshot", "A compressed JPEG"],
          a: 0,
          e: "Vector graphics scale without losing quality."
        },
        {
          q: "A good design handoff includes...",
          opts: ["Specifications, assets, states and interaction notes", "Only the final image", "Only a verbal explanation", "The research recordings"],
          a: 0,
          e: "Developers need complete, precise information to implement the design."
        }
      ]
    },
    {
      id: "u3c9",
      number: "09",
      title: "Usability Testing and Evaluation",
      subtitle: "Observe real users, measure problems and choose the right method",
      minutes: 14,
      summary:
        "Evaluation closes the loop. Usability testing observes real users attempting tasks; heuristic evaluation, cognitive walkthroughs, A/B tests, surveys and accessibility reviews add other lenses.",
      objectives: [
        "Plan and run a usability test",
        "Use think-aloud, metrics and severity ratings",
        "Compare heuristic evaluation, cognitive walkthrough and A/B testing",
        "Choose an evaluation strategy for a project"
      ],
      chunks: [
        {
          title: "Usability testing",
          points: [
            "Usability testing evaluates how real users interact with a product by observing them perform specific tasks.",
            "It identifies problems early, saving time and resources.",
            "Moderated testing has a researcher guide the session and follow up; unmoderated testing runs without a moderator and scales further.",
            "Tests can happen at concept, prototype, pre-launch and post-launch stages.",
            "Plan by defining objectives, choosing tasks, recruiting representative participants and preparing a script.",
            "Run sessions consistently, observe behaviour and avoid leading the participant."
          ]
        },
        {
          title: "Think-aloud and metrics",
          points: [
            "In the think-aloud protocol, participants verbalise their thoughts and actions while completing tasks.",
            "It reveals confusion, expectations and decision points that silent observation misses.",
            "Quantitative metrics include task success rate, time on task, error rate and satisfaction scores.",
            "Qualitative findings explain why the numbers look the way they do.",
            "Severity ratings help prioritise fixes, from cosmetic issues to critical blockers.",
            "Report evidence and recommendations, not just a list of complaints."
          ]
        },
        {
          title: "Expert and comparative methods",
          points: [
            "Heuristic evaluation has experts assess an interface against established usability principles.",
            "A cognitive walkthrough simulates a user's step-by-step problem solving, especially for new users.",
            "Expert reviews use professional judgement to identify issues quickly, but they are not a substitute for real users.",
            "A/B testing compares two versions of a design to see which performs better on a defined metric.",
            "A/B tests need enough traffic and a clear hypothesis; they show what happened, not always why.",
            "Surveys collect feedback at scale; the System Usability Scale (SUS) is a low-cost subjective usability measure."
          ]
        },
        {
          title: "Accessibility and strategy",
          points: [
            "Accessibility evaluation checks whether the design works for people with diverse abilities.",
            "Include keyboard testing, screen reader checks, contrast checks and cognitive accessibility.",
            "Low-cost testing is possible: guerrilla testing in public spaces, paper prototypes and short sessions.",
            "An evaluation strategy starts with research questions, then selects methods and participants.",
            "Triangulate: combine observation, metrics, expert review and feedback for a fuller picture.",
            "Close the loop by prioritising issues, fixing them and testing again."
          ]
        }
      ],
      terms: [
        { t: "Usability testing", d: "Observing representative users attempt tasks to find usability problems." },
        { t: "Think-aloud protocol", d: "Asking participants to verbalise their thoughts while completing tasks." },
        { t: "Heuristic evaluation", d: "Expert review of an interface against usability principles." },
        { t: "Cognitive walkthrough", d: "A step-by-step simulation of a new user's problem-solving process." },
        { t: "SUS", d: "System Usability Scale; a short questionnaire producing a subjective usability score." },
        { t: "Guerrilla testing", d: "Quick, informal usability testing with available target users." }
      ],
      quiz: [
        {
          q: "Usability testing primarily involves...",
          opts: ["Observing real users perform tasks", "Asking designers to vote", "Reading server logs only", "Launching without feedback"],
          a: 0,
          e: "The method is built around observing representative users attempting tasks."
        },
        {
          q: "Moderated usability testing differs from unmoderated because...",
          opts: ["A researcher guides the session and can follow up", "There are no participants", "It cannot be recorded", "It requires no tasks"],
          a: 0,
          e: "A moderator can probe and clarify, while unmoderated tests scale with less control."
        },
        {
          q: "The think-aloud protocol asks participants to...",
          opts: ["Verbalise their thoughts while completing tasks", "Stay completely silent", "Write the final report", "Test the code"],
          a: 0,
          e: "Thinking aloud exposes expectations and confusion in the moment."
        },
        {
          q: "Which is a quantitative usability metric?",
          opts: ["Time on task", "A participant's frustration story", "A designer's opinion", "A heuristic principle"],
          a: 0,
          e: "Time on task is measurable and comparable across sessions."
        },
        {
          q: "A heuristic evaluation is performed by...",
          opts: ["Experts assessing the interface against usability principles", "Only first-time users", "The marketing team", "A random sample of the public"],
          a: 0,
          e: "Experts apply established heuristics to find likely problems."
        },
        {
          q: "A/B testing is best at showing...",
          opts: ["Which of two versions performs better on a defined metric", "Why users feel a certain way", "The exact cause of every bug", "Whether accessibility is complete"],
          a: 0,
          e: "A/B tests measure comparative performance, not necessarily the reasons behind it."
        },
        {
          q: "The System Usability Scale (SUS) is...",
          opts: ["A short questionnaire producing a subjective usability score", "A type of prototype", "A navigation pattern", "An information architecture principle"],
          a: 0,
          e: "SUS is a low-cost, widely used measure of perceived usability."
        },
        {
          q: "Why triangulate evaluation methods?",
          opts: ["Different methods reveal different kinds of problems and evidence", "One method is always sufficient", "It avoids talking to users", "It guarantees a perfect product"],
          a: 0,
          e: "Combining observation, metrics and expert review gives a fuller picture."
        }
      ]
    }
  ]
});
