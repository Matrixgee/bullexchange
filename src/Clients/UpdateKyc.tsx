/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { User, Building, CreditCard, Shield } from "lucide-react";

interface Country {
  country: string;
  code: string;
}

const Updatekyc = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    accountNumber: "",
    routingNumber: "",
    bankName: "",
    accountType: "",
    ppEmail: "",
    country: "",
    dateOfBirth: "",
    mAddress: "",
  });

  type Errors = {
    fullName?: string;
    accountNumber?: string;
    routingNumber?: string;
    bankName?: string;
    accountType?: string;
    ppEmail?: string;
    country?: string;
    dateOfBirth?: string;
    mAddress?: string;
  };

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);

useEffect(() => {
  const fetchCountries = async () => {
    setLoadingCountries(true);
    try {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries");
      const data = await response.json();
      const sortedCountries = data.data.sort((a: Country, b: Country) =>
        a.country.localeCompare(b.country)
      );
      setCountries(sortedCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setCountries([
        { country: "United States", code: "US" },
        { country: "United Kingdom", code: "GB" },
        { country: "Canada", code: "CA" },
        { country: "Australia", code: "AU" },
        { country: "Germany", code: "DE" },
        { country: "France", code: "FR" },
        { country: "Japan", code: "JP" },
        { country: "Brazil", code: "BR" },
        { country: "India", code: "IN" },
        { country: "China", code: "CN" },
      ]);
    } finally {
      setLoadingCountries(false);
    }
  };

  fetchCountries();
}, []);


  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.bankName.trim()) {
      newErrors.bankName = "Bank name is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (formData.ppEmail && !/\S+@\S+\.\S+/.test(formData.ppEmail)) {
      newErrors.ppEmail = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("KYC updated successfully:", formData);
      alert("KYC information updated successfully!");
    } catch (error: any) {
      console.error("API error:", error);
      alert("Error updating KYC information");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white relative">
    {/* Fixed background layers */}
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-red-900/30 to-slate-900/95"></div>
    <div className="fixed inset-0 bg-gradient-to-b from-red-400/5 to-red-500/5"></div>

    {/* Fixed animated particles */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-4 w-20 h-20 bg-red-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 w-16 h-16 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>

    {/* Scrollable content */}
    <div className="relative h-screen overflow-y-auto">
      <div className="flex justify-center py-12 px-4 min-h-[1200px]">
        <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 shadow-2xl">
         {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-red-400 mr-3" />
                <h1 className="text-4xl font-bold text-white">
                  Update KYC Information
                </h1>
              </div>
              <p className="text-slate-300 text-lg">
                Please update your Know Your Customer details
              </p>
            </div>

            {/* Form Content */}
            <div className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-red-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <User className="w-5 h-5 text-red-400 mr-2" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-slate-300 font-medium text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <label className="block text-slate-300 font-medium text-sm">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                    >
                      <option value="" className="text-slate-400">Select your country</option>
                      {loadingCountries ? (
                        <option disabled className="text-slate-400">Loading countries...</option>
                      ) : (
                        countries.map((c) => (
                          <option
                            key={c.code}
                            value={c.country}
                            className="text-slate-800 bg-white"
                          >
                            {c.country}
                          </option>
                        ))
                      )}
                    </select>
                    {errors.country && (
                      <p className="text-red-400 text-sm">{errors.country}</p>
                    )}
                  </div>


                  {/* Date of Birth */}
                  <div className="space-y-2">
                    <label className="block text-slate-300 font-medium text-sm">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                    />
                  </div>
                </div>

                {/* Mailing Address */}
                <div className="mt-6 space-y-2">
                  <label className="block text-slate-300 font-medium text-sm">
                    Mailing Address
                  </label>
                  <textarea
                    name="mAddress"
                    value={formData.mAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all resize-none"
                    placeholder="Enter your mailing address"
                  />
                </div>
              </div>

              {/* Banking Information Section */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-red-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Building className="w-5 h-5 text-red-400 mr-2" />
                  Banking Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bank Name */}
                  <div className="space-y-2">
                    <label className="block text-slate-300 font-medium text-sm">
                      Bank Name *
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                      placeholder="Enter bank name"
                    />
                    {errors.bankName && (
                      <p className="text-red-400 text-sm">{errors.bankName}</p>
                    )}
                  </div>

                  {/* Account Type */}
                  <div className="space-y-2">
                    <label className="block text-slate-300 font-medium text-sm">
                      Account Type
                    </label>
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                    >
                      <option value="" className="text-slate-400">
                        Select account type
                      </option>
                      <option value="checking" className="text-slate-800 bg-white">
                        Checking
                      </option>
                      <option value="savings" className="text-slate-800 bg-white">
                        Savings
                      </option>
                    </select>
                  </div>

                  {/* Account Number */}
                  <div className="space-y-2">
                    <label className="block text-slate-300 font-medium text-sm">
                      Account Number
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                      placeholder="Enter account number"
                    />
                  </div>

                  {/* Routing Number */}
                  <div className="space-y-2">
                    <label className="block text-slate-300 font-medium text-sm">
                      Routing Number
                    </label>
                    <input
                      type="text"
                      name="routingNumber"
                      value={formData.routingNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-red-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all"
                      placeholder="Enter routing number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-12 py-4 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Update KYC Information</span>
                  </>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-slate-300 text-sm">
                  <span className="text-red-400 font-medium">Secure & Encrypted:</span> 
                  <br />
                  All information is encrypted and securely stored. Fields marked with * are required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

export default Updatekyc;