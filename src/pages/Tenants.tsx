
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Eye, Mail, Phone } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tenant, TenantStatus } from '@/types/tenant';

const Tenants = () => {
  // Mock data - replace with actual data fetching
  const [tenants] = useState<Tenant[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '(555) 123-4567',
      emergencyContact: {
        name: 'Jane Doe',
        phone: '(555) 987-6543',
        relationship: 'Spouse',
      },
      leaseStart: new Date('2024-01-01'),
      leaseEnd: new Date('2024-12-31'),
      propertyId: '1',
      depositAmount: 1200,
      rentAmount: 1200,
      status: 'active',
      createdAt: new Date('2023-12-15'),
      updatedAt: new Date('2023-12-15'),
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '(555) 456-7890',
      emergencyContact: {
        name: 'Mike Johnson',
        phone: '(555) 654-3210',
        relationship: 'Brother',
      },
      leaseStart: new Date('2024-02-01'),
      leaseEnd: new Date('2025-01-31'),
      propertyId: '2',
      depositAmount: 2500,
      rentAmount: 2500,
      status: 'pending',
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20'),
    },
  ]);

  const getStatusColor = (status: TenantStatus) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'terminated': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Tenants</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Tenant
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tenants.map((tenant) => (
            <Card key={tenant.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{tenant.name}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tenant.status)}`}>
                    {tenant.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{tenant.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{tenant.phone}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Lease Start:</span>
                      <p>{tenant.leaseStart.toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Lease End:</span>
                      <p>{tenant.leaseEnd.toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Rent:</span>
                      <p className="font-medium">${tenant.rentAmount}/month</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Deposit:</span>
                      <p>${tenant.depositAmount}</p>
                    </div>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Emergency Contact:</p>
                    <p className="text-sm">{tenant.emergencyContact.name} ({tenant.emergencyContact.relationship})</p>
                    <p className="text-sm">{tenant.emergencyContact.phone}</p>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tenants;
