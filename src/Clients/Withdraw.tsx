import { useEffect, useState } from "react";
import { 
  ArrowDownLeft,
  Clock,
  CheckCircle,
  Eye,
  EyeOff,
  Bitcoin,
  Wallet,
  DollarSign,
  CreditCard,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { useSelector } from "react-redux";

import axios from "../config/axiosconfig";
import toast from "react-hot-toast";

type PaymentMethod = "btc" | "eth" | "usdt" | "bank" | "paypal";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("btc");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const token = useSelector((state: any) => state.user.Token);
  // const navigate = useNavigate();

  const paymentMethods = [
    {
      id: "btc",
      name: "Bitcoin",
      icon: <Bitcoin className="w-5 h-5" />,
      color: "from-orange-400 to-orange-600",
      minAmount: 50,
      fee: "0.0005 BTC",
      processingTime: "5-30 min",
      addressLabel: "BTC Wallet Address",
    },
    {
      id: "eth",
      name: "Ethereum",
      icon: <Wallet className="w-5 h-5" />,
      color: "from-blue-400 to-blue-600",
      minAmount: 30,
      fee: "0.005 ETH",
      processingTime: "2-15 min",
      addressLabel: "ETH Wallet Address",
    },
    {
      id: "usdt",
      name: "USDT (TRC20)",
      icon: <DollarSign className="w-5 h-5" />,
      color: "from-green-400 to-green-600",
      minAmount: 20,
      fee: "1 USDT",
      processingTime: "1-10 min",
      addressLabel: "USDT Wallet Address (TRC20)",
    },
  ];

  const selectedPaymentMethod = paymentMethods.find(
    (m) => m.id === paymentMethod
  );

  const getOneUser = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("User ID not found");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`/user/userprofile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      toast.error("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getOneUser();
    }
  }, [token]);

  const isValidAmount = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return false;
    if (selectedPaymentMethod && numAmount < selectedPaymentMethod.minAmount)
      return false;
    if (user && numAmount > user.accountBalance) return false;
    return true;
  };

  const handleWithdraw = async () => {
    if (!amount || !walletAddress || !paymentMethod) {
      toast.error("Please fill all fields before withdrawing.");
      return;
    }

    if (!isValidAmount()) {
      toast.error(
        `Invalid amount. Minimum: $${selectedPaymentMethod?.minAmount}`
      );
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("User ID not found");
      return;
    }

    const requestData = {
      amount: parseFloat(amount),
      add: walletAddress,
      mode: paymentMethod,
    };

    const toastLoadingId = toast.loading("Processing withdrawal...");
    setIsProcessing(true);

    try {
      const response = await axios.post(
        `/user/withdraw/${userId}`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Reset form fields
      setPaymentMethod("btc");
      setAmount("");
      setWalletAddress("");

      toast.dismiss(toastLoadingId);
      toast.success(
        response.data.message || "Withdrawal request sent successfully!"
      );

      // Refresh user data
      getOneUser();
    } catch (error: any) {
      toast.dismiss(toastLoadingId);
      console.error("Withdrawal Error:", error.response?.data);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-red-400" />
      </div>
    );
  }


  return (
    <div className="min-h-screen text-white relative">
      {/* Fixed background layers - matching Overview */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-red-900/30 to-slate-900/95"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-red-400/5 to-red-500/5"></div>

      {/* Fixed animated particles - matching Overview */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-20 h-20 bg-red-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 w-16 h-16 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-red-400/8 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-red-400/6 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Scrollable content */}
      <div className="relative overflow-y-auto h-screen custom-scrollbar">
        <div className="p-6 pb-20">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
              <ArrowDownLeft className="w-8 h-8 mr-3 text-red-400" />
              Withdrawal
            </h1>
            <p className="text-slate-300 text-lg">
              Withdraw your earnings securely
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Withdrawal Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Available Balance */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Wallet className="w-5 h-5 mr-2 text-red-400" />
                  Available Balance
                </h2>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-red-400">
                    {showBalance
                      ? `$${user?.accountBalance || "0.00"}`
                      : "****"}
                  </span>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-slate-400 hover:text-red-400 transition-colors p-2 hover:bg-red-500/10 rounded-lg"
                  >
                    {showBalance ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-red-400" />
                  Select Withdrawal Method
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() =>
                        setPaymentMethod(method.id as PaymentMethod)
                      }
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        paymentMethod === method.id
                          ? "border-red-400/50 bg-red-500/10 shadow-lg shadow-red-500/10"
                          : "border-red-500/20 bg-slate-900/30 hover:border-red-400/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${method.color} shadow-lg`}
                        >
                          {method.icon}
                        </div>
                        {paymentMethod === method.id && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                      </div>
                      <h3 className="font-semibold text-white mb-1">
                        {method.name}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-slate-300">
                          Min:{" "}
                          <span className="text-green-400">
                            ${method.minAmount}
                          </span>
                        </p>
                        <p className="text-slate-300">
                          Fee:{" "}
                          <span className="text-green-400">{method.fee}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amount and Address */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300">
                <h2 className="text-xl font-bold text-white mb-4">
                  Withdrawal Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Withdrawal Amount
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder={`Min: $${
                          selectedPaymentMethod?.minAmount || 0
                        }`}
                        min={selectedPaymentMethod?.minAmount || 0}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                      />
                    </div>
                    {amount && !isValidAmount() && (
                      <p className="text-red-400 text-sm mt-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {parseFloat(amount) > (user?.accountBalance || 0)
                          ? "Insufficient balance"
                          : `Minimum withdrawal: $${selectedPaymentMethod?.minAmount}`}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      {selectedPaymentMethod?.addressLabel || "Address"}
                    </label>
                    <textarea
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      placeholder={`Enter your ${
                        selectedPaymentMethod?.addressLabel?.toLowerCase() ||
                        "address"
                      }`}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Withdrawal Summary */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-4">
                  Withdrawal Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Method:</span>
                    <span className="text-white">
                      {selectedPaymentMethod?.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Amount:</span>
                    <span className="text-white">${amount || "0.00"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Fee:</span>
                    <span className="text-red-400">
                      {selectedPaymentMethod?.fee}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Processing:</span>
                    <span className="text-red-400">
                      {selectedPaymentMethod?.processingTime}
                    </span>
                  </div>
                  <div className="border-t border-red-500/20 pt-3">
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">You'll receive:</span>
                      <span className="text-red-400">
                        ${amount || "0.00"}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleWithdraw}
                  disabled={
                    !amount ||
                    !walletAddress ||
                    !isValidAmount() ||
                    isProcessing
                  }
                  className="w-full mt-6 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:scale-105 active:scale-95"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownLeft className="w-4 h-4" />
                      <span>Request Withdrawal</span>
                    </>
                  )}
                </button>
              </div>

              {/* Important Notes */}
              <div className="bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-red-400" />
                  Important Notes
                </h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Withdrawals are processed within 24-48 hours</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Ensure your wallet address is correct before submitting
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Minimum withdrawal amounts vary by payment method
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Custom scrollbar styling - matching Overview */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.3);
          border-radius: 3px;
          border: 1px solid rgba(239, 68, 68, 0.1);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Withdraw;