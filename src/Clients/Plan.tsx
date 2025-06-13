// import { TrendingUp, Clock, DollarSign, Target, CheckCircle, Activity, Calendar, AlertCircle } from 'lucide-react';
// import toast from 'react-hot-toast';
// import axios from '../config/axiosconfig';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// type InvestmentPlan = {
//   _id: string;
//   planName: string;
//   amount: number;
//   duration: string;
//   createdAt: string;
//   status: string;
// };

// const Plans = () => {
//   const [myPlans, setMyPlans] = useState<InvestmentPlan[]>([]);
//   const navigate = useNavigate();

//   const userId = useSelector((state: { user: any }) => state.user.user?._id);
//   const userToken = useSelector((state: { user: any }) => state.user.token);

//   useEffect(() => {
//     if (userId) {
//       getHandle();
//     }
//   }, [userId]);

//   const getHandle = async () => {
//     try {
//       toast.loading("Fetching your investment plans...");
//       const response = await axios.get(
//         `/user/getAllInvestmentPlans/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//           },
//         }
//       );

//       if (response.data && response.data.investments) {
//         setMyPlans(response.data.investments);

//         toast.dismiss();
//         toast.success("Investment plans fetched successfully");
//       } else {
//         setMyPlans([]);
//         toast.dismiss();
//         toast.error("No investment plans found");
//       }
//     } catch (error) {
//       console.error("Error fetching plans:", error);
//       toast.dismiss();
//       toast.error("Failed to fetch investment plans");
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "active":
//         return <CheckCircle className="w-4 h-4 text-green-400" />;
//       case "pending":
//         return <Clock className="w-4 h-4 text-yellow-400" />;
//       default:
//         return <AlertCircle className="w-4 h-4 text-red-400" />;
//     }
//   };

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "active":
//         return "text-green-400 bg-green-400/10 border-green-400/20";
//       case "pending":
//         return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
//       default:
//         return "text-red-400 bg-red-400/10 border-red-400/20";
//     }
//   };

//   return (
//     <div className="min-h-screen text-white relative">
//       {/* Fixed background layers - matching Overview */}
//       <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-red-900/30 to-slate-900/95"></div>
//       <div className="fixed inset-0 bg-gradient-to-b from-red-400/5 to-red-500/5"></div>

//       {/* Fixed animated particles - matching Overview */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-4 w-20 h-20 bg-red-400/10 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-4 w-16 h-16 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
//         <div className="absolute top-20 right-1/4 w-12 h-12 bg-red-400/8 rounded-full blur-lg animate-pulse delay-300"></div>
//         <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-red-400/6 rounded-full blur-xl animate-pulse delay-700"></div>
//       </div>

//       {/* Scrollable content wrapper */}
//       <div className="relative overflow-y-auto h-screen">
//         <div className="p-6 pb-20">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
//               <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
//               My Investment Plans
//             </h1>
//             <p className="text-slate-300 text-lg">Track your active and completed investment plans</p>
//           </div>
          
//           {/* Plans Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//             {plans.map((plan, index) => (
//               <div 
//                 key={index} 
//                 className="bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-500/10"
//               >
//                 {/* Plan Header */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center space-x-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${plan.color} shadow-lg`}>
//                       {plan.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-white">{plan.name}</h3>
//                   </div>
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
//                     {plan.status}
//                   </span>
//                 </div>
                
//                 {/* Plan Details */}
//                 <div className="space-y-4">
//                   <div className="bg-slate-800/30 rounded-lg p-4 border border-red-500/10">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center space-x-2">
//                         <DollarSign className="w-4 h-4 text-red-400" />
//                         <span className="text-slate-400">Investment:</span>
//                       </div>
//                       <span className="text-white font-semibold">{plan.investment}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center space-x-2">
//                         <TrendingUp className="w-4 h-4 text-red-400" />
//                         <span className="text-slate-400">Current Profit:</span>
//                       </div>
//                       <span className="text-red-400 font-semibold">{plan.profit}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center space-x-2">
//                         <Target className="w-4 h-4 text-red-400" />
//                         <span className="text-slate-400">ROI:</span>
//                       </div>
//                       <span className="text-red-400 font-semibold">{plan.roi}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <Calendar className="w-4 h-4 text-slate-400" />
//                         <span className="text-slate-400">Duration:</span>
//                       </div>
//                       <span className="text-white">{plan.duration}</span>
//                     </div>
//                   </div>
                  
