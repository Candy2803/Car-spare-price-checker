export interface User {
  id: string;
  username: string;
  name: string;
  role: 'admin' | 'assessor';
  email: string;
  isFirstLogin: boolean;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  supplier: string;
  contact: string;
  image: string;
}

export interface SparePart {
  id: string;
  name: string;
  vehicleMake: string;
  vehicleModel: string;
  year: string;
  price: number;
  supplier: string;
  compatibility: string[];
  warranty: string;
}

export interface Claim {
  id: string;
  date: string;
  vehicleInfo: string;
  parts: string[];
  status: 'pending' | 'approved' | 'rejected';
  amount: number;
  assessor: string;
}