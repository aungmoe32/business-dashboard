import React from "react";

export interface SaleTransaction {
  id: string;
  customer: string;
  amount: number;
  date: string;
  status: "Final" | "Draft" | "Quotation" | "Suspended";
  paymentStatus: "Paid" | "Due" | "Partial";
  location: string;
}

export interface SummaryCardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon: React.ReactNode;
  color: string;
}

export interface ProfitLossData {
  openingStock: number;
  totalPurchases: number;
  totalExpenses: number;
  totalStockAdjustment: number;
  totalStockRecovered: number;
  totalSales: number;
  closingStock: number;
}
