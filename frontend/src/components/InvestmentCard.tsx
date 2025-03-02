import React from "react";
import { TrendingUp, TrendingDown, Clock, DollarSign } from "lucide-react";
interface InvestmentCardProps {
  symbol: string;
  name: string;
  invested: number;
  currentValue: number;
  shares: number;
  averagePrice: number;
  currentPrice: number;
}
export const InvestmentCard = ({
  symbol,
  name,
  invested,
  currentValue,
  shares,
  averagePrice,
  currentPrice
}: InvestmentCardProps) => {
  const returnValue = currentValue - invested;
  const returnPercentage = returnValue / invested * 100;
  const isPositive = returnValue >= 0;
  return <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-50">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-indigo-950">{symbol}</h2>
          <p className="text-indigo-600">{name}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-indigo-950">
            ${currentValue.toLocaleString()}
          </p>
          <p className={`flex items-center justify-end ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>
              {returnPercentage >= 0 ? "+" : ""}
              {returnPercentage.toFixed(2)}%
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 bg-indigo-50 p-4 rounded-lg">
        <div>
          <p className="text-sm text-indigo-600">Shares Owned</p>
          <p className="font-semibold text-indigo-950">{shares.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-indigo-600">Average Cost</p>
          <p className="font-semibold text-indigo-950">
            ${averagePrice.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-indigo-600">Current Price</p>
          <p className="font-semibold text-indigo-950">
            ${currentPrice.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-indigo-600">Total Return</p>
          <p className={`font-semibold ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
            ${Math.abs(returnValue).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2 text-indigo-600">
          <Clock size={16} />
          <span>Holding Period: 145 days</span>
        </div>
        <div className="flex items-center gap-2 text-indigo-600">
          <DollarSign size={16} />
          <span>Daily Avg. Return: +0.32%</span>
        </div>
      </div>
    </div>;
};