// Import required modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import route modules
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');
const paymentRoutes = require('./routes/payments');

// Create an Express application
const app = express();

// Middleware: Enable CORS for all routes
app.use(cors());

// Middleware: Parse incoming JSON requests
app.use(express.json());

// Root route - Welcome message
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express.js backend API!' });
});

// Use route modules
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);
app.use('/payments', paymentRoutes);

// Error handling middleware
// This should be the last middleware before starting the server
// It catches errors from all routes and sends a JSON error response
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      // Optionally include stack trace in development
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
}); 