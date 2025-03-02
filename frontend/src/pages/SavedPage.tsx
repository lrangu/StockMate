import React from "react";
import { DetailedStockCard } from "../components/DetailedStockCard";
const savedStocks = [{
  symbol: "AAPL",
  name: "Apple Inc.",
  price: 150.23,
  change: 2.5,
  marketCap: "2.53T",
  volume: "82.5M",
  peRatio: "28.5",
  dividend: "0.65%"
}, {
  symbol: "MSFT",
  name: "Microsoft Corporation",
  price: 285.32,
  change: -1.2,
  marketCap: "2.12T",
  volume: "65.3M",
  peRatio: "31.2",
  dividend: "0.88%"
}];
export const SavedPage = () => {
  return <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-indigo-950">
        Saved Stocks
      </h1>
      <div className="space-y-4">
        {savedStocks.map(stock => <DetailedStockCard key={stock.symbol} {...stock} />)}
      </div>
    </div>;
};