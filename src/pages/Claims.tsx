import { useState } from 'react';
import { Plus, FileText } from 'lucide-react';

const sampleClaims = [
  {
    id: 'CLM001',
    date: '2024-03-15',
    vehicle: 'Toyota Camry 2023',
    parts: ['Front Bumper', 'Headlight'],
    status: 'Pending',
    amount: 2500,
    assessor: 'John Doe'
  },
  {
    id: 'CLM002',
    date: '2024-03-14',
    vehicle: 'Honda Civic 2022',
    parts: ['Side Mirror', 'Fender'],
    status: 'Approved',
    amount: 1800,
    assessor: 'Jane Smith'
  },
  {
    id: 'CLM003',
    date: '2024-03-13',
    vehicle: 'Ford Mustang 2023',
    parts: ['Hood', 'Radiator'],
    status: 'Rejected',
    amount: 3200,
    assessor: 'Mike Johnson'
  }
];

export default function Claims() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Claims</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          <span>Add Claim</span>
        </button>
      </div>

      <div className="grid gap-6">
        {sampleClaims.map((claim) => (
          <div key={claim.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">Claim #{claim.id}</h3>
                </div>
                <p className="text-gray-600 mt-1">{claim.vehicle}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                claim.status === 'Approved' ? 'bg-green-100 text-green-800' :
                claim.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {claim.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-medium">{claim.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Amount</p>
                <p className="font-medium">${claim.amount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Assessor</p>
                <p className="font-medium">{claim.assessor}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Parts</p>
                <p className="font-medium">{claim.parts.join(', ')}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                View Details
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Claim Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[600px]">
            <h2 className="text-xl font-semibold mb-4">Add New Claim</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vehicle Make</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>Ford</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vehicle Model</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Camry</option>
                    <option>Civic</option>
                    <option>Mustang</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Parts</label>
                <select multiple className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-32">
                  <option>Front Bumper</option>
                  <option>Rear Bumper</option>
                  <option>Headlight</option>
                  <option>Tail Light</option>
                  <option>Hood</option>
                  <option>Fender</option>
                  <option>Door</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Claim Amount</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit Claim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}