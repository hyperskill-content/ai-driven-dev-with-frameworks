# ⚛️ Step 2 — Moving to React with Next.js & Tailwind CSS

## 🎯 Goal

Rebuild the static article list using **React components** and **Next.js** to handle navigation between pages. Apply consistent styling using **Tailwind CSS**.

This step shows how frameworks can simplify structure, reuse, and navigation as your app grows — especially when you add more pages like a login screen or a profile.

---

## 🧱 New App Structure

You'll create a small app with the following pages:

- `/` — Home: displays the list of articles
- `/login` — Login form (mock only for now)
- `/profile` — Profile page (stub for now)

We’ll generate a multi-page app using Next.js routing. Each page will use React components and be styled using Tailwind.

---

## 🔍 Why This Matters

As you grow beyond one page, your HTML starts to repeat itself:
- Header/footer duplicated everywhere
- JS logic scattered or duplicated
- Navigation is manual (`window.location.href`)

React and Next.js solve this with:
- **Reusable components** (Header, ArticleCard)
- **Built-in routing** (`pages/login.js`, `pages/profile.js`)
- **Cleaner logic/state handling**
- **SSR/SSG options** (we’ll explore later)

Tailwind CSS adds:
- Consistent, scalable styling using utility classes
- No need to manually write and maintain large CSS files

---

## 🔁 Side-by-Side Comparison Example

### 🔸 HTML version

```html
<div class="card">
  <h2>Article Title</h2>
  <p>Short description...</p>
  <button onclick="alert('Subscribers only')">Read more</button>
</div>
```

### 🔹 React + Tailwind version

```jsx
function ArticleCard({ title, description }) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button
        className="mt-2 text-blue-600"
        onClick={() => alert("Subscribers only")}
      >
        Read more
      </button>
    </div>
  );
}
```
## 💬 Prompt Example: Generate in React + Tailwind

>Use Next.js and Tailwind CSS to create a homepage that shows 3 articles using React components.
Each article has a title, short description, and “Read more” button that shows an alert.
Create a reusable <ArticleCard> component.
Add a basic header and navigation between pages: / (home), /login, /profile.
Use Tailwind for all styling.
