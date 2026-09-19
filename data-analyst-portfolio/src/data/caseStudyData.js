export const projectDetails = {
  retailiq: {
    discipline: "Data engineering / Analytics engineering",
    focus: ["analysis", "analytics", "engineering", "ai"],
    role: "Platform architecture & implementation",
    context: "Independent data product",
    resultTitle: "A complete path from source data to decisions.",
    decisions: [
      {
        title: "Separate the data layers",
        text: "Snowflake and dbt separate raw ingestion, typed staging, and reporting marts. The dashboard consumes governed models instead of rebuilding business logic in the interface.",
      },
      {
        title: "Make quality part of the model",
        text: "Source and model tests check required fields, uniqueness, and relationships. Source-file and load timestamps keep the data traceable.",
      },
      {
        title: "Constrain AI to the evidence",
        text: "The AI analyst uses approved marts, read-only SQL, row limits, and visible query traceability. The public application runs on Cloud Run; Airflow and Kafka are optional local workflows.",
      },
    ],
    validation:
      "dbt checks cover source integrity and model relationships. The repository also includes Python tests, a data dictionary, pipeline runbooks, and deployment documentation.",
    limits:
      "The retail source is the Walmart forecasting dataset. Inventory and weather enrichment include synthetic data. Forecasting is a baseline demonstration; project scale does not represent production customers or a measured business uplift.",
    evidenceUrl:
      "https://github.com/Photon7777/retailiq-demand-intelligence/blob/abf2eb512c9d905d0c43382ce60b0764914b1009/docs/portfolio_walkthrough.md",
    evidenceLabel: "Architecture & implementation notes",
  },
  "forensic-analytics-dashboard": {
    discipline: "Data analysis / Forensic analytics",
    focus: ["analysis"],
    role: "Data analysis & dashboard development",
    context: "EY x UMD challenge",
    resultTitle: "Explainable findings, ready for investigation.",
    decisions: [
      {
        title: "Start with the investigator",
        text: "The Streamlit workflow organizes evidence review and triage around business questions, with repeatable checks behind each finding.",
      },
      {
        title: "Use explainable validation",
        text: "Chronology checks and field-level rules expose why a record is flagged. Pandas analysis supports invoice, assignment, and sales-timing investigation.",
      },
      {
        title: "Keep findings in context",
        text: "Invoice timing violations and line-item anomalies are presented as separate findings, so their different units and denominators stay clear.",
      },
    ],
    validation:
      "The analysis identified timing violations in 45.2% of invoices and 818 pre-release anomalies across 4,673 line items. The challenge recognized the work with the Best Data Scientist award.",
    limits:
      "These results describe the challenge dataset. An anomaly flag identifies evidence to investigate; it does not establish fraud by itself.",
    evidenceUrl: "https://github.com/Photon7777/EY_APP",
    evidenceLabel: "Investigation logic & source",
  },
  mixalyzer: {
    discipline: "Marketing analytics / Applied AI",
    focus: ["analysis", "ai"],
    role: "Modeling & application development",
    context: "Marketing decision-support product",
    resultTitle: "A planning workflow with evidence behind it.",
    decisions: [
      {
        title: "Model carryover and saturation",
        text: "Ridge marketing mix modeling combines adstock, saturation-style spend features, trend, seasonality, and optional external controls.",
      },
      {
        title: "Compare before recommending",
        text: "Average and seasonal baselines, holdout MAPE, and confidence ranges inform whether a recommendation is appropriate for planning.",
      },
      {
        title: "Ground the narrative",
        text: "Optional OpenAI recommendations consume the evidence workbook and model outputs. Without an API key, a deterministic brief remains available.",
      },
    ],
    validation:
      "Model trust depends on baseline comparison and the user's MAPE target. The repository includes tests for the modeling workflow and a responsible AI review for data quality, privacy, and over-automation.",
    limits:
      "The live app opens with sample data. Scenario outputs are model estimates, not realized marketing returns or proof of causality. The Bayesian option is lightweight regression; experiment calibration is a future improvement.",
    evidenceUrl:
      "https://github.com/Photon7777/marketing-mix-optimizer#model-evaluation",
    evidenceLabel: "Model evaluation & methodology",
  },
  "nexgen-agentic-platform": {
    discipline: "Applied AI / Knowledge systems",
    focus: ["ai", "engineering"],
    role: "Technical lead / 4-member team",
    context: "Agentic AI Case Competition 2025",
    resultTitle: "An agentic learning platform, built as a team.",
    decisions: [
      {
        title: "Separate retrieval from interaction",
        text: "Knowledge ingestion, vector storage, retrieval, and the Streamlit interface form distinct parts of the learning workflow.",
      },
      {
        title: "Bring context into the response",
        text: "LangChain, RAG, prompt engineering, and LLM agents support context-aware learning tasks.",
      },
      {
        title: "Own the technical delivery",
        text: "As technical lead, I coordinated a 4-member team across frontend, backend, prompt workflows, and agent logic.",
      },
    ],
    validation:
      "The team delivered the full-stack platform and earned Honorable Mention in the Agentic AI Case Competition 2025.",
    limits:
      "Retrieval can provide useful context, but generated answers still need review. The case study reports the delivered workflow and competition recognition, without claiming an unmeasured accuracy improvement.",
    evidenceUrl: "https://github.com/Photon7777/NexGen_Deploy",
    evidenceLabel: "Agent workflows & source",
  },
};

