# Step 5 — Supabase & Stripe Setup (with Supabase Integration)

Let's set up your database and payments system to support:
- **User accounts** (sign-up/login)
- **Subscriptions** (paid access to premium content)

You'll use **Supabase** for user management and database, and **Stripe** for handling payments.

---

## Step-by-Step Instructions

### 1. Create Tables in Supabase

- Go to [supabase.com](https://supabase.com/) and sign in.
- Create a new project if you haven't already.
- Ask AI-assistant to generate correct commands, try this prompt
```plaintext
Generate SQL commands to create two tables in Supabase:

1. `users` table:
   - id (UUID, primary key, auto-generated)
   - email (text, unique)
   - isSubscriber (boolean, default false)
   - created_at (timestamp, default now)

2. `articles` table:
   - id (UUID, primary key, auto-generated)  
   - title (text, not null)
   - content (text, not null)
   - isPremium (boolean, default false)
   - created_at (timestamp, default now)

Include some sample data for testing.
```
- In the SQL editor, run the resulting SQL to create the tables, the AI will generate SQL like this:

```sql
-- Create users table
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    isSubscriber BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create articles table  
CREATE TABLE articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    isPremium BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample articles
INSERT INTO articles (title, content, isPremium) VALUES
    ('Getting Started with Web Development', 'This is a free introductory article about web development basics...', FALSE),
    ('Advanced React Patterns', 'This premium content covers advanced React patterns and techniques...', TRUE),
    ('Building Scalable APIs', 'Learn how to build APIs that can handle millions of requests...', TRUE),
    ('CSS Grid Masterclass', 'Another free article covering CSS Grid fundamentals...', FALSE);

-- Insert a test user
INSERT INTO users (email, isSubscriber) VALUES
    ('test@example.com', FALSE);
```

#### How to Find Your SUPABASE_URL and SUPABASE_ANON_KEY

1. Go to your [Supabase dashboard](https://app.supabase.com/) and log in.
2. Select your project from the list.
3. In the left sidebar, click on **Settings** (gear icon near the bottom).
4. Click on **API** under Settings.
5. On the API settings page, you will see:
   - **Project URL** — this is your `SUPABASE_URL` (e.g. `https://your-project-ref.supabase.co`)
   - **anon public** — this is your `SUPABASE_ANON_KEY` (a long string of letters and numbers)
6. Copy both values for use in your backend.

**Example for your `.env` file:**
```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your actual key)
```

---

### 1a. Insert Data into Supabase Tables

You can add initial data to your tables using either the SQL editor or the Supabase dashboard UI.

#### Option 1: Insert Data Using SQL

Go to the SQL editor and run:

```sql
-- Insert sample users
insert into users (email, isSubscriber) values
  ('alice@example.com', true),
  ('bob@example.com', false);

-- Insert sample articles
insert into articles (title, description, content, isPremium) values
  ('How AI is Changing the World', 'Discover the latest trends in AI.', 'Full article content here...', false),
  ('The Future of Web Development', 'Explore new technologies and frameworks.', 'Full article content here...', false),
  ('Understanding Cloud Computing', 'Learn the basics of cloud computing.', 'Full article content here...', true);
```

#### Option 2: Insert Data Using the Dashboard UI

1. In your Supabase project, click on **Table Editor** in the left sidebar.
2. Select the `users` or `articles` table.
3. Click the **Insert Row** button to add new records manually.
4. Fill in the fields (for `users`, you can leave `id` blank to auto-generate).
5. Click **Save**.

**Example Data:**
- User: `alice@example.com`, isSubscriber: `true`
- User: `bob@example.com`, isSubscriber: `false`
- Article: `How AI is Changing the World`, isPremium: `false`
- Article: `Understanding Cloud Computing`, isPremium: `true`

---

### 2. Integrate Supabase with the Backend

- In `step-5/post/backend`, install the Supabase client:
  ```bash
  npm install @supabase/supabase-js
  ```
- Create a `.env` file in `step-5/post/backend` with your Supabase credentials (see above).
- In your backend code, load these using dotenv and set up the Supabase client.


Then ask AI to help you to integrate Supabase with the backend. It suggests you to create some Supabase client in your code and then use it in route handling.

#### Example: backend/supabaseClient.js

```js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = supabase;
```

#### Example: Use Supabase in backend/routes/articles.js

```js
const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// GET /articles - fetch articles from Supabase
router.get('/', async (req, res) => {
  const { isSubscriber } = req.query;
  let { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('isPremium', false);

  if (isSubscriber === 'true') {
    const { data: premium } = await supabase
      .from('articles')
      .select('*')
      .eq('isPremium', true);
    data = [...data, ...premium];
  }

  if (error) return res.status(500).json({ error });
  res.json(data);
});

module.exports = router;
```

---

### 3. Stripe Integration: Step-by-Step Guide

#### 3.1. Create a Stripe Test Account
- Go to [stripe.com](https://dashboard.stripe.com/) and sign up (or log in).
- Switch to **Test mode** (toggle in the left sidebar).
- In the **Products** section, create a new product (e.g. "Pro Subscription").
- Create a recurring price for your product (e.g. $10/month).
- Save the **Price ID** (e.g. `price_1N...`).

#### 3.1a. How to Find Your Stripe Price ID (and the Difference with Product ID)

- In Stripe, every product can have one or more prices (for example, monthly or yearly subscriptions).
- **Product ID** looks like: `prod_N...` and identifies the product itself (e.g. "Pro Subscription").
- **Price ID** looks like: `price_1N...` and identifies a specific price/plan for that product (e.g. $10/month).
- For subscriptions and checkout, you need the **Price ID**.

**How to find your Price ID:**
1. In your Stripe dashboard, go to **Products**.
2. Click on your product (e.g. "Pro Subscription").
3. Scroll down to the **Pricing** section.
4. You will see a list of prices. Each price has a **Price ID** (e.g. `price_1N...`).
5. Click the copy icon next to the Price ID to copy it.

**Where to use:**
- Use the **Price ID** in your backend code and `.env` file for creating checkout sessions.
- The **Product ID** is only needed if you want to manage products programmatically.

**Example for your `.env` file:**
```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_1N...
```

#### 3.2. Get Your Stripe API Keys
- In the left sidebar, click **Developers → API keys**.
- Copy your **Secret key** (starts with `sk_test_...`).
- You will use this in your backend `.env` file.

---

#### 3.3. Install Stripe SDK in the Backend
- In `step-5/post/backend`, run:
  ```bash
  npm install stripe
  ```

#### 3.4. Create a Checkout Session Endpoint
- In your backend (e.g. `routes/payments.js`), add an endpoint to create a Stripe Checkout session:

```js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST /payments/checkout - create a Stripe Checkout session
router.post('/checkout', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID, // Your Stripe price ID
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/profile',
      cancel_url: 'http://localhost:3000/login',
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

- Import and use this route in your main `server.js`:

```js
const paymentRoutes = require('./routes/payments');
app.use('/payments', paymentRoutes);
```

---

## 📦 Prompt Example: Stripe Setup

> How do I set up Stripe in my Node.js backend to create a subscription checkout session? Show me how to use the Stripe SDK and environment variables for the secret key and price ID.

---

## ✅ Success Checklist
- Stripe test account created with a subscription product
- Stripe API keys and price ID added to `.env`
- Stripe SDK installed in backend
- Checkout session endpoint working and returns a Stripe URL
- You can open the Stripe checkout page from your frontend

