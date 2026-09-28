import reactIcon from "../assets/icons/react.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import javascriptIcon from "../assets/icons/javascript.png";
import nodeIcon from "../assets/icons/node.png";
import pythonIcon from "../assets/icons/python.png";

export const PROFILE = {
  name: "Sayali Arun Pawar",
  title: "Final Year Computer Engineering Student",
  tagline: "Building AI-powered web applications that solve real-world problems through technology.",
  email: "sayalip320@gmail.com",
  phone: "+91 70832 61961",
  phoneHref: "+917083261961",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/MeSayali",
  linkedin: "https://www.linkedin.com/in/sayali-pawar-14973932b/",
  leetcode: "https://leetcode.com/u/Pawar_Sayali/",
  resumeFile: "/Sayali_Pawar_Resume.pdf",
};

export const ROLES = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Accessibility Enthusiast",
  "Problem Solver",
  "Software Engineer",
];

export const TECH_ICONS = [
  { icon: reactIcon, label: "React", top: "8%", left: "4%" },
  { icon: nodeIcon, label: "Node", top: "68%", left: "0%" },
  { icon: mongodbIcon, label: "MongoDB", top: "82%", left: "58%" },
  { icon: pythonIcon, label: "Python", top: "4%", left: "72%" },
  { icon: javascriptIcon, label: "JavaScript", top: "42%", left: "86%" },
];

export const ABOUT = {
  paragraphs: [
    "I'm a final-year Computer Engineering student who turns ideas into working software — from an AI-powered accessibility scanner to a meeting-tracker that turns raw transcripts into structured action items in seconds. I care about two things equally: whether it works, and whether everyone can actually use it.",
    "I'm currently a Google Student Ambassador and completed a project internship with AWS Cloud Club PICT, while sharpening my Data Structures and Algorithms fundamentals and exploring how NLP and applied AI can solve real, everyday problems. I'm actively looking for a Software Development Engineer role where I can keep building things people rely on.",
  ],
  stats: [
    { value: "9.51", label: "Current CGPA" },
    { value: "6", label: "Internships & roles" },
    { value: "10+", label: "Projects shipped" },
    { value: "WCAG", label: "Accessibility-first builds" },
  ],
};

export const EDUCATION = [
  {
    school: "Pune Institute of Computer Technology",
    degree: "B.E. Computer Engineering",
    period: "2024 – 2027",
    detail: "CGPA 9.51 · Current final-year student",
    current: true,
  },
  {
    school: "Government Polytechnic Amravati",
    degree: "Diploma in Computer Engineering",
    period: "2021 – 2024",
    detail: "93.16%",
    current: false,
  },
  {
    school: "Anglo Hindi High School, Yavatmal",
    degree: "SSC (Secondary School Certificate)",
    period: "2020 – 2021",
    detail: "95.60%",
    current: false,
  },
];

