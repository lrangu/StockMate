import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { StockCard } from "../components/StockCard";
const mockData = {
  symbol: "AAPL",
  name: "Apple Inc.",
  price: 150.23,
  change: 2.5,
  marketCap: "2.53T",
  volume: "82.5M",
  peRatio: "28.5",
  dividend: "0.65%",
  data: Array.from({
    length: 20
  }, (_, i) => ({
    value: Math.random() * 10 + 145
  }))
};
export const DiscoverPage = () => {
  return <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-indigo-950">
        Discover Stocks
      </h1>
      <div className="relative flex flex-col">
        <StockCard {...mockData} />
        <div className="flex w-full max-w-md mx-auto">
          <button className="flex-1 py-6 bg-rose-100 text-rose-500 hover:bg-rose-200 transition-colors flex items-center justify-center gap-3 rounded-bl-lg">
            <ThumbsDown size={28} />
            <span className="font-semibold text-lg">Skip</span>
          </button>
          <button className="flex-1 py-6 bg-emerald-100 text-emerald-500 hover:bg-emerald-200 transition-colors flex items-center justify-center gap-3 rounded-br-lg">
            <ThumbsUp size={28} />
            <span className="font-semibold text-lg">Save</span>
          </button>
        </div>
      </div>
    </div>;
};