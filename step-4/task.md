# 🧰 Step 4 — Supabase & Stripe Setup

## 🎯 Goal

Set up your database and payments system to support:
- **User accounts** (sign-up/login)
- **Subscriptions** (paid access to premium content)

You’ll use **Supabase** for user management and database, and **Stripe** for handling payments.

---

## 🧱 What You’ll Build

- A Supabase project with two tables:
    - `users` → includes fields like email, isSubscriber (boolean)
    - `articles` → stores content you want to display
- A working Stripe test account
    - You’ll generate a payment link or embed a Stripe checkout flow
- Store API keys and secrets in environment variables (`.env`)

---

## 🔑 Step-by-Step Instructions

### 1. Create a Supabase Project

- Go to [supabase.com](https://supabase.com/) and sign up
- Create a new project
- Go to the SQL editor and run:

```sql
-- users table
create table users (
  id uuid primary key default uuid_generate_v4(),
  email text unique,
  isSubscriber boolean default false
);

-- articles table
create table articles (
  id serial primary key,
  title text,
  description text,
  content text,
  isPremium boolean default false
);
```

Go to Project Settings → API and copy your:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

---

### 2. Create a Stripe Test Account
- Go to stripe.com and sign up
- In test mode, create a product (e.g. “Pro Subscription”)
- Create a recurring checkout link
- Save the checkout URL or generate a payment session programmatically (for advanced flow)
- Copy your test API keys

----

### 3. Store Secrets in Environment Variables
Create a `.env` file in the root of your backend:

```js
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-key
STRIPE_SECRET_KEY=sk_test_...
```

In your backend code, load these using dotenv:
```js
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
```

## 📦 Prompt Example: Supabase Setup

> Generate SQL for a Supabase project to create two tables: users (email, isSubscriber) and articles (title, content, isPremium).
Create a script in Node.js that uses the Supabase client to fetch articles for a logged-in user.
Only return premium articles if isSubscriber is true.

## ✅ Success Checklist
- Supabase project created with two tables
- You have the project URL and anon/public key
- Stripe test account created with a subscription product
- Checkout link or session ready
- .env file created and loaded with keys
- You understand how to connect backend to Supabase





