
import React, { ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Home, Building, Users, CreditCard, BarChart3, Settings, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', permission: 'view' },
    { icon: Building, label: 'Properties', path: '/properties', permission: 'properties' },
    { icon: Users, label: 'Tenants', path: '/tenants', permission: 'tenants' },
    { icon: CreditCard, label: 'Payments', path: '/payments', permission: 'payments' },
    { icon: BarChart3, label: 'Reports', path: '/reports', permission: 'reports' },
    { icon: Settings, label: 'User Management', path: '/users', permission: 'admin' },
    { icon: Bell, label: 'Notifications', path: '/notifications', permission: 'view' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold">Rental Management</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user?.name} ({user?.role})
            </span>
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
              {menuItems.map((item) => (
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
