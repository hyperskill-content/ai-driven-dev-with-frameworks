const express = require('express');
const router = express.Router();

// Sample endpoint: GET /articles
// This is a placeholder for fetching articles
router.get('/', (req, res) => {
  // In a real app, you would fetch articles from a database
  res.json([
    { id: 1, title: 'How AI is Changing the World', description: 'Discover the latest trends in AI.' },
    { id: 2, title: 'The Future of Web Development', description: 'Explore new technologies and frameworks.' },
    { id: 3, title: 'Understanding Cloud Computing', description: 'Learn the basics of cloud computing.' },
    { id: 4, title: '4 — How AI is Changing the World', description: 'Discover the latest trends in AI.' },
    { id: 5, title: '5 — The Future of Web Development', description: 'Explore new technologies and frameworks.' },
    { id: 6, title: '6 — Understanding Cloud Computing', description: 'Learn the basics of cloud computing.' }
  ]);
});

module.exports = router;
