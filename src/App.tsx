import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import SpareParts from './pages/SpareParts';
import Users from './pages/Users';
import Claims from './pages/Claims';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="flex">
      <Navbar />
      <div className="ml-64 w-full p-8">
        {children}
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/vehicles"
            element={
              <PrivateRoute>
                <Vehicles />
              </PrivateRoute>
            }
          />
          <Route
            path="/spare-parts"
            element={
              <PrivateRoute>
                <SpareParts />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/claims"
            element={
              <PrivateRoute>
                <Claims />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;