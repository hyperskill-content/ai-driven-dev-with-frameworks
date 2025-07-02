# Step 6 — Build the Frontend: Auth, Profile, and Content Pages (with Full Integration)

In this step we connect your frontend (Next.js + React + Tailwind) to your backend API and Supabase. Implement:
- **Signing up and logging in (auth)**
- **Managing subscriptions (via Stripe)**
- **Displaying content only to subscribed users**

By the end, your app will feel like a real SaaS product with a paywall.

Let's use the prompt:
```plaintext
 Connect my Next.js + React + Tailwind frontend to my backend API and Supabase. Implement:
 - User signup and login (authentication)
 - Subscription management using Stripe (checkout flow)
 - Displaying content so that only subscribed users can access premium articles, while free articles are visible to everyone
 
 Show me how to structure the code, set up Supabase and Stripe integration, and protect routes and content based on user authentication and subscription status.
```
---

## Step-by-Step Instructions

### 1. Install Dependencies

In your frontend directory (`step-6/post/frontend`):
```bash
npm install @supabase/supabase-js
```

**Prompt Example:**
```plaintext
What dependencies do I need to install in my Next.js frontend to use Supabase authentication?
```

---

### 2. Set Up Supabase Client in the Frontend

Create a file at `lib/supabase.js`:
```js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
```
Add your Supabase public keys to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Prompt Example:**
```plaintext
How do I set up a Supabase client in my Next.js frontend and use environment variables for the URL and anon key?
```

---

### 3. Implement Sign Up and Login Pages

#### 3.1. Sign Up Page (`/signup`)
- Create a page at `pages/signup.js`.
- Use `supabase.auth.signUp()` to register users.
- Show success/error messages.
- **Add a link to the login page for users who already have an account.**

**Example:**
```js
const handleSignUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message);
  else alert('Check your email for a confirmation link!');
};
```

**Prompt Example:**
```plaintext
Create a Next.js signup page that uses Supabase to register users with email and password, shows a success or error message, and includes a link to the login page.
```

#### 3.2. Login Page (`/login`)
- Use `supabase.auth.signInWithPassword()` to log in users.
- On success, redirect to `/profile`.
- **Add a link to the signup page for users who don't have an account.**

**Example:**
```js
const handleLogin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else router.push('/profile');
};
```

**Prompt Example:**
```plaintext
Create a Next.js login page that uses Supabase to log in users, redirects to /profile on success, and includes a link to the signup page.
```

---

### 4. Create Profile Page (`/profile`)
- Fetch user info from Supabase.
- If not subscribed, show a "Subscribe" button.
- Use the `/payments/checkout` backend route to create a Stripe session.

**Example:**
```js
const handleSubscribe = async () => {
  const res = await fetch('http://localhost:3001/payments/checkout', { method: 'POST' });
  const data = await res.json();
  window.location.href = data.url;
};
```
- Show subscription status (e.g., "You are a subscriber!" or "Subscribe to access premium content").

**Prompt Example:**
```plaintext
Create a Next.js profile page that fetches user info from Supabase and includes a Subscribe button that starts a Stripe checkout session using the backend.
```

---

### 5. Create Articles Page (`/articles`)
- Fetch articles from your backend (`/articles`).
- Only show premium content if the user is a subscriber.
- Use the user's subscription status from Supabase to determine access.

**Example:**
```js
const fetchArticles = async () => {
  const user = await supabase.auth.getUser();
  const isSubscriber = user?.data?.user?.isSubscriber;
  const res = await fetch(`/api/articles?isSubscriber=${isSubscriber}`);
  const data = await res.json();
  setArticles(data);
};
```
- Render each article using a Card component.
- Show a message or lock icon for premium articles if the user is not subscribed.

**Prompt Example:**
```plaintext
Create a Next.js articles page that fetches articles from the backend and only shows premium content to subscribed users. Use Supabase to check the user's subscription status.
```

---

### 6. Protect Routes and Content
- Redirect users to `/login` if not authenticated.
- Hide premium content for non-subscribers.
- Use React hooks (`useEffect`, `useState`) to manage user state and loading.

**Prompt Example:**
```plaintext
How do I protect routes in Next.js so only authenticated users can access certain pages, and only subscribers can see premium content?
```

---

## Prompt Example: Content Page Logic
> Create a Next.js page at /articles. On page load, fetch articles from the backend. If the user is a subscriber, include premium content. Otherwise, only show free content. Render each article using a Card component.

---

## ✅ Success Checklist
- Users can sign up and log in via Supabase
- User state is available on `/profile`
- Stripe checkout works from the "Subscribe" button
- `/articles` shows appropriate content based on subscription
- Premium content is protected
- UI styled with Tailwind CSS
