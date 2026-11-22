import React from 'react';

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = 'w-3.5 h-3.5' }) => {
  const norm = name.toLowerCase().trim();

  // 1. Power BI
  if (norm.includes('power bi')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="16" width="6" height="12" rx="1.5" fill="#F2C811" />
        <rect x="13" y="10" width="6" height="18" rx="1.5" fill="#E6AD10" />
        <rect x="22" y="4" width="6" height="24" rx="1.5" fill="#C88E07" />
      </svg>
    );
  }

  // 2. Tableau
  if (norm.includes('tableau')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center cross */}
        <rect x="14" y="8" width="4" height="16" rx="1" fill="#E8762D" />
        <rect x="8" y="14" width="16" height="4" rx="1" fill="#E8762D" />
        {/* Top/Right/Bottom/Left small crosses */}
        <rect x="14.5" y="2" width="3" height="6" rx="0.5" fill="#5C8EB0" />
        <rect x="13" y="3.5" width="6" height="3" rx="0.5" fill="#5C8EB0" />
        <rect x="14.5" y="24" width="3" height="6" rx="0.5" fill="#5C8EB0" />
        <rect x="13" y="25.5" width="6" height="3" rx="0.5" fill="#5C8EB0" />
        <rect x="2" y="14.5" width="6" height="3" rx="0.5" fill="#E8412D" />
        <rect x="3.5" y="13" width="3" height="6" rx="0.5" fill="#E8412D" />
        <rect x="24" y="14.5" width="6" height="3" rx="0.5" fill="#6C943E" />
        <rect x="25.5" y="13" width="3" height="6" rx="0.5" fill="#6C943E" />
      </svg>
    );
  }

  // 3. Microsoft Excel / Excel
  if (norm === 'excel' || norm.includes('microsoft excel')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="26" height="24" rx="3" fill="#107C41" />
        <rect x="13" y="8" width="13" height="16" rx="1.5" fill="#185C37" opacity="0.6" />
        {/* Grid lines inside */}
        <line x1="13" y1="13" x2="26" y2="13" stroke="#A7E3B8" strokeWidth="1" strokeOpacity="0.8" />
        <line x1="13" y1="18" x2="26" y2="18" stroke="#A7E3B8" strokeWidth="1" strokeOpacity="0.8" />
        <line x1="19" y1="8" x2="19" y2="24" stroke="#A7E3B8" strokeWidth="1" strokeOpacity="0.8" />
        {/* White X symbol */}
        <path d="M7 11L11.5 21M11.5 11L7 21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. MySQL
  if (norm === 'mysql') {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 19C7 13 12 8 18 8C23 8 26 11 27 15C25 14 22 14 20 15C17 12 13 13 11 16C9 18 8 22 8 24C6 23 5 21 6 19Z"
          fill="#00758F"
        />
        <path
          d="M17 19C19 16 23 15 26 17C24 19 21 21 19 22C17 23 14 23 12 21C14 20 16 20 17 19Z"
          fill="#F29111"
        />
        <circle cx="21" cy="11" r="1.5" fill="#00758F" />
      </svg>
    );
  }

  // 5. SQL / SQL Server / General SQL
  if (norm === 'sql' || norm.includes('sql server') || norm.includes('database')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="8" rx="10" ry="4" fill="#00758F" />
        <path d="M6 8V16C6 18.2 10.5 20 16 20C21.5 20 26 18.2 26 16V8" stroke="#38BDF8" strokeWidth="2" fill="none" />
        <path d="M6 16V24C6 26.2 10.5 28 16 28C21.5 28 26 26.2 26 24V16" stroke="#00758F" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // 6. Oracle DB
  if (norm.includes('oracle')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="9" width="24" height="14" rx="7" stroke="#F80000" strokeWidth="3" fill="none" />
      </svg>
    );
  }

  // 7. Python
  if (norm === 'python') {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Blue snake */}
        <path
          d="M15.5 4C9.5 4 10 6.5 10 6.5L10 9H16V10H7C7 10 4 9.5 4 15.5C4 21.5 6.5 21 6.5 21H8.5V18C8.5 15 11 15 11 15H17C19.5 15 20 13.5 20 11V6.5C20 6.5 20.5 4 15.5 4ZM13 6C13.5 6 14 6.5 14 7C14 7.5 13.5 8 13 8C12.5 8 12 7.5 12 7C12 6.5 12.5 6 13 6Z"
          fill="#3776AB"
        />
        {/* Yellow snake */}
        <path
          d="M16.5 28C22.5 28 22 25.5 22 25.5V23H16V22H25C25 22 28 22.5 28 16.5C28 10.5 25.5 11 25.5 11H23.5V14C23.5 17 21 17 21 17H15C12.5 17 12 18.5 12 21V25.5C12 25.5 11.5 28 16.5 28ZM19 26C18.5 26 18 25.5 18 25C18 24.5 18.5 24 19 24C19.5 24 20 24.5 20 25C20 25.5 19.5 26 19 26Z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // 8. Pandas
  if (norm.includes('pandas')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="10" width="4" height="12" rx="1.5" fill="#150458" />
        <rect x="14" y="6" width="4" height="20" rx="1.5" fill="#E70488" />
        <rect x="21" y="12" width="4" height="10" rx="1.5" fill="#FFD13B" />
      </svg>
    );
  }

  // 9. NumPy
  if (norm.includes('numpy')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L27 10V22L16 28L5 22V10L16 4Z" fill="#013243" stroke="#4DABCF" strokeWidth="1.5" />
        {/* Inner stylized N */}
        <path d="M11 12V20L21 12V20" stroke="#4DABCF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 10. Matplotlib
  if (norm.includes('matplotlib')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#11557C" strokeWidth="2" fill="#10152A" />
        {/* Wave curve */}
        <path d="M7 18C10 13 13 13 16 18C19 23 22 23 25 15" stroke="#FF7F0E" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="18" r="2" fill="#2CA02C" />
      </svg>
    );
  }

  // 11. Pivot Tables / Pivot Charts
  if (norm.includes('pivot')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="22" height="22" rx="3" stroke="#107C41" strokeWidth="2" />
        <path d="M5 12H27M12 5V27" stroke="#107C41" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="3" fill="#A855F7" />
      </svg>
    );
  }

  // 12. XLOOKUP / Formulas
  if (norm.includes('xlookup') || norm.includes('formula')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="7" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M19 19L26 26" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 14H17" stroke="#C084FC" strokeWidth="1.5" />
      </svg>
    );
  }

  // 13. Data Cleaning / Formatting
  if (norm.includes('cleaning') || norm.includes('formatting')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L19 10L25 11L21 16L22 22L16 19L10 22L11 16L7 11L13 10L16 4Z" fill="#A855F7" opacity="0.8" />
      </svg>
    );
  }

  // 14. JOINs / CTEs / Window Functions / Aggregations
  if (norm.includes('join') || norm.includes('cte') || norm.includes('window') || norm.includes('aggregation')) {
    return (
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="16" r="7" stroke="#38BDF8" strokeWidth="2" fill="none" />
        <circle cx="20" cy="16" r="7" stroke="#8B5CF6" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="5" fill="#8B5CF6" />
    </svg>
  );
};
