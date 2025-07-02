import Link from 'next/link'

// Reusable Header component with navigation
function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            📚 Mini Library
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-primary-600 transition-colors">
              Login
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-primary-600 transition-colors">
              Profile
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 