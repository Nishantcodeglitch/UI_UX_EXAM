/* Unit 1 — Foundations of UI Design
   Source: unit1.txt (UI-UX_UNIT 1.pptx, UNIT 1 Foundations of UID - Common PPT.pptx,
   UI-UX_UNIT 1_NEP - SDCCE - Complete.pdf)
   Each chapter = short study chunks + key terms + a chapter quiz. */

window.UNITS = window.UNITS || [];
window.UNITS.push({
  id: "unit1",
  number: 1,
  title: "Foundations of UI Design",
  tagline: "Interfaces, elements, visual principles, process and interaction",
  intro:
    "Start here. Unit 1 builds the vocabulary of interface design: what UI and UX really mean, who does what, the formal and active elements of an interface, how those elements are composed, the six-step UI process, visual design principles, reusable patterns and interaction behaviour.",
  outcome:
    "By the end you should be able to tell UI from UX, identify interface elements and patterns, apply composition and visual principles, and explain how an interface moves from sketch to prototype.",
  chapters: [
    {
      id: "u1c1",
      number: "01",
      title: "What Is User Interface Design?",
      subtitle: "Definition, importance, types and where UI shows up",
      minutes: 10,
      summary:
        "UI design is the craft of the visual and interactive surface of a product. It covers what users see, how it responds, and whether the result feels clear, consistent and usable.",
      objectives: [
        "Define user interface design and explain its scope",
        "Give reasons why UI design matters to a product",
        "Name the three common types of UI",
        "Recognise UI in apps, websites, devices and services"
      ],
      chunks: [
        {
          title: "The definition",
          points: [
            "UI design is the process of creating interfaces for software or computerised devices with a focus on looks and style.",
            "It covers the visual and interactive elements a user meets: buttons, icons, typography, colour schemes, layouts and spacing.",
            "The interface is the point of human-computer interaction on an app, a web page or a device.",
            "A useful test is the Submit button: its colour, size, placement and response when clicked are all UI decisions.",
            "UI is usually associated with graphical interfaces, but the term also includes voice and gesture interfaces."
          ]
        },
        {
          title: "Why UI design matters",
          points: [
            "User experience: a well-designed UI helps people navigate easily and finish tasks with a positive feeling.",
            "Engagement: a clear, attractive interface encourages users to stay longer and return more often.",
            "Branding: colour, type and visual style communicate the product's personality and make a brand recognisable.",
            "Efficiency: good UI reduces the time and effort needed to complete a task, improving satisfaction.",
            "Business impact: design builds user trust and supports growth because users stay, explore and come back."
          ]
        },
        {
          title: "How UI design works",
          points: [
            "Choose the right colours, fonts and layout for the product and its audience.",
            "Create buttons, forms, icons and other controls with clear intent.",
            "Keep everything visually consistent and accessible.",
            "Work closely with UX designers so the visual layer supports the user journey.",
            "Common tools include Figma, Adobe XD and Sketch."
          ]
        },
        {
          title: "Three common types of UI",
          points: [
            "Graphical user interface (GUI): interaction through visual representations such as icons, menus and windows. Examples: Windows, macOS, iOS, Android, web browsers.",
            "Voice user interface (VUI): interaction through spoken language. Examples: Amazon Alexa, Apple Siri, Google Assistant, Microsoft Cortana.",
            "Gesture-based interface: interaction through movements and gestures. Examples: Microsoft Kinect, Leap Motion, palm gestures on a Samsung phone."
          ]
        },
        {
          title: "Where UI is used",
          points: [
            "Apps such as Instagram and Paytm, and websites such as Netflix and Myntra.",
            "Smart devices such as ATMs and smartwatches.",
            "Cars, TV menus and gaming consoles.",
            "The interface changes with the context, but the goal is the same: make interaction clear and pleasant."
          ]
        }
      ],
      terms: [
        { t: "User Interface (UI)", d: "The visual and interactive surface through which a person interacts with a digital product." },
        { t: "GUI", d: "Graphical user interface; interaction through visual elements such as windows, icons and menus." },
        { t: "VUI", d: "Voice user interface; interaction through spoken commands and responses." },
        { t: "Gesture-based UI", d: "An interface controlled through body or hand movements, such as Kinect or palm gestures." }
      ],
      quiz: [
        {
          q: "What does UI design primarily focus on?",
          opts: ["The visual and interactive elements of a product", "The company's pricing strategy", "The database schema", "The team's development process"],
          a: 0,
          e: "UI design focuses on the look, feel and interactivity of the interface: what users see and how they interact with it."
        },
        {
          q: "Which statement best describes the scope of UI design?",
          opts: ["Only the colours used in a logo", "Buttons, icons, typography, colour schemes and layouts", "Only the code that powers an app", "Only the research interviews with users"],
          a: 1,
          e: "UI includes the visual and interactive building blocks such as buttons, icons, typography, colour and layout."
        },
        {
          q: "Which of these is a voice user interface?",
          opts: ["Windows operating system", "Amazon Alexa", "Microsoft Kinect", "A web browser"],
          a: 1,
          e: "Alexa is a VUI. Windows and browsers are GUIs; Kinect is commonly cited as a gesture-based interface."
        },
        {
          q: "A good UI can support branding mainly because it...",
          opts: ["Hides the product's personality", "Communicates the product's personality and makes the brand recognisable", "Removes the need for any content", "Guarantees lower development cost"],
          a: 1,
          e: "Colour, type, imagery and consistent styling communicate a brand's personality and help users recognise it."
        },
        {
          q: "Which set contains common UI design tools named in the notes?",
          opts: ["Figma, Adobe XD and Sketch", "Excel, Word and PowerPoint", "Git, Docker and Jenkins", "Figma, Photoshop and Blender"],
          a: 0,
          e: "The notes name Figma, Adobe XD and Sketch as common UI design tools."
        },
        {
          q: "Which is an example of gesture-based interaction?",
          opts: ["Typing a password", "Palm gesture to take a photo on a Samsung phone", "Listening to a voice assistant", "Clicking a hyperlink"],
          a: 1,
          e: "Gesture-based interfaces interpret movements; the palm gesture is used as the example in the notes."
        },
        {
          q: "Why does efficient UI design matter?",
          opts: ["It increases the number of steps in every task", "It reduces the time and effort needed to complete tasks", "It replaces the need for user research", "It makes accessibility optional"],
          a: 1,
          e: "Efficiency means users spend less time and effort, which raises satisfaction."
        },
        {
          q: "The 'point of human-computer interaction' is a description of...",
          opts: ["The user interface", "The server", "The business model", "The marketing funnel"],
          a: 0,
          e: "The interface is the meeting point where a person and a computer system interact."
        }
      ]
    },
    {
      id: "u1c2",
      number: "02",
      title: "UX and the UI–UX Relationship",
      subtitle: "The overall experience, plus how UI and UX depend on each other",
      minutes: 12,
      summary:
        "UX is the whole experience of using a product: intuitive, efficient and satisfying from start to finish. UI is the visible, interactive part of that experience, which is why the two are described as two sides of the same coin.",
      objectives: [
        "Define UX and UX design in your own words",
        "Explain why UX is important and where it is used",
        "Describe UI as a subset of UX",
        "Use the restaurant and e-commerce examples to explain the relationship"
      ],
      chunks: [
        {
          title: "What UX means",
          points: [
            "UX encompasses the overall experience a user has while interacting with a product.",
            "It asks how intuitive, efficient and satisfying the interaction feels, during and after use.",
            "UX focuses on the entire user journey, not just the visuals.",
            "UX design creates products and services that are easy, effective and enjoyable to use.",
            "UX designers study needs, behaviours, pain points and emotions. Example: making a form simple, logical and frustration-free from start to finish."
          ]
        },
        {
          title: "Why UX matters",
          points: [
            "Users leave when a product is confusing, slow or frustrating.",
            "Good UX keeps users engaged and builds trust.",
            "It increases sales or conversions and helps the product stand out.",
            "UX applies to apps and websites (Swiggy, Netflix, Amazon), digital products, physical products such as smartwatches and ATMs, and services such as booking a cab or checking in at an airport."
          ]
        },
        {
          title: "UI is part of UX",
          points: [
            "UI is a subset of UX: a great experience depends on a well-designed interface, but UX goes beyond visuals.",
            "UX includes the whole interaction flow, from navigation to task completion.",
            "A visually stunning UI with confusing navigation still produces a poor UX.",
            "The relationship is complementary: UI makes interactions visually appealing and intuitive; UX research tells UI designers what users need.",
            "Example: research might show that users need larger buttons for accessibility; the UI designer then applies that insight."
          ]
        },
        {
          title: "Interdependence and iteration",
          points: [
            "A great UX with a poor UI can frustrate users; a beautiful UI with a poor UX can confuse them.",
            "A well-thought-out flow can be undermined by a cluttered interface, and a polished screen cannot rescue a broken flow.",
            "UI and UX designers iterate together using user feedback.",
            "UX designers map journeys with wireframes and prototypes; UI designers bring those wireframes to life visually.",
            "Example: UX reduces checkout steps to cut drop-off; UI creates a clean layout for the simplified checkout."
          ]
        },
        {
          title: "Two useful explanations",
          points: [
            "Restaurant analogy: UI is the plated food, table setting and menu design. UX is the whole dining experience, including menu readability, waiting time, comfort and how satisfied you feel when leaving.",
            "E-commerce example: UX research makes browsing, cart and checkout smooth, with guest checkout and clear errors. UI makes the product page attractive with strong images, a prominent Add to Cart button and consistent brand colours.",
            "UI without UX leads to frustration and abandonment.",
            "UX without UI can feel unpolished and unprofessional, reducing trust.",
            "When both work together the product is functional, easy and visually delightful."
          ]
        }
      ],
      terms: [
        { t: "User Experience (UX)", d: "The overall quality of a person's experience while interacting with a product, across the whole journey." },
        { t: "User-centred design", d: "A process that starts from users' needs, behaviours and pain points rather than from the designer's assumptions." },
        { t: "Subset", d: "A smaller part contained within a larger whole; UI is a subset of UX." },
        { t: "Iterative collaboration", d: "UX and UI designers repeatedly refine the product together using feedback." }
      ],
      quiz: [
        {
          q: "UX is best described as...",
          opts: ["The overall experience a user has across the whole journey", "Only the colours and fonts on a screen", "The speed of the database", "The number of features shipped"],
          a: 0,
          e: "UX covers the complete experience, including emotions, efficiency and satisfaction, not just visuals."
        },
        {
          q: "How does UI relate to UX?",
          opts: ["UI is a subset of UX", "UX is a subset of UI", "They are unrelated fields", "UI replaces UX once the visuals are finished"],
          a: 0,
          e: "UI is the interactive visual layer inside the larger UX journey."
        },
        {
          q: "In the restaurant analogy, which part represents UX?",
          opts: ["The colour of the menu", "The plating of the food", "The entire dining experience, from menu readability to how satisfied you feel", "The table cloth pattern"],
          a: 2,
          e: "The whole dining experience maps to UX; the presentation and table setting map to UI."
        },
        {
          q: "A visually stunning app with confusing navigation has...",
          opts: ["Great UI and great UX", "Good-looking UI but poor UX", "Poor UI and poor UX", "No interface at all"],
          a: 1,
          e: "Visual polish does not fix a broken flow; the experience is still poor."
        },
        {
          q: "Which is the best example of UX work?",
          opts: ["Choosing a brand hex colour", "Researching users so checkout can be reduced to fewer steps", "Exporting an icon at 2x", "Selecting a serif font for headings"],
          a: 1,
          e: "UX work shapes the journey and removes friction; the other options are visual/UI decisions."
        },
        {
          q: "What happens when UX is strong but the UI is poor?",
          opts: ["Users never notice", "The good journey can still feel unpolished and reduce trust", "The product automatically becomes accessible", "The interface becomes faster"],
          a: 1,
          e: "A strong flow with weak visual design feels unfinished and can lower trust."
        },
        {
          q: "UX research might influence UI design by showing that...",
          opts: ["Users need larger buttons for accessibility", "Servers need more memory", "The logo should be removed", "The company should stop selling online"],
          a: 0,
          e: "Research insights guide UI decisions such as button size, contrast and layout."
        },
        {
          q: "Which statement captures 'why both matter'?",
          opts: ["UI alone is enough if it looks good", "UX alone is enough if the flow is logical", "A successful product needs both a functional journey and a polished interface", "Only branding matters to users"],
          a: 2,
          e: "The ideal balance combines usability and visual quality, increasing satisfaction and loyalty."
        }
      ]
    },
    {
      id: "u1c3",
      number: "03",
      title: "Roles in UI/UX",
      subtitle: "Nine specialists and what each one owns",
      minutes: 8,
      summary:
        "UI/UX is a team sport. The notes describe nine roles, each with distinct responsibilities and skills that overlap during a real project.",
      objectives: [
        "Match each UI/UX role to its main responsibility",
        "Distinguish UX designer, UI designer and interaction designer",
        "Recognise the skills associated with research, writing, architecture and development"
      ],
      chunks: [
        {
          title: "Experience and interface roles",
          points: [
            "UX Designer: owns the overall feel and logical flow; conducts user research; skills include research, wireframing, prototyping, testing and information architecture.",
            "UI Designer: owns look and feel and brand consistency; creates graphical elements; skills include graphic design, typography, colour theory and prototyping.",
            "Interaction Designer: designs interaction logic and behaviour so interactions feel intuitive and efficient; skills include animation, user flows and scenario development."
          ]
        },
        {
          title: "Research and structure roles",
          points: [
            "UX Researcher: studies behaviours, needs and motivations using interviews, surveys, usability tests and observation; skills include qualitative and quantitative methods, personas and contextual inquiry.",
            "Information Architect: organises and structures content; produces site maps, wireframes and information hierarchies; skills include taxonomy and content strategy.",
            "UX Writer: crafts microcopy such as button text, error messages and onboarding instructions; keeps language clear and aligned with brand voice."
          ]
        },
        {
          title: "Visual, build and product roles",
          points: [
            "Visual Designer: focuses on icons, images and fonts to create a cohesive visual identity.",
            "Front-End Developer: turns designs into responsive, performant code using HTML, CSS, JavaScript and frameworks such as React or Angular.",
            "Product Designer: overlaps UX and UI, takes ownership from conception to final product, and works closely with product managers and developers."
          ]
        }
      ],
      terms: [
        { t: "Microcopy", d: "Small pieces of interface text such as button labels, error messages and hints." },
        { t: "Information architecture", d: "The structure and organisation of content so users can find and navigate it." },
        { t: "Taxonomy", d: "A system for naming and grouping content into categories." },
        { t: "Front-end developer", d: "The person who implements the interface in code and makes it responsive and performant." }
      ],
      quiz: [
        {
          q: "Who is mainly responsible for the overall feel of a product and its logical flow?",
          opts: ["UX Designer", "Visual Designer", "UX Writer", "Front-End Developer"],
          a: 0,
          e: "The UX designer focuses on the overall feel, user research and ensuring the product flows logically."
        },
        {
          q: "Who writes button labels, error messages and onboarding instructions?",
          opts: ["Information Architect", "UX Writer", "Interaction Designer", "Product Designer"],
          a: 1,
          e: "UX writers craft microcopy and keep it clear and consistent with brand voice."
        },
        {
          q: "Site maps, wireframes and information hierarchies are the main output of...",
          opts: ["The UX Researcher", "The Information Architect", "The Visual Designer", "The Front-End Developer"],
          a: 1,
          e: "The information architect organises content and produces structures such as site maps and hierarchies."
        },
        {
          q: "Which role turns designs into responsive, performant code?",
          opts: ["UI Designer", "UX Researcher", "Front-End Developer", "UX Writer"],
          a: 2,
          e: "Front-end developers implement the interface using HTML, CSS, JavaScript and frameworks."
        },
        {
          q: "Who takes ownership of the entire design process and overlaps UX and UI?",
          opts: ["Product Designer", "Interaction Designer", "Visual Designer", "UX Researcher"],
          a: 0,
          e: "The product designer spans UX and UI and works from conception through to the final product."
        },
        {
          q: "Which role designs interaction logic and behaviour?",
          opts: ["UX Writer", "Information Architect", "Interaction Designer", "Front-End Developer"],
          a: 2,
          e: "Interaction designers focus on how users interact and how interface elements behave."
        },
        {
          q: "Who is most likely to run interviews, surveys and usability tests to understand behaviour?",
          opts: ["UX Researcher", "Visual Designer", "Front-End Developer", "Product Manager"],
          a: 0,
          e: "UX researchers gather insight about behaviours, needs and motivations using research methods."
        },
        {
          q: "Which skill set belongs most directly to a Visual Designer?",
          opts: ["Typography, colour theory, iconography and branding", "Server deployment and database tuning", "Qualitative coding and survey statistics", "Taxonomy development and content strategy"],
          a: 0,
          e: "Visual designers work with icons, images, fonts, branding, typography and colour."
        }
      ]
    },
    {
      id: "u1c4",
      number: "04",
      title: "Formal Elements of Interface Design",
      subtitle: "The static visual and structural building blocks",
      minutes: 10,
      summary:
        "Formal elements are the visual and structural components of an interface. They shape appearance, layout, readability and harmony before a user ever clicks.",
      objectives: [
        "Explain what makes an element 'formal'",
        "Describe layout, typography, colour, imagery and motion decisions",
        "Apply basic guidelines for grid, hierarchy, whitespace and legibility"
      ],
      chunks: [
        {
          title: "Layout and structure",
          points: [
            "Grid system: aligns content uniformly and brings balance to the composition.",
            "Visual hierarchy: arranges elements so attention goes to the right places, using size, colour and placement.",
            "White space (negative space): the empty space between elements; improves readability, balances the screen and prevents crowding."
          ]
        },
        {
          title: "Typography",
          points: [
            "Font selection expresses brand personality; sans-serif fonts are often used for screen clarity.",
            "Hierarchy and styles: different sizes, weights and styles separate headings, subheadings and body text.",
            "Consistency in type builds brand identity and makes the interface feel intuitive.",
            "Legibility and spacing: line, letter and paragraph spacing directly affect readability on every device."
          ]
        },
        {
          title: "Colour",
          points: [
            "A colour palette influences emotion and perception; it should fit the brand, be accessible and be usable.",
            "Colour provides visual feedback: a button changing colour on hover or red text for an error.",
            "Functional colour cues help users interpret state quickly and consistently."
          ]
        },
        {
          title: "Imagery and iconography",
          points: [
            "Relevant images and illustrations enhance the interface and support the content's context.",
            "Icons communicate actions or categories visually; clear icons improve usability.",
            "Consistency of style, size and alignment helps users recognise patterns and navigate."
          ]
        },
        {
          title: "Interactive elements, motion and animation",
          points: [
            "Buttons and controls should be recognisable and clearly communicate their intent, with touch-friendly sizing.",
            "Forms need intuitive layout, good labels and descriptive error messages, and must be accessible.",
            "Navigation elements such as menus and breadcrumbs should be structured and easy to find.",
            "Transitions give continuity between states and direct attention to what changed.",
            "Microinteractions are small animations tied to a specific action, such as a button click, and provide immediate feedback."
          ]
        }
      ],
      terms: [
        { t: "Formal elements", d: "The static, visual and structural components of an interface that shape look and feel." },
        { t: "Grid system", d: "An invisible alignment structure that organises content uniformly across a layout." },
        { t: "White space", d: "Also called negative space; the empty area that separates, balances and highlights elements." },
        { t: "Microinteraction", d: "A small animation or response tied to one action, giving immediate feedback." }
      ],
      quiz: [
        {
          q: "Formal elements of interface design are best described as...",
          opts: ["Interactive controls that respond to clicks", "Static visual and structural components", "Only the site's navigation menu", "The research plan"],
          a: 1,
          e: "Formal elements are the visual/structural building blocks; active elements are the interactive ones."
        },
        {
          q: "What is the main purpose of a grid system?",
          opts: ["To align content uniformly and create balance", "To make every page look identical", "To replace typography", "To increase the number of colours"],
          a: 0,
          e: "A grid provides invisible structure and consistent alignment across a layout."
        },
        {
          q: "White space in UI design is...",
          opts: ["Wasted space that should always be removed", "Negative space used to improve readability and balance", "Only the background colour white", "A type of navigation"],
          a: 1,
          e: "White or negative space separates elements, reduces clutter and improves readability."
        },
        {
          q: "Which typography choice is recommended for on-screen clarity?",
          opts: ["Sans-serif fonts", "Only decorative scripts", "All caps for body text", "As many font families as possible"],
          a: 0,
          e: "The notes note that digital interfaces generally benefit from sans-serif fonts for viewing clarity."
        },
        {
          q: "A button changing colour on hover is an example of...",
          opts: ["Colour used for visual feedback", "Information architecture", "A grid system", "White space"],
          a: 0,
          e: "Colour can signal that an action is available or has been recognised."
        },
        {
          q: "Why should icon style, size and alignment be consistent?",
          opts: ["It increases user familiarity and supports navigation", "It makes icons harder to recognise", "It removes the need for labels", "It guarantees accessibility"],
          a: 0,
          e: "Consistent visual treatment helps users recognise icons and move through the interface."
        },
        {
          q: "Microinteractions are valuable because they...",
          opts: ["Provide immediate feedback for a specific action", "Replace the need for navigation", "Make the product slower", "Are only used on desktop"],
          a: 0,
          e: "Microinteractions acknowledge actions and make the interface feel responsive."
        },
        {
          q: "Which is a formal-element concern for forms?",
          opts: ["Good labels and clear descriptive error messages", "Choosing the server provider", "Writing the database schema", "Setting the marketing budget"],
          a: 0,
          e: "Form layout, labels and errors are interface design concerns, and forms must be accessible."
        }
      ]
    },
    {
      id: "u1c5",
      number: "05",
      title: "Active Elements of Interface Design",
      subtitle: "The controls users click, type, swipe and choose",
      minutes: 10,
      summary:
        "Active elements are interactive components: the parts of an interface that respond to user actions such as clicks, taps, scrolls and input.",
      objectives: [
        "Explain what makes an element active",
        "Identify buttons, links, inputs, navigation, modals and tabs",
        "Choose the right input control for a task",
        "Distinguish tooltips, dropdowns, carousels and interactive charts"
      ],
      chunks: [
        {
          title: "Actions and navigation",
          points: [
            "Buttons trigger actions. Primary buttons highlight the main action; secondary buttons offer less prominent actions; icon buttons use an icon instead of text.",
            "Links move users to another page or section. Text links are usually underlined or coloured; button links look like buttons but behave as links.",
            "Menus and navigation bars move users through sections. Horizontal navigation usually sits at the top; vertical navigation usually sits on the side.",
            "Dropdown menus expand to reveal sub-options."
          ]
        },
        {
          title: "Forms and inputs",
          points: [
            "Text fields collect names, addresses or other typed information.",
            "Checkboxes allow one or more selections.",
            "Radio buttons allow exactly one selection from a set.",
            "Dropdown menus are space-efficient selectors; sliders adjust a value within a range."
          ]
        },
        {
          title: "Overlays and organisation",
          points: [
            "Modals and dialogs are pop-ups that require interaction before returning to the main interface: confirmation dialogs, form modals and informational modals.",
            "Tabs organise content into sections that switch without leaving the page; tabs can be horizontal or vertical.",
            "Tooltips show additional information on hover.",
            "Carousels and sliders show multiple pieces of content in the same space, often images or featured content."
          ]
        },
        {
          title: "Selection and data",
          points: [
            "Dropdowns and select menus choose from a list; single-select allows one option, multi-select allows several.",
            "Interactive graphics and charts let users explore data visually.",
            "Clickable charts reveal details on data points; hover information appears when the pointer rests on an element.",
            "Active elements enable navigation, data input and interaction, so they are central to a functional experience."
          ]
        }
      ],
      terms: [
        { t: "Active elements", d: "Interactive components that respond to user actions such as clicks, taps, scrolls or input." },
        { t: "Primary button", d: "The most prominent action on a screen, visually emphasised over secondary actions." },
        { t: "Modal", d: "A focused overlay that interrupts the main interface until the user responds or dismisses it." },
        { t: "Tooltip", d: "A small informative pop-up shown on hover or focus." }
      ],
      quiz: [
        {
          q: "Which of these is an active element?",
          opts: ["A decorative background image", "An Add to Cart button", "A brand colour palette", "A paragraph of static text"],
          a: 1,
          e: "Active elements are interactive; a button responds to clicks or taps."
        },
        {
          q: "Which control should be used when a user may select more than one option?",
          opts: ["Radio button", "Checkbox", "Single-select dropdown", "A heading"],
          a: 1,
          e: "Checkboxes support multiple selections; radio buttons support a single choice."
        },
        {
          q: "A primary button is...",
          opts: ["The most prominent action on the screen", "Always the smallest control", "A button that cannot be clicked", "Only used for navigation menus"],
          a: 0,
          e: "Primary buttons highlight the main action, while secondary actions carry less visual weight."
        },
        {
          q: "What distinguishes a modal from a normal page section?",
          opts: ["It requires user interaction before returning to the main interface", "It can only display images", "It is always at the bottom of the page", "It replaces navigation entirely"],
          a: 0,
          e: "Modals are focused overlays and typically interrupt the workflow until dismissed."
        },
        {
          q: "Which element shows extra information when the user hovers over something?",
          opts: ["Tooltip", "Carousel", "Checkbox", "Breadcrumb"],
          a: 0,
          e: "Tooltips provide additional context on hover or focus."
        },
        {
          q: "What is the main use of tabs?",
          opts: ["To switch between content sections without leaving the page", "To submit a payment", "To enter a date", "To show a temporary error"],
          a: 0,
          e: "Tabs organise related content into switchable sections on the same page."
        },
        {
          q: "Which control is best for adjusting a value within a range, such as volume?",
          opts: ["Slider", "Radio button", "Text field", "Modal"],
          a: 0,
          e: "A slider is designed for selecting a value along a continuous range."
        },
        {
          q: "A multi-select dropdown allows the user to...",
          opts: ["Choose multiple options from a list", "Choose only one option", "Type an unlimited essay", "Open a new browser tab"],
          a: 0,
          e: "Single-select permits one option; multi-select permits several."
        },
        {
          q: "Carousels are useful because they...",
          opts: ["Display multiple pieces of content in the same space", "Replace all navigation", "Increase page weight with no benefit", "Are required for accessibility"],
          a: 0,
          e: "Carousels rotate or slide featured content within a limited area."
        },
        {
          q: "Which is an example of an interactive chart behaviour?",
          opts: ["Clicking a data point to reveal details", "Reading a printed poster", "Using a paper map", "Listening to a podcast"],
          a: 0,
          e: "Interactive charts allow clicking or hovering to explore data."
        }
      ]
    },
    {
      id: "u1c6",
      number: "06",
      title: "Components, Elements and Composition",
      subtitle: "From single controls to a coherent screen",
      minutes: 10,
      summary:
        "Elements are the individual building blocks; components are reusable collections of those blocks. Composition is how all of them are arranged so the interface feels clear and natural.",
      objectives: [
        "Distinguish UI elements from UI components",
        "Name the four types of UI components",
        "Explain static and dynamic composition",
        "Apply composition thinking to common interface elements"
      ],
      chunks: [
        {
          title: "Elements versus components",
          points: [
            "UI elements are individual building blocks: a button, a text field or an icon.",
            "UI components are reusable collections of elements that work together: a navigation bar, a modal or a form.",
            "Components are higher-level constructs used across a product to maintain consistency and efficiency.",
            "Components are standardised for quick design and represent specific actions."
          ]
        },
        {
          title: "Types of UI components",
          points: [
            "Interactive components: buttons, sliders and input fields that let users act on the system.",
            "Structural components: containers such as cards and modals that organise content and give the interface shape.",
            "Informational components: tooltips, progress bars and notifications that provide feedback or information.",
            "Navigation components: menus, breadcrumbs and tabs that help users move through the product."
          ]
        },
        {
          title: "What composition means",
          points: [
            "Composition is the formation of a whole from parts; the parts must cooperate to convey meaning.",
            "Good composition helps users achieve goals quickly, feels natural and intuitive, and supports usability and emotional experience.",
            "Think of directing a scene: the actors (UI elements), their positions, timing and dialogue (interactions) must be choreographed to tell the right story.",
            "Two basic types are static composition and dynamic composition."
          ]
        },
        {
          title: "Static composition",
          points: [
            "Static composition is about steadiness, balance and calm.",
            "There is one key action, and the whole composition is built around it.",
            "It suits screens where the user should focus on a single decision or message.",
            "Too many competing actions destroy the calm and clarity of a static layout."
          ]
        },
        {
          title: "Dynamic composition",
          points: [
            "Dynamic composition is about movement and complexity.",
            "Important elements must be highlighted first, then secondary elements, following a clear hierarchy.",
            "Without hierarchy, the interface risks chaos and a negative experience.",
            "Dynamic screens often have multiple states or interactive regions that must still feel ordered."
          ]
        },
        {
          title: "Common elements to compose",
          points: [
            "Navigation: top bar, side menu, breadcrumbs. Keep it intuitive and visible.",
            "Text and typography: headings, paragraphs, labels. Use hierarchy, contrast and alignment.",
            "Input controls: buttons, text fields, toggles. Label clearly and space appropriately.",
            "Visual media: icons, images, illustrations. Use meaningfully, not as decoration.",
            "Containers: cards, modals, sections. Organise similar information into distinct blocks."
          ]
        }
      ],
      terms: [
        { t: "UI element", d: "An individual interface building block such as a button, icon or text field." },
        { t: "UI component", d: "A reusable collection of elements that functions together, such as a navigation bar or modal." },
        { t: "Composition", d: "The arrangement of parts into a coherent whole that communicates meaning." },
        { t: "Static composition", d: "A calm, balanced layout built around one key action." },
        { t: "Dynamic composition", d: "A layout with movement and multiple elements, ordered by clear hierarchy." }
      ],
      quiz: [
        {
          q: "What is the difference between a UI element and a UI component?",
          opts: ["An element is individual; a component is a reusable collection of elements", "A component is always smaller than an element", "They are exactly the same thing", "Elements are only used on mobile"],
          a: 0,
          e: "A button is an element; a navigation bar containing icons, buttons and text is a component."
        },
        {
          q: "Which is an example of a UI component?",
          opts: ["A single icon", "A navigation bar", "One pixel of colour", "A paragraph of body text"],
          a: 1,
          e: "A navigation bar combines multiple elements into a reusable component."
        },
        {
          q: "Which component type includes cards and modals?",
          opts: ["Interactive", "Structural", "Informational", "Navigation"],
          a: 1,
          e: "Structural components are containers that organise content and give the interface structure."
        },
        {
          q: "Tooltips, progress bars and notifications belong to which component type?",
          opts: ["Informational", "Interactive", "Structural", "Navigation"],
          a: 0,
          e: "Informational components provide feedback, status or additional information."
        },
        {
          q: "Static composition is best described as...",
          opts: ["A calm layout built around one key action", "A layout with many equal actions and no focus", "A page with no content", "Only animated interfaces"],
          a: 0,
          e: "Static composition is steady and balanced, with one central action."
        },
        {
          q: "What is the main risk in dynamic composition?",
          opts: ["Losing hierarchy and creating chaos", "Having too few elements to fill space", "Using any hierarchy at all", "Making the main action obvious"],
          a: 0,
          e: "Dynamic screens need clear priority; without hierarchy they become confusing."
        },
        {
          q: "According to the notes, navigation should be...",
          opts: ["Intuitive and visible", "Hidden on every screen", "Different on every page", "Only available to administrators"],
          a: 0,
          e: "Navigation should stay intuitive and visible so users can find their way."
        },
        {
          q: "Containers such as cards are useful because they...",
          opts: ["Organise similar information into distinct blocks", "Prevent any interaction", "Replace typography", "Guarantee brand recognition"],
          a: 0,
          e: "Containers group related content and make the layout easier to scan."
        }
      ]
    },
    {
      id: "u1c7",
      number: "07",
      title: "Principles of UI Composition",
      subtitle: "Hierarchy, consistency, alignment, proximity, balance, affordance, feedback and accessibility",
      minutes: 14,
      summary:
        "These principles are the rules of thumb for arranging an interface. They explain why some screens feel effortless and others feel like work.",
      objectives: [
        "Apply visual hierarchy techniques",
        "Recognise visual, functional and pattern consistency",
        "Use grids, proximity and balance to organise a layout",
        "Explain affordance, signifiers, feedback and accessibility"
      ],
      chunks: [
        {
          title: "Visual hierarchy",
          points: [
            "Organise content so users notice the most important elements first and the eye has a clear path.",
            "Size: larger elements draw more attention.",
            "Colour: accent colours highlight important elements.",
            "Contrast: high-contrast elements stand out.",
            "Spacing: white space directs focus. Typography: weights and sizes establish importance.",
            "In left-to-right cultures the eye often moves from largest to smallest, high to low contrast, and top-left to bottom-right."
          ]
        },
        {
          title: "Consistency",
          points: [
            "Visual consistency: keep colour schemes, typography and styles consistent; use the same accent colour for primary actions.",
            "Functional consistency: interactive elements behave predictably; all dropdowns open and close the same way.",
            "Pattern consistency: reuse patterns for similar functions to reduce cognitive load; keep validation patterns consistent.",
            "Consistency creates reliability and helps users learn the interface faster."
          ]
        },
        {
          title: "Alignment and grids",
          points: [
            "Alignment creates order and makes interfaces easier to scan.",
            "Use an 8pt or 4pt grid system for consistent spacing.",
            "Align text and elements to create clear visual lines.",
            "Keep margins and padding consistent, and use column grids for responsive layouts.",
            "Every element should have a clear relationship with its neighbours through alignment."
          ]
        },
        {
          title: "Proximity and grouping",
          points: [
            "Elements that are close together appear related; space suggests separation.",
            "Group related form fields and keep labels close to their inputs.",
            "Use card containers to group related content and distinct spacing between sections.",
            "Common mistakes: inconsistent spacing, unrelated items too close together, and too little white space between sections."
          ]
        },
        {
          title: "Balance",
          points: [
            "Symmetrical balance mirrors elements across a central axis, creating stability and formality.",
            "Asymmetrical balance uses different elements to create equilibrium; it feels more dynamic and modern.",
            "Radial balance radiates from a central point and draws attention inward.",
            "Visual weight is affected by size, colour intensity and contrast; a small bright element can balance a larger muted one."
          ]
        },
        {
          title: "Affordance and signifiers",
          points: [
            "Affordances communicate how a user can interact with an element; signifiers indicate what can be interacted with.",
            "Buttons should look pressable through shadows, gradients or borders.",
            "Interactive elements should change on hover to signal clickability.",
            "Switches, checkboxes and radio buttons should clearly show their current state.",
            "Use consistent styling for primary, secondary and tertiary actions."
          ]
        },
        {
          title: "Feedback",
          points: [
            "Visual feedback: colour changes, animations and progress indicators.",
            "Textual feedback: success messages, error notifications and tooltips.",
            "Interactive feedback: button state changes and form validation indicators.",
            "Effective feedback is immediate, noticeable, appropriate to the action's importance, consistent and clear about success or failure.",
            "Good feedback reduces anxiety by confirming that actions were registered and processed."
          ]
        },
        {
          title: "Accessibility",
          points: [
            "Use readable fonts at appropriate sizes; body text should generally be at least 16px.",
            "Do not rely on colour alone to convey information.",
            "Maintain at least a 4.5:1 contrast ratio for normal text and 3:1 for large text (WCAG AA).",
            "Ensure keyboard access with visible focus states and a logical tab order.",
            "Provide alt text for images, use semantic HTML and add ARIA labels where needed for complex interactions."
          ]
        }
      ],
      terms: [
        { t: "Visual hierarchy", d: "The arrangement of elements by importance so the eye follows an intended path." },
        { t: "Affordance", d: "A property that suggests how an object can be used." },
        { t: "Signifier", d: "A visible cue that indicates where or how an action can be performed." },
        { t: "WCAG AA", d: "An accessibility standard; for normal text it requires a 4.5:1 contrast ratio." },
        { t: "Proximity", d: "The principle that elements close together are perceived as related." }
      ],
      quiz: [
        {
          q: "Which technique does NOT help create visual hierarchy?",
          opts: ["Making important elements larger", "Using accent colours", "Giving every element identical weight", "Using strategic white space"],
          a: 2,
          e: "Hierarchy depends on difference; identical weight removes priority."
        },
        {
          q: "Using the same accent colour for all primary actions is an example of...",
          opts: ["Visual consistency", "Radial balance", "Progressive disclosure", "Lazy registration"],
          a: 0,
          e: "Repeating visual treatment for the same kind of action is visual consistency."
        },
        {
          q: "An 8pt or 4pt grid is recommended mainly to...",
          opts: ["Keep spacing consistent", "Increase the number of fonts", "Make touch targets smaller", "Avoid responsive design"],
          a: 0,
          e: "Spacing systems based on 4 or 8 points create consistent rhythm and alignment."
        },
        {
          q: "Which layout mistake weakens proximity?",
          opts: ["Keeping labels close to inputs", "Grouping related fields", "Placing unrelated items too close together", "Using cards for related content"],
          a: 2,
          e: "Proximity implies relationship; unrelated items placed together mislead users."
        },
        {
          q: "Which type of balance radiates from a central point?",
          opts: ["Symmetrical", "Asymmetrical", "Radial", "Linear"],
          a: 2,
          e: "Radial balance organises elements around a centre and draws attention inward."
        },
        {
          q: "What is the difference between an affordance and a signifier?",
          opts: ["Affordance suggests how to interact; a signifier indicates that interaction is possible", "They are synonyms in every context", "A signifier is only used in voice UI", "Affordance is only about colour"],
          a: 0,
          e: "Affordance is about possible action; signifiers are the visible cues that communicate it."
        },
        {
          q: "Which feedback is described as textual?",
          opts: ["A success message or error notification", "A button changing colour", "A progress bar animation", "A hover shadow"],
          a: 0,
          e: "Textual feedback uses words, such as success messages, errors and tooltips."
        },
        {
          q: "WCAG AA requires a contrast ratio of at least...",
          opts: ["1:1 for all text", "3:1 for normal text and 4.5:1 for large text", "4.5:1 for normal text and 3:1 for large text", "10:1 for every element"],
          a: 2,
          e: "The notes state 4.5:1 for normal text and 3:1 for large text."
        },
        {
          q: "Which is an accessibility best practice?",
          opts: ["Using colour alone to show errors", "Removing focus outlines", "Ensuring a logical tab order and visible focus states", "Using the smallest possible body text"],
          a: 2,
          e: "Keyboard access with visible focus and logical order is essential for accessibility."
        }
      ]
    },
    {
      id: "u1c8",
      number: "08",
      title: "The UI Design Process",
      subtitle: "Six steps from rough sketch to clickable prototype",
      minutes: 12,
      summary:
        "The notes describe a six-step UI process: concept sketching, wireframing, templatization, creating flows, high-fidelity mockups and prototyping. Each step adds fidelity without losing sight of the user.",
      objectives: [
        "List the six steps in order",
        "Explain the purpose and benefits of each step",
        "Distinguish wireframes, mockups and prototypes",
        "Describe what happens before developer handoff"
      ],
      chunks: [
        {
          title: "Step 1 — Concept sketching",
          points: [
            "Start with rough sketches, rough screen flows and initial ideas, without pixel perfection.",
            "The goal is to get high-level ideas out quickly and explore the concept before committing.",
            "Sketches are flexible and cheap to change, so iteration does not damage time or cost.",
            "Benefits: idea generation, screen visualisation, team collaboration, requirement clarification, a user-centric start and efficient iteration."
          ]
        },
        {
          title: "Step 2 — Wireframing",
          points: [
            "Give shape to the rough ideas by adding text, sample images and dummy content such as Lorem ipsum.",
            "Create more structured layouts and define the basic interface elements.",
            "Focus on functionality and structure rather than visual polish.",
            "Wireframes are the blueprint that helps stakeholders see the structure before detailed design work.",
            "Benefits: idea refinement, layout visualisation, cost efficiency, stakeholder presentation and component evaluation."
          ]
        },
        {
          title: "Step 3 — Templatization",
          points: [
            "Create reusable components for repeated atomic elements such as buttons.",
            "Build CTAs and their states: normal, hover, pressed and disabled.",
            "Create structured elements such as tables, numbered lists and bulleted lists.",
            "Develop cards, menus, forms and navigation drawers as reusable patterns.",
            "Benefits: consistency, layout testing, realistic usability testing, earlier issue discovery, better cross-functional collaboration and responsive evaluation."
          ]
        },
        {
          title: "Step 4 — Creating flows",
          points: [
            "Create user flows and task flows that map the journey and connect wireframes into sequences.",
            "Match the user's mental model with the product's conceptual model.",
            "Define paths containing touchpoints and sub-tasks.",
            "Ask: Which screens will the user interact with? What happens on a click? Where do they land after an action?",
            "Shoe-purchase example: product or wishlist page → checkout → payment → order confirmation."
          ]
        },
        {
          title: "Step 5 — High-fidelity mockups",
          points: [
            "Create pixel-perfect representations that closely resemble the final product.",
            "Add final copy, graphics, icons and images, and finalise colours, fonts and aesthetics.",
            "Incorporate stakeholder feedback and use the mockups for usability testing.",
            "Mockups act as the visual blueprint for developers.",
            "Benefits: design consistency, brand representation, aesthetic showcase, stakeholder approval and detailed feedback."
          ]
        },
        {
          title: "Step 6 — Prototyping",
          points: [
            "Connect screens with interactions, transitions and animations to create a no-code final version.",
            "The prototype simulates the product and lets teams test both designer and developer perspectives.",
            "Example: buttons act as target points that take the user to another screen.",
            "The prototype is tested, approved and then handed to developers for implementation.",
            "Benefits include catching issues before development, cross-functional sign-off and checking final behaviour; the notes cite 80% of design issues found early, 60% development-time reduction and 90% better stakeholder understanding."
          ]
        }
      ],
      terms: [
        { t: "Wireframe", d: "A low-fidelity structural blueprint of a screen, focused on layout and function rather than visual polish." },
        { t: "Templatization", d: "Turning repeated interface parts into reusable, consistent components." },
        { t: "High-fidelity mockup", d: "A pixel-perfect static representation of the final interface." },
        { t: "Prototype", d: "An interactive simulation connecting screens and interactions before development." },
        { t: "Task flow", d: "The sequence of screens and actions a user follows to complete one task." }
      ],
      quiz: [
        {
          q: "What is the correct order of the six UI design steps?",
          opts: [
            "Sketching → wireframing → templatization → flows → high-fidelity mockups → prototyping",
            "Wireframing → sketching → prototyping → flows → mockups → templatization",
            "Flows → sketching → mockups → wireframing → templatization → prototyping",
            "Prototyping → mockups → flows → templatization → wireframing → sketching"
          ],
          a: 0,
          e: "The notes present the process in this order, moving from rough ideas to a clickable prototype."
        },
        {
          q: "Concept sketching is valuable mainly because it...",
          opts: ["Produces pixel-perfect final screens", "Gets ideas out quickly with maximum flexibility for change", "Replaces user research", "Requires expensive software"],
          a: 1,
          e: "Rough sketches are fast and cheap to change, so exploration stays flexible."
        },
        {
          q: "Wireframes focus primarily on...",
          opts: ["Final colours and imagery", "Structure, layout and functionality", "Animation timing", "Server performance"],
          a: 1,
          e: "Wireframes define structure and function, deliberately avoiding detailed visual styling."
        },
        {
          q: "Which CTA states are named in templatization?",
          opts: ["Normal, hover, pressed and disabled", "Loading, error, success and archived", "Draft, review, approved and shipped", "Public, private, shared and deleted"],
          a: 0,
          e: "Buttons and other CTAs should be designed in normal, hover, pressed and disabled states."
        },
        {
          q: "The purpose of creating flows is to...",
          opts: ["Map how users move through screens to complete tasks", "Choose the brand typeface", "Write the final marketing copy", "Test server load"],
          a: 0,
          e: "Flows connect screens, actions and decision points into a journey."
        },
        {
          q: "Which stage produces a pixel-perfect visual blueprint for developers?",
          opts: ["Concept sketching", "Wireframing", "High-fidelity mockups", "Templatization"],
          a: 2,
          e: "High-fidelity mockups finalise visuals and closely resemble the shipped product."
        },
        {
          q: "A prototype differs from a mockup because it...",
          opts: ["Adds interactive connections and transitions between screens", "Has no visual design at all", "Cannot be tested with users", "Is only a written document"],
          a: 0,
          e: "Prototypes simulate the product by linking screens and interactions."
        },
        {
          q: "What happens once a prototype is tested and approved?",
          opts: ["The design is handed to developers for implementation", "The team starts concept sketching again", "All research is discarded", "The product is automatically launched"],
          a: 0,
          e: "Approval is the green flag for development handoff."
        },
        {
          q: "Which is a stated benefit of prototyping?",
          opts: ["It removes the need to test", "It helps identify design issues before development", "It guarantees zero development time", "It makes research unnecessary"],
          a: 1,
          e: "Prototyping catches issues early, reducing costly changes later."
        }
      ]
    },
    {
      id: "u1c9",
      number: "09",
      title: "Visual Design Principles",
      subtitle: "Scale, hierarchy, balance, contrast, Gestalt, dominance and colour",
      minutes: 12,
      summary:
        "Visual principles explain how line, shape, colour, grid and space work together. They make an interface both attractive and understandable, and they connect directly to accessibility.",
      objectives: [
        "Apply scale, hierarchy and contrast",
        "Name the three types of balance",
        "Recognise Gestalt principles in an interface",
        "Explain dominance, colour roles and the seven universal design principles"
      ],
      chunks: [
        {
          title: "Scale and visual hierarchy",
          points: [
            "Scale uses relative size to communicate importance; important elements are larger and more noticeable.",
            "An effective design typically uses up to three different sizes to create variety and hierarchy.",
            "Visual hierarchy guides the eye to important elements first using size, colour, spacing and placement.",
            "Different font sizes create text hierarchy; bright colours highlight important items and muted colours de-emphasise secondary ones.",
            "A clear title → subtitle → body hierarchy helps users understand content importance immediately."
          ]
        },
        {
          title: "Balance and contrast",
          points: [
            "Balance arranges elements to create pleasing proportions and even distribution of visual weight.",
            "Symmetrical balance feels formal and stable; asymmetrical balance creates movement and energy; radial balance focuses attention on the centre.",
            "Contrast highlights differences using colour, size, shape or texture.",
            "Bright colours against muted backgrounds create emphasis; size contrast directs attention.",
            "Contrast is essential for accessibility and readability; check colour contrast rather than relying on appearance."
          ]
        },
        {
          title: "Gestalt principles",
          points: [
            "Gestalt explains how humans perceive complex images as complete pictures rather than separate elements.",
            "Similarity: similar elements are perceived as part of the same group.",
            "Continuation: the eye follows a path, line or curve.",
            "Closure: the mind fills in missing information to complete a form.",
            "Proximity: elements close together are perceived as related.",
            "Figure/ground: objects are seen as focus (figure) or background (ground).",
            "Symmetry and order: balanced elements are easier to process."
          ]
        },
        {
          title: "Dominance and colour",
          points: [
            "Dominance directs attention to a single focal element and establishes hierarchy.",
            "Dominance can come from colour, shape, scale or placement.",
            "Colour differentiates elements, creates depth, emphasises importance, conveys brand identity and sets mood.",
            "Colour provides functional cues such as red for errors and green for success.",
            "Effective colour use requires colour theory and a harmonious composition, not just personal preference."
          ]
        },
        {
          title: "Universal design principles",
          points: [
            "Equitable use: useful and marketable to people with diverse abilities.",
            "Flexibility in use: accommodates a wide range of preferences and abilities.",
            "Simple and intuitive use: easy to understand regardless of experience or knowledge.",
            "Perceptible information: communicates effectively regardless of ambient conditions or sensory abilities.",
            "Tolerance for error: minimises hazards and the consequences of unintended actions.",
            "Low physical effort: efficient and comfortable use with minimum fatigue.",
            "Size and space for approach and use: appropriate reach and space regardless of body size, posture or mobility."
          ]
        }
      ],
      terms: [
        { t: "Scale", d: "Using relative size to communicate importance and rank." },
        { t: "Gestalt", d: "A set of perceptual principles explaining how people group and interpret visual information." },
        { t: "Dominance", d: "A focal point that attracts the eye before surrounding elements." },
        { t: "Figure/ground", d: "The perceptual separation between a focused object and its background." },
        { t: "Universal design", d: "Designing interfaces that are usable by as many people as possible, regardless of ability or circumstance." }
      ],
      quiz: [
        {
          q: "How many different sizes does an effective design typically use, according to the notes?",
          opts: ["Up to three", "At least ten", "Exactly one", "Only two, never three"],
          a: 0,
          e: "The notes suggest up to three different sizes to create variety while keeping hierarchy clear."
        },
        {
          q: "Which principle explains that the mind fills in missing parts of a shape?",
          opts: ["Closure", "Similarity", "Continuation", "Figure/ground"],
          a: 0,
          e: "Closure is the tendency to perceive a complete form even when parts are missing."
        },
        {
          q: "Asymmetrical balance usually creates a feeling of...",
          opts: ["Movement and energy", "Rigid formality only", "No focal point", "Inaccessibility"],
          a: 0,
          e: "Asymmetry can stay balanced while feeling dynamic and modern."
        },
        {
          q: "Which is a functional use of colour?",
          opts: ["Red for errors and green for success", "Using only grey everywhere", "Random colours on each screen", "Low contrast for body text"],
          a: 0,
          e: "Colour can communicate state and meaning, provided it is not the only cue."
        },
        {
          q: "Similar elements being perceived as one group is the Gestalt principle of...",
          opts: ["Similarity", "Closure", "Figure/ground", "Continuation"],
          a: 0,
          e: "Similarity groups items that share visual characteristics."
        },
        {
          q: "Which type of dominance uses size to create focus?",
          opts: ["Scale dominance", "Colour dominance", "Shape dominance", "Placement dominance"],
          a: 0,
          e: "Scale dominance makes a critical element larger than its surroundings."
        },
        {
          q: "Which universal design principle is about minimising the consequences of accidental actions?",
          opts: ["Tolerance for error", "Equitable use", "Low physical effort", "Perceptible information"],
          a: 0,
          e: "Tolerance for error reduces hazards and supports recovery from mistakes."
        },
        {
          q: "Contrast in visual design is achieved through differences in...",
          opts: ["Colour, size, shape or texture", "Colour only", "Typography only", "Animation only"],
          a: 0,
          e: "Contrast can use several visual dimensions, and it is essential for accessibility."
        }
      ]
    },
    {
      id: "u1c10",
      number: "10",
      title: "UI Elements and Design Patterns",
      subtitle: "Controls, navigation, containers and reusable solutions",
      minutes: 12,
      summary:
        "UI elements are the standard controls users meet every day. Design patterns are proven arrangements of those controls that solve recurring problems, so users do not have to learn everything from scratch.",
      objectives: [
        "Categorise input, navigation, informational and container elements",
        "Define a UI design pattern and explain its benefits",
        "Identify common navigation, form, modal and card patterns",
        "Explain lazy registration, forgiving formats, progressive disclosure and infinite scroll"
      ],
      chunks: [
        {
          title: "Input controls",
          points: [
            "Checkboxes select multiple options; radio buttons select one from a set.",
            "Dropdown lists and list boxes present choices without taking much space.",
            "Buttons trigger actions; toggles handle binary on/off states.",
            "Text fields accept typed input; date fields help users choose dates.",
            "Choosing the right control for the task makes an interface intuitive and efficient."
          ]
        },
        {
          title: "Navigation and information",
          points: [
            "Navigational components help users move and understand their location: breadcrumbs, sliders, search fields, pagination, tags, icons and tabs.",
            "Informational components provide feedback or context: tooltips, icons, progress bars, notifications, message boxes, modal windows, alerts and badges.",
            "Containers group content: accordions, cards, panels and tabs.",
            "Additional elements include carousels, dialogs, sliders and tooltips."
          ]
        },
        {
          title: "What a design pattern is",
          points: [
            "A UI design pattern is a reusable, recurring component or solution used to solve a common interface problem.",
            "Patterns provide consistent solutions that users already understand, reducing the learning curve.",
            "Designers build on proven solutions instead of reinventing the wheel.",
            "Patterns can be adapted to a brand while keeping familiar behaviour and usability."
          ]
        },
        {
          title: "Navigation and form patterns",
          points: [
            "Navigation patterns include tabs, breadcrumbs, sidebars, hamburger menus, bottom navigation and mega menus.",
            "Form patterns include single-column layouts, inline and real-time validation, progress indicators for multi-step forms, smart defaults, accordion forms and field grouping.",
            "Single-column layouts improve clarity; grouping related fields reduces cognitive load.",
            "Good form patterns increase completion rates and reduce frustration."
          ]
        },
        {
          title: "Modal and card patterns",
          points: [
            "Modal patterns focus attention on a specific interaction: confirmation dialogs, onboarding, detail views, form modals, media viewers and notifications.",
            "Modals should be used sparingly because they interrupt the workflow.",
            "Card patterns organise information into discrete, scannable containers.",
            "Cards work well for product listings, article previews, profiles, feature showcases, dashboard widgets and galleries.",
            "Cards create hierarchy and help users scan collections efficiently."
          ]
        },
        {
          title: "Common patterns worth knowing",
          points: [
            "Breadcrumbs show the path from the front page to the current page in a hierarchy.",
            "Lazy registration lets users sample a product before signing up, reducing onboarding friction.",
            "Forgiving format accepts data in different formats, such as city name or postcode.",
            "Clear primary actions make the most important button stand out.",
            "Progressive disclosure shows only what is relevant for the current task, reducing cognitive load.",
            "Infinite scroll loads more content as the user scrolls, removing pagination in content-heavy products."
          ]
        }
      ],
      terms: [
        { t: "Design pattern", d: "A reusable solution to a recurring interface problem." },
        { t: "Breadcrumbs", d: "A linked trail showing where the current page sits in the hierarchy." },
        { t: "Lazy registration", d: "Letting users try a product before asking them to create an account." },
        { t: "Progressive disclosure", d: "Revealing information or options gradually to reduce cognitive load." },
        { t: "Infinite scroll", d: "Continuously loading content as the user scrolls instead of using pages." }
      ],
      quiz: [
        {
          q: "Breadcrumbs, pagination and search fields are examples of...",
          opts: ["Navigational components", "Input controls", "Informational components", "Structural containers"],
          a: 0,
          e: "They help users move through content and understand location."
        },
        {
          q: "A progress bar is best classified as...",
          opts: ["An informational component", "An input control", "A navigation component", "A container"],
          a: 0,
          e: "It communicates status and completion, which is informational."
        },
        {
          q: "What is a UI design pattern?",
          opts: ["A reusable solution to a common interface problem", "A random visual style", "A replacement for user research", "A type of database"],
          a: 0,
          e: "Patterns capture proven solutions that can be reused and adapted."
        },
        {
          q: "Lazy registration is designed to...",
          opts: ["Let users sample the product before signing up", "Force registration before any interaction", "Hide the login page", "Remove all forms"],
          a: 0,
          e: "It lowers onboarding friction by delaying the registration requirement."
        },
        {
          q: "Progressive disclosure helps by...",
          opts: ["Showing only what is relevant for the current task", "Displaying every option at once", "Removing navigation", "Replacing error messages"],
          a: 0,
          e: "Revealing complexity gradually reduces cognitive load."
        },
        {
          q: "Which is a form design best practice?",
          opts: ["Single-column layout with clear validation", "Hiding all labels", "Using as many mandatory fields as possible", "Avoiding error messages"],
          a: 0,
          e: "Clear single-column forms and real-time validation improve completion."
        },
        {
          q: "Why should modals be used sparingly?",
          opts: ["They interrupt the user's workflow", "They cannot contain forms", "They are invisible to screen readers", "They are only for mobile"],
          a: 0,
          e: "Modals demand attention and break context, so overuse frustrates users."
        },
        {
          q: "Which pattern makes the most important action visually distinct?",
          opts: ["Clear primary action", "Lazy registration", "Forgiving format", "Infinite scroll"],
          a: 0,
          e: "A clear primary action emphasises the main next step with contrast, size and placement."
        },
        {
          q: "Cards are especially useful for...",
          opts: ["Displaying collections of similar items", "Collecting passwords", "Replacing navigation", "Showing only one data point"],
          a: 0,
          e: "Cards organise discrete items and make collections easier to scan."
        },
        {
          q: "Forgiving format means...",
          opts: ["Accepting data in different valid formats", "Ignoring all validation", "Requiring one exact format only", "Deleting incorrect input"],
          a: 0,
          e: "It accommodates variation, such as a city name or a postcode, to reduce friction."
        }
      ]
    },
    {
      id: "u1c11",
      number: "11",
      title: "Interaction Behaviors and Principles",
      subtitle: "Clicks, gestures, feedback and the rules behind intuitive behaviour",
      minutes: 14,
      summary:
        "Interaction design is about the conversation between user and system. Users act; the interface responds. Good interaction behaviour makes that exchange predictable, efficient and even delightful.",
      objectives: [
        "Explain what interaction behaviour and interaction design mean",
        "Name common interaction types and their best practices",
        "Apply visibility, feedback, constraints, affordance, mapping and consistency",
        "Recognise the role of keyboard, voice and microinteractions"
      ],
      chunks: [
        {
          title: "Interaction design fundamentals",
          points: [
            "Interaction behaviour is how users interact with an interface and how the interface responds.",
            "It is the dynamic relationship between user actions and system reactions, aiming for smooth, intuitive and predictable experiences.",
            "Interaction design (IxD) focuses on how users interact with products and the behaviour of interface elements.",
            "Designers consider visual appearance, motion, sound, space, predictability and goal-achievement efficiency.",
            "Good interaction design helps users accomplish tasks efficiently, navigate intuitively, receive feedback and feel in control."
          ]
        },
        {
          title: "Core interaction types",
          points: [
            "Click/tap: the most fundamental interaction. Make clickable elements distinguishable, provide minimum 44×44 px touch targets and give visual feedback.",
            "Hover: reveals tooltips, dropdowns, highlights and previews; not available on touch devices, so do not rely on it alone.",
            "Drag and drop: moving objects within an interface; used for files, dashboards, sorting, games and photo editing. It gives a sense of direct manipulation.",
            "Swipe: horizontal or vertical touch movement for navigation, dismissing notifications and revealing actions.",
            "Scroll: vertical is most common; horizontal suits carousels. Advanced forms include infinite scroll, parallax, scroll-triggered animation and sticky elements."
          ]
        },
        {
          title: "More interaction types",
          points: [
            "Zoom: pinch on touch or scroll wheel on desktop; important for maps, galleries, diagrams and accessibility.",
            "Gestural: multi-touch gestures such as pinch, spread and rotate, plus motion gestures such as shake or tilt.",
            "Voice: spoken commands through assistants; consider language processing, recognition accuracy, confirmation, fallback and privacy.",
            "Keyboard: Tab navigation, shortcuts and focus order; essential for accessibility and power users.",
            "Form interactions: typing, selecting dates and choosing options, with real-time validation and clear errors.",
            "Microinteractions: small animations tied to actions, such as button feedback, likes, pull-to-refresh, toggles and loading indicators.",
            "Notifications and alerts: pop-ups for important messages and toasts for brief confirmations; use sparingly to avoid fatigue."
          ]
        },
        {
          title: "Visibility and feedback",
          points: [
            "Visibility: users should see what actions are possible and what state the system is in. Examples: button hover colour, loading spinner, error message, visible navigation and status indicators.",
            "Feedback: users need to know their action was received and what happens next. Use visual, audio or tactile cues.",
            "Examples: progress bars, success and error notifications, tooltips, toast messages, animation and sound.",
            "Feedback reduces uncertainty and confirms progress."
          ]
        },
        {
          title: "Constraints and affordances",
          points: [
            "Constraints limit the actions available at a given moment, preventing errors and guiding correct use.",
            "Examples: a disabled Submit button until required fields are complete, input masks for phone numbers, a modal blocking background interaction, restricted date ranges.",
            "Affordances are visual cues that suggest how an element works.",
            "Examples: raised buttons, bordered text fields with placeholders, scrollbars, sliders and door handles.",
            "Strong affordances lower the learning curve and cognitive load."
          ]
        },
        {
          title: "Mapping and consistency",
          points: [
            "Mapping is the logical relationship between a control and its effect.",
            "Examples: volume slider left = low, right = high; swipe right archives, left deletes; arrow keys move in the matching direction; map zoom uses + and −.",
            "Consistency means similar interactions behave similarly throughout the product.",
            "Examples: navigation always in the same place, modals always close with an X at the top right, consistent colour, icons and terminology.",
            "Consistency creates predictability and lets users reuse what they have learned."
          ]
        },
        {
          title: "Putting it together",
          points: [
            "Understand your users: research mental models, expectations and physical capabilities.",
            "Apply visibility, feedback, constraints, affordances, mapping and consistency together.",
            "Consider context: device, environment and the user's circumstances.",
            "Test and iterate by observing real users and refining based on behaviour.",
            "Good interaction design is invisible: users notice how easily they achieved the goal, not the interactions themselves."
          ]
        }
      ],
      terms: [
        { t: "Interaction design (IxD)", d: "The design of how users interact with a product and how interface elements behave in response." },
        { t: "Microinteraction", d: "A small, focused animation or response that gives feedback for a single action." },
        { t: "Constraint", d: "A limitation that prevents invalid actions and guides users toward correct use." },
        { t: "Mapping", d: "The perceived relationship between a control and its effect." },
        { t: "Toast", d: "A brief, automatically disappearing message that confirms an action without interrupting workflow." }
      ],
      quiz: [
        {
          q: "What is interaction behaviour in UI design?",
          opts: ["How users interact and how the interface responds", "The colour palette of the interface", "The business model of the product", "The database structure"],
          a: 0,
          e: "It is the dynamic relationship between user actions and system reactions."
        },
        {
          q: "What is the minimum touch target size recommended in the notes?",
          opts: ["44×44 pixels", "10×10 pixels", "100×100 pixels", "There is no recommendation"],
          a: 0,
          e: "A minimum 44×44 px hit area makes touch interactions reliable."
        },
        {
          q: "Why should a design not rely on hover alone?",
          opts: ["Hover is unavailable on touch devices", "Hover is illegal", "Hover prevents keyboard access", "Hover makes pages load slowly"],
          a: 0,
          e: "Touch screens have no pointer hover state, so essential actions need another route."
        },
        {
          q: "Which interaction gives users a sense of direct manipulation?",
          opts: ["Drag and drop", "A toast message", "A radio button", "A progress bar"],
          a: 0,
          e: "Dragging objects directly maps the user's movement to the object's movement."
        },
        {
          q: "A disabled Submit button until all fields are complete is an example of...",
          opts: ["A constraint", "A signifier", "A toast", "A carousel"],
          a: 0,
          e: "It limits invalid action and guides the user toward completion."
        },
        {
          q: "A raised button with a shadow is primarily an example of...",
          opts: ["An affordance", "Radial balance", "Information architecture", "Lazy registration"],
          a: 0,
          e: "The visual treatment suggests that the element can be pressed."
        },
        {
          q: "A volume slider where left is quiet and right is loud demonstrates...",
          opts: ["Natural mapping", "Random placement", "Progressive disclosure", "Reduced contrast"],
          a: 0,
          e: "The control's spatial arrangement matches the effect it produces."
        },
        {
          q: "Which principle is about showing users what actions are possible and the current system state?",
          opts: ["Visibility", "Constraints", "Mapping", "Consistency"],
          a: 0,
          e: "Visibility makes actions discoverable and system status understandable."
        },
        {
          q: "Why are keyboard interactions essential?",
          opts: ["They support accessibility and power-user efficiency", "They replace all other input methods", "They make touch targets unnecessary", "They are only for games"],
          a: 0,
          e: "Keyboard access is essential for users with motor disabilities and improves efficiency for others."
        },
        {
          q: "What makes a microinteraction effective?",
          opts: ["It gives immediate, meaningful feedback for a specific action", "It is long and distracting", "It hides system status", "It only runs on page load"],
          a: 0,
          e: "Microinteractions add polish by acknowledging an action clearly and quickly."
        }
      ]
    }
  ]
});
