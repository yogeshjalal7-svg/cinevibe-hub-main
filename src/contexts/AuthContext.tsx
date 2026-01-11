import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('cinevibe_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('cinevibe_users') || '[]');
    const foundUser = users.find((u: { email: string; password: string }) => 
      u.email === email && u.password === password
    );
    
    if (foundUser) {
      const userData = { email: foundUser.email };
      setUser(userData);
      localStorage.setItem('cinevibe_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = (email: string, password: string): { success: boolean; message: string } => {
    const users = JSON.parse(localStorage.getItem('cinevibe_users') || '[]');
    
    // Check if email already exists
    if (users.some((u: { email: string }) => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    
    // Add new user
    users.push({ email, password });
    localStorage.setItem('cinevibe_users', JSON.stringify(users));
    
    // Auto-login after registration
    const userData = { email };
    setUser(userData);
    localStorage.setItem('cinevibe_user', JSON.stringify(userData));
    
    return { success: true, message: 'Registration successful' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cinevibe_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
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
