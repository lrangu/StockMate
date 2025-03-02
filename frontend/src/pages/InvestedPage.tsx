import React from "react";
import { InvestmentCard } from "../components/InvestmentCard";
import { TrendingUp } from "lucide-react";
const investments = [{
  symbol: "AAPL",
  name: "Apple Inc.",
  invested: 10000,
  currentValue: 12500,
  shares: 83.21,
  averagePrice: 120.18,
  currentPrice: 150.23
}, {
  symbol: "GOOGL",
  name: "Alphabet Inc.",
  invested: 15000,
  currentValue: 14200,
  shares: 12.5,
  averagePrice: 1200.0,
  currentPrice: 1136.0
}];
export const InvestedPage = () => {
  const totalInvested = investments.reduce((acc, inv) => acc + inv.invested, 0);
  const totalValue = investments.reduce((acc, inv) => acc + inv.currentValue, 0);
  const totalReturn = (totalValue - totalInvested) / totalInvested * 100;
  return <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-indigo-950">
        My Investments
      </h1>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg shadow-lg mb-6 text-white">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-indigo-100">Total Invested</p>
            <p className="text-xl font-bold">
              ${totalInvested.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-indigo-100">Current Value</p>
            <p className="text-xl font-bold">${totalValue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-indigo-100">Total Return</p>
            <div className="flex items-center gap-1">
              <TrendingUp size={20} />
              <p className="text-xl font-bold">{totalReturn.toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {investments.map(investment => <InvestmentCard key={investment.symbol} {...investment} />)}
      </div>
    </div>;
};