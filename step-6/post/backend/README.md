# 🚀 Express.js Backend API

This backend provides authentication, user management, articles, and payment endpoints for your app. It is built with Express.js and organized for scalability and clarity.

---

## 🛠️ How to Run the Server

1. **Install dependencies**
   ```bash
   cd step-3/post
   npm install
   ```

2. **Start the server**
- For development (auto-restart on changes):
  ```bash
  npm run dev
  ```
- For production:
  ```bash
  npm start
  ```

3. **Server will run at:**
   [http://localhost:3001](http://localhost:3001)

---

## 🧪 How to Test the Endpoints

You can use Postman, Insomnia, or `curl` to test the API endpoints.

### 1. Root Endpoint
```bash
curl http://localhost:3001/
```
**Response:**
```json
{"message":"Welcome to the Express.js backend API!"}
```

### 2. Users Endpoint
```bash
curl http://localhost:3001/users
```
**Response:**
```json
[
  {"id":1,"name":"Alice","email":"alice@example.com"},
  {"id":2,"name":"Bob","email":"bob@example.com"}
]
```

### 3. Auth Endpoint (Login)
```bash
curl -X POST http://localhost:3001/auth/login -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"123456"}'
```
**Response:**
```json
{"message":"Login endpoint (to be implemented)"}
```

### 4. Articles Endpoint
```bash
curl http://localhost:3001/articles
```
**Response:**
```json
[
  {"id":1,"title":"How AI is Changing the World","description":"Discover the latest trends in AI."},
  {"id":2,"title":"The Future of Web Development","description":"Explore new technologies and frameworks."},
  {"id":3,"title":"Understanding Cloud Computing","description":"Learn the basics of cloud computing."}
]
```

### 5. Payments Endpoint (Checkout)
```bash
curl -X POST http://localhost:3001/payments/checkout -H "Content-Type: application/json" -d '{"amount":1000}'
```
**Response:**
```json
{"message":"Payment checkout endpoint (to be implemented)"}
```

---

## 🐛 Error Handling Example

If you access a non-existent route, you'll get a JSON error response:
```bash
curl http://localhost:3001/unknown
```
**Response:**
```json
{"error":{"message":"Cannot GET /unknown"}}
```

---

## 💡 Tips
- You can edit the sample data in each route module in `routes/`.
- Use environment variables by creating a `.env` file (see dotenv docs).
- For real authentication, user management, and payments, connect to a database and payment provider in future steps.

---

Your backend is now ready for integration with your frontend and future enhancements! 
