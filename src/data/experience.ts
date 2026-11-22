export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location?: string;
  duration: string;
  badgeText: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "genpact",
    company: "genpact",
    position: "Data Analyst",
    location: "Genpact, Madurai",
    duration: "August 2025 – Present",
    badgeText: "Aug 2025 – Present",
    responsibilities: [
      "Built and maintained KPI dashboards in Excel for 3 stakeholder teams.",
      "Gathered, cleaned, and structured multi-source data; applied statistical analysis for trends and root causes.",
      "Collaborated on business requirements and delivered analytical solutions.",
      "Presented clear, decision-ready reports to management.",
      "Automated recurring reporting workflows.",
      "Used SQL (JOINs, CTEs, Window Functions) to reconcile data across systems.",
      "Maintained data accuracy and consistency, signing off on data integrity."
    ]
  },
  {
    id: "deloitte",
    company: "Deloitte.",
    position: "Data Analytics Virtual Intern",
    location: "Deloitte Australia (via Forage)",
    duration: "March 2025",
    badgeText: "March 2025",
    responsibilities: [
      "Completed a Deloitte data analytics job simulation: built a Tableau dashboard, used Excel to classify, and validate datasets, and presented data-driven conclusions in a structured report."
    ]
  }
];
