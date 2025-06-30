# 🔄 Step 3 — Fetching Dynamic Data from the Backend

## 🎯 Goal

Turn your static article list into a dynamic list that loads from an API. You'll connect your React frontend (Next.js) to a backend server using `fetch()` and display live data — instead of hardcoded articles.

This step introduces **data fetching** and helps you understand how frontends and backends communicate.

---

## 🧱 What You’ll Build

You’ll replace your static articles with data from this mock endpoint:

`GET /api/articles`

It returns a JSON array like:

```json
[
  { "id": 1, "title": "React Fundamentals", "description": "What you need to know to start using React" },
  { "id": 2, "title": "Why Tailwind Works", "description": "The thinking behind utility-first CSS" },
  { "id": 3, "title": "From Static to Dynamic", "description": "How we scale static apps into real products" }
]
```
You'll use this data to render <ArticleCard /> components.

## 📦 Technologies Used
Next.js (React frontend)

fetch() API

Express backend (you can simulate it locally or use a hardcoded JSON for now)

## 💬 Prompt Example: Basic Data Fetch

> Update the Next.js homepage to fetch article data from `/api/articles` using useEffect.
Use fetch() and render each article with the ArticleCard component.
Show a loading message while the data is loading.

## 🧠 Why This Matters
This is the foundation of how modern apps work:
- Data lives on the server
- The browser fetches it using HTTP requests
- React renders it as components

It also prepares you for real backends like Supabase in the next step.

## ✅ Success Checklist
- Articles load from API endpoint using fetch()
- A loading state is shown before data arrives
- Errors are handled with a fallback message
- The UI updates when data is fetched

### 🧪 Bonus Exercise *

Create a dummy backend using Express or use a pages/api/articles.js mock API in Next.js:
```js
// pages/api/articles.js
export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: "First", description: "..." },
    { id: 2, title: "Second", description: "..." },
  ]);
}
```
