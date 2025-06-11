import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line} from 'recharts';

const Analytics: React.FC = () => {

const portfolioData = [
  { month: 'Jan', value: 45000, growth: 2.5 },
  { month: 'Feb', value: 48000, growth: 6.7 },
  { month: 'Mar', value: 52000, growth: 8.3 },
  { month: 'Apr', value: 49000, growth: -5.8 },
  { month: 'May', value: 55000, growth: 12.2 },
  { month: 'Jun', value: 58000, growth: 5.5 }
];

const assetAllocation = [
  { name: 'Stocks', value: 45, color: '#DC2626' },
  { name: 'Bonds', value: 25, color: '#991B1B' },
  { name: 'Real Estate', value: 20, color: '#B91C1C' },
  { name: 'Commodities', value: 10, color: '#7F1D1D' }
];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Return</span>
              <span className="text-green-600 font-semibold">+12.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Alpha</span>
              <span className="text-green-600 font-semibold">+2.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Beta</span>
              <span className="text-gray-900 font-semibold">0.85</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Volatility</span>
              <span className="text-gray-900 font-semibold">15.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Max Drawdown</span>
              <span className="text-red-600 font-semibold">-8.5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Analysis</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line type="monotone" dataKey="growth" stroke="#991B1B" strokeWidth={2} dot={{ fill: '#991B1B' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
          <div className="text-sm text-gray-600">Win Rate</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">2.4</div>
          <div className="text-sm text-gray-600">Profit Factor</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">1.8</div>
          <div className="text-sm text-gray-600">Risk/Reward Ratio</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Portfolio Composition</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {assetAllocation.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded mr-3" 
                    style={{ backgroundColor: asset.color }}
                  ></div>
                  <span className="text-gray-900">{asset.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-4">{asset.value}%</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        backgroundColor: asset.color, 
                        width: `${asset.value}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics
