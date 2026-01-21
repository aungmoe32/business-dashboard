import React from "react";
import { NAV_ITEMS } from "../../constants";
import { LayoutDashboard } from "lucide-react";

interface SidebarProps {
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath }) => {
  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 pt-5 hidden lg:block">
      <div className="px-6 pb-4 border-b border-slate-100 flex items-center gap-2">
        <LayoutDashboard className="w-6 h-6" />
        <span className="font-bold text-xl tracking-tight">Business</span>
      </div>
      <div className="px-4 py-6">
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              currentPath === item.path ||
              (currentPath === "" && item.path === "#/");
            return (
              <a
                key={item.name}
                href={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className={isActive ? "text-blue-600" : "text-slate-400"}>
                  {item.icon}
                </span>
                <span className="ml-3">{item.name}</span>
              </a>
            );
          })}
        </nav>
      </div>
      <div className="absolute bottom-0 w-full p-4 border-t border-slate-100">
        <div className="flex items-center p-2 rounded-lg bg-slate-50">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            AD
          </div>
          <div className="ml-3">
            <p className="text-xs font-semibold text-slate-900">Admin User</p>
            <p className="text-[10px] text-slate-500">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
