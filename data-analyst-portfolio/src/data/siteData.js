export const siteData = {
  name: "Sai Praneeth Kathi Moksha Gnana",
  headline: "Data Analyst | Python • SQL • BI | Analytics, ETL & Applied AI",
  location: "College Park, MD (Open to Summer 2026 Internships)",
  phone: "(240) 886-7483",
  email: "lakhrav@umd.edu",
  linkedin: "https://www.linkedin.com/in/sai-praneeth-kmg",
  github: "https://github.com/Photon7777",
  resumeUrl: "/Resume_SaiPraneeth.pdf",

  summary: [
    "Data Analyst with 1.5+ years of experience delivering analytics, data validation, and reporting automation across large retail datasets.",
    "Strong in Python, SQL, BI dashboards, and applied AI; comfortable turning messy data into quality-checked pipelines, KPI reporting, and stakeholder-ready insights.",
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
    "Programming & Data Analytics": [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "PySpark",
      "Scikit-learn",
      "XGBoost",
      "Data Cleaning",
      "EDA",
      "Statistical Analysis",
    ],
    "Databases & Big Data": [
      "MySQL",
      "MongoDB",
      "Hadoop",
      "Kafka",
      "ETL Pipelines",
      "Data Validation",
      "Data Quality Checks",
    ],
    "Data Visualization & BI": [
      "Power BI",
      "Excel",
      "Dashboarding",
      "KPI Reporting",
      "Business Intelligence",
      "Reporting Automation",
      "PowerPoint",
    ],
    "Cloud & Tools": [
      "Cloud Computing Concepts (AWS, Azure, GCP)",
      "Git/GitHub",
      "JIRA",
      "Confluence",
      "Streamlit",
    ],
    "Web & Application Development": ["HTML/CSS", "JavaScript", "React.js", "Node.js", "Flask"],
  },

  experience: [
    {
      company: "Mathco",
      role: "Data Analyst",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2024 – Jul 2025",
      bullets: [
        "Delivered retail analytics and market share estimation for Walmart across 6+ business segments; achieved 98% accuracy and identified $20M in growth opportunities through EDA, quality checks, and BI reporting.",
        "Engineered Python-based data validation and ETL pipelines to standardize multivendor retail datasets, reducing processing errors by 60% and cutting reporting turnaround from 2 days to 6 hours.",
        "Improved stakeholder communication by managing JIRA tickets and Confluence documentation, reducing team blockers by 30% and supporting consistent KPI delivery.",
      ],
    },
    {
      company: "Shazab Future Tech Solutions",
      role: "Software Engineering Intern",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2023 – Jun 2023",
      bullets: [
        "Developed React.js analytics dashboards and GUIs across 2 enterprise networking hardware product lines.",
        "Integrated Node.js APIs and MongoDB to enable real-time operational monitoring and improve data visibility for engineering teams.",
        "Contributed to agile sprint delivery through JIRA workflows and Confluence documentation across a 5-member team.",
      ],
    },
  ],

  projects: [
    {
      title: "Forensic Analytics Dashboard",
      badge: "Best Data Scientist",
      impact:
        "Built a forensic analytics dashboard that identified fabricated-operation signals and quantified $2.86M in implausible revenue.",
      description:
        "Created a multi-module Streamlit dashboard for EY UMD's 2026 case competition, applying EDA, data validation, anomaly detection, and chronological business-logic checks to winery operations data.",
      tech: ["Python", "Pandas", "Streamlit", "Anomaly Detection", "EDA", "KPI Reporting"],
      links: [
        { label: "GitHub", url: "https://github.com/Photon7777/EY_APP" },
        { label: "Demo", url: "https://eyforensic.streamlit.app/" },
      ],
    },
    {
      title: "NexLearn AI",
      badge: "Honorable Mention",
      impact:
        "Led a 4-member team to ship a full-stack LLM agent and RAG platform for context-aware learning workflows.",
      description:
        "Architected an Agentic AI Case Competition app with Streamlit, LangChain, LLM agents, prompt engineering, vector storage, and retrieval-augmented generation pipelines.",
      tech: ["Streamlit", "LangChain", "LLM Agents", "RAG", "Prompt Engineering", "Vector Storage"],
      links: [
        { label: "GitHub", url: "https://github.com/Photon7777/NexGen_Deploy" },
        { label: "Demo", url: "https://nexgen-ai.streamlit.app/" },
      ],
    },
    {
      title: "ML Model-Based System for Disease Prediction",
      badge: "99.7% accuracy",
      impact:
        "Developed a real-time telemedicine disease prediction app with 99.7% model accuracy.",
      description:
        "Built a Flask API and React.js frontend around Logistic Regression, Random Forest, and CNN models for a diagnostic support use case.",
      tech: ["Python", "Scikit-learn", "CNN", "Logistic Regression", "Random Forest", "Flask", "React.js"],
      links: [],
    },
  ],

  distinctions: [
    {
      title: "Best Data Scientist Award",
      detail:
        "EY UMD 2026 Case Competition recognition for a forensic analytics dashboard that applied cross-validated anomaly detection and quantified $2.86M in impacted revenue.",
    },
    {
      title: "Honorable Mention",
      detail:
        "Agentic AI Case Competition 2025 recognition for leading full-stack LLM agent and RAG platform development across frontend, backend, and AI components.",
    },
    {
      title: "CVIT Conference Presentation",
      detail:
        "Presented comparative analysis of machine learning algorithms for fraudulent activity detection in credit card transactions.",
    },
  ],
};
