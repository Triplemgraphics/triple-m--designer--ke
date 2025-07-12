
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { Property, PropertyStatus } from '@/types/property';

const Properties = () => {
  // Mock data - replace with actual data fetching
  const [properties] = useState<Property[]>([
    {
      id: '1',
      name: 'Sunset Apartments - Unit 101',
      address: '123 Main St, Apt 101',
      type: 'apartment',
      rentAmount: 1200,
      status: 'occupied',
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 850,
      tenantId: 'tenant1',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      name: 'Garden View House',
      address: '456 Oak Ave',
      type: 'house',
      rentAmount: 2500,
      status: 'vacant',
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1400,
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10'),
    },
  ]);

  const getStatusColor = (status: PropertyStatus) => {
    switch (status) {
      case 'occupied': return 'text-green-600 bg-green-100';
      case 'vacant': return 'text-yellow-600 bg-yellow-100';
      case 'maintenance': return 'text-red-600 bg-red-100';
      case 'unavailable': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Properties</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id}>
              <CardHeader>
                <CardTitle className="text-lg">{property.name}</CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{property.address}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                    {property.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Rent:</span>
                    <span className="font-medium">${property.rentAmount}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type:</span>
                    <span className="capitalize">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Bed/Bath:</span>
                    <span>{property.bedrooms}bd / {property.bathrooms}ba</span>
                  </div>
                  {property.squareFeet && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Size:</span>
                      <span>{property.squareFeet} sq ft</span>
                    </div>
                  )}
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
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
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

export default Properties;
