const express = require('express');
const router = express.Router();

// Sample endpoint: GET /users
// This is a placeholder for fetching users
router.get('/', (req, res) => {
  // In a real app, you would fetch users from a database
  res.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);
});

module.exports = router; 