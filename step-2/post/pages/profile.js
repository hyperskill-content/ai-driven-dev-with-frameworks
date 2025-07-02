import Header from '../components/Header'
import Link from 'next/link'

// Profile page component
export default function Profile() {
  // Mock user data (will be replaced with real data in later steps)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    subscription: 'Premium',
    joinDate: 'January 2024',
    articlesRead: 15
  }

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
                {user.name.charAt(0)}
              </span>
            </div>
            
            {/* User Name */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {user.name}
            </h1>
            
            {/* User Email */}
            <p className="text-gray-600 mb-4">
              {user.email}
            </p>
            
            {/* Subscription Badge */}
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {user.subscription} Member
            </span>
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
                {user.articlesRead}
              </div>
              <div className="text-sm text-gray-600">
                Articles Read
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">
                {user.joinDate}
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