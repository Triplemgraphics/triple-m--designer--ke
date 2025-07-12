
import React, { ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Home, Building, Users, CreditCard, BarChart3, Settings, Bell, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout, canAccessModule, hasRole } = useAuth();
  const location = useLocation();

  const menuItems = [
    { 
      icon: Home, 
      label: 'Dashboard', 
      path: '/dashboard', 
      module: 'dashboard',
      showForAll: true 
    },
    { 
      icon: Building, 
      label: 'Properties', 
      path: '/properties', 
      module: 'properties' 
    },
    { 
      icon: Users, 
      label: 'Tenants', 
      path: '/tenants', 
      module: 'tenants' 
    },
    { 
      icon: CreditCard, 
      label: 'Payments', 
      path: '/payments', 
      module: 'payments' 
    },
    { 
      icon: BarChart3, 
      label: 'Reports', 
      path: '/reports', 
      module: 'reports' 
    },
    { 
      icon: Settings, 
      label: 'User Management', 
      path: '/users', 
      module: 'users',
      adminOnly: true 
    },
    { 
      icon: Bell, 
      label: 'Notifications', 
      path: '/notifications', 
      module: 'notifications' 
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'text-red-600 bg-red-100';
      case 'manager': return 'text-blue-600 bg-blue-100';
      case 'agent': return 'text-green-600 bg-green-100';
      case 'guest': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredMenuItems = menuItems.filter(item => {
    if (item.showForAll) return true;
    if (item.adminOnly && !hasRole('admin')) return false;
    return canAccessModule(item.module);
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">M3 Rental Management</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Welcome,</span>
              <span className="text-sm font-medium">{user?.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getRoleColor(user?.role || '')}`}>
                {user?.role}
              </span>
            </div>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="w-64 min-h-screen bg-card border-r">
          <div className="p-4">
            <div className="space-y-2">
              {filteredMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            
            {user && (
              <div className="mt-8 p-3 bg-muted rounded-md">
                <h4 className="text-sm font-medium mb-2">Role Permissions</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  {user.role === 'admin' && (
                    <>
                      <div>• Full system control</div>
                      <div>• User management</div>
                      <div>• Security key generation</div>
                    </>
                  )}
                  {user.role === 'manager' && (
                    <>
                      <div>• Property management</div>
                      <div>• Tenant registration</div>
                      <div>• Payment recording</div>
                    </>
                  )}
                  {user.role === 'agent' && (
                    <>
                      <div>• View tenants</div>
                      <div>• View reports</div>
                      <div>• Read-only access</div>
                    </>
                  )}
                  {user.role === 'guest' && (
                    <>
                      <div>• View tenants only</div>
                      <div>• View reports only</div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
