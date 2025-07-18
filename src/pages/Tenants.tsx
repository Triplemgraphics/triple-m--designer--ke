import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Edit, Eye, Mail, Phone } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import DashboardLayout from '@/components/DashboardLayout';
import { TenantStatus } from '@/types/tenant';
import { tenantsService } from '@/services/tenantsService';
import { toast } from '@/hooks/use-toast';
import TenantForm from '@/components/TenantForm';

const Tenants = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTenant, setEditingTenant] = useState(null);
  const queryClient = useQueryClient();

  const { data: tenants = [], isLoading, error } = useQuery({
    queryKey: ['tenants'],
    queryFn: tenantsService.getAll,
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => {
      const tenantData = {
        ...data,
        leaseStart: new Date(data.leaseStart),
        leaseEnd: new Date(data.leaseEnd),
        emergencyContact: {
          name: data.emergencyContactName,
          phone: data.emergencyContactPhone,
          relationship: data.emergencyContactRelationship,
        },
      };
      // Remove the flattened emergency contact fields
      const { emergencyContactName, emergencyContactPhone, emergencyContactRelationship, ...cleanData } = tenantData;
      return tenantsService.create(cleanData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      setIsFormOpen(false);
      toast({
        title: "Success",
        description: "Tenant created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create tenant",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) => {
      const tenantData = {
        ...updates,
        leaseStart: new Date(updates.leaseStart),
        leaseEnd: new Date(updates.leaseEnd),
        emergencyContact: {
          name: updates.emergencyContactName,
          phone: updates.emergencyContactPhone,
          relationship: updates.emergencyContactRelationship,
        },
      };
      // Remove the flattened emergency contact fields
      const { emergencyContactName, emergencyContactPhone, emergencyContactRelationship, ...cleanData } = tenantData;
      return tenantsService.update(id, cleanData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      setIsFormOpen(false);
      setEditingTenant(null);
      toast({
        title: "Success",
        description: "Tenant updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update tenant",
        variant: "destructive",
      });
    },
  });

  if (error) {
    toast({
      title: "Error",
      description: "Failed to load tenants",
      variant: "destructive",
    });
  }

  const getStatusColor = (status: TenantStatus) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'terminated': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleAddTenant = () => {
    setEditingTenant(null);
    setIsFormOpen(true);
  };

  const handleEditTenant = (tenant) => {
    setEditingTenant(tenant);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data) => {
    if (editingTenant) {
      updateMutation.mutate({ id: editingTenant.id, updates: data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingTenant(null);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Tenants</h2>
            <Button onClick={handleAddTenant}>
              <Plus className="h-4 w-4 mr-2" />
              Add Tenant
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-16 bg-gray-200 rounded"></div>
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
          <h2 className="text-2xl font-bold">Tenants</h2>
          <Button onClick={handleAddTenant}>
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
                      <p>{new Date(tenant.leaseStart).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Lease End:</span>
                      <p>{new Date(tenant.leaseEnd).toLocaleDateString()}</p>
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
                  <Button size="sm" variant="outline" onClick={() => handleEditTenant(tenant)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {tenants.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-muted-foreground mb-2">No tenants found</h3>
            <p className="text-sm text-muted-foreground mb-4">Get started by adding your first tenant.</p>
            <Button onClick={handleAddTenant}>
              <Plus className="h-4 w-4 mr-2" />
              Add Tenant
            </Button>
          </div>
        )}

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingTenant ? 'Edit Tenant' : 'Add New Tenant'}
              </DialogTitle>
            </DialogHeader>
            <TenantForm
              tenant={editingTenant}
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

export default Tenants;
