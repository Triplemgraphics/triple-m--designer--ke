
import { supabase } from '@/integrations/supabase/client'
import { Property } from '@/types/property'

export const propertiesService = {
  async getAll(): Promise<Property[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return (data || []).map(item => ({
      id: item.id,
      name: item.name,
      address: item.address,
      type: item.type,
      rentAmount: Number(item.rent_amount),
      status: item.status,
      description: item.description,
      bedrooms: item.bedrooms,
      bathrooms: Number(item.bathrooms),
      squareFeet: item.square_feet,
      tenantId: item.tenant_id,
      createdAt: new Date(item.created_at),
      updatedAt: new Date(item.updated_at)
    }))
  },

  async getById(id: string): Promise<Property | null> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    
    if (!data) return null
    
    return {
      id: data.id,
      name: data.name,
      address: data.address,
      type: data.type,
      rentAmount: Number(data.rent_amount),
      status: data.status,
      description: data.description,
      bedrooms: data.bedrooms,
      bathrooms: Number(data.bathrooms),
      squareFeet: data.square_feet,
      tenantId: data.tenant_id,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async create(property: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>): Promise<Property> {
    const { data, error } = await supabase
      .from('properties')
      .insert([{
        name: property.name,
        address: property.address,
        type: property.type,
        rent_amount: property.rentAmount,
        status: property.status,
        description: property.description,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        square_feet: property.squareFeet,
        tenant_id: property.tenantId
      }])
      .select()
      .single()
    
    if (error) throw error
    
    return {
      id: data.id,
      name: data.name,
      address: data.address,
      type: data.type,
      rentAmount: Number(data.rent_amount),
      status: data.status,
      description: data.description,
      bedrooms: data.bedrooms,
      bathrooms: Number(data.bathrooms),
      squareFeet: data.square_feet,
      tenantId: data.tenant_id,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async update(id: string, updates: Partial<Property>): Promise<Property> {
    const updateData: any = {}
    
    if (updates.name !== undefined) updateData.name = updates.name
    if (updates.address !== undefined) updateData.address = updates.address
    if (updates.type !== undefined) updateData.type = updates.type
    if (updates.rentAmount !== undefined) updateData.rent_amount = updates.rentAmount
    if (updates.status !== undefined) updateData.status = updates.status
    if (updates.description !== undefined) updateData.description = updates.description
    if (updates.bedrooms !== undefined) updateData.bedrooms = updates.bedrooms
    if (updates.bathrooms !== undefined) updateData.bathrooms = updates.bathrooms
    if (updates.squareFeet !== undefined) updateData.square_feet = updates.squareFeet
    if (updates.tenantId !== undefined) updateData.tenant_id = updates.tenantId
    
    const { data, error } = await supabase
      .from('properties')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    
    return {
      id: data.id,
      name: data.name,
      address: data.address,
      type: data.type,
      rentAmount: Number(data.rent_amount),
      status: data.status,
      description: data.description,
      bedrooms: data.bedrooms,
      bathrooms: Number(data.bathrooms),
      squareFeet: data.square_feet,
      tenantId: data.tenant_id,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}
