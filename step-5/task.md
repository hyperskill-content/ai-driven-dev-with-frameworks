# 🧱 Step 5 — Generate Your Backend API with Express

## 🎯 Goal

Build a real backend using **Express.js** that connects to your **Supabase** database and integrates with **Stripe**. The API will support user authentication, payment status, and article access.

You’ll generate and test the following API endpoints using Postman or curl.

---

## 📦 What You’ll Build

An Express server with these routes:

| Route | Method | Purpose |
|-------|--------|---------|
| `/signup` | POST | Register user in Supabase |
| `/login` | POST | Log in and return user info |
| `/articles` | GET | Fetch free + paid articles depending on subscription |
| `/create-checkout-session` | POST | Redirect user to Stripe checkout |
| `/webhook` | POST | Handle Stripe subscription updates |

---

## 🔧 Step-by-Step Instructions

### 1. Create Express Server

Set up a minimal Express server:

```bash
npm init -y
npm install express cors dotenv supabase stripe
```
```js
// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3001, () => console.log("Server running on port 3001"));
```
### 2. Connect to Supabase
```js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
process.env.SUPABASE_URL,
process.env.SUPABASE_ANON_KEY
);
```

### 3. Add Endpoints

📝 /articles route
Return public articles + premium only if isSubscriber = true

```js
app.get("/articles", async (req, res) => {
  const { isSubscriber } = req.query;
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("isPremium", false);

  if (isSubscriber === "true") {
    const { data: premium } = await supabase
      .from("articles")
      .select("*")
      .eq("isPremium", true);
    return res.json([...data, ...premium]);
  }

  res.json(data);
});
```

### 4. Add Stripe Integration

Use the Stripe SDK to create a checkout session:
```js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: "your_stripe_price_id", // replace with actual price ID
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/profile",
    cancel_url: "http://localhost:3000/login",
  });

  res.json({ url: session.url });
});
```

### 5. Handle Stripe Webhooks

Add a webhook to listen for successful subscriptions:
```js
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  // Handle Stripe events and update Supabase user.isSubscriber
});
```

You’ll need to configure your Stripe dashboard to send events like checkout.session.completed to this URL.

---

## ✅ Success Checklist
- Express server running locally
- Routes implemented for /articles and /create-checkout-session
- Connected to Supabase and reading data
- Stripe integration working with test product
- Webhook prepared for subscription updates

## 💬 Prompt Example: Generate Article API

>Create an Express API with a /articles GET route.
It should fetch all free articles from Supabase.
If the user is a subscriber (isSubscriber=true in query), also include premium articles.
Use supabase-js and dotenv for secrets.

