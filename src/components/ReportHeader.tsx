import React from "react";
import { Download, Calendar, Printer } from "lucide-react";

interface ReportHeaderProps {
  onExportCSV: () => void;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({ onExportCSV }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Profit or Loss Report
        </h1>
        <p className="text-slate-500 text-sm">
          Comprehensive summary of your business financial performance.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
          <Calendar className="w-4 h-4 mr-2" /> This Month
        </button>
        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
          <Printer className="w-4 h-4" />
        </button>
        <button 
          onClick={onExportCSV}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4 mr-2" /> Export CSV
        </button>
      </div>
    </div>
  );
};

export default ReportHeader;