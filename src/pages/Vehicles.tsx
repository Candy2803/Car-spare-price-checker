import { useState } from 'react';
import { Search, Phone } from 'lucide-react';

const sampleVehicles = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 25000,
    supplier: 'ABC Motors',
    contact: '+1234567890',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 23000,
    supplier: 'XYZ Autos',
    contact: '+1234567891',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '3',
    make: 'Ford',
    model: 'Mustang',
    year: 2023,
    price: 35000,
    supplier: 'Premium Cars',
    contact: '+1234567892',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=500'
  }
];

export default function Vehicles() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vehicles</h1>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search vehicles by make, model, or year..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={vehicle.image}
              alt={`${vehicle.make} ${vehicle.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {vehicle.make} {vehicle.model} {vehicle.year}
              </h3>
              <p className="text-2xl font-bold text-blue-600 my-2">
                ${vehicle.price.toLocaleString()}
              </p>
              <div className="text-gray-600">
                <p>Supplier: {vehicle.supplier}</p>
                <div className="flex items-center mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  {vehicle.contact}
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Supplier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}