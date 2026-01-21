import React from "react";
import { FileBarChart } from "lucide-react";

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Sales Dashboard</h1>
        <p className="text-slate-500 text-sm">
          Welcome back, here's what's happening with your sales today.
        </p>
      </div>
      <div className="flex gap-2">
        <a 
          href="#/pnl" 
          className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-all"
        >
          <FileBarChart className="w-4 h-4 mr-2 text-blue-600" /> Financial Report
        </a>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
          + New Sale
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;