//                   {plan.status === 'Active' && (
//                     <div className="bg-slate-800/30 rounded-lg p-4 border border-red-500/10">
//                       <div className="flex items-center justify-between mb-3">
//                         <div className="flex items-center space-x-2">
//                           <Clock className="w-4 h-4 text-yellow-400" />
//                           <span className="text-slate-400">Days Left:</span>
//                         </div>
//                         <span className="text-yellow-400 font-semibold">{plan.daysLeft} days</span>
//                       </div>
                      
//                       <div className="mt-4">
//                         <div className="flex justify-between text-sm text-slate-400 mb-2">
//                           <div className="flex items-center space-x-2">
//                             <Activity className="w-4 h-4" />
//                             <span>Progress</span>
//                           </div>
//                           <span className="text-red-400 font-medium">{plan.progress}%</span>
//                         </div>
//                         <div className="w-full bg-slate-800 rounded-full h-3 border border-red-500/20">
//                           <div 
//                             className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full transition-all duration-500 shadow-sm"
//                             style={{ width: `${plan.progress}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {plan.status === 'Complete' && (
//                     <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
//                       <div className="flex items-center justify-center space-x-2 text-green-400">
//                         <CheckCircle className="w-5 h-5" />
//                         <span className="font-semibold">Investment Completed Successfully</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Summary Section */}
//           <div className="mt-8 bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300">
//             <h3 className="text-xl font-bold text-white mb-4 flex items-center">
//               <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
//               Investment Summary
//             </h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-slate-800/30 rounded-lg p-4 border border-red-500/10">
//                 <div className="flex items-center space-x-3 mb-2">
//                   <div className="p-2 rounded-lg bg-gradient-to-br from-red-400 to-red-600">
//                     <DollarSign className="w-4 h-4" />
//                   </div>
//                   <span className="text-slate-400">Total Invested</span>
//                 </div>
//                 <p className="text-2xl font-bold text-white">$16,000</p>
//               </div>
              
//               <div className="bg-slate-800/30 rounded-lg p-4 border border-red-500/10">
//                 <div className="flex items-center space-x-3 mb-2">
//                   <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-red-600">
//                     <TrendingUp className="w-4 h-4" />
//                   </div>
//                   <span className="text-slate-400">Total Profit</span>
//                 </div>
//                 <p className="text-2xl font-bold text-red-400">$4,900</p>
//               </div>
              
//               <div className="bg-slate-800/30 rounded-lg p-4 border border-red-500/10">
//                 <div className="flex items-center space-x-3 mb-2">
//                   <div className="p-2 rounded-lg bg-gradient-to-br from-red-300 to-red-500">
//                     <Activity className="w-4 h-4" />
//                   </div>
//                   <span className="text-slate-400">Active Plans</span>
//                 </div>
//                 <p className="text-2xl font-bold text-white">2</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         /* Custom scrollbar styling - matching Overview */
//         .overflow-y-auto::-webkit-scrollbar {
//           width: 6px;
//         }

//         .overflow-y-auto::-webkit-scrollbar-track {
//           background: rgba(15, 23, 42, 0.3);
//           border-radius: 3px;
//         }

//         .overflow-y-auto::-webkit-scrollbar-thumb {
//           background: rgba(239, 68, 68, 0.3);
//           border-radius: 3px;
//           border: 1px solid rgba(239, 68, 68, 0.1);
//         }

