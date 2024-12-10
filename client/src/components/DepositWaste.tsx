import React, { useState } from "react";
import Web3 from "web3";
import { useWallet } from "../context/WalletContext";
import contractABI from "../abis/MyContractABI.json";

const CONTRACT_ADDRESS = "0xB91042244dEA690e7125DBFcdD441b33bB9Ec0FE";

const DepositWaste = () => {
  const { walletAddress, connectWallet } = useWallet();
  const [web3] = useState(() => new Web3(window.ethereum));
  const [weight, setWeight] = useState<string>("");
  const [isRecyclable, setIsRecyclable] = useState<boolean>(true);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // NEW: Hardcoded total recyclable waste and target (for progress bar)
  const totalRecycled = 42; // Example value (in kg)
  const recyclingTarget = 100; // Target weight (in kg)
  const recyclingPercentage = (totalRecycled / recyclingTarget) * 100;

  const depositWaste = async () => {
    console.log("Wallet Address:", walletAddress);
    if (!walletAddress) {
      setStatus("Connecting wallet...");
      await connectWallet();
      return;
    }

    if (!weight || isNaN(Number(weight)) || Number(weight) <= 0) {
      setStatus("Enter a valid weight greater than 0.");
      return;
    }

    try {
      const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);
      const weightInWei = web3.utils.toWei(weight, "ether");

      setStatus("Processing transaction...");
      setLoading(true);

      const tx = await contract.methods
        .depositWaste(walletAddress, weightInWei, isRecyclable)
        .send({ from: walletAddress });

      setStatus(`Transaction successful! TxHash: ${tx.transactionHash}`);
    } catch (error) {
      console.error("Error depositing waste:", error);
      setStatus("Transaction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Deposit Waste
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Weight (unit):
          </label>
          <input
            type="number"
            min="0"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter weight"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Is Recyclable:
          </label>
          <select
            value={isRecyclable ? "true" : "false"}
            onChange={(e) => setIsRecyclable(e.target.value === "true")}
            className="border rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button
          onClick={depositWaste}
          disabled={loading}
          className={`w-full px-6 py-2 rounded-lg font-bold text-white transition-colors ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Processing..." : "Deposit Waste"}
        </button>
        {status && (
          <div className="mt-4 p-4 bg-gray-100 border rounded-md">
            {status.includes("Transaction successful!") ? (
              <div className="flex flex-col items-center">
                <p className="text-green-600 font-bold text-lg">
                  🎉 {status.split("!")[0]}!
                </p>
                <p className="text-gray-700 mt-2 break-all text-sm">
                  TxHash:{" "}
                  <span className="font-mono bg-gray-200 px-2 py-1 rounded">
                    {status.split(": ")[1]}
                  </span>
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(status.split(": ")[1]);
                  }}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm"
                >
                  Copy Transaction Hash
                </button>
              </div>
            ) : (
              <p className="text-center text-gray-700">{status}</p>
            )}
          </div>
        )}
        {/* NEW: Recycling Progress Bar */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
            Recycling Progress
          </h3>
          <div className="relative w-full h-6 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600"
              style={{ width: `${recyclingPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-700 mt-2">
            <span>{totalRecycled} kg Recycled</span>
            <span>{recyclingTarget} kg Goal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositWaste;
