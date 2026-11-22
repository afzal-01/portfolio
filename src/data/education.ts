export interface EducationItem {
  degree: string;
  institution: string;
  grade: string;
  period: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: 'trophy' | 'chart' | 'users';
}

export const educationData: EducationItem[] = [
  {
    degree: "B.E. Computer Science",
    institution: "Aalim Muhammed Salegh College of Engineering",
    grade: "CGPA: 7.9",
    period: "Nov 2021 – Jun 2025"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Rahmania Matric Hr. Sec. School",
    grade: "90%",
    period: "Jun 2021"
  },
  {
    degree: "Secondary School Certificate (SSLC)",
    institution: "Rahmania Matric Hr. Sec. School",
    grade: "90%",
    period: "Jun 2019"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "hackerrank-sql",
    title: "HackerRank SQL Silver Badge",
    description: "Demonstrated SQL querying proficiency.",
    icon: "trophy"
  },
  {
    id: "powerbi-kpis",
    title: "Built a dynamic Power BI dashboard",
    description: "With real-time KPIs for sales performance tracking.",
    icon: "chart"
  },
  {
    id: "customer-behaviour",
    title: "Leveraged customer behaviour analysis",
    description: "To develop retention strategies and improve reporting outcomes.",
    icon: "users"
  }
];
