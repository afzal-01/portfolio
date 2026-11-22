import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, BarChart2 } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <BarChart2 className="w-8 h-8" />
        </div>
        <h1 className="text-6xl font-black text-slate-900 dark:text-white font-mono tracking-tight mb-2">
          404
        </h1>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
          Dataset Not Found
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The page or query you are looking for has been moved, renamed, or does not exist in this database.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Overview</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
