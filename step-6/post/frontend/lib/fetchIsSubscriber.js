// Helper function to fetch isSubscriber from Supabase users table
// Use this in your pages to check if a user is a subscriber
import { supabase } from './supabase'

export async function fetchIsSubscriber() {
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) return false
    const { data, error } = await supabase
      .from('users')
      .select('isSubscriber')
      .eq('email', user.email)
      .single()
    if (error || !data) return false
    return data.isSubscriber === true
  } catch (err) {
    return false
  }
} 