const sourceRoot =
  "https://github.com/Photon7777/retailiq-demand-intelligence/blob/abf2eb512c9d905d0c43382ce60b0764914b1009/";
export const pipelineStages = [
  {
    id: "ingest",
    label: "Ingest",
    tool: "Python / Snowflake",
    title: "Give incoming data a contract.",
    description:
      "The CSV loader normalizes source columns, validates required fields, and adds provenance before loading Snowflake RAW tables.",
    output: "RAW.SALES with SOURCE_FILE and LOADED_AT provenance",
    file: "src/ingestion/load_to_snowflake.py",
    language: "Python",
    code: "df = pd.read_csv(file_path)\ndf.columns = [normalize_column_name(column) for column in df.columns]\n\nmissing_columns = [column for column in table_config.expected_columns if column not in df.columns]",
  },
  {
    id: "model",
    label: "Model",
    tool: "dbt / SQL",
    title: "Make the business data explicit.",
    description:
      "The staging model establishes field names and types. A fact model then references staging, keeping the dependency visible to dbt.",
    output: "Typed store, department, date, sales, and holiday fields",
    file: "dbt_retailiq/models/staging/stg_sales.sql",
    language: "SQL",
    code: "with source as (\n    select * from {{ source('raw', 'sales') }}\n)\n\nselect\n    store::number as store_id,\n    dept::number as dept_id,\n    date::date as sales_date,\n    weekly_sales::float as weekly_sales,\n    is_holiday::boolean as is_holiday,\n    source_file,\n    loaded_at\nfrom source",
  },
  {
    id: "validate",
    label: "Validate",
    tool: "dbt tests",
    title: "Test relationships, not just row counts.",
    description:
      "Model tests check that sales records carry a store key and that each key maps to the store dimension.",
    output: "A declared non-null check and store relationship test",
    file: "dbt_retailiq/models/schema.yml",
    language: "YAML",
    code: "  - name: fact_sales\n    description: Weekly sales fact table.\n    columns:\n      - name: store_id\n        tests:\n          - not_null\n          - relationships:\n              to: ref('dim_store')\n              field: store_id",
  },
  {
    id: "serve",
    label: "Serve",
    tool: "Streamlit / Cloud Run",
    title: "Turn the mart into a useful product.",
    description:
      "The executive view loads KPI, sales-trend, and store-performance data through shared Snowflake queries before rendering charts.",
    output: "Executive metrics, weekly sales trend, and store performance",
    file: "app/pages/1_Executive_Overview.py",
    language: "Python",
    code: "metrics = load_data(fetch_executive_metrics, config)\ntrend = load_data(fetch_sales_trend, config)\nstore_sales = load_data(fetch_store_sales, config)",
  },
].map((stage) => ({ ...stage, source: sourceRoot + stage.file }));
