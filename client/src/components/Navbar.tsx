import React, { useState, useEffect } from "react";
import { Leaf, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCopy } from "@fortawesome/free-solid-svg-icons";
import Web3 from "web3";
import contractABI from "../abis/MyContractABI.json"; // Replace with your actual ABI file path
import ecoCoinLogo from "../assets/coin.png"; // Import the image

export function Navbar() {
  const [user, setUser] = useState<any>(null); // State to store user info
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [isWalletConnected, setIsWalletConnected] = useState(false); // Wallet connection state
  const [showDropdown, setShowDropdown] = useState(false); // For profile dropdown menu
  const [balance, setBalance] = useState<string>("0"); // Store balance of ECO tokens
  const navigate = useNavigate();

  const CONTRACT_ADDRESS = "0xB91042244dEA690e7125DBFcdD441b33bB9Ec0FE"; // Replace with your contract's address

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "null");
    setUser(userData);
  }, []);

  // Initialize Web3
  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log("No Ethereum browser detected!");
    }
  }, []);

  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await web3.eth.requestAccounts();
        setAccounts(accounts);
        setIsWalletConnected(true);

        // Fetch balance after connecting wallet
        fetchBalance(accounts[0]);
      } catch (e) {
        console.error("Failed to connect to Metamask:", e);
      }
    }
  };

  const fetchBalance = async (walletAddress: string) => {
    if (web3) {
      try {
        // Initialize the contract
        const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

        // Call the balanceOf function
        const result = await contract.methods.balanceOf(walletAddress).call();

        // Handle BigInt result properly
        if (result) {
          const balance = web3.utils.fromWei(result.toString(), "ether"); // Convert BigInt to string before passing to fromWei
          setBalance(balance);
        } else {
          console.error("Unexpected result from balanceOf:", result);
          setBalance("0");
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
        setBalance("0");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setAccounts([]);
    setBalance("0");
    setIsWalletConnected(false);
    navigate("/"); // Redirect to the home page after logout
  };

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    alert("Wallet address copied to clipboard!");
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-gray-800">Binks</span>
        </div>

        {/* Links and Actions */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/deposit-waste"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Deposit Waste
          </Link>
          <Link
            to="/features"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/rewards"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Rewards
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Contact
          </Link>

          {/* Wallet Connect Button */}
          {isWalletConnected ? (
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                {/* Coin Logo */}
                <img
                  src={ecoCoinLogo} // Use the imported image here
                  alt="ECO Coin Logo"
                  className="w-12 h-12 mr-0" // Adjust the size as needed
                />
                ECO: {balance ? (parseFloat(balance) / 10 ** 18).toFixed(4) : "0.0000"}
              </span>
              <button className="bg-gray-300 text-black px-6 py-2 rounded-full cursor-default">
                Connected
              </button>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Connect Wallet
            </button>
          )}

          {/* User Profile */}
          {user || isWalletConnected ? (
            <div className="relative">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-gray-600 w-8 h-8 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {accounts.length > 0 && (
                    <div className="p-4">
                      <p className="text-sm text-gray-500">Wallet Address:</p>
                      <p className="text-sm text-gray-800 truncate">
                        {accounts[0]}
                      </p>
                      <button
                        className="mt-2 text-sm text-blue-600 hover:underline flex items-center"
                        onClick={() => copyToClipboard(accounts[0])}
                      >
                        <FontAwesomeIcon icon={faCopy} className="mr-2" />
                        Copy Address
                      </button>
                    </div>
                  )}
                  {user && (
                    <div className="p-4">
                      <button
                        onClick={handleLogout}
                        className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors w-full"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </nav>
  );
}
