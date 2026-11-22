export interface SkillCategory {
  title: string;
  icon: 'bi' | 'spreadsheet' | 'database' | 'code';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "BI & Visualization",
    icon: "bi",
    skills: [
      "Power BI",
      "Tableau"
    ]
  },
  {
    title: "Spreadsheet Analytics",
    icon: "spreadsheet",
    skills: [
      "Microsoft Excel",
      "Pivot Tables",
      "Pivot Charts",
      "XLOOKUP",
      "Advanced Formulas",
      "Data Cleaning",
      "Conditional Formatting"
    ]
  },
  {
    title: "SQL & Databases",
    icon: "database",
    skills: [
      "SQL",
      "MySQL",
      "SQL Server",
      "Oracle DB",
      "JOINs",
      "CTEs",
      "Window Functions",
      "Aggregations"
    ]
  },
  {
    title: "Python & EDA",
    icon: "code",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib"
    ]
  }
];