export const EXPERIENCE = [
  {
    role: "Google Student Ambassador",
    org: "Google Student Ambassadors (India)",
    period: "June 2026 – Present",
    mode: "Remote · Part-time",
    points: [
      "Represent Google technologies within the student community",
      "Organize technical events and workshops",
      "Create AI-related educational content",
      "Build technical communities and promote Google AI tools",
    ],
    tags: ["Google AI", "Prompt Engineering", "Community Building", "Leadership"],
  },
  {
    role: "Project Lead — Project Internship",
    org: "AWS Cloud Club, PICT",
    period: "Feb 2026 – Apr 2026",
    mode: "Hybrid",
    points: [
      "Built an AI-powered meeting summarization system (Automated Meeting Outcome Tracker)",
      "Implemented a hybrid NLP + regex pipeline for text extraction",
      "Designed the FastAPI backend for fast, real-time processing",
    ],
    tags: ["Python", "FastAPI", "Regex", "NLP"],
  },
  {
    role: "Web Development Intern",
    org: "Oasis Infobyte",
    period: "Dec 2025 – Jan 2026",
    mode: "Remote",
    points: [
      "Built responsive web applications with HTML, CSS and JavaScript",
      "Developed multiple frontend projects and improved UI responsiveness",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    role: "AI-ML Virtual Intern",
    org: "Google AI-ML Virtual Internship, AICTE",
    period: "July 2025 – September 2025",
    mode: "Virtual",
    points: ["Worked on machine learning, Google AI tooling, data processing and cloud technologies"],
    tags: ["Machine Learning", "Google AI", "Cloud"],
  },
  {
    role: "AI & Prompt Engineering Intern",
    org: "VaultofCodes",
    period: "August 2025",
    mode: "Remote",
    points: ["Worked on prompt engineering, LLMs, automation and AI workflows"],
    tags: ["Prompt Engineering", "LLMs", "Automation"],
  },
  {
    role: "Advanced Java Intern",
    org: "Compilers Technology",
    period: "June 2023 – July 2023",
    mode: "On-site",
    points: ["Built FacultyDesk, a Java Swing + JDBC desktop application that digitized administrative workflows for college staff"],
    tags: ["Java", "Swing", "JDBC", "MySQL"],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "a11yview",
    name: "A11yView",
    tag: "In progress · Final-year project",
    summary: "Cuts manual accessibility audits down to a single automated scan, scored against WCAG.",
    description:
      "A11yView is my major final-year project, built to make accessibility testing something developers actually do — not skip. Point it at a URL and it scans the page with Puppeteer and Axe-core, flags WCAG violations, scores overall compliance, and stores scan history so teams can track progress over time instead of auditing from scratch every release.",
    features: [
      "Real-time accessibility scanning",
      "WCAG compliance analysis",
      "AI-generated accessibility recommendations",
      "Authentication system",
      "Dashboard analytics",
      "Accessibility score calculation",
      "MongoDB scan history",
      "Detailed issue reports",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Puppeteer", "Axe-core", "JavaScript"],
    github: "", // TODO: add GitHub repository URL
    demo: "",   // TODO: add live demo URL
    color: "gold",
  },
  {
    id: "share4good",
    name: "Share4Good",
    tag: "Social impact platform",
    summary: "Led a 5-member team to connect donors, NGOs and volunteers and cut food wastage.",
    description:
      "Share4Good is a social impact platform I led a 5-member team to build, connecting donors, NGOs, and volunteers to reduce food, clothing, and monetary wastage. Separate modules for donors, NGOs, and delivery agents keep every handoff accountable, with real-time pickup tracking that shortens the gap between a donation and a delivery.",
    features: ["Food donation", "Clothes donation", "Money donation", "Volunteer management", "NGO dashboard", "Pickup tracking", "Authentication"],
    stack: ["PHP", "MySQL"],
    github: "https://github.com/MeSayali/FoodSaverhub",
    demo: "",
    color: "indigo",
  },
  {
    id: "meettrack",
    name: "MeetTrack",
    tag: "AI · NLP",
    summary: "Turns raw meeting transcripts into action items and deadlines in seconds, not hours.",
    description:
      "MeetTrack (Automated Meeting Outcome Tracker) converts raw meeting transcripts into structured, actionable data. A hybrid NLP plus regex pipeline extracts action items, deadlines, and assigned owners from unstructured text, served through a lightweight FastAPI backend so teams get organized notes without anyone manually writing them up.",
    features: ["Transcript processing", "Action item extraction", "Deadline detection", "Meeting summary", "FastAPI backend", "Regex pipeline"],
    stack: ["Python", "FastAPI", "NLP", "Regex"],
    github: "https://github.com/MeSayali/MeetTrack",
    demo: "",
    color: "blue",
  },
  {
    id: "pashuswasthdoot",
    name: "PashuSwasthDoot",
    tag: "Digital health platform",
    summary: "Brings veterinary guidance to rural farmers who otherwise have none nearby.",
    description:
      "PashuSwasthDoot closes a real gap in livestock healthcare access — rural farmers with no nearby vet get disease information, home remedies, and doctor search in one place. Video tutorials and a feedback loop keep the guidance trustworthy and the platform improving with real usage.",
    features: ["Disease information", "Nearby doctor search", "Home remedies", "Educational videos", "Feedback system"],
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/MeSayali/PBL",
    demo: "",
    color: "gold",
  },
  {
    id: "facultydesk",
    name: "FacultyDesk",
    tag: "Desktop application",
    summary: "Digitized a college's paper-based attendance and staff record workflows.",
    description:
      "FacultyDesk replaced a college's manual, paper-based administrative process during my Advanced Java internship. It digitizes faculty records, attendance, authentication, and database management in a single desktop app, cutting down the paperwork staff had to track by hand.",
    features: ["Faculty records", "Attendance tracking", "Authentication", "Database management"],
    stack: ["Java", "Swing", "JDBC", "MySQL"],
    github: "", // TODO: add GitHub repository URL
    demo: "",
    color: "indigo",
  },
];

export const OTHER_PROJECTS = [
  {
    name: "Sentiment Analyzer",
    desc: "A text sentiment classification tool that scores input text as positive, negative or neutral in real time.",
    stack: ["Python", "NLP"],
    github: "https://github.com/MeSayali/sentiment-analyzer",
    demo: "https://sentiment-analyzer-ebd0.onrender.com",
  },
  {
    name: "AI Assistant — Sifra",
    desc: "A personal voice/text AI assistant that handles everyday tasks and questions.",
    stack: ["Python", "AI"],
    github: "https://github.com/MeSayali/Personal_Assistant_SIFRA",
    demo: "",
  },
  {
    name: "Rock, Paper, Scissors",
    desc: "A classic browser game with score tracking and smooth interactions.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/MeSayali/Rock-Paper-Scissors-Game-",
    demo: "",
  },
];

export const SKILLS = [
  { cat: "Languages", items: ["C", "C++", "Java", "Python", "PHP", "JavaScript"] },
  { cat: "Frontend", items: ["React", "Tailwind CSS", "HTML5", "CSS3"] },
  { cat: "Backend", items: ["Node.js", "Express.js", "FastAPI"] },
  { cat: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { cat: "AI", items: ["NLP", "Prompt Engineering", "Google AI", "Machine Learning"] },
  { cat: "Tools", items: ["Git & GitHub", "Puppeteer", "Axe-core", "VS Code"] },
];

export const ACHIEVEMENTS = [
  "Google Student Ambassador",
  "AWS Cloud Club Project Intern",
  "Google AI-ML Internship",
  "9.5+ CGPA",
  "10+ Projects built",
  "Active DSA learner",
];

export const CODING_PROFILES = [
  { name: "GitHub", href: PROFILE.github, note: "Repositories & pinned projects" },
  { name: "LeetCode", href: PROFILE.leetcode, note: "Solved problems & contest rating" },
  { name: "LinkedIn", href: PROFILE.linkedin, note: "Professional network" },
];
