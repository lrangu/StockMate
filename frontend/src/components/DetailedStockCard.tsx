import React from "react";
import { ArrowUp, ArrowDown, Trash2, PiggyBank } from "lucide-react";
interface DetailedStockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  marketCap: string;
  volume: string;
  peRatio: string;
  dividend: string;
}
export const DetailedStockCard = ({
  symbol,
  name,
  price,
  change,
  marketCap,
  volume,
  peRatio,
  dividend
}: DetailedStockCardProps) => {
  const isPositive = change >= 0;
  return <div className="bg-white p-6 rounded-lg shadow-lg border border-indigo-50">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          <div>
            <h2 className="text-xl font-bold text-indigo-950">{symbol}</h2>
            <p className="text-indigo-600">{name}</p>
          </div>
          <div className="text-indigo-400" size={20} />
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-indigo-950">
            ${price.toFixed(2)}
          </p>
          <p className={`flex items-center justify-end ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
            {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            <span>{Math.abs(change)}%</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6 bg-indigo-50 p-4 rounded-lg">
        <div>
          <p className="text-sm text-indigo-600">Market Cap</p>
          <p className="font-semibold text-indigo-950">${marketCap}</p>
        </div>
        <div>
          <p className="text-sm text-indigo-600">Volume</p>
          <p className="font-semibold text-indigo-950">{volume}</p>
        </div>
        <div>
          <p className="text-sm text-indigo-600">P/E Ratio</p>
          <p className="font-semibold text-indigo-950">{peRatio}</p>
        </div>
        <div>
          <p className="text-sm text-indigo-600">Dividend Yield</p>
          <p className="font-semibold text-indigo-950">{dividend}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-600 py-2 px-4 rounded-lg transition-colors">
          <PiggyBank size={18} />
          <span className="font-semibold">Invest</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-rose-100 hover:bg-rose-200 text-rose-500 py-2 px-4 rounded-lg transition-colors">
          <Trash2 size={18} />
          <span className="font-semibold">Remove</span>
        </button>
      </div>
    </div>;
};