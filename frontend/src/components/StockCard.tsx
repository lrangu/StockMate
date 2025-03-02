import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { LineChart, Line, YAxis } from "recharts";
interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  data: {
    value: number;
  }[];
  marketCap?: string;
  volume?: string;
  peRatio?: string;
  dividend?: string;
}
export const StockCard = ({
  symbol,
  name,
  price,
  change,
  data,
  marketCap = "2.53T",
  volume = "82.5M",
  peRatio = "28.5",
  dividend = "0.65%"
}: StockCardProps) => {
  const isPositive = change >= 0;
  return <div className="bg-white p-8 rounded-t-lg shadow-lg w-full max-w-md mx-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-indigo-950">{symbol}</h2>
          <p className="text-lg text-indigo-600">{name}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-indigo-950">
            ${price.toFixed(2)}
          </div>
          <div className={`flex items-center justify-end ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
            {isPositive ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
            <span className="text-lg font-semibold">{Math.abs(change)}%</span>
          </div>
        </div>
      </div>
      <div className="h-40 mb-6">
        <LineChart width={300} height={140} data={data}>
          <YAxis domain={["dataMin", "dataMax"]} hide />
          <Line type="monotone" dataKey="value" stroke={isPositive ? "#10b981" : "#f43f5e"} strokeWidth={3} dot={false} />
        </LineChart>
      </div>
      <div className="grid grid-cols-2 gap-6 bg-indigo-50 p-6 rounded-lg">
        <div>
          <p className="text-sm text-indigo-600 mb-1">Market Cap</p>
          <p className="text-lg font-semibold text-indigo-950">${marketCap}</p>
        </div>
        <div>
          <p className="text-sm text-indigo-600 mb-1">Volume</p>
          <p className="text-lg font-semibold text-indigo-950">{volume}</p>
        </div>
        <div>
          <p className="text-sm text-indigo-600 mb-1">P/E Ratio</p>
          <p className="text-lg font-semibold text-indigo-950">{peRatio}</p>
        </div>
        <div>
          <p className="text-sm text-indigo-600 mb-1">Dividend Yield</p>
          <p className="text-lg font-semibold text-indigo-950">{dividend}</p>
        </div>
      </div>
    </div>;
};