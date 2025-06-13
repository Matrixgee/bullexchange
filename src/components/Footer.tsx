import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-br from-red-600 to-red-800 p-2 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                                Bull Market Exchange
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Your trusted partner in building wealth through smart investments.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {['Home', 'About', 'Services', 'Contact'].map((link) => (
                                <div key={link}>
                                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-sm hover:text-red-400 transition-colors">
                                        {link}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Services</h3>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>Portfolio Management</p>
                            <p>Investment Advisory</p>
                            <p>Risk Assessment</p>
                            <p>Market Analysis</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Contact Info</h3>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>support@bullmarketexchange.com</p>
                            <p>+1 (555) 123-4567</p>
                            <p>Atlanta Georgia, USA</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; 2025 Bull Market Exchange. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer
