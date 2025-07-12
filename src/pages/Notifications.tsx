
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, AlertTriangle, Calendar, DollarSign, Settings, Check } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

interface Notification {
  id: string;
  type: 'rent_due' | 'lease_expiry' | 'maintenance' | 'payment_overdue' | 'system';
  title: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
  isRead: boolean;
  createdAt: Date;
  dueDate?: Date;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'payment_overdue',
      title: 'Payment Overdue',
      message: 'John Doe (Unit 101) - Rent payment is 5 days overdue',
      priority: 'high',
      isRead: false,
      createdAt: new Date('2024-07-08'),
      dueDate: new Date('2024-07-01'),
    },
    {
      id: '2',
      type: 'lease_expiry',
      title: 'Lease Expiring Soon',
      message: 'Unit 205 lease expires in 30 days - Contact tenant for renewal',
      priority: 'medium',
      isRead: false,
      createdAt: new Date('2024-07-07'),
      dueDate: new Date('2024-08-15'),
    },
    {
      id: '3',
      type: 'rent_due',
      title: 'Rent Due Reminder',
      message: 'Monthly rent collection due in 3 days',
      priority: 'medium',
      isRead: true,
      createdAt: new Date('2024-07-06'),
      dueDate: new Date('2024-08-01'),
    },
    {
      id: '4',
      type: 'maintenance',
      title: 'Maintenance Request',
      message: 'New maintenance request submitted for Unit 302 - Plumbing issue',
      priority: 'high',
      isRead: false,
      createdAt: new Date('2024-07-05'),
    },
  ]);

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'payment_overdue': return AlertTriangle;
      case 'lease_expiry': return Calendar;
      case 'rent_due': return DollarSign;
      case 'maintenance': return Settings;
      default: return Bell;
    }
  };

  const getPriorityColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Notifications & Alerts</h2>
            {unreadCount > 0 && (
              <p className="text-muted-foreground">{unreadCount} unread notifications</p>
            )}
          </div>
          <Button onClick={markAllAsRead} disabled={unreadCount === 0}>
            <Check className="h-4 w-4 mr-2" />
            Mark All as Read
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{notifications.length}</div>
              <p className="text-xs text-muted-foreground">
                {unreadCount} unread
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {notifications.filter(n => n.priority === 'high').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rent Overdue</CardTitle>
              <DollarSign className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {notifications.filter(n => n.type === 'payment_overdue').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lease Expiring</CardTitle>
              <Calendar className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {notifications.filter(n => n.type === 'lease_expiry').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => {
                const Icon = getNotificationIcon(notification.type);
                return (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 p-4 rounded-md border ${
                      !notification.isRead ? 'bg-muted/50 border-primary/20' : 'bg-background'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${getPriorityColor(notification.priority)}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm font-medium ${!notification.isRead ? 'font-semibold' : ''}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                            {notification.priority}
                          </span>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">
                          {notification.createdAt.toLocaleDateString()}
                        </span>
                        {notification.dueDate && (
                          <span className="text-xs text-muted-foreground">
                            Due: {notification.dueDate.toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    {!notification.isRead && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark Read
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <h4 className="font-medium">Rent Due Reminders</h4>
                  <p className="text-sm text-muted-foreground">Send reminders 3 days before rent is due</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <h4 className="font-medium">Lease Expiry Alerts</h4>
                  <p className="text-sm text-muted-foreground">Alert 30 days before lease expiration</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <h4 className="font-medium">Payment Overdue Notifications</h4>
                  <p className="text-sm text-muted-foreground">Send alerts for payments overdue by 1+ days</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Send email notifications for high priority alerts</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
