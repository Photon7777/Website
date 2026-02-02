export const siteData = {
  name: "Sai Praneeth Kathi Moksha Gnana",
  headline: "Data Analyst | SQL • Python • Power BI | Analytics & Automation",
  location: "College Park, MD (Open to Internships)",
  phone: "(240) 886-7483",
  email: "lakhrav@umd.edu",
  linkedin: "https://www.linkedin.com/in/sai-praneeth-kmg",
  github: "https://github.com/Photon7777", 
  resumeUrl: "https://drive.google.com/file/d/1YzJgHBxGKIQtxz44l1EBHAmdj-zBwDDa/view?usp=sharing", // add your hosted PDF link later

  summary: [
    "Data Analyst with 1.5+ years of experience delivering analytics and data validation pipelines for large retail datasets.",
    "Strong in SQL, Python (Pandas/NumPy), and BI dashboards; comfortable owning projects end-to-end from data quality to insight storytelling.",
  ],

  education: [
    {
      school: "University of Maryland, Robert H. Smith School of Business",
      degree: "Master of Information Systems",
      date: "Dec 2026",
      location: "College Park, MD, USA",
    },
    {
      school: "Dayananda Sagar University",
      degree: "B.Tech, Electronics and Communications Engineering",
      date: "Oct 2023",
      location: "Bengaluru, Karnataka, India",
    },
  ],

  skills: {
    "Programming & Data": [
      "Python",
      "Pandas",
      "NumPy",
      "SQL (MySQL)",
      "MongoDB",
      "Scikit-learn",
      "XGBoost",
    ],
    "BI & Reporting": ["Power BI", "Excel", "PowerPoint"],
    "Tools & Platforms": ["Git/GitHub", "JIRA", "Confluence"],
    "Web & Backend": ["React.js", "Node.js", "Flask", "HTML/CSS", "JavaScript"],
  },

  experience: [
    {
      company: "Mathco",
      role: "Data Analyst",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2024 – Jul 2025",
      bullets: [
        "Performed advanced EDA and quality checks on multi-source retail datasets for Walmart; estimated market share across 6+ segments and surfaced ~$20M growth opportunities.",
        "Engineered Python-based validation pipelines to standardize multiple vendors’ data, reducing processing errors by 60% and cutting reporting time from 2 days to 6 hours.",
        "Managed JIRA tickets and maintained Confluence documentation, improving cross-team collaboration and reducing blockers by 30%.",
      ],
    },
    {
      company: "Shazab Future Tech Solutions",
      role: "Intern Software Engineer",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2023 – Jun 2023",
      bullets: [
        "Developed React front-end features (GUIs and analytics dashboards) for enterprise networking hardware.",
        "Integrated Node.js APIs and MongoDB for real-time monitoring and improved usability.",
        "Supported agile execution via JIRA/Confluence to reduce blockers and keep sprints on track.",
      ],
    },
  ],

  projects: [
    {
      title: "NexGen AI (RAG + Agents Full-Stack App)",
      badge: "Honorable Mention",
      impact:
        "Built a production-ready AI app with RAG + agents for accurate, context-aware responses.",
      description:
        "Developed a full-stack application using Streamlit, LangChain, and LLM-based agents. Implemented prompt engineering, agent logic, and retrieval pipelines for ChatGPT-powered interactions.",
      tech: ["Streamlit", "LangChain", "LLMs", "RAG", "Vector Store"],
      links: [
        { label: "GitHub", url: "https://github.com/Photon7777/NexGen_Deploy" },
        { label: "Demo", url: "https://nexgen-ai.streamlit.app/" } // update
      ],
    },
    {
      title: "ML Model-Based System for Disease Prediction",
      badge: "99.7% accuracy",
      impact:
        "Deployed an ML system with Flask + React and achieved 99.7% model accuracy.",
      description:
        "Built and deployed disease prediction models using Logistic Regression, Random Forest, and CNN, with a real-time web app front-end and backend API.",
      tech: ["Python", "Scikit-learn", "CNN", "Flask", "React"],
      links: [
        { label: "GitHub", url: "https://github.com/your-github/disease-prediction" },
         // update
      ],
    },
    {
      title: "Fraud Detection Research (CVIT Conference)",
      badge: "Publication",
      impact:
        "Presented a comparative analysis of ML algorithms for fraudulent activity detection in credit card transactions.",
      description:
        "Research work comparing machine learning algorithms for fraud detection and presenting findings at a conference.",
      tech: ["Machine Learning", "Model Evaluation", "Research"],
      links: [{ label: "Paper", url: "https://drive.google.com/file/d/1KmNCJsYoJkgrbJ7xZlYdJ7a7YXQKkNtD/view?usp=sharing" }], // update
    },
  ],
};
