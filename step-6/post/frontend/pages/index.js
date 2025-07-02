import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'
import Header from '../components/Header'
import ArticleCard from '../components/ArticleCard'
import { fetchIsSubscriber } from '../lib/fetchIsSubscriber'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// Home page component
export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSubscriber, setIsSubscriber] = useState(false)
  const [userLoading, setUserLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUserAndArticles = async () => {
      setUserLoading(true)
      setLoading(true)
      setError(null)
      // Check user authentication
      const { data: userData, error: userError } = await supabase.auth.getUser()
      if (userError || !userData.user) {
        router.push('/login')
        return
      }
      // Fetch isSubscriber from users table
      const isSub = await fetchIsSubscriber()
      setIsSubscriber(isSub)
      setUserLoading(false)
      // Fetch articles from backend
      try {
        const res = await fetch(`${API_URL}/articles?isSubscriber=${isSub}`)
        if (!res.ok) throw new Error('Failed to fetch articles')
        const data = await res.json()
        setArticles(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUserAndArticles()
  }, [router])

  if (userLoading || loading) return <div className="p-8 text-center">Loading articles...</div>
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
              isPremium={article.isPremium}
              canView={isSubscriber || !article.isPremium}
            />
          ))}
        </div>

        {/* Call to Action */}
        {!isSubscriber && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Want to read more articles?
            </p>
            {/* Button links to profile page for subscription */}
            <button
              className="btn-secondary"
              onClick={() => router.push('/profile')}
            >
              Subscribe Now
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
