# 🚀 Step 7 — Production Mode & Deployment

## 🎯 Goal

Make your fullstack app ready for real users:
- Switch Stripe from test mode to **live payments**
- Deploy your app to the cloud using **Vercel**
- Confirm that your backend and frontend work together in production

---

## ✅ What You’ll Deliver

- A **live web app** with:
    - User registration & login (via Supabase)
    - Paid subscriptions (via Stripe)
    - Private content access (based on payment)
- A deployed frontend (Next.js) on **Vercel**
- A deployed backend (Express API) via **Railway**, **Render**, or Vercel functions

---

## 🧩 Step-by-Step Instructions

### 1. Switch Stripe to Live Mode

- Go to your [Stripe Dashboard](https://dashboard.stripe.com/)
- Toggle from **Test mode** to **Live mode**
- Create a new **Product** and **Price ID**
- Update your `.env`:

```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_ID=price_...
```

Regenerate the checkout session using the live price_... ID

## 2. Deploy Your Frontend on Vercel
- Go to vercel.com
- Connect your GitHub repo with the frontend folder
- Add your environment variables in the project settings:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
- Click Deploy

🔗 Your app will be live on a `*.vercel.app` domain

## 3. Deploy Your Backend
You have a few options:

1. Option A — Vercel Serverless Functions
- Move your Express endpoints into pages/api/ inside your Next.js project
- Use Vercel Functions docs

2. Option B — Deploy to Railway
- Create a Railway project
- Add your Express backend repo
- Add the same .env variables as local
- Click Deploy

3. Option C — Render or Fly.io
- Set up a new project and connect your GitHub repo
- Specify your start command (`node index.js`)

## 4. Final Tests
- Visit your deployed frontend
- Sign up and try logging in
- Complete a Stripe payment in Live mode
- Try accessing premium content
- Test webhook events if needed

## ✅ Deployment Checklist
- Stripe switched to Live mode with real price ID
- .env updated for production
- Frontend deployed to Vercel with environment variables
- Backend deployed to server or serverless functions
- Live app working end-to-end

## 🧪 Prompt Example: Deployment Strategy
>I have a Next.js frontend and an Express backend.
Help me deploy the frontend on Vercel and the backend on Railway.
Explain how to pass environment variables securely in both.

