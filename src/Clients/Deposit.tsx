import { useState } from "react";
import {
  CreditCard,
  Wallet,
  Copy,
  CheckCircle,
  AlertCircle,
  Bitcoin,
  DollarSign,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";

const cryptoAddresses = {
  bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  ethereum: "0x742d35Cc6634C0532925a3b8D429d3e61d8ed1a4",
  usdt: "TPYuqJ8RzFv3qXJVGbhQ8YzyJW6xSoNmqZ",
} as const;

type CryptoType = keyof typeof cryptoAddresses;


const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState<CryptoType>("bitcoin");
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const paymentMethods = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      icon: <Bitcoin className="w-6 h-6" />,
      fee: "0%",
      minDeposit: "$10",
      processingTime: "Instant",
      color: "from-red-400 to-red-600",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      icon: <Wallet className="w-6 h-6" />,
      fee: "0%",
      minDeposit: "$10",
      processingTime: "Instant",
      color: "from-red-500 to-red-700",
    },
    {
      id: "usdt",
      name: "USDT (TRC20)",
      icon: <DollarSign className="w-6 h-6" />,
      fee: "0%",
      minDeposit: "$10",
      processingTime: "Instant",
      color: "from-red-600 to-red-800",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen text-white">
        {/* Fixed background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-red-900/30 to-slate-900/95"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-red-400/5 to-red-500/5"></div>

      {/* Fixed animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-20 h-20 bg-red-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 w-16 h-16 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-red-400/8 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-red-400/6 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>
      <div className="relative overflow-y-auto h-screen">
        <div className="p-6 pb-20">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
              <Wallet className="w-8 h-8 mr-3 text-red-500" />
              Make a Deposit
            </h1>
            <p className="text-slate-300 text-lg">
              Fund your account securely with cryptocurrency
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Payment Methods */}
              <div className="bg-slate-900/90 border border-red-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-red-500" />
                  Select Payment Method
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id as CryptoType)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedMethod === method.id
                          ? "border-red-500 bg-red-500/10"
                          : "border-slate-700 bg-slate-800 hover:border-red-500/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${method.color} text-white`}
                        >
                          {method.icon}
                        </div>
                        {selectedMethod === method.id && (
                          <CheckCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                      <h3 className="font-semibold mb-1">{method.name}</h3>
                      <div className="space-y-1 text-sm text-slate-300">
                        <p>
                          Fee: <span className="text-red-400">{method.fee}</span>
                        </p>
                        <p>Min: <span>{method.minDeposit}</span></p>
                        <p>
                          Time: <span className="text-red-400">{method.processingTime}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <div className="bg-slate-900/40 border border-red-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-4">Enter Amount</h2>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <DollarSign className="w-5 h-5 text-red-500" />
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter deposit amount"
                    className="w-full pl-10 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Wallet Address */}
              <div className="bg-slate-900/40 border border-red-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-4">Payment Address</h2>
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">
                      {paymentMethods.find((m) => m.id === selectedMethod)?.name} Address
                    </span>
                    <button
                      onClick={() => copyToClipboard(cryptoAddresses[selectedMethod])}
                      className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors"
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {copied ? "Copied!" : "Copy"}
                      </span>
                    </button>
                  </div>
                  <div className="break-all font-mono text-sm bg-slate-900 p-3 rounded border border-slate-700 text-slate-100">
                    {cryptoAddresses[selectedMethod]}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Deposit Summary */}
              <div className="bg-slate-900/40 border border-red-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4">Deposit Summary</h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>Method:</span>
                    <span>{paymentMethods.find((m) => m.id === selectedMethod)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>${amount || "0.00"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee:</span>
                    <span className="text-red-400">$0.00</span>
                  </div>
                  <div className="border-t border-slate-700 pt-3 font-semibold flex justify-between">
                    <span>Total:</span>
                    <span className="text-red-400">${amount || "0.00"}</span>
                  </div>
                </div>
                <button
                  disabled={!amount || parseFloat(amount) < 10}
                  className="w-full mt-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Important Notes */}
              <div className="bg-slate-900/40 border border-red-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                  Important Notes
                </h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Minimum deposit amount is $10</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Deposits are processed instantly after network confirmation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>All deposits are secured with advanced encryption</span>
                  </div>
                </div>
              </div>

              {/* Recent Deposits */}
              <div className="bg-slate-900/40 border border-red-500/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4">Recent Deposits</h3>
                <div className="space-y-3">
                  <div className="text-center text-slate-500 py-8">
                    <Wallet className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No recent deposits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;

