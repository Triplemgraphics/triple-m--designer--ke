
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, CreditCard, AlertTriangle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import DashboardLayout from '@/components/DashboardLayout';
import { propertiesService } from '@/services/propertiesService';
import { tenantsService } from '@/services/tenantsService';
import { paymentsService } from '@/services/paymentsService';

const Dashboard = () => {
  const { data: properties = [] } = useQuery({
    queryKey: ['properties'],
    queryFn: propertiesService.getAll,
  });

  const { data: tenants = [] } = useQuery({
    queryKey: ['tenants'],
    queryFn: tenantsService.getAll,
  });

  const { data: payments = [] } = useQuery({
    queryKey: ['payments'],
    queryFn: paymentsService.getAll,
  });

  // Calculate real stats from the data
  const stats = React.useMemo(() => {
    const totalProperties = properties.length;
    const occupiedProperties = properties.filter(p => p.status === 'occupied').length;
    const vacantUnits = properties.filter(p => p.status === 'vacant').length;
    const totalTenants = tenants.filter(t => t.status === 'active').length;
    
    // Calculate monthly revenue from current rent amounts
    const monthlyRevenue = tenants
      .filter(t => t.status === 'active')
      .reduce((sum, t) => sum + t.rentAmount, 0);
    
    const overduePayments = payments.filter(p => p.status === 'overdue').length;

    return {
      totalProperties,
      occupiedProperties,
      totalTenants,
      monthlyRevenue,
      overduePayments,
      vacantUnits,
      occupancyRate: totalProperties > 0 ? Math.round((occupiedProperties / totalProperties) * 100) : 0
    };
  }, [properties, tenants, payments]);

  const recentActivity = React.useMemo(() => {
    // Get recent payments and sort by date
    const recentPayments = payments
      .filter(p => p.status === 'paid')
      .sort((a, b) => new Date(b.paidDate || b.createdAt).getTime() - new Date(a.paidDate || a.createdAt).getTime())
      .slice(0, 3);

    return recentPayments.map(payment => ({
      id: payment.id,
      type: 'payment',
      message: `Payment received - $${payment.amount} (${payment.type})`,
      time: payment.paidDate ? new Date(payment.paidDate).toLocaleDateString() : 'Recently'
    }));
  }, [payments]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProperties}</div>
              <p className="text-xs text-muted-foreground">
                {stats.occupiedProperties} occupied, {stats.vacantUnits} vacant
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tenants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalTenants}</div>
              <p className="text-xs text-muted-foreground">
                {stats.occupancyRate}% occupancy rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Expected monthly income
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{stats.overduePayments}</div>
              <p className="text-xs text-muted-foreground">
                {stats.overduePayments > 0 ? 'Requires attention' : 'All payments current'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.length > 0 ? (
                  recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No recent activity</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Property Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {properties.slice(0, 5).map((property) => (
                  <div key={property.id} className="flex items-center justify-between p-3 bg-muted rounded-md">
                    <div>
                      <span className="text-sm font-medium">{property.name}</span>
                      <p className="text-xs text-muted-foreground">{property.address}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      property.status === 'occupied' ? 'text-green-600 bg-green-100' :
                      property.status === 'vacant' ? 'text-yellow-600 bg-yellow-100' :
                      property.status === 'maintenance' ? 'text-red-600 bg-red-100' :
                      'text-gray-600 bg-gray-100'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                ))}
                {properties.length === 0 && (
                  <p className="text-sm text-muted-foreground">No properties found</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
