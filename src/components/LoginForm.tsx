
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { LoginCredentials } from '@/types/auth';
import { toast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
    securityKey: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(credentials);
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome to the Rental Management System",
        });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Rental Management System</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <input
                id="email"
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <Label htmlFor="securityKey">Security Key (Optional)</Label>
              <input
                id="securityKey"
                type="text"
                value={credentials.securityKey}
                onChange={(e) => setCredentials(prev => ({ ...prev, securityKey: e.target.value }))}
                className="w-full p-2 border rounded-md"
                placeholder="Monthly security key"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 text-sm text-muted-foreground text-center">
            Demo credentials: admin@rental.com / admin123
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