//         .overflow-y-auto::-webkit-scrollbar-thumb:hover {
//           background: rgba(239, 68, 68, 0.5);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Plans;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Plus,
  TrendingUp,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertCircle,
  Activity,
} from "lucide-react";
import toast from "react-hot-toast";

import axios from "../config/axiosconfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type InvestmentPlan = {
  _id: string;
  planName: string;
  amount: number;
  duration: string;
  createdAt: string;
  status: string;
};

const Plans = () => {
  const [myPlans, setMyPlans] = useState<InvestmentPlan[]>([]);
  const navigate = useNavigate();

  const userId = useSelector((state: { user: any }) => state.user.user?._id);
  const userToken = useSelector((state: { user: any }) => state.user.token);

  useEffect(() => {
    if (userId) {
      getHandle();
    }
  }, [userId]);

  const getHandle = async () => {
    try {
      toast.loading("Fetching your investment plans...");
      const response = await axios.get(`/user/getAllInvestmentPlans/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.data && response.data.investments) {
        setMyPlans(response.data.investments);
        toast.dismiss();
        toast.success("Investment plans fetched successfully");
      } else {
        setMyPlans([]);
        toast.dismiss();
        toast.error("No investment plans found");
      }
    } catch (error) {
      console.error("Error fetching plans:", error);
      toast.dismiss();
      toast.error("Failed to fetch investment plans");
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-red-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "pending":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      default:
        return "text-red-400 bg-red-400/10 border-red-400/20";
    }
  };

  return (
    <div className="w-full h-[100vh] overflow-y-scroll scrollbar-thin bg-gradient-to-br from-slate-900/95 via-red-900/30 to-slate-900/95 relative">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-red-900/30 to-slate-900/95 pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto px-10 max-md:px-4 py-8 flex flex-col gap-6 z-10">
        {myPlans.length > 0 ? (
          <>
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">My Investments</h1>
                  <p className="text-gray-400">
                    Portfolio Overview ({myPlans.length} active plan{myPlans.length > 1 ? 's' : ''})
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <Activity className="w-5 h-5 text-red-400" />
                <span className="text-green-400 font-medium">Active Portfolio</span>
              </div>
            </div>

            {/* Investment Cards */}
            <div className="grid gap-6">
              {myPlans.map((plan) => (
                <div
                  key={plan._id}
                  className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        #{plan._id.slice(-3).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{plan.planName}</h3>
                        <p className="text-gray-400 text-sm">Investment Plan</p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(
                        plan.status
                      )}`}
                    >
                      {getStatusIcon(plan.status)}
                      <span className="text-sm font-medium capitalize">{plan.status}</span>
                    </div>
                  </div>

                  {/* Investment Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Amount */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400 text-sm">Amount Invested</span>
                      </div>
                      <p className="text-white text-xl font-bold">${plan.amount.toLocaleString()}</p>
                    </div>

                    {/* Duration */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-400 text-sm">Duration</span>
                      </div>
                      <p className="text-white text-xl font-bold">{plan.duration}</p>
                    </div>

                    {/* Created Date */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-400 text-sm">Started</span>
                      </div>
                      <p className="text-white text-lg font-bold">
                        {new Date(plan.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    {/* Progress/Status */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-orange-400" />
                        <span className="text-gray-400 text-sm">Progress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white/10 rounded-full h-2">
                          <div
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000"
                            style={{
                              width: plan.status === "active" ? "65%" : "25%",
                            }}
                          />
                        </div>
                        <span className="text-white text-sm font-medium">
                          {plan.status === "active" ? "65%" : "25%"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Empty State */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">My Investments</h1>
                <p className="text-gray-400">No active investments yet</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-12 text-center">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">Start Your Investment Journey</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  You haven't made any investments yet. Choose from our premium investment plans to start growing your wealth.
                </p>

                <button
                  onClick={() => navigate("/user/deposit")}
                  className="group flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-800 hover:to-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 mx-auto"
                >
                  <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  Start Investing Now
                  <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Plans;
