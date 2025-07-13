
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Property, PropertyType, PropertyStatus } from '@/types/property';

const propertySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  address: z.string().min(1, 'Address is required'),
  type: z.enum(['apartment', 'house', 'condo', 'townhouse', 'studio']),
  rentAmount: z.number().min(0, 'Rent amount must be positive'),
  status: z.enum(['vacant', 'occupied', 'maintenance', 'unavailable']),
  description: z.string().optional(),
  bedrooms: z.number().min(0, 'Bedrooms must be positive'),
  bathrooms: z.number().min(0, 'Bathrooms must be positive'),
  squareFeet: z.number().min(0, 'Square feet must be positive').optional(),
});

type PropertyFormData = z.infer<typeof propertySchema>;

interface PropertyFormProps {
  property?: Partial<Property>;
  onSubmit: (data: PropertyFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const PropertyForm: React.FC<PropertyFormProps> = ({
  property,
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
  } = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      name: property?.name || '',
      address: property?.address || '',
      type: property?.type || 'apartment',
      rentAmount: property?.rentAmount || 0,
      status: property?.status || 'vacant',
      description: property?.description || '',
      bedrooms: property?.bedrooms || 1,
      bathrooms: property?.bathrooms || 1,
      squareFeet: property?.squareFeet || undefined,
    },
  });

  const type = watch('type');
  const status = watch('status');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Property Name</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="e.g., Sunset Apartments 101"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            {...register('address')}
            placeholder="123 Main St, City, State"
          />
          {errors.address && (
            <p className="text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Property Type</Label>
          <Select value={type} onValueChange={(value) => setValue('type', value as PropertyType)}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={(value) => setValue('status', value as PropertyStatus)}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vacant">Vacant</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rentAmount">Rent Amount ($)</Label>
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
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Input
            id="bedrooms"
            type="number"
            {...register('bedrooms', { valueAsNumber: true })}
            min="0"
          />
          {errors.bedrooms && (
            <p className="text-sm text-red-600">{errors.bedrooms.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Input
            id="bathrooms"
            type="number"
            step="0.5"
            {...register('bathrooms', { valueAsNumber: true })}
            min="0"
          />
          {errors.bathrooms && (
            <p className="text-sm text-red-600">{errors.bathrooms.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="squareFeet">Square Feet (optional)</Label>
          <Input
            id="squareFeet"
            type="number"
            {...register('squareFeet', { valueAsNumber: true })}
            min="0"
            placeholder="850"
          />
          {errors.squareFeet && (
            <p className="text-sm text-red-600">{errors.squareFeet.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description (optional)</Label>
        <Textarea
          id="description"
          {...register('description')}
          placeholder="Additional details about the property..."
          rows={3}
        />
      </div>

      <div className="flex space-x-2 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : property?.id ? 'Update Property' : 'Add Property'}
        </Button>
      </div>
    </form>
  );
};

export default PropertyForm;
