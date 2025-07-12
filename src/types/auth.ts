
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isActive: boolean;
  lastLogin?: Date;
  assignedProperties?: string[]; // For managers with specific property access
}

export type UserRole = 'admin' | 'manager' | 'agent' | 'guest';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  securityKey?: string;
}

export interface Permission {
  module: string;
  actions: string[];
}

export interface RolePermissions {
  [key: string]: Permission[];
}
