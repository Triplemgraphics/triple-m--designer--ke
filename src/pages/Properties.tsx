import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import DashboardLayout from '@/components/DashboardLayout';
import { PropertyStatus } from '@/types/property';
import { propertiesService } from '@/services/propertiesService';
import { toast } from '@/hooks/use-toast';
import PropertyForm from '@/components/PropertyForm';

const Properties = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const queryClient = useQueryClient();

  const { data: properties = [], isLoading, error } = useQuery({
    queryKey: ['properties'],
    queryFn: propertiesService.getAll,
  });

  const createMutation = useMutation({
    mutationFn: propertiesService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      setIsFormOpen(false);
      toast({
        title: "Success",
        description: "Property created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create property",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) => propertiesService.update(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      setIsFormOpen(false);
      setEditingProperty(null);
      toast({
        title: "Success",
        description: "Property updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update property",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: propertiesService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      toast({
        title: "Success",
        description: "Property deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      });
    },
  });

  if (error) {
    toast({
      title: "Error",
      description: "Failed to load properties",
      variant: "destructive",
    });
  }

  const getStatusColor = (status: PropertyStatus) => {
    switch (status) {
      case 'occupied': return 'text-green-600 bg-green-100';
      case 'vacant': return 'text-yellow-600 bg-yellow-100';
      case 'maintenance': return 'text-red-600 bg-red-100';
      case 'unavailable': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleAddProperty = () => {
    setEditingProperty(null);
    setIsFormOpen(true);
  };

  const handleEditProperty = (property) => {
    setEditingProperty(property);
    setIsFormOpen(true);
  };

  const handleDeleteProperty = (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      deleteMutation.mutate(propertyId);
    }
  };

  const handleFormSubmit = (data) => {
    if (editingProperty) {
      updateMutation.mutate({ id: editingProperty.id, updates: data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingProperty(null);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Properties</h2>
            <Button onClick={handleAddProperty}>
              <Plus className="h-4 w-4 mr-2" />
              Add Property
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Properties</h2>
          <Button onClick={handleAddProperty}>
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
                  <Button size="sm" variant="outline" onClick={() => handleEditProperty(property)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDeleteProperty(property.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {properties.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-muted-foreground mb-2">No properties found</h3>
            <p className="text-sm text-muted-foreground mb-4">Get started by adding your first property.</p>
            <Button onClick={handleAddProperty}>
              <Plus className="h-4 w-4 mr-2" />
              Add Property
            </Button>
          </div>
        )}

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProperty ? 'Edit Property' : 'Add New Property'}
              </DialogTitle>
            </DialogHeader>
            <PropertyForm
              property={editingProperty}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
              isLoading={createMutation.isPending || updateMutation.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Properties;
