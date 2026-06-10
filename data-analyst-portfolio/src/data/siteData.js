export const siteData = {
  name: "Sai Praneeth Kathi Moksha Gnana",
  displayName: "Sai Praneeth",
  roleHeadline: "MSIS Graduate Student | Data Analyst | AI & Analytics Builder",
  headline: "Data Analyst | Python • SQL • BI | Analytics, ETL & Applied AI",
  location: "College Park, MD (Open to Summer 2026 Internships)",
  phone: "(240) 886-7483",
  email: "lakhrav@umd.edu",
  linkedin: "https://www.linkedin.com/in/sai-praneeth-kmg",
  github: "https://github.com/Photon7777",
  resumeUrl: "/Resume_SaiPraneeth.pdf",
  profileImage: "/profile-photo.png",

  metrics: [
    { label: "Experience", value: "2 years", detail: "analytics, ETL, and reporting automation" },
    { label: "Pipeline Quality", value: "60%", detail: "recurring errors reduced" },
    { label: "Business Impact", value: "$20M", detail: "growth opportunities surfaced" },
    { label: "Recognition", value: "EY UMD", detail: "Best Data Scientist award" },
  ],

  summary: [
    "Data Analyst with 2 years of experience delivering analytics, SQL validation, and reporting automation across large retail datasets.",
    "Strong in Python, SQL, BigQuery, Tableau, Snowflake, and applied AI; comfortable turning messy data into quality-checked pipelines, KPI reporting, and stakeholder-ready insights.",
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

  quickFacts: [
    "MSIS at University of Maryland, College Park",
    "Data Analyst experience across retail analytics and data validation",
    "Interested in analytics, AI, data engineering, cloud data platforms, and business impact",
  ],

  skills: {
    Programming: [
      "Python",
      "SQL",
      "JavaScript",
      "HTML/CSS",
      "React.js",
      "Node.js",
      "R",
      "Flask",
    ],
    "Data Analysis": [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "EDA",
      "Statistical Analysis",
      "Data Validation",
      "Data Quality Checks",
      "KPI Reporting",
      "SQL Validation",
    ],
    "Machine Learning / AI": [
      "Scikit-learn",
      "XGBoost",
      "LangChain",
      "FAISS",
      "RAG",
      "Agentic Systems",
      "Prompt Engineering",
      "LLM APIs",
    ],
    "Cloud / Data Engineering": [
      "PySpark",
      "Apache Spark",
      "GCP BigQuery",
      "Snowflake",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "Hadoop",
      "Kafka",
      "GCP Cloud Storage",
      "Dataflow",
      "ETL Pipelines",
    ],
    Visualization: [
      "Tableau",
      "Power BI",
      "Power Query",
      "Looker Studio",
      "Dashboarding",
      "Business Intelligence",
      "Reporting Automation",
      "Excel",
      "PowerPoint",
      "Streamlit",
    ],
    Tools: [
      "Git/GitHub",
      "Docker",
      "JIRA",
      "Confluence",
      "dbt",
    ],
    "Soft Skills": [
      "Stakeholder Communication",
      "Cross-functional Collaboration",
      "Problem Solving",
      "Business Storytelling",
      "Presentation",
      "Documentation",
      "Attention to Detail",
    ],
  },

  featuredSkills: [
    "Python",
    "SQL",
    "BigQuery",
    "Tableau",
    "Snowflake",
    "RAG",
    "Streamlit",
  ],

  experience: [
    {
      company: "Mathco",
      role: "Data Analyst",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2024 – Jul 2025",
      bullets: [
        "Queried Walmart retail data across 6+ business segments in BigQuery using window functions and period-over-period logic to track market share, category movement, and vendor trends, flagging $20M in growth opportunities.",
        "Standardized multivendor retail extracts in Pandas by resolving vendor naming issues, realigning category codes, and converting 4+ date formats into a unified schema before loading into BigQuery staging tables.",
        "Built a SQL validation layer with row-count checks, vendor-segment rules, date-bound assertions, and QA logging, catching upstream data issues early and reducing recurring pipeline errors by 60%.",
        "Converted ad-hoc BigQuery reports into scheduled SQL workflows that refreshed KPI tables nightly with deduplication checks, reducing reporting time from 2 days to 6 hours.",
        "Built Tableau time-series benchmarks to compare product, category, and vendor performance against historical baselines, summarizing outliers in Excel KPI trackers.",
      ],
      tools: ["Python", "SQL", "BigQuery", "Pandas", "Tableau", "Excel", "Data Validation"],
    },
    {
      company: "Shazab Future Tech Solutions",
      role: "Software Engineering Intern",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2023 – Jun 2023",
      bullets: [
        "Designed and deployed React.js analytics dashboards for 2 enterprise networking hardware product lines, connecting Node.js REST APIs with MongoDB to display real-time telemetry.",
        "Supported sprint delivery for a 5-member agile team using JIRA and Confluence to track tasks, document API logic, and manage dashboard requirements.",
      ],
      tools: ["React.js", "Node.js", "MongoDB", "JIRA", "Confluence"],
    },
  ],

  projects: [
    {
      title: "Forensic Analytics Dashboard",
      badge: "Best Data Scientist",
      image: "/project-images/ey-forensic.png",
      imageAlt: "Forensic analytics dashboard interface with workflow setup and case investigation modules",
      impact:
        "Flagged 45.2% of invoices for timing violations, identified 1,080 pre-hire assignment errors, and detected 818 pre-release sales anomalies.",
      description:
        "Built a Streamlit forensic analytics dashboard for EY's “Swindle in the Age of AI” challenge using Pandas EDA, anomaly detection, chronological checks, and field-level validation.",
      caseStudy: {
        problem: "Validate whether winery operations data showed signs of fabrication.",
        approach: "Combined Pandas EDA, anomaly detection, chronology checks, and field-level validation in Streamlit.",
        result: "Earned Best Data Scientist by surfacing invoice, assignment, and pre-release sales anomalies.",
      },
      tech: ["Python", "Pandas", "Streamlit", "Anomaly Detection", "EDA", "KPI Reporting"],
      links: [
        { label: "GitHub", url: "https://github.com/Photon7777/EY_APP" },
        { label: "Demo", url: "https://eyforensic.streamlit.app/" },
      ],
    },
    {
      title: "NexGen Agentic Platform",
      badge: "Honorable Mention",
      image: "/project-images/nexgen-agentic-platform.png",
      imageAlt: "NexGen Agentic Platform Streamlit interface with chat input and study dashboard",
      impact:
        "Led a 4-member team as technical lead across frontend, backend, prompt engineering, and agent logic.",
      description:
        "Architected a full-stack agentic application using Streamlit, LangChain, LLM agents, and RAG, building pipelines for knowledge ingestion, vector storage, and retrieval.",
      caseStudy: {
        problem: "Support context-aware learning workflows through an agentic AI application.",
        approach: "Built knowledge ingestion, vector storage, RAG, prompt engineering, and LLM agent flows.",
        result: "Delivered the full-stack platform as technical lead and earned an Honorable Mention.",
      },
      tech: ["Streamlit", "LangChain", "LLM Agents", "RAG", "Prompt Engineering", "Vector Storage"],
      links: [
        { label: "GitHub", url: "https://github.com/Photon7777/NexGen_Deploy" },
        { label: "Demo", url: "https://nexgen-ai.streamlit.app/" },
      ],
    },
    {
      title: "RetailIQ - Retail Analytics Intelligence Platform",
      badge: "Cloud deployed",
      image: "/project-images/retailiq-dashboard.png",
      imageAlt: "RetailIQ retail analytics dashboard preview with forecasting, anomaly, and AI analyst panels",
      impact:
        "Built a cloud-deployed retail analytics platform that turns Walmart sales data into Snowflake-backed forecasting and KPI dashboards.",
      description:
        "Developed RetailIQ with Python, dbt, Snowflake, Streamlit, Docker, SQL, demand forecasting, anomaly detection, stockout risk tracking, and governed LLM analyst workflows.",
      caseStudy: {
        problem: "Convert Walmart sales data into reliable demand, stockout, anomaly, and KPI intelligence.",
        approach: "Built Python, dbt, Snowflake, Streamlit, and Docker pipelines with controlled SQL generation for warehouse questions.",
        result: "Delivered a cloud-deployed analytics platform with Snowflake-backed dashboards and governed LLM analyst workflows.",
      },
      tech: ["Python", "dbt", "Snowflake", "Streamlit", "Docker", "SQL", "Demand Forecasting"],
      links: [
        { label: "Demo", url: "https://retailiq-demand-intelligence-420746557396.us-central1.run.app/AI_Retail_Analyst" },
      ],
    },
  ],

  distinctions: [
    {
      title: "Best Data Scientist Award",
      detail:
        "EY UMD 2026 Case Competition recognition for a forensic analytics dashboard that applied EDA, anomaly detection, chronological checks, and field-level validation.",
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
