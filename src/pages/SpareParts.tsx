import { useState } from 'react';
import { X } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function FilterModal({ isOpen, onClose }: FilterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filter Spare Parts</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Make
            </label>
            <select className="w-full border rounded-md p-2">
              <option>All Makes</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Ford</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <select className="w-full border rounded-md p-2">
              <option>All Models</option>
              <option>Camry</option>
              <option>Civic</option>
              <option>Mustang</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select className="w-full border rounded-md p-2">
              <option>All Years</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Part Type
            </label>
            <select className="w-full border rounded-md p-2">
              <option>All Parts</option>
              <option>Engine</option>
              <option>Transmission</option>
              <option>Brakes</option>
              <option>Suspension</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 border rounded-md p-2"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 border rounded-md p-2"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SpareParts() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Spare Parts</h1>
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search Parts
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample spare parts cards */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">Brake Pad Set</h3>
            <p className="text-gray-600">Toyota Camry 2023</p>
            <p className="text-2xl font-bold text-blue-600 my-2">$120</p>
            <div className="text-sm text-gray-600">
              <p>Supplier: AutoParts Plus</p>
              <p>Warranty: 12 months</p>
              <p>Compatibility: Multiple Toyota models</p>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </div>
  );
}