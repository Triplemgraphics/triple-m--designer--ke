
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, LoginCredentials } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  checkPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }

    // Auto-logout after 30 minutes of inactivity
    const timeout = setTimeout(() => {
      logout();
    }, 30 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      // Mock authentication - replace with actual API call
      if (credentials.email === 'admin@rental.com' && credentials.password === 'admin123') {
        const user: User = {
          id: '1',
          email: credentials.email,
          name: 'Admin User',
          role: 'admin',
          isActive: true,
          lastLogin: new Date(),
        };

        localStorage.setItem('user', JSON.stringify(user));
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const checkPermission = (permission: string): boolean => {
    if (!authState.user) return false;
    
    const rolePermissions = {
      admin: ['all'],
      manager: ['properties', 'tenants', 'payments', 'reports'],
      agent: ['properties', 'tenants', 'payments'],
      viewer: ['view'],
    };

    const userPermissions = rolePermissions[authState.user.role] || [];
    return userPermissions.includes('all') || userPermissions.includes(permission);
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      checkPermission,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
