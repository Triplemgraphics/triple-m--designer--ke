
export interface Payment {
  id: string;
  tenantId: string;
  propertyId: string;
  amount: number;
  type: PaymentType;
  status: PaymentStatus;
  dueDate: Date;
  paidDate?: Date;
  notes?: string;
  receiptNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PaymentType = 'rent' | 'deposit' | 'penalty' | 'maintenance' | 'other';
export type PaymentStatus = 'pending' | 'paid' | 'overdue' | 'partial';
