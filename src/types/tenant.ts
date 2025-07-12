
export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  leaseStart: Date;
  leaseEnd: Date;
  propertyId: string;
  depositAmount: number;
  rentAmount: number;
  status: TenantStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type TenantStatus = 'active' | 'inactive' | 'pending' | 'terminated';
