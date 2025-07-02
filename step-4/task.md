# Frontend & Backend Integration Guide

This guide will help you connect your Next.js frontend (in `step-4/post/frontend`) with your Express.js backend (in `step-4/post/backend`). You'll learn how to fetch data, handle authentication, and structure your code for a real-world fullstack app.

---

## Step-by-Step Integration Instructions

### 1. Start Both Applications

**What to do:**
- Open two terminal windows/tabs.
- Start the backend server:
  ```bash
  cd step-4/post/backend
  npm install   # Only needed the first time
  npm run dev
  ```
- Start the frontend server:
  ```bash
  cd step-4/post/frontend
  npm install   # Only needed the first time
  npm run dev
  ```
- Backend runs on [http://localhost:3001](http://localhost:3001)
- Frontend runs on [http://localhost:3000](http://localhost:3000)

**Prompt Example:**
```plaintext
How do I run both my Next.js frontend (in post/frontend) and Express.js backend (in post/backend) at the same time for local development?
```

---

### 2. Fetch Data from the Backend in Next.js

**What to do:**
- In your Next.js app (`post/frontend`), update the homepage (`pages/index.js`) to fetch data from the backend API (`http://localhost:3001/articles`) using `fetch()` or `axios`.
- Use `useEffect` and `useState` to load data on the client side.
- Show a loading state while fetching.

**Prompt Example:**
```plaintext
Update my Next.js homepage (in post/frontend/pages/index.js) to fetch articles from http://localhost:3001/articles using useEffect and useState. Show a loading message while fetching and display ArticleCard components for each article.
```
Result:

```jsx
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ArticleCard from '../components/ArticleCard'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch articles from backend API
    fetch('http://localhost:3001/articles')
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
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Mini Library</h1>
          <p className="text-gray-600">Discover amazing articles and expand your knowledge</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to read more articles?</p>
          <button className="btn-secondary">Subscribe Now</button>
        </div>
      </main>
    </div>
  )
}
```
---

### 3. How to Check the Result

**What to do:**
- Open your browser and go to [http://localhost:3000](http://localhost:3000).
- You should see a list of articles loaded from your backend.
- If the backend is not running, you will see an error message (e.g., "Error: Failed to fetch articles").
- To confirm the data is coming from the backend:
  - Open your browser's Developer Tools (F12 or right-click → Inspect → Network tab).
  - Refresh the page and look for a request to `http://localhost:3001/articles`.
  - Click on it and check the "Response" tab to see the JSON data returned by your backend.
- You can also test the backend directly by visiting [http://localhost:3001/articles](http://localhost:3001/articles) in your browser or running:
  ```bash
  curl http://localhost:3001/articles
  ```
  You should see a JSON array of articles.

**Prompt Example:**
```plaintext
How do I check that my Next.js frontend is actually fetching data from my Express backend? How can I debug or verify the network requests?
```

---

### 4. Handle CORS Issues

**What to do:**
- If you see CORS errors in the browser, make sure your Express backend has `cors` middleware enabled (already done in our setup).
- You can customize CORS settings if needed (e.g., restrict origins).

**Prompt Example:**
```plaintext
I'm getting a CORS error when my Next.js frontend tries to fetch from my Express backend. How do I fix this?
```

---

### 5. Connect Login Form to Backend

**What to do:**
- Update the login form in your Next.js app to send a POST request to `http://localhost:3001/auth/login` with the user's email and password.
- Use `fetch()` or `axios` to send the request.
- Show a success or error message based on the backend response.

**Prompt Example:**
```plaintext
How do I connect my Next.js login form to my Express backend? Send a POST request to /auth/login and handle the response in the frontend.
```

Result

```jsx
import { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'

// Login page component
export default function Login() {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  // State for feedback messages
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)
    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (res.ok) {
        setMessage(data.message || 'Login successful!')
      } else {
        setError(data.error?.message || data.message || 'Login failed')
      }
    } catch (err) {
      setError('Network error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />
      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-8">
        {/* Login Form Card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          {/* Form Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to your account
            </p>
          </div>
          {/* Feedback Messages */}
          {message && <div className="mb-4 text-green-600 text-center">{message}</div>}
          {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>
            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
```

---

### 6. Use Environment Variables for API URLs

**What to do:**
- Store your backend API URL in an environment variable in the frontend (e.g., `.env.local` in Next.js).
- Use `process.env.NEXT_PUBLIC_API_URL` in your fetch calls.

**Prompt Example:**
```plaintext
How do I use environment variables in Next.js to store my backend API URL and use it in fetch requests?
```
Result

```jsx
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
          return res.json();
      }
      ....
```
To finish setup, you just need to create a `.env.local` file in step-4/post/frontend with this line:

```jsx
  NEXT_PUBLIC_API_URL=http://localhost:3001
```

(You can do this manually, as editing this file is restricted for the AI.)

#### How it works:
When you run your Next.js app, it will read NEXT_PUBLIC_API_URL and use it for all backend requests.
This makes it easy to switch between development and production backends without changing your code.
---

### 7. Error Handling and Loading States

**What to do:**
- Add error handling in your frontend when fetching data from the backend.
- Show user-friendly error messages if the backend is down or returns an error.
- Always show a loading state while waiting for data.

**Prompt Example:**
```plaintext
How do I add error handling and loading states to my Next.js data fetching from an Express backend?
```

---

### 8. Secure API Requests (Optional for Later)

**What to do:**
- For real authentication, use JWT tokens or session cookies.
- Store tokens securely (e.g., in httpOnly cookies).
- Send tokens with each request to protected backend routes.

**Prompt Example:**
```plaintext
How do I implement JWT authentication between my Next.js frontend and Express backend? Where should I store the token and how do I send it with requests?
```

---

## 💡 Tips for Smooth Integration
- Always keep your backend and frontend running on different ports during development.
- Use absolute URLs (e.g., `http://localhost:3001/...`) for API calls in development.
- Use environment variables to easily switch between development and production API URLs.
- Check browser console and network tab for errors when debugging.
- Use tools like Postman to test backend endpoints independently.

---

## 🧩 Example Workflow
1. Start both servers as described above.
2. Fetch articles from backend in the frontend homepage.
3. Check the result in your browser and network tab.
4. (Optional) Add more integration, such as login or environment variables, as you progress.

By following these steps, you'll have a fully integrated fullstack app, ready for real-world use and future enhancements!





