# Step 3 — Building a Robust Express.js Backend

Now we create a robust Express.js backend that handles authentication, user management, and payments. This backend will serve as the foundation for your app's API and business logic.

You will:
- Set up a modern Express.js server
- Organize code into route modules
- Add middleware for security and error handling
- Prepare for integration with frontend and database

---

## Step-by-Step Instructions

### 1. Initialize the Backend Project

**What to do:**
- Create a new folder called `backend` in your project root.
- Inside `backend`, create a `package.json` file with all necessary dependencies (express, cors, etc).

**Prompt Example:**
```plaintext
Create a package.json for an Express.js backend with dependencies: express, cors, dotenv, and nodemon for development. Place it in a new 'backend' folder.
```
You will receive file and need to run npm install command.
---

### 2. Basic Express Server Setup

**What to do:**
- Create a `server.js` file in the `backend` folder.
- Set up an Express server with `cors` and `express.json()` middleware.
- Add a root route (`/`) that returns a welcome message.
- Make the server listen on port 3001.
- Add helpful comments explaining each section.

**Prompt Example:**
```plaintext
Create an Express.js server in backend/server.js with:
- cors and express.json middleware
- a root route ('/') that returns a welcome message
- server listening on port 3001
- helpful comments for each section
```

---

### 3. Organize Route Modules

**What to do:**
- Create separate route modules for `/auth`, `/users`, `/articles`, and `/payments` in a `routes` folder inside `backend`.
- Import and use these route modules in `server.js`.
- Each route module should export an Express router and have at least one sample endpoint (e.g., GET /users returns a list of users).

**Prompt Example:**
```plaintext
Create route modules for /auth, /users, /articles, and /payments in backend/routes/.
Each should export an Express router with at least one sample endpoint.
Import and use them in backend/server.js.
```

---

### 4. Add Error Handling Middleware

**What to do:**
- Add centralized error handling middleware at the end of your middleware stack in `server.js`.
- Ensure it catches and responds to errors from all routes.
- Add comments explaining how error handling works.

**Prompt Example:**
```plaintext
Add error handling middleware to backend/server.js that catches errors from all routes and returns a JSON error response. Include comments explaining how it works.
```

---

### 5. Test the Server

**What to do:**
- Start the server using `node server.js` or `nodemon server.js`.
- Test all endpoints using a tool like Postman or your browser.
- Make sure you get expected responses from `/`, `/users`, `/auth`, `/articles`, and `/payments`.

**Prompt Example:**
```plaintext
How do I test my Express.js server endpoints using Postman or curl? Show example requests for /, /users, /auth, /articles, and /payments.
```

---

## 📦 Final Structure Example

```
backend/
├── package.json
├── server.js
└── routes/
    ├── auth.js
    ├── users.js
    ├── articles.js
    └── payments.js
```

---

## 💡 Tips
- Use modern ES6+ syntax (e.g., `import`/`export` if using Node 18+ with type: module, or `require`/`module.exports` for CommonJS)
- Add clear comments to explain logic, especially in route handlers and middleware
- Keep each route module focused on a single responsibility
- Use environment variables for sensitive config (e.g., with dotenv)
- Prepare for future integration with a database and Stripe

---

By following these steps, you'll have a clean, scalable Express.js backend ready for authentication, user management, and payments!

Then you can compare your result with the example in the repository in `step-3/post/backend` directory.
