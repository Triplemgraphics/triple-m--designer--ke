
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredModule?: string;
  requiredAction?: string;
  requiredRole?: string;
}

const ProtectedRoute = ({ 
  children, 
  requiredModule, 
  requiredAction = 'read',
  requiredRole 
}: ProtectedRouteProps) => {
  const { user, checkPermission, hasRole } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Access Denied</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Please log in to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check role-based access
  if (requiredRole && !hasRole(requiredRole)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span>Insufficient Permissions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              You need <strong>{requiredRole}</strong> role to access this page.
            </p>
            <p className="text-sm text-muted-foreground">
              Your current role: <strong>{user.role}</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check module and action permissions
  if (requiredModule && !checkPermission(requiredModule, requiredAction)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span>Access Restricted</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              You don't have permission to access this module.
            </p>
            <p className="text-sm text-muted-foreground">
              Required: <strong>{requiredAction}</strong> access to <strong>{requiredModule}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Your role: <strong>{user.role}</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
