import React, { useState } from "react";

export const Converter: React.FC = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

return (
    <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white font-sans">
        <h2 className="text-center text-blue-600 mb-6 text-2xl font-extrabold">
            Currency Converter
        </h2>
        <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-800">
                Amount
            </label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
            />
        </div>
        <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-800">From</label>
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-800">To</label>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
        </div>
        <button
            onClick={() => {
                if (amount && !isNaN(Number(amount))) {
                    const conversionRate = 1.1; // Example conversion rate
                    const result = Number(amount) * conversionRate;
                    setConvertedAmount(result);
                } else {
                    setConvertedAmount(null);
                }
            }}
            className="w-full p-3 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            Convert
        </button>
        {convertedAmount !== null && (
            <div className="mt-6 font-semibold text-lg text-gray-900 text-center">
                Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
            </div>
        )}
    </div>
);
};
