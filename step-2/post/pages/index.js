import Header from '../components/Header'
import ArticleCard from '../components/ArticleCard'

// Home page component
export default function Home() {
  // Sample article data
  const articles = [
    {
      id: 1,
      title: "How AI is Changing the World",
      description: "Discover the latest trends in artificial intelligence and how they impact our daily lives. From machine learning to natural language processing, explore the future of technology."
    },
    {
      id: 2,
      title: "The Future of Web Development",
      description: "Explore new technologies and frameworks that are shaping the future of the web. Learn about React, Next.js, and modern development practices."
    },
    {
      id: 3,
      title: "Understanding Cloud Computing",
      description: "Learn the basics of cloud computing and why it matters for businesses and individuals. Discover AWS, Azure, and Google Cloud platforms."
    }
  ]

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