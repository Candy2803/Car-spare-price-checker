import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  Car, 
  Wrench, 
  Users, 
  FileText, 
  User,
  LogOut 
} from 'lucide-react';

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 p-4">
      <div className="flex flex-col h-full">
        <div className="space-y-6 flex-1">
          <div className="flex items-center space-x-2 mb-8">
            <Car className="w-8 h-8" />
            <span className="text-xl font-bold">ClaimsAssessor</span>
          </div>

          <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link to="/vehicles" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <Car className="w-5 h-5" />
            <span>Vehicles</span>
          </Link>

          <Link to="/spare-parts" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <Wrench className="w-5 h-5" />
            <span>Spare Parts</span>
          </Link>

          <Link to="/users" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <Users className="w-5 h-5" />
            <span>Users</span>
          </Link>

          <Link to="/claims" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FileText className="w-5 h-5" />
            <span>Claims</span>
          </Link>
        </div>

        <div className="dropdown relative">
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded w-full">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>
          <div className="dropdown-content hidden absolute bottom-full left-0 w-full bg-gray-800 rounded shadow-lg">
            <button 
              onClick={logout}
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 w-full"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}