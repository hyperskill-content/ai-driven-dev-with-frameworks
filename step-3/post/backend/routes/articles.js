const express = require('express');
const router = express.Router();

// Sample endpoint: GET /articles
// This is a placeholder for fetching articles
router.get('/', (req, res) => {
  // In a real app, you would fetch articles from a database
  res.json([
    { id: 1, title: 'How AI is Changing the World', description: 'Discover the latest trends in AI.' },
    { id: 2, title: 'The Future of Web Development', description: 'Explore new technologies and frameworks.' },
    { id: 3, title: 'Understanding Cloud Computing', description: 'Learn the basics of cloud computing.' }
  ]);
});

module.exports = router; 