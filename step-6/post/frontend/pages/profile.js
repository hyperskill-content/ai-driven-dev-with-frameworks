import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'
import Header from '../components/Header'
import Link from 'next/link'
import { fetchIsSubscriber } from '../lib/fetchIsSubscriber'

// Profile page component
export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [subscribing, setSubscribing] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      setError(null)
      const { data, error } = await supabase.auth.getUser()
      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }
      if (!data.user) {
        router.push('/login')
        return
      }
      setUser(data.user)
      // Fetch isSubscriber from users table
      const isSub = await fetchIsSubscriber()
      setSubscriptionStatus(isSub ? 'subscribed' : 'not_subscribed')
      setLoading(false)
    }
    fetchUser()
  }, [router])

  const handleSubscribe = async () => {
    setSubscribing(true)
    try {
      const res = await fetch('http://localhost:3001/payments/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Failed to start Stripe checkout session.')
      }
    } catch (err) {
      setError('Network error: ' + err.message)
    } finally {
      setSubscribing(false)
    }
  }

  if (loading) return <div className="p-8 text-center">Loading profile...</div>
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-6">
          <div className="text-center">
            {/* Profile Avatar */}
            <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-white font-bold">
                {user.user_metadata?.name?.charAt(0)}
              </span>
            </div>
            
            {/* User Name */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {user.user_metadata?.name}
            </h1>
            
            {/* User Email */}
            <p className="text-gray-600 mb-4">
              {user.user_metadata?.email}
            </p>
            
            {/* Subscription Badge */}
            <div className="mb-6 text-center">
              {subscriptionStatus === 'subscribed' ? (
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  You are a subscriber!
                </span>
              ) : (
                <>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    Subscribe to access premium content
                  </span>
                  <div className="mt-4">
                    <button
                      className="btn-primary w-full"
                      onClick={handleSubscribe}
                      disabled={subscribing}
                    >
                      {subscribing ? 'Redirecting to Stripe...' : 'Subscribe'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Profile Stats */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Statistics
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">
                {user.user_metadata?.articlesRead}
              </div>
              <div className="text-sm text-gray-600">
                Articles Read
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">
                {user.user_metadata?.joinDate}
              </div>
              <div className="text-sm text-gray-600">
                Member Since
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Actions
          </h2>
          
          <div className="space-y-3">
            <Link href="/" className="block w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-800">📚 Browse Articles</div>
              <div className="text-sm text-gray-600">Discover new content</div>
            </Link>
            
            <button className="block w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-800">⚙️ Account Settings</div>
              <div className="text-sm text-gray-600">Manage your preferences</div>
            </button>
            
            <button className="block w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="font-medium text-gray-800">💳 Billing</div>
              <div className="text-sm text-gray-600">Manage subscription</div>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 