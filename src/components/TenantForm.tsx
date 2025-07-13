
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tenant, TenantStatus } from '@/types/tenant';

const tenantSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone is required'),
  emergencyContactName: z.string().min(1, 'Emergency contact name is required'),
  emergencyContactPhone: z.string().min(1, 'Emergency contact phone is required'),
  emergencyContactRelationship: z.string().min(1, 'Relationship is required'),
  leaseStart: z.string().min(1, 'Lease start date is required'),
  leaseEnd: z.string().min(1, 'Lease end date is required'),
  depositAmount: z.number().min(0, 'Deposit amount must be positive'),
  rentAmount: z.number().min(0, 'Rent amount must be positive'),
  status: z.enum(['active', 'inactive', 'pending', 'terminated']),
});

type TenantFormData = z.infer<typeof tenantSchema>;

interface TenantFormProps {
  tenant?: Partial<Tenant>;
  onSubmit: (data: TenantFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const TenantForm: React.FC<TenantFormProps> = ({
  tenant,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TenantFormData>({
    resolver: zodResolver(tenantSchema),
    defaultValues: {
      name: tenant?.name || '',
      email: tenant?.email || '',
      phone: tenant?.phone || '',
      emergencyContactName: tenant?.emergencyContact?.name || '',
      emergencyContactPhone: tenant?.emergencyContact?.phone || '',
      emergencyContactRelationship: tenant?.emergencyContact?.relationship || '',
      leaseStart: tenant?.leaseStart ? tenant.leaseStart.toISOString().split('T')[0] : '',
      leaseEnd: tenant?.leaseEnd ? tenant.leaseEnd.toISOString().split('T')[0] : '',
      depositAmount: tenant?.depositAmount || 0,
      rentAmount: tenant?.rentAmount || 0,
      status: tenant?.status || 'pending',
    },
  });

  const status = watch('status');

  const handleFormSubmit = (data: TenantFormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={(value) => setValue('status', value as TenantStatus)}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="terminated">Terminated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="leaseStart">Lease Start Date</Label>
          <Input
            id="leaseStart"
            type="date"
            {...register('leaseStart')}
          />
          {errors.leaseStart && (
            <p className="text-sm text-red-600">{errors.leaseStart.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="leaseEnd">Lease End Date</Label>
          <Input
            id="leaseEnd"
            type="date"
            {...register('leaseEnd')}
          />
          {errors.leaseEnd && (
            <p className="text-sm text-red-600">{errors.leaseEnd.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="rentAmount">Monthly Rent ($)</Label>
          <Input
            id="rentAmount"
            type="number"
            step="0.01"
            {...register('rentAmount', { valueAsNumber: true })}
            placeholder="1200.00"
          />
          {errors.rentAmount && (
            <p className="text-sm text-red-600">{errors.rentAmount.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="depositAmount">Security Deposit ($)</Label>
          <Input
            id="depositAmount"
            type="number"
            step="0.01"
            {...register('depositAmount', { valueAsNumber: true })}
            placeholder="1200.00"
          />
          {errors.depositAmount && (
            <p className="text-sm text-red-600">{errors.depositAmount.message}</p>
          )}
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-4">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyContactName">Name</Label>
            <Input
              id="emergencyContactName"
              {...register('emergencyContactName')}
              placeholder="Jane Smith"
            />
            {errors.emergencyContactName && (
              <p className="text-sm text-red-600">{errors.emergencyContactName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyContactPhone">Phone</Label>
            <Input
              id="emergencyContactPhone"
              {...register('emergencyContactPhone')}
              placeholder="(555) 987-6543"
            />
            {errors.emergencyContactPhone && (
              <p className="text-sm text-red-600">{errors.emergencyContactPhone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyContactRelationship">Relationship</Label>
            <Input
              id="emergencyContactRelationship"
              {...register('emergencyContactRelationship')}
              placeholder="Spouse, Parent, etc."
            />
            {errors.emergencyContactRelationship && (
              <p className="text-sm text-red-600">{errors.emergencyContactRelationship.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-2 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : tenant?.id ? 'Update Tenant' : 'Add Tenant'}
        </Button>
      </div>
    </form>
  );
};

export default TenantForm;
