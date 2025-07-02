import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ArticleCard from '../components/ArticleCard'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// Home page component
export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch articles from backend API
    fetch(`${API_URL}/articles`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch articles')
        return res.json()
      })
      .then((data) => {
        setArticles(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="p-8 text-center">Loading articles...</div>
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to Mini Library
          </h1>
          <p className="text-gray-600">
            Discover amazing articles and expand your knowledge
          </p>
        </div>
        
        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to read more articles?
          </p>
          <button className="btn-secondary">
            Subscribe Now
          </button>
        </div>
      </main>
    </div>
  )
} 