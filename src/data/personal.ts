export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  heroGreeting: string;
  bio: string;
  aboutIntro: string;
  phone: string;
  email: string;
  location: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
  metrics: {
    value: string;
    label: string;
    icon: 'users' | 'database' | 'records';
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Afzal Hameed Faiz",
  role: "Data Analyst | Business Intelligence",
  headline: "Turning Data Into Meaningful Business Insights",
  heroGreeting: "HELLO, I'M",
  bio: "Data Analyst with hands-on experience in business intelligence, KPI dashboards, and data quality at Genpact. Skilled in Excel, SQL, Power BI, and Tableau, with a proven ability to turn large, multi-source datasets into clear insights for management.",
  aboutIntro: "I'm a Data Analyst with experience in building KPI dashboards, analysing multi-source data, ensuring data quality, and delivering clear, decision-ready insights. I work well independently and with cross-functional teams to solve business problems through data.",
  phone: "+91 7373786702",
  email: "afzalfaiz0110@gmail.com",
  location: "India",
  socials: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  metrics: [
    {
      value: "3",
      label: "Stakeholder Teams",
      icon: "users"
    },
    {
      value: "8,500+",
      label: "Rows Analysed",
      icon: "database"
    },
    {
      value: "100,000+",
      label: "Records Explored",
      icon: "records"
    }
  ]
};
