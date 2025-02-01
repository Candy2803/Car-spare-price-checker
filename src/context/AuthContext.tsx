import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { username: string; role: string } | null;
  login: (username: string, password: string) => { success: boolean; requirePasswordChange: boolean };
  logout: () => void;
  changePassword: (username: string, oldPassword: string, newPassword: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      setUser({ username: 'admin', role: 'admin' });
      return { success: true, requirePasswordChange: false };
    }
    
    // Check for generated password format (e.g., "generated_xyz123")
    if (password.startsWith('generated_')) {
      if (validateGeneratedPassword(username, password)) {
        setUser({ username, role: 'assessor' });
        return { success: true, requirePasswordChange: true };
      }
    }
    
    return { success: false, requirePasswordChange: false };
  };

  const validateGeneratedPassword = (username: string, password: string) => {
    // In a real application, this would validate against a database
    // For demo purposes, we'll accept any password starting with "generated_"
    return password.startsWith('generated_');
  };

  const changePassword = (username: string, oldPassword: string, newPassword: string) => {
    // In a real application, this would update the password in a database
    if (validateGeneratedPassword(username, oldPassword)) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}