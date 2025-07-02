# 📚 Mini Library - Next.js Application

A modern web application built with Next.js, React, and Tailwind CSS. This is Step 6 of the learning journey, demonstrating how frameworks can simplify development compared to vanilla HTML/CSS/JS.

## 🚀 Features

- **Multi-page application** with Next.js routing
- **Reusable React components** (Header, ArticleCard)
- **Modern styling** with Tailwind CSS
- **Responsive design** that works on all devices
- **Clean architecture** with separated concerns

## 📁 Project Structure

```
step-6/post/frontend/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   └── ArticleCard.js  # Article display component
├── lib/                # Utility functions (e.g., Supabase client, fetchIsSubscriber)
│   ├── supabase.js     # Supabase client setup
│   └── fetchIsSubscriber.js # Helper to check subscription status
├── pages/              # Next.js pages (routing)
│   ├── _app.js         # Main app wrapper
│   ├── index.js        # Home page (/)
│   ├── login.js        # Login page (/login)
│   ├── profile.js      # Profile page (/profile)
│   └── signup.js       # Signup page (/signup)
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports
├── package.json        # Dependencies and scripts
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
cd step-6/post/frontend
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

## 📱 Available Pages

### Home Page (`/`)
- Displays a grid of article cards
- Each article has a title, description, and "Read More" button
- Responsive layout that adapts to screen size

### Login Page (`/login`)
- Clean login form with email and password fields
- Form validation and state management
- Mock functionality (will be connected to backend later)

### Profile Page (`/profile`)
- User profile display with avatar
- Statistics and membership information
- Quick action buttons for navigation

## 🎨 Styling

The application uses **Tailwind CSS** for styling, providing:
- **Utility-first approach** - no custom CSS needed
- **Responsive design** - works on mobile, tablet, and desktop
- **Consistent spacing** - standardized design system
- **Hover effects** - interactive elements with smooth transitions

## 🔧 Customization

### Adding New Articles
Edit the `articles` array in `pages/index.js`:
```javascript
const articles = [
  {
    id: 4,
    title: "Your New Article",
    description: "Your article description here..."
  }
]
```

### Modifying Styles
- Use Tailwind classes directly in components
- Add custom styles in `styles/globals.css`
- Modify theme in `tailwind.config.js`

### Adding New Pages
Create new files in the `pages/` directory:
```javascript
// pages/about.js
export default function About() {
  return <div>About Page</div>
}
```

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📚 Learning Points

This step demonstrates several key concepts:

1. **Component Reusability** - Header and ArticleCard components are used across multiple pages
2. **Routing** - Next.js file-based routing system
3. **State Management** - React hooks for form handling
4. **Styling** - Tailwind CSS utility classes
5. **Modern JavaScript** - ES6+ features and React patterns

## 🔄 Next Steps

In the upcoming steps, you'll learn:
- Backend API development with Express.js
- Database integration with Supabase
- Authentication and user management
- Payment processing with Stripe

## 🐛 Troubleshooting

### Port 3000 is already in use
```bash
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling not working
Make sure Tailwind CSS is properly configured:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Routing](https://nextjs.org/docs/routing/introduction) 