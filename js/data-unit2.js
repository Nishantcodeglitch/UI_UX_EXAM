/* Unit 2 — Foundations of UX Design
   Source: unit2-to3.txt (Final-Unit-2-Foundations-of-UX-Design - SDCCE.pdf) */

window.UNITS = window.UNITS || [];
window.UNITS.push({
  id: "unit2",
  number: 2,
  title: "Foundations of UX Design",
  tagline: "Experience, the five planes, research, models and design quality",
  intro:
    "Unit 2 widens the lens from the interface to the whole experience. You will learn what makes UX different from UI and usability, how Garrett's five elements structure a product, what separates good design from poor design, and how research, mental models, user needs and business goals shape decisions.",
  outcome:
    "By the end you should be able to evaluate design quality, explain the five planes, connect research evidence to user needs and business goals, and describe how a design moves from layout to launch.",
  chapters: [
    {
      id: "u2c1",
      number: "01",
      title: "UX: The Bigger Picture",
      subtitle: "Definition, scope and the difference from UI and usability",
      minutes: 9,
      summary:
        "UX design creates meaningful, relevant experiences across the entire journey. It is broader than the interface and broader than usability: it includes branding, function, emotion and every touchpoint.",
      objectives: [
        "Define UX design and its scope",
        "Explain how UX extends beyond the interface",
        "Distinguish UX, UI and usability",
        "Describe the UX designer's role and the full spectrum of experience"
      ],
      chunks: [
        {
          title: "Defining UX design",
          points: [
            "UX design is the process of creating products that provide meaningful and relevant experiences.",
            "It covers the entire process of acquiring and integrating a product, including branding, design, usability and function.",
            "It follows the whole user journey, from first interaction to final experience.",
            "The aim is not only a functional product but one that is useful, enjoyable and accessible.",
            "UX asks: how can interacting with this computer, phone, product or service be made intuitive, smooth and pleasant?"
          ]
        },
        {
          title: "Beyond the interface",
          points: [
            "UX includes marketing campaigns, packaging, after-sales support, installation and customer service touchpoints.",
            "It addresses concrete pain points and user needs; without solving a real problem a product has no purpose.",
            "A product can be digitally polished and still deliver a poor experience if support or setup fails.",
            "This is why UX is described as holistic: every touchpoint contributes to the experience."
          ]
        },
        {
          title: "UX, UI and usability",
          points: [
            "UX concerns the whole process and journey, including emotions and perceptions across all touchpoints.",
            "UI is the visual layer users interact with: buttons, icons, spacing, typography, colour and responsive layout. It is a subset of UX.",
            "Usability is how efficiently and effectively users can complete tasks with minimal friction.",
            "Usability focuses on function and ease of use; UX also includes emotional and meaningful aspects.",
            "The terms are often used interchangeably, but understanding their distinct roles supports holistic design."
          ]
        },
        {
          title: "The UX designer's role",
          points: [
            "Conducts user research and develops personas.",
            "Works on information architecture and navigation flows.",
            "Creates wireframes and prototypes, then tests usability and iterates.",
            "Collaborates on visual design and content strategy.",
            "The role connects research insight to the structure and behaviour of the product."
          ]
        },
        {
          title: "Beyond usability",
          points: [
            "Good UX also considers pleasure, efficiency, fun, meaning and accessibility.",
            "Pleasure creates delightful moments; efficiency saves time and effort; fun makes interactions enjoyable.",
            "Meaning creates emotional connections; accessibility ensures inclusivity.",
            "There is no single definition of a good experience: it meets a particular user's needs in a particular context."
          ]
        }
      ],
      terms: [
        { t: "Usability", d: "How effectively and efficiently users can accomplish tasks with minimal friction." },
        { t: "Touchpoint", d: "Any point of contact between a user and a product, brand or service." },
        { t: "Holistic UX", d: "Considering the entire experience across all touchpoints, not only the screen." },
        { t: "Persona", d: "A research-based fictional character representing a user group." }
      ],
      quiz: [
        {
          q: "UX design is best defined as...",
          opts: ["Creating meaningful and relevant experiences across the whole journey", "Only painting interface screens", "Only testing whether buttons work", "Writing backend code"],
          a: 0,
          e: "UX covers the full process and experience, including branding, usability and function."
        },
        {
          q: "Which statement about UI and UX is correct?",
          opts: ["UI is a subset of UX", "UX is a subset of UI", "They are identical", "Usability is a subset of UI only"],
          a: 0,
          e: "The visual interface is one part of the total experience."
        },
        {
          q: "Usability focuses primarily on...",
          opts: ["Efficient, effective task completion with minimal friction", "Brand storytelling only", "Emotional meaning only", "Marketing campaigns"],
          a: 0,
          e: "Usability is about function and ease of use, while UX includes emotion and meaning too."
        },
        {
          q: "Which is a UX touchpoint beyond the screen?",
          opts: ["After-sales support", "A button's border radius", "A font's x-height", "A CSS media query"],
          a: 0,
          e: "Support is part of the total experience even though it is not an interface element."
        },
        {
          q: "Which is NOT part of the UX designer's typical role?",
          opts: ["User research and personas", "Information architecture and flows", "Wireframing and usability testing", "Tuning the production database"],
          a: 3,
          e: "Database tuning is an engineering task, not a core UX design responsibility."
        },
        {
          q: "The 'full spectrum' of UX includes...",
          opts: ["Pleasure, efficiency, fun, meaning and accessibility", "Only visual polish", "Only conversion metrics", "Only technical performance"],
          a: 0,
          e: "The notes explicitly list these five beyond basic usability."
        },
        {
          q: "Why is there no single definition of a good user experience?",
          opts: ["Because it depends on a particular user's needs and context", "Because users never agree", "Because design has no standards", "Because UX is only about visuals"],
          a: 0,
          e: "A good experience is judged against specific needs in a specific context."
        }
      ]
    },
    {
      id: "u2c2",
      number: "02",
      title: "Where UX Applies and Why It Matters",
      subtitle: "Digital, physical and service contexts, plus the business case",
      minutes: 9,
      summary:
        "UX is not limited to apps. It shapes digital products, physical devices, services and emerging interfaces. In a crowded market it drives conversion, trust, differentiation and cost savings.",
      objectives: [
        "Give examples of UX in digital, physical and service contexts",
        "Explain five reasons UX matters commercially",
        "Describe sustainable UX",
        "Recognise Indian product examples used in the notes"
      ],
      chunks: [
        {
          title: "Digital products",
          points: [
            "Mobile apps need intuitive navigation, consistent patterns, fast loading and personalisation. Example: PhonePe simplified payments for first-time users.",
            "Websites need easy navigation and clear information architecture. Example: Flipkart serves users across regions, languages and literacy levels.",
            "Software applications benefit from improved usability and satisfaction. Example: Zoho's business apps emphasise simplicity and integration for SMEs.",
            "Video games need immersive experiences and intuitive controls. Example: Ludo King reached mass adoption with a familiar, accessible design."
          ]
        },
        {
          title: "Physical products and services",
          points: [
            "Automotive interfaces: Tata Nexon's touchscreen supports vernacular languages and aims to reduce driver distraction.",
            "Household appliances: Godrej designs simpler interfaces for varied literacy levels and regional preferences.",
            "ATMs and kiosks: SBI ATMs use multi-language support and simplified workflows for rural users.",
            "Services: e-commerce flows, banking, travel and government services all depend on clear touchpoints and smooth hand-offs.",
            "Voice interfaces extend UX to hands-free and low-literacy contexts."
          ]
        },
        {
          title: "Why UX matters now",
          points: [
            "Conversions and revenue: better UX improves business metrics and reduces friction in buying.",
            "Satisfaction and loyalty: intuitive, enjoyable experiences build trust and bring users back.",
            "Competitive advantage: when products are functionally similar, superior UX differentiates.",
            "Cost reduction: finding issues early through UX work is cheaper than fixing them after development.",
            "Sustainable UX: an emerging focus on designing digital products responsibly, with attention to their wider impact."
          ]
        },
        {
          title: "The Indian context",
          points: [
            "Design must account for language diversity, varied literacy, device constraints and connectivity.",
            "Local examples make the point: PhonePe for payments, Flipkart for e-commerce, Zomato for discovery and delivery.",
            "Inclusive design is not a niche concern in a market with this much variation.",
            "Contextual research is essential before transferring patterns from other markets."
          ]
        }
      ],
      terms: [
        { t: "Sustainable UX", d: "Designing digital products with awareness of their longer-term social and environmental impact." },
        { t: "Vernacular interface", d: "An interface offered in local or regional languages rather than only English." },
        { t: "Conversion", d: "The proportion of users who complete a desired action such as a purchase or sign-up." }
      ],
      quiz: [
        {
          q: "Which is an example of UX in a physical product?",
          opts: ["A car dashboard designed to reduce driver distraction", "A database index", "A marketing email subject line", "A server log"],
          a: 0,
          e: "Physical interfaces such as dashboards are designed around user context and safety."
        },
        {
          q: "PhonePe's simplified UX is cited as an example of...",
          opts: ["Helping first-time digital payment users", "Increasing backend complexity", "Removing all security", "Designing only for experts"],
          a: 0,
          e: "Simplification made digital payments approachable for new users."
        },
        {
          q: "Which is NOT listed as a business reason for UX?",
          opts: ["Driving conversions", "Building trust and loyalty", "Creating competitive advantage", "Guaranteeing that no bugs exist"],
          a: 3,
          e: "UX reduces risk but cannot guarantee a bug-free product."
        },
        {
          q: "Sustainable UX is concerned with...",
          opts: ["The wider, longer-term impact of digital products", "Only visual sustainability of colours", "Making every page green", "Avoiding all technology"],
          a: 0,
          e: "It is an emerging area focused on responsible design beyond immediate usability."
        },
        {
          q: "Why is localisation important in Indian UX?",
          opts: ["Users vary in language, literacy, device and connectivity", "All users have identical devices", "English is the only language used", "It reduces the need for research"],
          a: 0,
          e: "Design must accommodate substantial diversity across regions and user groups."
        },
        {
          q: "Which example illustrates a service touchpoint?",
          opts: ["An airport check-in process", "A CSS grid", "A font licence", "A colour hex code"],
          a: 0,
          e: "Services such as travel and check-in are composed of multiple user touchpoints."
        }
      ]
    },
    {
      id: "u2c3",
      number: "03",
      title: "The Five Elements of UX",
      subtitle: "Jesse James Garrett's strategy-to-surface framework",
      minutes: 14,
      summary:
        "Garrett's five planes give UX work a structure: Strategy (why), Scope (what), Structure (how it is organised), Skeleton (how it is arranged) and Surface (how it looks and feels). Each plane builds on the one below.",
      objectives: [
        "Name and order the five elements",
        "Explain the key question each plane answers",
        "Give an example of a decision at each plane",
        "Describe testing and accessibility across the framework"
      ],
      chunks: [
        {
          title: "Strategy — why build it?",
          points: [
            "The foundation: defines what objectives the product should meet.",
            "Combines business objectives with user needs.",
            "Research methods include user interviews, surveys, market research and competitor analysis.",
            "Example (EV charging app): understand why drivers need charging, where they travel and what would make them trust the service.",
            "If strategy is unclear, every later decision lacks a reference point."
          ]
        },
        {
          title: "Scope — what will we build?",
          points: [
            "Defines which features and content are included, and which are excluded.",
            "Functional requirements describe what the product does; content requirements describe what information it contains.",
            "Example (EV app): charger type, power output, pricing and availability indicators.",
            "Scope protects the team from unbounded feature growth.",
            "The MVP idea belongs here: just enough features to satisfy early users."
          ]
        },
        {
          title: "Structure — how is it organised?",
          points: [
            "Defines how users navigate and how information is organised.",
            "Information architecture shapes categories, hierarchy and relationships.",
            "Interaction design shapes flows and how users move between states.",
            "Example (EV app): a flow for finding a nearby charger, checking availability and starting a session.",
            "Structure makes the mental model of the product match the user's expectations."
          ]
        },
        {
          title: "Skeleton — how is it arranged?",
          points: [
            "The placement of interface elements such as buttons, controls and images on each screen.",
            "Wireframes and navigation design live here.",
            "It optimises arrangement for interaction before visual polish.",
            "Example (EV app): header, map, station details, availability indicators and a primary action on a detail page.",
            "Skeleton is where structure becomes a concrete screen layout."
          ]
        },
        {
          title: "Surface — how does it look and feel?",
          points: [
            "The most concrete layer: the sensory experience of what users see, hear and feel.",
            "Visual design brings colour, typography, imagery and brand expression together.",
            "Example (EV app): colour palette, map styling, icon style, type hierarchy and button treatment.",
            "Surface decisions affect emotion and trust, but they cannot compensate for a broken strategy or structure.",
            "Each plane builds on the ones below it; skipping a layer creates fragile design."
          ]
        },
        {
          title: "Applying and testing the framework",
          points: [
            "Accessibility should be integrated at every plane, starting with strategy.",
            "Test strategy with interviews, market research and competitor analysis.",
            "Test scope and structure with flows, card sorting and prototypes.",
            "Test skeleton and surface with wireframes, mockups and usability testing.",
            "Document each layer, balance MVP scope with real needs, and expect constraints such as budget and unknown requirements.",
            "Indian challenges include language and literacy diversity; design must accommodate both."
          ]
        }
      ],
      terms: [
        { t: "Five elements / planes", d: "Garrett's model: strategy, scope, structure, skeleton and surface." },
        { t: "MVP", d: "Minimum viable product: the smallest product that satisfies early users and supports learning." },
        { t: "Functional requirements", d: "What a product must do; its features and behaviours." },
        { t: "Content requirements", d: "The information, media and copy the product must contain." }
      ],
      quiz: [
        {
          q: "Which is the correct order of Garrett's five elements, from abstract to concrete?",
          opts: ["Strategy → Scope → Structure → Skeleton → Surface", "Surface → Skeleton → Structure → Scope → Strategy", "Scope → Strategy → Surface → Structure → Skeleton", "Strategy → Structure → Scope → Surface → Skeleton"],
          a: 0,
          e: "The planes move from the abstract strategy layer to the concrete surface."
        },
        {
          q: "Which plane answers the question 'What features and content will the product include?'",
          opts: ["Scope", "Strategy", "Skeleton", "Surface"],
          a: 0,
          e: "Scope defines the functional and content requirements."
        },
        {
          q: "Information architecture and interaction design belong mainly to...",
          opts: ["Structure", "Surface", "Strategy", "Scope"],
          a: 0,
          e: "The structure plane organises content and defines how interaction flows work."
        },
        {
          q: "Wireframes are most closely associated with which plane?",
          opts: ["Skeleton", "Strategy", "Scope", "Surface"],
          a: 0,
          e: "The skeleton plane arranges interface elements on the screen."
        },
        {
          q: "Which plane deals with colour, typography, imagery and sensory feel?",
          opts: ["Surface", "Structure", "Scope", "Strategy"],
          a: 0,
          e: "Surface is the most concrete plane and covers the visual and sensory experience."
        },
        {
          q: "Why should accessibility be considered at strategy rather than only at surface?",
          opts: ["It shapes goals, scope and structure, not just visual styling", "It is only a legal checkbox", "It only affects colour contrast", "It can be added after launch without cost"],
          a: 0,
          e: "Inclusive goals and requirements must shape the whole product, not be retrofitted visually."
        },
        {
          q: "What is a key risk of skipping the strategy plane?",
          opts: ["Later decisions lack a clear objective to guide them", "The product automatically becomes inaccessible", "Wireframes cannot be drawn", "Colours cannot be chosen"],
          a: 0,
          e: "Strategy is the reference point for scope, structure and every later choice."
        }
      ]
    },
    {
      id: "u2c4",
      number: "04",
      title: "Good Design and Poor Design",
      subtitle: "Design quality, principles, mistakes and Indian case studies",
      minutes: 12,
      summary:
        "Design quality determines whether users can understand and act. Good design is user-centred, clear, consistent and accessible; poor design creates friction through clutter, confusion and neglect of real needs.",
      objectives: [
        "Define design quality and good design",
        "Apply the principles of good UI/UX",
        "Recognise indicators and causes of poor design",
        "Evaluate examples from Indian products"
      ],
      chunks: [
        {
          title: "What design quality means",
          points: [
            "Design quality affects how users perceive, understand and interact with a product.",
            "First impressions form quickly, so clarity and polish influence trust.",
            "Good design combines functionality, visual appeal and ease of use.",
            "The notes describe good design as an act of communication between designer and user.",
            "Quality is judged by whether the product serves real needs, not by decoration alone."
          ]
        },
        {
          title: "Principles of good design",
          points: [
            "User-centricity: prioritise user needs, goals and behaviours.",
            "Simplicity and clarity: keep the interface clean, uncluttered and easy to understand.",
            "Consistency: use predictable colours, fonts, buttons and navigation patterns.",
            "Intuitive navigation: provide clear structure and pathways.",
            "Feedback: respond clearly and immediately to user actions.",
            "Accessibility: design for as many people as possible, including users with disabilities.",
            "Efficiency and responsiveness: streamline tasks and adapt to different screens.",
            "Error prevention and recovery: help users avoid mistakes and recover when they occur.",
            "Aesthetics: visual appeal enhances satisfaction, though it is not the only factor."
          ]
        },
        {
          title: "What poor design looks like",
          points: [
            "Confusing navigation: users get lost and cannot find what they need.",
            "Clutter and overwhelming interfaces: too much information, too many options and too little white space.",
            "Inconsistent design: mixed fonts, colours, buttons and navigation patterns.",
            "Lack of feedback: silent processing leaves users unsure whether anything happened.",
            "Poor readability and accessibility: low contrast, tiny text and missing alt text.",
            "Excessive pop-ups, complicated forms, slow loading and non-responsive layouts.",
            "Vague error messages and style over substance."
          ]
        },
        {
          title: "Common causes",
          points: [
            "Ignoring user research and designing from assumptions.",
            "Adding features without prioritisation, which creates clutter.",
            "Treating visual fashion as more important than usability.",
            "Failing to test on real devices, networks and user groups.",
            "Not planning error states, empty states or recovery paths."
          ]
        },
        {
          title: "Indian examples",
          points: [
            "Good: Zomato for discovery and ordering; Paytm for a familiar wallet flow; Aadhaar self-service for broad access; Swiggy for delivery tracking; BHIM UPI for a minimal payment interface.",
            "Poor: complex government forms; overloaded e-commerce homepages; confusing banking app menus; educational portals with usability issues; frustrating ticket booking flows.",
            "The 2021 Income Tax portal launch is cited as an example of slow loading, instability and usability problems.",
            "The lesson is that trust is fragile: a single frustrating journey can undo a strong brand impression."
          ]
        }
      ],
      terms: [
        { t: "Design quality", d: "The degree to which an interface is understandable, usable, accessible and visually coherent." },
        { t: "Error prevention", d: "Designing so that users are less likely to make mistakes in the first place." },
        { t: "Error recovery", d: "Helping users understand and recover from mistakes when they occur." },
        { t: "Style over substance", d: "Prioritising visual effect over usability and real user needs." }
      ],
      quiz: [
        {
          q: "Which is a principle of good UI/UX design?",
          opts: ["User-centricity and simplicity", "Adding every possible feature", "Using inconsistent navigation", "Relying on colour alone"],
          a: 0,
          e: "Good design prioritises user needs and keeps the interface clear."
        },
        {
          q: "Which is an indicator of poor design?",
          opts: ["Users repeatedly get lost in navigation", "Clear error messages", "Consistent button styles", "Fast, responsive layouts"],
          a: 0,
          e: "Confusing navigation is a classic symptom of poor information architecture and design."
        },
        {
          q: "What does 'style over substance' mean?",
          opts: ["Prioritising flashy visuals over usability and function", "Using too little colour", "Testing with real users", "Writing clear error messages"],
          a: 0,
          e: "Visual polish cannot replace a usable, purposeful product."
        },
        {
          q: "Which is a common cause of poor UX?",
          opts: ["Ignoring user research", "Testing on real devices", "Grouping related fields", "Providing feedback"],
          a: 0,
          e: "Designing from assumptions rather than evidence leads to mismatched products."
        },
        {
          q: "BHIM UPI is cited as an example of...",
          opts: ["A minimal, accessible payment interface", "An overloaded government form", "A confusing banking menu", "A slow e-commerce homepage"],
          a: 0,
          e: "BHIM's design emphasises simplicity and broad accessibility."
        },
        {
          q: "Why is first impression important for design quality?",
          opts: ["Users form opinions quickly and those opinions affect trust", "It determines the server speed", "It replaces usability testing", "It makes research unnecessary"],
          a: 0,
          e: "Early impressions shape whether users trust and continue using a product."
        },
        {
          q: "Which combination best describes good design?",
          opts: ["Functional, visually coherent and easy to use", "Decorative, complex and novel", "Fast to build and feature-heavy", "Consistent but inaccessible"],
          a: 0,
          e: "Good design balances function, visual quality and ease of use."
        }
      ]
    },
    {
      id: "u2c5",
      number: "05",
      title: "Mental and Conceptual Models",
      subtitle: "Why users expect what they expect",
      minutes: 9,
      summary:
        "A mental model is the user's internal belief about how something works. A conceptual model is the designer's representation of the system. Good design aligns the two; mismatches create confusion.",
      objectives: [
        "Define mental model and conceptual model",
        "Explain what happens when models align or mismatch",
        "Use the light-switch and digital-payments examples",
        "Apply strategies for bridging model gaps"
      ],
      chunks: [
        {
          title: "Mental models",
          points: [
            "A mental model is an individual's internal, often subconscious, belief about how something works, based on past experience.",
            "Users bring models from other products, the physical world and cultural habits.",
            "Mental models are incomplete and can be wrong, but they drive expectations.",
            "Designers cannot see a mental model directly; they infer it through research and observation."
          ]
        },
        {
          title: "Conceptual models",
          points: [
            "A conceptual model is the designer's representation of how a system is structured and functions.",
            "It is expressed through structure, labels, flows and interaction behaviour.",
            "The model should be coherent enough for users to predict what will happen.",
            "It is not the same as the technical architecture; it is the model presented to users."
          ]
        },
        {
          title: "Alignment is key",
          points: [
            "When models align, users can predict outcomes, reducing cognitive load and errors.",
            "When they mismatch, users feel lost, make mistakes and blame themselves or the product.",
            "Example: a light switch. The user's model is 'flip up, light on'. An unfamiliar control breaks that expectation.",
            "Digital payments example: users new to UPI initially expected a physical or card-like process; design had to bridge the gap with familiar metaphors and clear confirmation."
          ]
        },
        {
          title: "Bridging the gap",
          points: [
            "Meet existing mental models: design interfaces that match how users already think.",
            "Use familiar metaphors, labels and interaction patterns.",
            "Research the target users rather than assuming a universal model.",
            "Educate only where necessary, and do it in context.",
            "Case study: Flipkart evolved its interface toward Indian users' mental models after starting with a Western-style layout."
          ]
        }
      ],
      terms: [
        { t: "Mental model", d: "A user's internal belief about how a system works, based on experience." },
        { t: "Conceptual model", d: "The designer's representation of how a system is structured and behaves." },
        { t: "Model mismatch", d: "A gap between what users expect and how the product actually works." },
        { t: "Metaphor", d: "A familiar comparison used to make a new system understandable." }
      ],
      quiz: [
        {
          q: "A mental model is...",
          opts: ["The user's internal belief about how something works", "The designer's final Figma file", "The server architecture", "A type of usability metric"],
          a: 0,
          e: "Mental models are built from users' prior experience and expectations."
        },
        {
          q: "A conceptual model is...",
          opts: ["The designer's representation of how a system is structured and functions", "The user's subconscious belief", "A database diagram only", "A marketing plan"],
          a: 0,
          e: "It is the model the product presents to users through structure and behaviour."
        },
        {
          q: "What happens when user and designer models align?",
          opts: ["Users can predict outcomes and cognitive load drops", "Users become confused", "The product requires more training", "The interface must be redesigned"],
          a: 0,
          e: "Alignment makes behaviour feel natural and predictable."
        },
        {
          q: "The light-switch example illustrates...",
          opts: ["A simple mental model about cause and effect", "A complex database relationship", "A colour contrast failure", "A business goal"],
          a: 0,
          e: "Users expect 'up = on' because of prior experience with switches."
        },
        {
          q: "Which is a strategy for bridging a model gap?",
          opts: ["Use familiar metaphors and labels", "Add more features", "Hide all instructions", "Ignore prior experience"],
          a: 0,
          e: "Familiar patterns let users transfer what they already know."
        },
        {
          q: "Flipkart's design evolution is used to show...",
          opts: ["Adapting an interface to local users' mental models", "Removing all navigation", "Avoiding user research", "Copying a competitor exactly"],
          a: 0,
          e: "The interface changed to better match how Indian users expected to shop."
        }
      ]
    },
    {
      id: "u2c6",
      number: "06",
      title: "Understanding Users and UX Research",
      subtitle: "Why research matters, methods, dimensions and ethics",
      minutes: 13,
      summary:
        "Research replaces assumptions with evidence. It can be qualitative or quantitative, attitudinal or behavioural, and it follows a sequence from inquiry to observation, testing and analysis.",
      objectives: [
        "Explain why understanding users matters",
        "Distinguish qualitative, quantitative, attitudinal and behavioural research",
        "Name the four research categories and common methods",
        "Apply ethical and contextual considerations"
      ],
      chunks: [
        {
          title: "Why research matters",
          points: [
            "It drives user-centred design and better products by revealing real needs rather than assumed ones.",
            "It builds empathy and improves usability and accessibility.",
            "It increases satisfaction and loyalty when products genuinely address needs.",
            "It saves time and money by catching issues early.",
            "It supports innovation and competitive advantage by uncovering hidden opportunities.",
            "Business impact: research-informed products are more likely to succeed."
          ]
        },
        {
          title: "Research dimensions",
          points: [
            "Attitudinal research explores what users say: opinions, beliefs and self-reported feelings.",
            "Behavioural research observes what users do: actions, paths and workarounds.",
            "Qualitative research explores experiences, emotions and motivations through interviews, diaries and observation.",
            "Quantitative research collects numerical data for statistical analysis through surveys, analytics and metrics.",
            "Mixed methods combine both, which is often stronger than either alone."
          ]
        },
        {
          title: "Four research categories",
          points: [
            "Inquiry: interviews, surveys and stakeholder conversations to understand needs and context.",
            "Observation: contextual inquiry and field observation to see users in their environment.",
            "Testing: usability testing to observe users attempting tasks with a product.",
            "Analysis: card sorting, affinity mapping and synthesis to organise findings and structure information.",
            "The categories often follow a logical sequence, but real projects loop back as questions change."
          ]
        },
        {
          title: "Choosing methods",
          points: [
            "The choice depends on research goals, available time and budget, access to users and the stage of the project.",
            "Interviews are strong for 'why'; surveys for 'how many'; analytics for 'what happened'; usability tests for 'where do users struggle'.",
            "Use local languages where possible and adapt to participants' communication preferences.",
            "Recruit across relevant segments rather than only the easiest users to reach.",
            "Practical tools include video calls for remote interviews and usability sessions."
          ]
        },
        {
          title: "Ethics and Indian context",
          points: [
            "Obtain informed consent and ensure participants understand the purpose and their rights.",
            "Protect privacy and avoid pressure or misleading framing.",
            "India adds language diversity, varied literacy, device constraints and unequal access.",
            "Avoid extracting insight without giving back; research should respect participants and communities.",
            "Example: Swiggy used mixed methods across urban centres and smaller cities to understand varied food-ordering behaviour."
          ]
        }
      ],
      terms: [
        { t: "Qualitative research", d: "Research that explores experiences, meanings and motivations, often with small samples." },
        { t: "Quantitative research", d: "Research that collects numerical data for statistical analysis." },
        { t: "Contextual inquiry", d: "Observing and interviewing users in their natural environment." },
        { t: "Card sorting", d: "A method where users group and label content to inform information architecture." },
        { t: "Informed consent", d: "Telling participants what research involves and obtaining their voluntary agreement." }
      ],
      quiz: [
        {
          q: "Qualitative research is best for understanding...",
          opts: ["Experiences, emotions and motivations", "Only large-scale statistics", "Server response times", "Colour contrast ratios"],
          a: 0,
          e: "Qualitative methods explore the 'why' and the texture of user experience."
        },
        {
          q: "Attitudinal research focuses on...",
          opts: ["What users say and believe", "Only what users do", "Only device performance", "Only conversion rates"],
          a: 0,
          e: "Attitudinal research captures self-reported opinions and feelings."
        },
        {
          q: "Which method belongs to the testing category?",
          opts: ["Usability testing", "Card sorting", "Diary study", "Market analysis"],
          a: 0,
          e: "Usability testing observes users attempting tasks with a product."
        },
        {
          q: "Why does research save money?",
          opts: ["It uncovers issues before expensive development work", "It guarantees perfect code", "It removes the need for testing", "It eliminates all risk"],
          a: 0,
          e: "Early discovery is cheaper than fixing problems after build."
        },
        {
          q: "Informed consent means participants...",
          opts: ["Understand the research purpose and voluntarily agree", "Are paid to say positive things", "Cannot withdraw", "Must remain anonymous to the researcher"],
          a: 0,
          e: "Consent must be informed, voluntary and respectful of participants' rights."
        },
        {
          q: "Mixed methods research...",
          opts: ["Combines qualitative and quantitative approaches", "Uses only surveys", "Uses only interviews", "Avoids data"],
          a: 0,
          e: "Combining methods helps validate findings and capture both scale and depth."
        },
        {
          q: "Which is a contextual research method?",
          opts: ["Observing users in their natural environment", "A multiple-choice quiz", "An A/B test of button colours", "A server benchmark"],
          a: 0,
          e: "Contextual inquiry studies users where they actually use the product."
        },
        {
          q: "Why should researchers consider local languages in India?",
          opts: ["Participants may express needs more accurately in their own language", "It increases server load", "It removes the need for consent", "It guarantees representative samples"],
          a: 0,
          e: "Language affects comfort, expression and the quality of insight."
        }
      ]
    },
    {
      id: "u2c7",
      number: "07",
      title: "Needs, Goals and Business Goals",
      subtitle: "From empathy maps to the UX value triangle",
      minutes: 13,
      summary:
        "Users have needs and goals; organisations have business goals. Great products align the two. Personas, empathy maps, user stories, scenarios and flows help teams keep the human in view.",
      objectives: [
        "Distinguish needs, user goals and business goals",
        "Use empathy maps, personas, stories and scenarios",
        "Explain the Five Whys and need prioritisation",
        "Describe the UX value triangle and goal alignment"
      ],
      chunks: [
        {
          title: "User needs",
          points: [
            "Needs are the desires, goals, preferences and expectations users bring to a product.",
            "Functional needs concern what the product must do; emotional and social needs concern how users want to feel and be seen.",
            "Needs can be stated or unstated; research reveals the gaps.",
            "A need hierarchy for UX starts with functionality: the product must work reliably before higher-level needs matter.",
            "Understanding needs guides design decisions, prioritisation, satisfaction and innovation."
          ]
        },
        {
          title: "Empathy maps",
          points: [
            "An empathy map organises what users think and feel, see, hear, say and do.",
            "It helps designers step into the user's situation and exposes the empathy gap between designer assumptions and user reality.",
            "The notes give the example of a rural farmer using the PM Kisan app.",
            "Empathy is the ability to 'walk in the user's shoes' and understand their experience.",
            "Empathy maps are a synthesis tool, not a substitute for direct research."
          ]
        },
        {
          title: "Personas, stories and scenarios",
          points: [
            "A persona is a fictional character drawn from real data that represents a major user group.",
            "Good personas include goals, behaviours, context and pain points; they are research-based, not invented stereotypes.",
            "User stories follow the structure: As a [type of user], I want [an action] so that [a benefit].",
            "User scenarios are narratives describing how a persona interacts with a product in a specific context.",
            "User flows are step-by-step visual representations of how a user moves through the product to complete a task."
          ]
        },
        {
          title: "Goals and the Five Whys",
          points: [
            "Experience goals describe how users want to feel; practical goals describe what they want to accomplish.",
            "The Five Whys digs from a surface complaint to an underlying need. Example: 'the pension app should be faster' → because checking takes too long → because too many steps → because information is scattered.",
            "Identifying needs and goals starts with direct questions such as 'What are you trying to accomplish?'",
            "Not all needs can be met at once; prioritisation methods help decide what matters most.",
            "Translate prioritised needs into concrete features and measurable goals."
          ]
        },
        {
          title: "Business goals and alignment",
          points: [
            "Business goals are the objectives a company aims to achieve through its products or services.",
            "Common goals include revenue growth, market share, customer acquisition and retention, brand reputation, cost reduction, scalability, innovation, compliance and social responsibility.",
            "The UX value triangle balances user needs, business goals and technical feasibility.",
            "The best products find where user needs and business goals overlap.",
            "Examples: UPI apps improved transaction clarity while growing adoption; MyGov aimed to increase civic participation through usable services.",
            "When goals conflict, design must negotiate trade-offs rather than silently optimise one side."
          ]
        }
      ],
      terms: [
        { t: "User need", d: "A requirement or expectation that motivates a person to use a product." },
        { t: "User goal", d: "The outcome a user wants to achieve through the product." },
        { t: "Empathy map", d: "A synthesis tool that captures what users think, feel, see, hear, say and do." },
        { t: "User story", d: "A short feature description in the form 'As a…, I want…, so that…'." },
        { t: "UX value triangle", d: "The balance of user needs, business goals and technical feasibility." }
      ],
      quiz: [
        {
          q: "A user story is usually written in which structure?",
          opts: ["As a [user], I want [action] so that [benefit]", "Problem → solution → price", "Title → author → date", "Input → process → output"],
          a: 0,
          e: "This structure keeps the user, desired capability and value visible."
        },
        {
          q: "What is the purpose of an empathy map?",
          opts: ["To organise what users think, feel, see, hear, say and do", "To calculate conversion rates", "To define server requirements", "To create a colour palette"],
          a: 0,
          e: "It builds understanding of the user's world and reveals assumptions."
        },
        {
          q: "A persona should be based on...",
          opts: ["Real research data", "The designer's imagination alone", "A competitor's marketing", "Random demographic guesses"],
          a: 0,
          e: "Personas are credible only when grounded in evidence from real users."
        },
        {
          q: "The Five Whys technique is used to...",
          opts: ["Reach the underlying cause of a problem", "Test five interface versions", "Ask five users to vote", "Create five colour schemes"],
          a: 0,
          e: "Repeated 'why' questions move from symptoms to root needs."
        },
        {
          q: "The UX value triangle balances user needs with...",
          opts: ["Business goals and technical feasibility", "Only visual trends", "Only competitor features", "Only marketing budget"],
          a: 0,
          e: "A viable product aligns user value, business value and what can be built."
        },
        {
          q: "Which is a business goal rather than a user need?",
          opts: ["Increasing market share", "Completing a payment quickly", "Understanding a bill", "Finding a nearby charger"],
          a: 0,
          e: "Market share is an organisational objective; the others are user outcomes."
        },
        {
          q: "Why can't every user need be addressed at once?",
          opts: ["Resources and scope are limited, so needs must be prioritised", "Users only have one need", "Business goals never matter", "Research is unnecessary"],
          a: 0,
          e: "Prioritisation focuses effort on the most valuable needs within constraints."
        }
      ]
    },
    {
      id: "u2c8",
      number: "08",
      title: "Layout, Interaction and Interface Design",
      subtitle: "Visual principles, functional layouts and the five dimensions",
      minutes: 12,
      summary:
        "This chapter connects high-level UX to the design of screens: visual principles, functional layout patterns, the five dimensions of interaction, and the components and practices of interface design.",
      objectives: [
        "Apply contrast, alignment, hierarchy, proximity, balance and unity",
        "Choose functional layout patterns for a task",
        "Name the five dimensions of interaction design",
        "Describe interface components and best practices"
      ],
      chunks: [
        {
          title: "Visual principles in practice",
          points: [
            "Contrast highlights differences and creates hierarchy.",
            "Alignment positions elements in relation to each other and establishes order.",
            "Hierarchy arranges content by importance so users know what to look at first.",
            "Proximity groups related elements and clarifies relationships.",
            "Balance distributes visual weight; unity makes all elements feel part of one system."
          ]
        },
        {
          title: "Functional layout",
          points: [
            "A functional layout prioritises usability and efficiency by strategically arranging interface elements.",
            "It is suited to e-commerce, dashboards and task-heavy products where users need to act quickly.",
            "Principles include clarity of purpose, logical grouping, scannability and a clear primary action.",
            "Common patterns include grid layouts and dashboard layouts.",
            "Example: Cred's layout combines clear hierarchy, generous spacing and focused actions."
          ]
        },
        {
          title: "Five dimensions of interaction",
          points: [
            "Words: the text users read, including labels, instructions and messages.",
            "Visual representations: icons, images, colour and other graphics.",
            "Physical objects or space: the devices and environment through which interaction happens.",
            "Time: change over time, including animation, sound and duration.",
            "Behaviour: how users act and how the system responds.",
            "Designing across all five dimensions makes an interaction feel complete rather than merely functional."
          ]
        },
        {
          title: "Interface design",
          points: [
            "The interface is the visual and interactive layer users see and use.",
            "The process starts with research and planning, then moves through structure, visual design and validation.",
            "Key components include typography, colour, layout, imagery, controls and feedback.",
            "Best practices include consistency, clear hierarchy, accessible contrast and responsive behaviour.",
            "Case study: IRCTC's interface evolved from a dense legacy layout toward a clearer booking flow."
          ]
        }
      ],
      terms: [
        { t: "Functional layout", d: "A layout organised around efficient task completion rather than visual spectacle." },
        { t: "Five dimensions of interaction", d: "Words, visual representations, physical objects/space, time and behaviour." },
        { t: "Unity", d: "The sense that all elements belong together as a coherent whole." },
        { t: "Scannability", d: "How easily users can quickly find and interpret information on a screen." }
      ],
      quiz: [
        {
          q: "Which visual principle is about positioning elements in relation to each other?",
          opts: ["Alignment", "Contrast", "Dominance", "Scale"],
          a: 0,
          e: "Alignment creates visual connections and order between elements."
        },
        {
          q: "A functional layout is primarily optimised for...",
          opts: ["Efficient task completion", "Maximum decoration", "Hiding navigation", "Showing every feature at once"],
          a: 0,
          e: "Functional layouts prioritise usability and efficiency."
        },
        {
          q: "Which is NOT one of the five dimensions of interaction design?",
          opts: ["Server architecture", "Words", "Time", "Behaviour"],
          a: 0,
          e: "The five dimensions are words, visual representations, physical objects/space, time and behaviour."
        },
        {
          q: "In interaction design, 'time' includes...",
          opts: ["Animation, sound and duration", "Only the clock in the status bar", "Database latency only", "The project deadline"],
          a: 0,
          e: "Time covers how an interaction unfolds, including motion and sound."
        },
        {
          q: "Which is a key interface design best practice?",
          opts: ["Consistency and accessible contrast", "Using as many styles as possible", "Removing all feedback", "Ignoring responsive behaviour"],
          a: 0,
          e: "Consistency, hierarchy and accessibility make interfaces usable."
        },
        {
          q: "Dashboard layouts are useful because they...",
          opts: ["Present multiple data points in a scannable arrangement", "Hide all data", "Replace navigation", "Prevent interaction"],
          a: 0,
          e: "Dashboards organise many metrics so users can scan and act."
        }
      ]
    },
    {
      id: "u2c9",
      number: "09",
      title: "Navigation, Testing, Handoff and Launch",
      subtitle: "From moving through the product to shipping and improving it",
      minutes: 12,
      summary:
        "A product is not finished when it looks right. This chapter covers navigation design, user testing, developer handoff, launch strategy and continuous improvement after release.",
      objectives: [
        "Name common navigation types and principles",
        "Explain the purpose and types of user testing",
        "Describe design handoff and documentation",
        "Outline pre-launch and post-launch practice"
      ],
      chunks: [
        {
          title: "Navigation design",
          points: [
            "Navigation creates clear, intuitive paths for users to move through an interface.",
            "Good navigation builds trust because users can find what they need.",
            "Common types include top navigation, breadcrumbs, side navigation, full-screen navigation, footer navigation, tabs, gesture-based navigation and search.",
            "Principles include visibility, clear labels, consistent placement, showing the current location and limiting choices.",
            "Case study: the Umang app provides access to many government services, so navigation must manage scale without overwhelming users."
          ]
        },
        {
          title: "User testing",
          points: [
            "User testing evaluates a product with representative users to identify usability issues and validate decisions.",
            "It uncovers hidden problems that teams miss because they know the product too well.",
            "Types include usability testing, exploratory testing, comparative testing and validation testing.",
            "The process: define objectives, recruit representative participants, prepare tasks, moderate sessions, observe, analyse and report.",
            "Remote testing broadens reach and lowers cost; in-person testing captures richer context.",
            "Analyse both quantitative data (success rate, time on task, errors, satisfaction) and qualitative observations."
          ]
        },
        {
          title: "Testing to handoff",
          points: [
            "Design handoff is the transfer of validated designs to developers for implementation.",
            "Effective handoff includes specifications, assets, interaction states, responsive behaviour and documentation.",
            "Common tools include Figma and other collaborative design platforms.",
            "Good documentation explains design rationale, components, spacing, typography and edge cases.",
            "Involve developers early, keep communication open and review implementation against the design."
          ]
        },
        {
          title: "Launch and after",
          points: [
            "Pre-launch testing checks functionality, performance, accessibility and cross-device behaviour.",
            "A launch strategy may include staged rollout, monitoring, support readiness and communication.",
            "Post-launch continuous improvement uses analytics, user feedback, support tickets and further testing.",
            "Case study: BHIM UPI evolved after launch through iteration and feedback.",
            "The design process is cyclical: release produces evidence for the next round of research and design."
          ]
        }
      ],
      terms: [
        { t: "Design handoff", d: "The process of transferring designs, specifications and assets from design to development." },
        { t: "Exploratory testing", d: "Testing in which users freely explore a product to surface issues and opportunities." },
        { t: "Task success rate", d: "The percentage of users who complete a defined task." },
        { t: "Staged rollout", d: "Releasing to a subset of users before a full launch to limit risk." }
      ],
      quiz: [
        {
          q: "Breadcrumb navigation is useful because it...",
          opts: ["Shows the user's location in a hierarchy", "Replaces all page content", "Hides the current page", "Only works on mobile"],
          a: 0,
          e: "Breadcrumbs reveal the path from the front page to the current page."
        },
        {
          q: "The main purpose of user testing is to...",
          opts: ["Observe representative users and find usability issues", "Prove the designer is right", "Collect marketing emails", "Measure server uptime"],
          a: 0,
          e: "Testing reveals real problems in tasks and interactions."
        },
        {
          q: "A staged rollout is used to...",
          opts: ["Release to a subset of users before a full launch to limit risk", "Skip testing and launch everywhere at once", "Remove analytics after release", "Replace the design handoff"],
          a: 0,
          e: "A staged rollout limits exposure while the team monitors the release and gathers feedback."
        },
        {
          q: "Design handoff should include...",
          opts: ["Specifications, assets, states and documentation", "Only a screenshot", "Only a verbal description", "The source research raw data"],
          a: 0,
          e: "Developers need precise, complete information to implement the design correctly."
        },
        {
          q: "Why involve developers early?",
          opts: ["To surface technical constraints and improve feasibility", "To avoid all testing", "To replace designers", "To reduce documentation to zero"],
          a: 0,
          e: "Early collaboration prevents late surprises and rework."
        },
        {
          q: "What happens after launch in a mature design process?",
          opts: ["Continuous improvement using analytics and feedback", "All design work stops", "Research is no longer needed", "The product is frozen permanently"],
          a: 0,
          e: "Launch provides evidence for further iteration and improvement."
        }
      ]
    }
  ]
});
