export interface Project {
  id: string;
  title: string;
  technology: string;
  date: string;
  category: 'Power BI' | 'SQL' | 'Python';
  image: string;
  videoUrl?: string;
  githubUrl?: string;
  description: string;
  features: string[];
  tools: string[];
  kpis: { label: string; value: string }[];
  caseStudy: {
    challenge: string;
    methodology: string;
    findings: string[];
    technicalHighlights: string[];
  };
}

export const projects: Project[] = [
  {
    id: "blinkit-sales-analysis",
    title: "Blinkit Sales Analysis Dashboard",
    technology: "Power BI, Excel",
    date: "March 2025",
    category: "Power BI",
    image: "/images/blinkit-dashboard.png",
    videoUrl: "/images/Blinkit.mp4",
    description: "Built a KPI-driven Power BI dashboard to track quick-commerce grocery transactions across multiple outlet dimensions, evaluating customer preferences and inventory turnover.",
    features: [
      "Cleaned 8,500+ rows in Excel and built a KPI-driven Power BI dashboard tracking sales across multiple dimensions.",
      "Ran data quality checks, found anomalies in inventory and outlet data, and turned them into clearer reporting for decision-making.",
      "Engineered dynamic slicers for item fat content, outlet tier location, and establishment size.",
      "Evaluated outlet establishment age correlation with transaction volume and customer sentiment."
    ],
    tools: ["Power BI", "Excel", "Data Cleaning", "DAX", "KPI Dashboards"],
    kpis: [
      { label: "Rows Cleaned", value: "8,500+" },
      { label: "Dimensions Tracked", value: "6+" },
      { label: "Outlet Tiers", value: "Tier 1 - 3" },
      { label: "Data Quality Rate", value: "100%" }
    ],
    caseStudy: {
      challenge: "Raw transactional data across grocery outlets contained duplicate records, missing fat content flags, and unstandardized outlet establishment identifiers, preventing management from understanding true outlet profitability.",
      methodology: "Standardized 8,500+ records in Excel using advanced formulas, text manipulation, and validation checks. Designed a Star Schema model in Power BI with custom DAX measures for gross volume, average basket size, and item rating distributions.",
      findings: [
        "Tier 3 city locations generated high repeat transaction volumes, highlighting strong regional quick-commerce demand.",
        "Low-fat grocery items constituted over 64% of total unit velocity across supermarket outlet tiers.",
        "Supermarket Type 1 formats exhibited the most stable inventory turnover rates."
      ],
      technicalHighlights: [
        "Excel XLOOKUP & Nested IF data normalization",
        "DAX measures for Year-over-Year calculations",
        "Interactive cross-filtering and drill-down visual hierarchies"
      ]
    }
  },
  {
    id: "covid-19-data-exploration",
    title: "COVID-19 Data Exploration",
    technology: "SQL, MySQL",
    date: "May 2025",
    category: "SQL",
    image: "/images/covid-dashboard.png",
    githubUrl: "https://github.com/afzal-01/Data-Exploration-COVID-19",
    description: "Deep exploratory data analysis on 100,000+ global health records leveraging advanced SQL queries, window functions, and views to track regional health and vaccination trends.",
    features: [
      "Analysed 100,000+ records using CTEs, Window Functions, and Views to uncover regional health and vaccination trends.",
      "Validated data integrity and visualised anomalies to support clear, accurate insights.",
      "Constructed rolling 7-day moving averages to smooth daily reporting variances across international databases.",
      "Created reusable SQL database views for downstream reporting pipelines and analytical queries."
    ],
    tools: ["SQL", "MySQL", "CTEs", "Window Functions", "SQL Views", "Data Integrity"],
    kpis: [
      { label: "Records Explored", value: "100,000+" },
      { label: "Query Optimization", value: "CTEs & Views" },
      { label: "Metrics Modeled", value: "Rolling Averages" },
      { label: "Data Integrity Check", value: "Verified" }
    ],
    caseStudy: {
      challenge: "Global epidemiological datasets suffered from inconsistent reporting frequencies, sporadic zero-counts, and disparate population scales across 190+ nations.",
      methodology: "Engineered complex SQL scripts in MySQL utilizing Common Table Expressions (CTEs), multi-table JOINs, PARTITION BY window functions, and mathematical aggregations to calculate infection rates per capita and vaccination rollout velocity.",
      findings: [
        "Identified rolling 7-day peak transmission curves ahead of localized reporting consolidations.",
        "Quantified regional vaccination rollout benchmarks and population coverage thresholds.",
        "Isolated testing discrepancies across weekend reporting cycles using date-time window functions."
      ],
      technicalHighlights: [
        "Window Functions: SUM(...) OVER (PARTITION BY Location ORDER BY Date)",
        "CTEs for modular multi-stage metric calculations",
        "Creation of permanent SQL analytical views for fast dashboard querying"
      ]
    }
  },
  {
    id: "restaurant-order-analysis",
    title: "Restaurant Order Analysis",
    technology: "SQL, MySQL",
    date: "June 2025",
    category: "SQL",
    image: "/images/olympics-dashboard.png",
    githubUrl: "https://github.com/afzal-01/restaurant-ordering-analysis",
    description: "Exploratory transactional analysis using SQL to identify top-selling menu items, peak ordering hours, customer ordering patterns, and revenue trends across multi-category orders.",
    features: [
      "Analysed restaurant order records using SQL to identify top-selling menu items, peak ordering hours, and revenue trends.",
      "Cleaned and validated raw data by handling NULL values and duplicates to ensure accurate analysis.",
      "Calculated key metrics such as total revenue, average order value, and category-wise sales using aggregate functions.",
      "Implemented SQL grouping and filtering to detect high-margin dish combinations and reduce kitchen prep bottlenecks."
    ],
    tools: ["SQL", "MySQL", "Aggregate Functions", "Data Cleansing", "Revenue Analysis"],
    kpis: [
      { label: "Orders Dissected", value: "70,000+" },
      { label: "Aggregation Types", value: "Group By & Filters" },
      { label: "Revenue Metrics", value: "AOV & Category Sales" },
      { label: "Data Quality Rate", value: "100% Cleaned" }
    ],
    caseStudy: {
      challenge: "Multi-outlet restaurant chain orders contained incomplete customer item rows, duplicate entries, and inconsistent price modifiers, complicating category profitability and shift scheduling.",
      methodology: "Wrote structured SQL queries handling null values and deduplication. Leveraged COUNT, SUM, AVG, and CASE statements alongside ORDER BY and GROUP BY clauses to segment sales by hour, day of the week, and dish category.",
      findings: [
        "Peak order volume concentrated between 7:00 PM and 9:30 PM on weekends, accounting for 38% of total weekly turnover.",
        "Combo meal attachments boosted average order values (AOV) by 24.5%.",
        "Top 5 signature entrees generated over 52% of total kitchen revenue."
      ],
      technicalHighlights: [
        "Aggregation Queries: SUM(Quantity * UnitPrice) GROUP BY Category",
        "Data hygiene queries filtering NULL order IDs and zero-amount vouchers",
        "Hourly trend categorization with DATEPART and EXTRACT functions"
      ]
    }
  }
];
