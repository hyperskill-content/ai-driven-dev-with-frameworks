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
