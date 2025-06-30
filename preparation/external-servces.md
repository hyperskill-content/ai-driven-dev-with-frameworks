## Step 1: Setting Up External Services

Before we start generating code, we need to set up our external services. This is where the real power of modern development shines - we can leverage existing services instead of building everything from scratch.

### Supabase Setup

**Supabase** will handle our database and authentication. It's like having a full backend team managing your data layer.

1. **Sign up for Supabase** at [supabase.com](https://supabase.com)

2. **Create a new project** and wait for it to initialize

3. **Create your database tables** using this prompt for your AI assistant:

```
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

The AI will generate SQL like this:

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

4. **Copy your project credentials** from the Supabase dashboard:
    - Project URL
    - Anon public key
    - Service role key (for server-side operations)

### Stripe Setup

**Stripe** will handle payments and subscription management.

1. **Sign up for Stripe** at [stripe.com](https://stripe.com)

2. **Switch to test mode** (toggle in the top right of the dashboard)

3. **Create a subscription product**:
    - Go to Products in the Stripe dashboard
    - Create a new product called "Premium Content Access"
    - Set up a recurring monthly price (e.g., $9.99/month)
    - Copy the Price ID (starts with `price_`)

4. **Get your API keys**:
    - Go to Developers → API Keys
    - Copy the Publishable key (starts with `pk_test_`)
    - Copy the Secret key (starts with `sk_test_`)

5. **Add your test environment** to the context by asking your AI:

```
Based on the Stripe testing documentation, explain what test card numbers I can use for testing payments, and what they simulate (successful payments, declined cards, etc.).
```

**Important:** Stripe provides special test card numbers that simulate different scenarios:
- `4242424242424242` - Successful payment
- `4000000000000002` - Declined card
- `4000000000009995` - Insufficient funds

### Documentation Context

To help your AI generate better code, add the official documentation links to your context:

- **For Supabase Auth:** https://supabase.com/docs/guides/auth
- **For Stripe Payments:** https://stripe.com/docs/payments/quickstart
- **For Stripe Testing:** https://stripe.com/docs/testing

Now we're ready to start building!
