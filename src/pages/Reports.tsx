
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, DollarSign, Home, Users } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

const Reports = () => {
  const reportData = {
    occupancyRate: 84,
    monthlyRevenue: 75600,
    totalCollected: 68400,
    outstandingAmount: 7200,
    averageRent: 1890,
    totalProperties: 45,
    occupiedUnits: 38,
    vacantUnits: 7,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reportData.occupancyRate}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${reportData.occupancyRate}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${reportData.monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                ${reportData.totalCollected.toLocaleString()} collected
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">90.5%</div>
              <p className="text-xs text-muted-foreground">
                ${reportData.outstandingAmount.toLocaleString()} outstanding
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rent</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${reportData.averageRent}</div>
              <p className="text-xs text-muted-foreground">
                Per unit per month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Occupancy Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Properties</span>
                  <span className="font-medium">{reportData.totalProperties}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Occupied Units</span>
                  <span className="font-medium text-green-600">{reportData.occupiedUnits}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vacant Units</span>
                  <span className="font-medium text-yellow-600">{reportData.vacantUnits}</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Occupancy Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rent Collection Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Expected Revenue</span>
                  <span className="font-medium">${reportData.monthlyRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Collected</span>
                  <span className="font-medium text-green-600">${reportData.totalCollected.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Outstanding</span>
                  <span className="font-medium text-red-600">${reportData.outstandingAmount.toLocaleString()}</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Collection Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Home className="h-6 w-6 mb-2" />
                Property List Report
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                Tenant Directory
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <DollarSign className="h-6 w-6 mb-2" />
                Payment History
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Calendar className="h-6 w-6 mb-2" />
                Lease Expiry Report
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <DollarSign className="h-6 w-6 mb-2" />
                Outstanding Balances
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Home className="h-6 w-6 mb-2" />
                Maintenance Requests
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
