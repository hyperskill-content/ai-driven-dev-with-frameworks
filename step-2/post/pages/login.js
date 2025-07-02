import { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'

// Login page component
export default function Login() {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login functionality will be implemented in the next steps!')
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-8">
        {/* Login Form Card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          {/* Form Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to your account
            </p>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Sign In
            </button>
          </form>
          
          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 