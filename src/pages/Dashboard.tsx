import React from 'react';
import { BarChart, Users, FileText, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Claims', value: '1,234', icon: FileText, color: 'bg-blue-500' },
    { title: 'Active Users', value: '56', icon: Users, color: 'bg-green-500' },
    { title: 'Average Claim Value', value: '$2,345', icon: BarChart, color: 'bg-purple-500' },
    { title: 'Pending Reviews', value: '12', icon: AlertTriangle, color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Claims</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Claim #{2024001 + i}</p>
                  <p className="text-sm text-gray-600">Toyota Camry - Bumper Replacement</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Price Alerts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Honda Civic 2023</p>
                  <p className="text-sm text-gray-600">Price increased by 5%</p>
                </div>
                <span className="text-red-600">+$1,200</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}