
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, LoginCredentials, RolePermissions } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  checkPermission: (module: string, action: string) => boolean;
  hasRole: (role: string) => boolean;
  canAccessModule: (module: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Define role-based permissions
const rolePermissions: RolePermissions = {
  admin: [
    { module: 'users', actions: ['create', 'read', 'update', 'delete'] },
    { module: 'properties', actions: ['create', 'read', 'update', 'delete'] },
    { module: 'tenants', actions: ['create', 'read', 'update', 'delete'] },
    { module: 'payments', actions: ['create', 'read', 'update', 'delete'] },
    { module: 'reports', actions: ['read', 'export'] },
    { module: 'notifications', actions: ['read', 'update'] },
    { module: 'settings', actions: ['read', 'update'] },
    { module: 'security', actions: ['generate_key'] },
  ],
  manager: [
    { module: 'properties', actions: ['create', 'read', 'update'] },
    { module: 'tenants', actions: ['create', 'read', 'update'] },
    { module: 'payments', actions: ['create', 'read', 'update'] },
    { module: 'reports', actions: ['read', 'export'] },
    { module: 'notifications', actions: ['read'] },
  ],
  agent: [
    { module: 'tenants', actions: ['read'] },
    { module: 'reports', actions: ['read'] },
    { module: 'notifications', actions: ['read'] },
  ],
  guest: [
    { module: 'tenants', actions: ['read'] },
    { module: 'reports', actions: ['read'] },
  ],
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
      const mockUsers = [
        {
          email: 'admin@m3rental.com',
          password: 'admin123',
          user: {
            id: '1',
            email: 'admin@m3rental.com',
            name: 'System Administrator',
            role: 'admin' as const,
            isActive: true,
            lastLogin: new Date(),
          }
        },
        {
          email: 'manager@m3rental.com',
          password: 'manager123',
          user: {
            id: '2',
            email: 'manager@m3rental.com',
            name: 'Property Manager',
            role: 'manager' as const,
            isActive: true,
            lastLogin: new Date(),
            assignedProperties: ['1', '2'],
          }
        },
        {
          email: 'agent@m3rental.com',
          password: 'agent123',
          user: {
            id: '3',
            email: 'agent@m3rental.com',
            name: 'Rental Agent',
            role: 'agent' as const,
            isActive: true,
            lastLogin: new Date(),
          }
        },
        {
          email: 'guest@m3rental.com',
          password: 'guest123',
          user: {
            id: '4',
            email: 'guest@m3rental.com',
            name: 'Guest Viewer',
            role: 'guest' as const,
            isActive: true,
            lastLogin: new Date(),
          }
        }
      ];

      const foundUser = mockUsers.find(
        u => u.email === credentials.email && u.password === credentials.password
      );

      if (foundUser) {
        localStorage.setItem('user', JSON.stringify(foundUser.user));
        setAuthState({
          user: foundUser.user,
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

  const checkPermission = (module: string, action: string): boolean => {
    if (!authState.user) return false;
    
    const userRole = authState.user.role;
    const permissions = rolePermissions[userRole] || [];
    
    const modulePermission = permissions.find(p => p.module === module);
    return modulePermission ? modulePermission.actions.includes(action) : false;
  };

  const hasRole = (role: string): boolean => {
    return authState.user?.role === role;
  };

  const canAccessModule = (module: string): boolean => {
    if (!authState.user) return false;
    
    const userRole = authState.user.role;
    const permissions = rolePermissions[userRole] || [];
    
    return permissions.some(p => p.module === module);
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      checkPermission,
      hasRole,
      canAccessModule,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
