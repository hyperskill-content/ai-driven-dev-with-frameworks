// Reusable ArticleCard component
// Accepts title, description, isPremium (boolean), and canView (boolean)
function ArticleCard({ title, description, isPremium, canView }) {
  // Handle read more button click for premium content
  const handleReadMore = () => {
    alert('This article is available for subscribers only.')
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Article Icon */}
      <div className="text-2xl mb-3">📰</div>
      
      {/* Article Title with lock icon if premium */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
        {title}
        {isPremium && (
          <span className="ml-2 text-yellow-500" title="Premium">🔒</span>
        )}
      </h2>
      
      {/* Article Description or prompt to subscribe */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {canView ? description : <span className="italic text-gray-400">Subscribe to view this premium content.</span>}
      </p>
      
      {/* Read More Button for premium content if not allowed to view */}
      {isPremium && !canView && (
        <button
          onClick={handleReadMore}
          className="btn-primary"
        >
          Read More
        </button>
      )}
    </div>
  )
}

export default ArticleCard 