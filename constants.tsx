import React from "react";
import {
  LayoutDashboard,
  FileText,
  ShoppingCart,
  Package,
  Users,
  Settings,
  BarChart3,
  CreditCard,
} from "lucide-react";

export const NAV_ITEMS = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: "#/",
  },
  {
    name: "Profit / Loss Report",
    icon: <BarChart3 className="w-5 h-5" />,
    path: "#/pnl",
  },
  {
    name: "POS Screen",
    icon: <ShoppingCart className="w-5 h-5" />,
    path: "#/pos",
  },
  {
    name: "Products",
    icon: <Package className="w-5 h-5" />,
    path: "#/products",
  },
];

export const MOCK_SALES: any[] = [
  {
    id: "INV001",
    customer: "Walk-In Customer",
    amount: 2850000,
    date: "2024-05-20",
    status: "Final",
    paymentStatus: "Paid",
    location: "Main Branch",
  },
  {
    id: "INV002",
    customer: "Maung Thant (Regular)",
    amount: 450000,
    date: "2024-05-20",
    status: "Final",
    paymentStatus: "Paid",
    location: "Branch A",
  },
  {
    id: "INV003",
    customer: "Daw Khin Swe",
    amount: 8750000,
    date: "2024-05-19",
    status: "Final",
    paymentStatus: "Partial",
    location: "Main Branch",
  },
  {
    id: "QTN001",
    customer: "Golden Myanmar Co.",
    amount: 15600000,
    date: "2024-05-19",
    status: "Quotation",
    paymentStatus: "Due",
    location: "Branch B",
  },
  {
    id: "INV004",
    customer: "Ko Zaw Min",
    amount: 1200000,
    date: "2024-05-18",
    status: "Suspended",
    paymentStatus: "Due",
    location: "Branch A",
  },
];

export const PROFIT_LOSS_DATA = {
  // A. Revenue Section
  grossSales: 680000,
  salesReturns: 8000,
  netSales: 672000,

  // B. Cost of Goods Sold (COGS)
  openingStock: 125000,
  purchases: 450000,
  purchaseReturns: 5000,
  directCosts: 12000, // freight, import, packaging
  closingStock: 145000,

  // D. Operating Expenses
  operatingExpenses: {
    rent: 15000,
    salariesAndWages: 45000,
    utilities: 8000,
    marketingAndAdvertising: 7500,
    transportation: 3000,
    officeExpenses: 4500,
    commission: 8000,
    depreciation: 2000,
    otherExpenses: 6000,
  },

  // F. Other Income & Expenses
  otherIncome: 2500, // interest, service income
  nonOperatingExpenses: 1200,
  taxes: 15000,

  // Legacy fields for backward compatibility
  totalExpenses: 75000,
  totalStockAdjustment: 2500,
  totalStockRecovered: 800,
  totalSales: 680000,
};

export const SALES_CHART_DATA = [
  { name: "Mon", sales: 8500000, purchases: 5200000 },
  { name: "Tue", sales: 6200000, purchases: 3800000 },
  { name: "Wed", sales: 4800000, purchases: 6500000 },
  { name: "Thu", sales: 7300000, purchases: 4900000 },
  { name: "Fri", sales: 5900000, purchases: 4100000 },
  { name: "Sat", sales: 9200000, purchases: 6800000 },
  { name: "Sun", sales: 7100000, purchases: 5300000 },
];
