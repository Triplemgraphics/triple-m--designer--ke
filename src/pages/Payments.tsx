
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Download, AlertCircle } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { Payment, PaymentStatus } from '@/types/payment';

const Payments = () => {
  // Mock data - replace with actual data fetching
  const [payments] = useState<Payment[]>([
    {
      id: '1',
      tenantId: '1',
      propertyId: '1',
      amount: 1200,
      type: 'rent',
      status: 'paid',
      dueDate: new Date('2024-07-01'),
      paidDate: new Date('2024-06-30'),
      receiptNumber: 'RCP-001',
      createdAt: new Date('2024-06-01'),
      updatedAt: new Date('2024-06-30'),
    },
    {
      id: '2',
      tenantId: '1',
      propertyId: '1',
      amount: 1200,
      type: 'rent',
      status: 'overdue',
      dueDate: new Date('2024-08-01'),
      notes: 'Follow up required',
      createdAt: new Date('2024-07-01'),
      updatedAt: new Date('2024-07-01'),
    },
    {
      id: '3',
      tenantId: '2',
      propertyId: '2',
      amount: 2500,
      type: 'deposit',
      status: 'paid',
      dueDate: new Date('2024-02-01'),
      paidDate: new Date('2024-01-28'),
      receiptNumber: 'RCP-002',
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-28'),
    },
  ]);

  const getStatusColor = (status: PaymentStatus) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'partial': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Payments</h2>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Record Payment
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Collected (This Month)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$18,500</div>
              <p className="text-sm text-muted-foreground">15 payments received</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">$3,600</div>
              <p className="text-sm text-muted-foreground">3 pending payments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$1,200</div>
              <p className="text-sm text-muted-foreground">1 overdue payment</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Unit 101</TableCell>
                    <TableCell className="capitalize">{payment.type}</TableCell>
                    <TableCell className="font-medium">${payment.amount}</TableCell>
                    <TableCell>{payment.dueDate.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                        {payment.status === 'overdue' && <AlertCircle className="h-3 w-3 inline mr-1" />}
                        {payment.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View</Button>
                        {payment.status !== 'paid' && (
                          <Button size="sm">Mark Paid</Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
