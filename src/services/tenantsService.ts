
import { supabase } from '@/integrations/supabase/client'
import { Tenant } from '@/types/tenant'

export const tenantsService = {
  async getAll(): Promise<Tenant[]> {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return (data || []).map(item => ({
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      emergencyContact: item.emergency_contact as any,
      leaseStart: new Date(item.lease_start),
      leaseEnd: new Date(item.lease_end),
      propertyId: item.property_id,
      depositAmount: Number(item.deposit_amount),
      rentAmount: Number(item.rent_amount),
      status: item.status,
      createdAt: new Date(item.created_at),
      updatedAt: new Date(item.updated_at)
    }))
  },

  async getById(id: string): Promise<Tenant | null> {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    
    if (!data) return null
    
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      emergencyContact: data.emergency_contact as any,
      leaseStart: new Date(data.lease_start),
      leaseEnd: new Date(data.lease_end),
      propertyId: data.property_id,
      depositAmount: Number(data.deposit_amount),
      rentAmount: Number(data.rent_amount),
      status: data.status,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async create(tenant: Omit<Tenant, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tenant> {
    const { data, error } = await supabase
      .from('tenants')
      .insert([{
        name: tenant.name,
        email: tenant.email,
        phone: tenant.phone,
        emergency_contact: tenant.emergencyContact,
        lease_start: tenant.leaseStart.toISOString().split('T')[0],
        lease_end: tenant.leaseEnd.toISOString().split('T')[0],
        property_id: tenant.propertyId,
        deposit_amount: tenant.depositAmount,
        rent_amount: tenant.rentAmount,
        status: tenant.status
      }])
      .select()
      .single()
    
    if (error) throw error
    
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      emergencyContact: data.emergency_contact as any,
      leaseStart: new Date(data.lease_start),
      leaseEnd: new Date(data.lease_end),
      propertyId: data.property_id,
      depositAmount: Number(data.deposit_amount),
      rentAmount: Number(data.rent_amount),
      status: data.status,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async update(id: string, updates: Partial<Tenant>): Promise<Tenant> {
    const updateData: any = {}
    
    if (updates.name !== undefined) updateData.name = updates.name
    if (updates.email !== undefined) updateData.email = updates.email
    if (updates.phone !== undefined) updateData.phone = updates.phone
    if (updates.emergencyContact !== undefined) updateData.emergency_contact = updates.emergencyContact
    if (updates.leaseStart !== undefined) updateData.lease_start = updates.leaseStart.toISOString().split('T')[0]
    if (updates.leaseEnd !== undefined) updateData.lease_end = updates.leaseEnd.toISOString().split('T')[0]
    if (updates.propertyId !== undefined) updateData.property_id = updates.propertyId
    if (updates.depositAmount !== undefined) updateData.deposit_amount = updates.depositAmount
    if (updates.rentAmount !== undefined) updateData.rent_amount = updates.rentAmount
    if (updates.status !== undefined) updateData.status = updates.status
    
    const { data, error } = await supabase
      .from('tenants')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      emergencyContact: data.emergency_contact as any,
      leaseStart: new Date(data.lease_start),
      leaseEnd: new Date(data.lease_end),
      propertyId: data.property_id,
      depositAmount: Number(data.deposit_amount),
      rentAmount: Number(data.rent_amount),
      status: data.status,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('tenants')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}
