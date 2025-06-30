# 🎨 Step 6 — Build the Frontend: Auth, Profile, and Content Pages

## 🎯 Goal

Connect your frontend (Next.js + React + Tailwind) to your backend API. Create pages for:

- Signing up and logging in (auth)
- Managing subscriptions (via Stripe)
- Displaying content only to subscribed users

By the end, your app will feel like a real SaaS product with a paywall.

---

## 🧱 What You’ll Build

| Page | Route | Functionality |
|------|-------|---------------|
| 🟢 Sign Up / Login | `/login` | Basic email/password authentication |
| 🧑 Profile | `/profile` | Show user status and “Subscribe” button |
| 📚 Content | `/articles` | Load articles; hide premium unless subscribed |

---

## 📦 Technologies Used

- **Next.js** routing system
- **Supabase client** for auth
- **Stripe checkout link**
- **Tailwind CSS** for UI
- `fetch()` to call your Express backend

---

## 🧩 Step-by-Step

### 1. Install Dependencies

```bash
npm install @supabase/supabase-js
```

### 2. Set Up Supabase Client
Create `lib/supabase.js`:

```js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
```

### 3. Create Login Page (/login)
- Use `supabase.auth.signInWithPassword()`
- Redirect to `/profile` on success

```js
const handleLogin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email, password
  });
  if (error) alert(error.message);
  else router.push("/profile");
};
```

### 4. Create Profile Page (/profile)
- Fetch user info from Supabase
- If not subscribed, show Stripe checkout button
- Use the /create-checkout-session route to redirect

```js
const handleSubscribe = async () => {
  const res = await fetch("/api/checkout");
  const data = await res.json();
  window.location.href = data.url;
};
```

## 5. Create Articles Page (/articles)
- Fetch articles from your Express backend
- Only show premium content if user isSubscriber

```js
const fetchArticles = async () => {
  const user = await supabase.auth.getUser();
  const res = await fetch(`/api/articles?isSubscriber=${user?.isSubscriber}`);
  const data = await res.json();
  setArticles(data);
};
```

## 💬 Prompt Example: Content Page Logic
> Create a Next.js page at /articles.
On page load, fetch articles from the backend.
If the user is a subscriber, include premium content. Otherwise, only show free content.
Render each article using a Card component.

## ✅ Success Checklist
- Supabase auth works on `/login`
- User state is available on `/profile`
- Stripe checkout works from “Subscribe” button
- `/articles` shows appropriate content
- UI styled with Tailwind CSS
