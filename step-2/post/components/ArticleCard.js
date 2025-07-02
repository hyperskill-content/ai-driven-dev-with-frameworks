// Reusable ArticleCard component
function ArticleCard({ title, description }) {
  // Handle read more button click
  const handleReadMore = () => {
    alert('This article is available for subscribers only.')
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Article Icon */}
      <div className="text-2xl mb-3">📰</div>
      
      {/* Article Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h2>
      
      {/* Article Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Read More Button */}
      <button
        onClick={handleReadMore}
        className="btn-primary"
      >
        Read More
      </button>
    </div>
  )
}

export default ArticleCard 