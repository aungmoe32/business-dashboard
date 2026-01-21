import React, { useState, useEffect } from "react";
import {
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  LayoutDashboard,
  BarChart3,
  Package,
  ShoppingCart,
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ProfitLossReport from "./pages/ProfitLossReport";

const App: React.FC = () => {
  // Normalize hash to handle different browser patterns
  const getNormalizedHash = () => {
    const hash = window.location.hash || "#/";
    return hash === "#" ? "#/" : hash;
  };

  const [currentPath, setCurrentPath] = useState(getNormalizedHash());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getNormalizedHash());
      setIsSidebarOpen(false);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    const normalized = currentPath.toLowerCase();

    if (normalized === "#/" || normalized === "") {
      return <Dashboard />;
    }

    if (normalized === "#/pnl" || normalized === "#/profit-loss") {
      return <ProfitLossReport />;
    }

    // Default "Under Construction" page
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <div className="bg-slate-100 p-8 rounded-full mb-6 text-slate-400">
          <Search className="w-16 h-16" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Page Under Construction
        </h2>
        <div className="mt-8 flex gap-4">
          <a
            href="#/"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Go to Dashboard
          </a>
          <a
            href="#/pnl"
            className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all"
          >
            Financial Report
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Component (Desktop) */}
      <Sidebar currentPath={currentPath} />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-blue-600 text-white">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">Business</span>
          </div>
          <button
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full pb-20">
          <nav className="space-y-2">
            {[
              {
                name: "Dashboard",
                path: "#/",
                icon: <LayoutDashboard className="w-5 h-5" />,
              },
              {
                name: "Profit / Loss Report",
                path: "#/pnl",
                icon: <BarChart3 className="w-5 h-5" />,
              },
              {
                name: "POS Screen",
                path: "#/pos",
                icon: <ShoppingCart className="w-5 h-5" />,
              },
              {
                name: "Products",
                path: "#/products",
                icon: <Package className="w-5 h-5" />,
              },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                  currentPath === item.path
                    ? "bg-blue-50 text-blue-700 font-bold shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      currentPath === item.path
                        ? "text-blue-600"
                        : "text-slate-400"
                    }
                  >
                    {item.icon}
                  </span>
                  {item.name}
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${currentPath === item.path ? "translate-x-1" : "opacity-0"}`}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:pl-64 min-h-screen">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 fixed top-0 right-0 left-0 lg:left-64 z-30 px-4 lg:px-10 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Search className="w-4 h-4 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search analytics, invoices..."
                className="bg-transparent border-none text-sm focus:ring-0 w-64 text-slate-700 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-full relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-10 w-px bg-slate-200 mx-2 hidden lg:block"></div>

            <div className="flex items-center gap-3 group cursor-pointer p-1 rounded-xl hover:bg-slate-50 transition-all">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                AD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 pt-28 pb-16 px-4 lg:px-10 max-w-[1400px] mx-auto w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
          {renderPage()}
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-200 bg-white/50 text-center">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-[0.15em]">
            Business Engine v2.4.1 • Secure Financial Instance
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
