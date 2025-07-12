
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Shield, User } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { User as UserType, UserRole } from '@/types/auth';

const Users = () => {
  const [users] = useState<UserType[]>([
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@rental.com',
      role: 'admin',
      isActive: true,
      lastLogin: new Date('2024-07-10'),
    },
    {
      id: '2',
      name: 'John Manager',
      email: 'john.manager@rental.com',
      role: 'manager',
      isActive: true,
      lastLogin: new Date('2024-07-09'),
    },
    {
      id: '3',
      name: 'Sarah Agent',
      email: 'sarah.agent@rental.com',
      role: 'agent',
      isActive: true,
      lastLogin: new Date('2024-07-08'),
    },
    {
      id: '4',
      name: 'Mike Viewer',
      email: 'mike.viewer@rental.com',
      role: 'viewer',
      isActive: false,
      lastLogin: new Date('2024-07-05'),
    },
  ]);

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'admin': return 'text-red-600 bg-red-100';
      case 'manager': return 'text-blue-600 bg-blue-100';
      case 'agent': return 'text-green-600 bg-green-100';
      case 'viewer': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRolePermissions = (role: UserRole) => {
    switch (role) {
      case 'admin': return 'Full system access';
      case 'manager': return 'Properties, Tenants, Payments, Reports';
      case 'agent': return 'Properties, Tenants, Payments';
      case 'viewer': return 'View-only access';
      default: return 'No permissions';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Management</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">
                {users.filter(u => u.isActive).length} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Admins</CardTitle>
              <Shield className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.role === 'admin').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Managers</CardTitle>
              <Shield className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.role === 'manager').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Agents</CardTitle>
              <Shield className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.role === 'agent').length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {getRolePermissions(user.role)}
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.isActive ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                      }`}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </TableCell>
                    <TableCell>{user.lastLogin?.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-red-600 mb-2">Admin</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Full system access</li>
                    <li>• User management</li>
                    <li>• All modules</li>
                    <li>• System settings</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-blue-600 mb-2">Manager</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Properties management</li>
                    <li>• Tenant management</li>
                    <li>• Payment tracking</li>
                    <li>• Reports access</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-green-600 mb-2">Agent</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Properties management</li>
                    <li>• Tenant management</li>
                    <li>• Payment recording</li>
                    <li>• Limited reports</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-gray-600 mb-2">Viewer</h3>
                  <ul className="text-sm space-y-1">
                    <li>• View properties</li>
                    <li>• View tenants</li>
                    <li>• View payments</li>
                    <li>• No editing access</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Users;
