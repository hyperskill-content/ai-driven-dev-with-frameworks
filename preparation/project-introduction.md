## Setting Up Your AI-Driven Development Workflow

Modern development isn't just about frameworks - it's about working **with AI** to generate code efficiently and correctly.

### The Power of Context Files

When working with AI coding assistants, the key to getting great results is providing **context**. This means telling the AI:

- What technologies you're using
- What conventions to follow
- What the project structure should look like
- What to avoid

Most modern IDEs (like Cursor, which is extremely popular for AI-assisted development) support **context files** that automatically get included with every prompt.

### Our Project Rules

For this tutorial, we'll build a **subscription-based content platform** using these technologies:

```markdown
## Project Structure Rules

### Folder Organization
- `/frontend` - Next.js application  
- `/backend` - Express.js API server
- All new files go in appropriate subfolders

### Technology Stack
- **Frontend**: Next.js (React framework)
- **Backend**: Express.js (Node.js framework)
- **Database**: Supabase (PostgreSQL with built-in auth)
- **Payments**: Stripe
- **Styling**: Tailwind CSS
- **Language**: JavaScript (no TypeScript for simplicity)

### Coding Conventions
- Use modern ES6+ syntax
- Include helpful comments explaining complex logic
- Follow RESTful API conventions
- Use descriptive variable and function names
- Handle errors gracefully with try/catch blocks

### File Naming
- Use kebab-case for folders: `user-profile`
- Use camelCase for JavaScript files: `userController.js`
- Use PascalCase for React components: `UserProfile.jsx`
```

**💡 Tip:** Save this as a `.cursorrules` file in your project root, or keep it in a text file to copy-paste into prompts if you're using a different AI assistant.

### Why This Stack?

**Next.js** gives us:
- Server-side rendering for better SEO
- Built-in routing and optimization
- Easy deployment to Vercel

**Express.js** provides:
- Simple, fast backend setup
- Great ecosystem of middleware
- Perfect for RESTful APIs

**Supabase** offers:
- PostgreSQL database with real-time features
- Built-in authentication system
- Easy-to-use dashboard and APIs

**Stripe** enables:
- Secure payment processing
- Subscription management
- Comprehensive testing tools
