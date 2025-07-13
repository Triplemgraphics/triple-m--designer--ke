
import { supabase } from '@/integrations/supabase/client'
import { Payment } from '@/types/payment'

export const paymentsService = {
  async getAll(): Promise<Payment[]> {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return (data || []).map(item => ({
      id: item.id,
      tenantId: item.tenant_id,
      propertyId: item.property_id,
      amount: Number(item.amount),
      type: item.type,
      status: item.status,
      dueDate: new Date(item.due_date),
      paidDate: item.paid_date ? new Date(item.paid_date) : undefined,
      notes: item.notes,
      receiptNumber: item.receipt_number,
      createdAt: new Date(item.created_at),
      updatedAt: new Date(item.updated_at)
    }))
  },

  async getById(id: string): Promise<Payment | null> {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    
    if (!data) return null
    
    return {
      id: data.id,
      tenantId: data.tenant_id,
      propertyId: data.property_id,
      amount: Number(data.amount),
      type: data.type,
      status: data.status,
      dueDate: new Date(data.due_date),
      paidDate: data.paid_date ? new Date(data.paid_date) : undefined,
      notes: data.notes,
      receiptNumber: data.receipt_number,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async create(payment: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>): Promise<Payment> {
    const { data, error } = await supabase
      .from('payments')
      .insert([{
        tenant_id: payment.tenantId,
        property_id: payment.propertyId,
        amount: payment.amount,
        type: payment.type,
        status: payment.status,
        due_date: payment.dueDate.toISOString().split('T')[0],
        paid_date: payment.paidDate ? payment.paidDate.toISOString().split('T')[0] : null,
        notes: payment.notes,
        receipt_number: payment.receiptNumber
      }])
      .select()
      .single()
    
    if (error) throw error
    
    return {
      id: data.id,
      tenantId: data.tenant_id,
      propertyId: data.property_id,
      amount: Number(data.amount),
      type: data.type,
      status: data.status,
      dueDate: new Date(data.due_date),
      paidDate: data.paid_date ? new Date(data.paid_date) : undefined,
      notes: data.notes,
      receiptNumber: data.receipt_number,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async update(id: string, updates: Partial<Payment>): Promise<Payment> {
    const updateData: any = {}
    
    if (updates.tenantId !== undefined) updateData.tenant_id = updates.tenantId
    if (updates.propertyId !== undefined) updateData.property_id = updates.propertyId
    if (updates.amount !== undefined) updateData.amount = updates.amount
    if (updates.type !== undefined) updateData.type = updates.type
    if (updates.status !== undefined) updateData.status = updates.status
    if (updates.dueDate !== undefined) updateData.due_date = updates.dueDate.toISOString().split('T')[0]
    if (updates.paidDate !== undefined) updateData.paid_date = updates.paidDate ? updates.paidDate.toISOString().split('T')[0] : null
    if (updates.notes !== undefined) updateData.notes = updates.notes
    if (updates.receiptNumber !== undefined) updateData.receipt_number = updates.receiptNumber
    
    const { data, error } = await supabase
      .from('payments')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    
    return {
      id: data.id,
      tenantId: data.tenant_id,
      propertyId: data.property_id,
      amount: Number(data.amount),
      type: data.type,
      status: data.status,
      dueDate: new Date(data.due_date),
      paidDate: data.paid_date ? new Date(data.paid_date) : undefined,
      notes: data.notes,
      receiptNumber: data.receipt_number,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    }
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('payments')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}
