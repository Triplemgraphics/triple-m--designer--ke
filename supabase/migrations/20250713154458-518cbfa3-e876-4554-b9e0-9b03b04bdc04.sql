
-- Create enum types for better data consistency
CREATE TYPE property_type AS ENUM ('apartment', 'house', 'condo', 'townhouse', 'studio');
CREATE TYPE property_status AS ENUM ('vacant', 'occupied', 'maintenance', 'unavailable');
CREATE TYPE tenant_status AS ENUM ('active', 'inactive', 'pending', 'terminated');
CREATE TYPE payment_type AS ENUM ('rent', 'deposit', 'penalty', 'maintenance', 'other');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'overdue', 'partial');

-- Create properties table
CREATE TABLE public.properties (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    type property_type NOT NULL DEFAULT 'apartment',
    rent_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
    status property_status NOT NULL DEFAULT 'vacant',
    description TEXT,
    bedrooms INTEGER NOT NULL DEFAULT 1,
    bathrooms DECIMAL(3,1) NOT NULL DEFAULT 1,
    square_feet INTEGER,
    tenant_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create tenants table
CREATE TABLE public.tenants (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    emergency_contact JSONB NOT NULL DEFAULT '{}',
    lease_start DATE NOT NULL,
    lease_end DATE NOT NULL,
    property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
    deposit_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
    rent_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
    status tenant_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create payments table
CREATE TABLE public.payments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    type payment_type NOT NULL DEFAULT 'rent',
    status payment_status NOT NULL DEFAULT 'pending',
    due_date DATE NOT NULL,
    paid_date DATE,
    notes TEXT,
    receipt_number TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add foreign key constraint from properties to tenants
ALTER TABLE public.properties 
ADD CONSTRAINT fk_properties_tenant 
FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE SET NULL;

-- Enable Row Level Security
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Create policies for properties
CREATE POLICY "Everyone can view properties" ON public.properties
    FOR SELECT USING (true);

CREATE POLICY "Everyone can insert properties" ON public.properties
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Everyone can update properties" ON public.properties
    FOR UPDATE USING (true);

CREATE POLICY "Everyone can delete properties" ON public.properties
    FOR DELETE USING (true);

-- Create policies for tenants
CREATE POLICY "Everyone can view tenants" ON public.tenants
    FOR SELECT USING (true);

CREATE POLICY "Everyone can insert tenants" ON public.tenants
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Everyone can update tenants" ON public.tenants
    FOR UPDATE USING (true);

CREATE POLICY "Everyone can delete tenants" ON public.tenants
    FOR DELETE USING (true);

-- Create policies for payments
CREATE POLICY "Everyone can view payments" ON public.payments
    FOR SELECT USING (true);

CREATE POLICY "Everyone can insert payments" ON public.payments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Everyone can update payments" ON public.payments
    FOR UPDATE USING (true);

CREATE POLICY "Everyone can delete payments" ON public.payments
    FOR DELETE USING (true);

-- Insert some sample data
INSERT INTO public.properties (name, address, type, rent_amount, status, bedrooms, bathrooms, square_feet) VALUES
('Sunset Apartments 101', '123 Main St, Apt 101', 'apartment', 1200.00, 'vacant', 2, 1.0, 850),
('Oak Street House', '456 Oak Street', 'house', 1800.00, 'occupied', 3, 2.0, 1200),
('Downtown Condo', '789 City Center Blvd', 'condo', 1500.00, 'vacant', 2, 2.0, 900),
('Garden View Townhouse', '321 Garden Lane', 'townhouse', 2000.00, 'occupied', 4, 2.5, 1400),
('Studio Loft', '654 Artist Way', 'studio', 900.00, 'maintenance', 1, 1.0, 500);

INSERT INTO public.tenants (name, email, phone, emergency_contact, lease_start, lease_end, deposit_amount, rent_amount, status) VALUES
('John Smith', 'john.smith@email.com', '(555) 123-4567', '{"name": "Jane Smith", "phone": "(555) 987-6543", "relationship": "spouse"}', '2024-01-01', '2024-12-31', 1800.00, 1800.00, 'active'),
('Sarah Johnson', 'sarah.j@email.com', '(555) 234-5678', '{"name": "Mike Johnson", "phone": "(555) 876-5432", "relationship": "brother"}', '2024-02-15', '2025-02-14', 2000.00, 2000.00, 'active'),
('Mike Davis', 'mike.davis@email.com', '(555) 345-6789', '{"name": "Lisa Davis", "phone": "(555) 765-4321", "relationship": "sister"}', '2024-03-01', '2024-11-30', 1200.00, 1200.00, 'pending');

-- Update properties with tenant assignments
UPDATE public.properties SET tenant_id = (SELECT id FROM public.tenants WHERE name = 'John Smith') WHERE name = 'Oak Street House';
UPDATE public.properties SET tenant_id = (SELECT id FROM public.tenants WHERE name = 'Sarah Johnson') WHERE name = 'Garden View Townhouse';

-- Update tenants with property assignments
UPDATE public.tenants SET property_id = (SELECT id FROM public.properties WHERE name = 'Oak Street House') WHERE name = 'John Smith';
UPDATE public.tenants SET property_id = (SELECT id FROM public.properties WHERE name = 'Garden View Townhouse') WHERE name = 'Sarah Johnson';

INSERT INTO public.payments (tenant_id, property_id, amount, type, status, due_date, paid_date) VALUES
((SELECT id FROM public.tenants WHERE name = 'John Smith'), (SELECT id FROM public.properties WHERE name = 'Oak Street House'), 1800.00, 'rent', 'paid', '2024-01-01', '2023-12-28'),
((SELECT id FROM public.tenants WHERE name = 'Sarah Johnson'), (SELECT id FROM public.properties WHERE name = 'Garden View Townhouse'), 2000.00, 'rent', 'paid', '2024-02-15', '2024-02-10'),
((SELECT id FROM public.tenants WHERE name = 'John Smith'), (SELECT id FROM public.properties WHERE name = 'Oak Street House'), 1800.00, 'rent', 'pending', '2024-02-01', NULL),
((SELECT id FROM public.tenants WHERE name = 'Sarah Johnson'), (SELECT id FROM public.properties WHERE name = 'Garden View Townhouse'), 2000.00, 'rent', 'overdue', '2024-01-15', NULL);
