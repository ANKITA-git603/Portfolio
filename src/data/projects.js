export const projectsData = [
  {
    id: "01",
    title: "EDUVERSE AI",
    subtitle: "AI-POWERED EDUCATIONAL ECOSYSTEM & BOOK MARKETPLACE",
    description: "An integrated educational platform combining AI-assisted learning, career guidance, role-based dashboards, and a book marketplace.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemini API", "JWT"],
    features: [
      "AI learning assistant",
      "Career guidance",
      "Personalized recommendations",
      "Student dashboard",
      "Teacher dashboard",
      "Government dashboard",
      "HOD dashboard",
      "Book marketplace",
      "Book inventory",
      "CRUD operations",
      "Authentication",
      "Role-based access"
    ],
    github: "https://github.com/ANKITA-git603/EduVerse-AI",
    secondaryGithub: "https://github.com/ANKITA-git603/student-with-ai",
    problem: "Educational platforms often fragment learning resources, career mentorship, administrative monitoring, and book distribution into disconnected silos.",
    solution: "EduVerse AI provides a single unified ecosystem with multi-role access control (Student, Teacher, HOD, Government) paired with an embedded Gemini AI assistant and full book marketplace CRUD functionality.",
    challenges: "Implementing scalable JWT-based role authorization for 4 distinct user tiers while keeping real-time AI context response latencies under 500ms.",
    previewType: "eduverse"
  },
  {
    id: "02",
    title: "SMARTQ",
    subtitle: "REAL-TIME QUEUE & SERVICE MANAGEMENT SYSTEM",
    description: "A real-world queue management platform that allows users to book digital tokens, track live queue positions, and estimate waiting time.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Digital token booking",
      "Live queue position tracking",
      "Estimated waiting time calculation",
      "QR code check-in verification",
      "Branch management dashboard",
      "Service & counter management",
      "User token history",
      "Staff service portal",
      "Admin analytics dashboard",
      "RESTful API service architecture",
      "Database-backed queue ordering algorithm"
    ],
    github: "https://github.com/ANKITA-git603",
    problem: "Physical queuing in service centers and banks leads to long waiting crowds, poor service visibility, and wasted user time.",
    solution: "SmartQ digitizes ticket allocation with live websocket/polling position tracking, QR check-ins, multi-counter branch routing, and staff priority controls.",
    challenges: "Building a deterministic token queue algorithm that accurately predicts remaining wait times based on dynamic counter throughput rates.",
    previewType: "smartq"
  },
  {
    id: "03",
    title: "RECOVERAI",
    subtitle: "AI REVENUE RECOVERY PLATFORM",
    description: "An AI-powered failed-payment recovery platform built for the Razorpay AI Buildathon.",
    tech: ["MERN", "Gemini API", "Razorpay APIs"],
    features: [
      "Failed payment event parsing",
      "AI root-cause failure classification",
      "Predictive recovery scoring engine",
      "Smart retry timing recommendations",
      "Automated customer outreach triggers",
      "Dynamic Razorpay payment links",
      "Contextual discount offer recommendations",
      "Payment method intelligent routing",
      "Human-in-the-loop approval workflow",
      "Recovery performance analytics"
    ],
    github: "https://github.com/ANKITA-git603/RazorpayPro",
    problem: "E-commerce merchants lose millions in ARR due to unrecovered failed webhooks, network dropouts, and card authorization errors.",
    solution: "RecoverAI intercepts failed payment webhooks, runs Gemini LLM root-cause analysis, scores recovery likelihood, and orchestrates targeted recovery workflows with Razorpay payment links.",
    challenges: "Integrating Razorpay API webhooks with generative prompt chains to safely compute discount incentives without eroding merchant profit margins.",
    previewType: "recoverai"
  },
  {
    id: "04",
    title: "CODEPILOT AI",
    subtitle: "AI-ASSISTED CODING ENVIRONMENT",
    description: "A MERN-based AI coding environment combining a code editor with AI-powered coding assistance.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Gemini API"],
    features: [
      "In-browser code editing workspace",
      "Interactive AI coding assistant chat",
      "Automated bug fixing & code explanation",
      "AI Model selection & prompt controls",
      "Developer-focused dark interface",
      "Full-stack MERN persistence layer"
    ],
    github: "https://github.com/ANKITA-git603",
    problem: "Developers frequently lose momentum switching context between standalone text editors and external AI browser chat tabs.",
    solution: "CodePilot AI embeds an intelligent Gemini coding assistant directly beside the code editor workspace with direct context awareness.",
    challenges: "Streaming multi-line syntax highlighted code blocks smoothly while processing real-time AI assistant responses.",
    previewType: "codepilot"
  },
  {
    id: "05",
    title: "SKYMET WEATHER DASHBOARD",
    subtitle: "RESPONSIVE WEATHER MONITORING INTERFACE",
    description: "A responsive weather dashboard using real-time weather API data with a modern React interface.",
    tech: ["React", "Tailwind CSS", "OpenWeatherMap API", "Vite"],
    features: [
      "Real-time local and global weather lookup",
      "Detailed humidity, wind speed & pressure metrics",
      "Dynamic visual weather conditions card",
      "City search with instant error state handling",
      "Clean responsive design built with Vite"
    ],
    github: "https://github.com/ANKITA-git603",
    problem: "Most weather apps are cluttered with intrusive ads, poor typography, and slow client render times.",
    solution: "Skymet presents critical atmospheric weather telemetry in a crisp glassmorphic grid driven by OpenWeatherMap API.",
    challenges: "Handling asynchronous REST API response states gracefully while animating responsive metric cards.",
    previewType: "skymet"
  }
];
