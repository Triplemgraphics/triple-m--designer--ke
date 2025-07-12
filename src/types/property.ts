
export interface Property {
  id: string;
  name: string;
  address: string;
  type: PropertyType;
  rentAmount: number;
  status: PropertyStatus;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet?: number;
  tenantId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PropertyType = 'apartment' | 'house' | 'condo' | 'townhouse' | 'studio';
export type PropertyStatus = 'vacant' | 'occupied' | 'maintenance' | 'unavailable';
