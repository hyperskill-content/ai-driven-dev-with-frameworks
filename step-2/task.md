# Step 2 — Moving to React with Next.js & Tailwind CSS

In this step we rebuild the static article list using **React components** and **Next.js** to handle navigation between pages. Apply consistent styling using **Tailwind CSS**.

This step shows how frameworks can simplify structure, reuse, and navigation as your app grows — especially when you add more pages like a login screen or a profile.

---

## New App Structure

You'll create a small app with the following pages:

- `/` — Home: displays the list of articles
- `/login` — Login form (mock only for now)
- `/profile` — Profile page (stub for now)

We'll generate a multi-page app using Next.js routing. Each page will use React components and be styled using Tailwind.

---

## Why This Matters

As you grow beyond one page, your HTML starts to repeat itself:
- Header/footer duplicated everywhere
- JS logic scattered or duplicated
- Navigation is manual (`window.location.href`)

React and Next.js solve this with:
- **Reusable components** (Header, ArticleCard)
- **Built-in routing** (`pages/login.js`, `pages/profile.js`)
- **Cleaner logic/state handling**
- **SSR/SSG options** (we'll explore later)

Tailwind CSS adds:
- Consistent, scalable styling using utility classes
- No need to manually write and maintain large CSS files

---

## 🔁 Side-by-Side Comparison Example

### 🔸 HTML version

```html
<div class="card">
  <h2>Article Title</h2>
  <p>Short description...</p>
  <button onclick="alert('Subscribers only')">Read more</button>
</div>
```

### 🔹 React + Tailwind version

```jsx
function ArticleCard({ title, description }) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button
        className="mt-2 text-blue-600"
        onClick={() => alert("Subscribers only")}
      >
        Read more
      </button>
    </div>
  );
}
```
## Let's try to code

1. Create a new folder called `frontend` in your project root.
2. Try using this prompt to generate your code.
```plaintext
Use Next.js and Tailwind CSS to create a homepage that shows 6 articles using React components.
Each article has a title, short description, and "Read more" button that shows an alert.
Create a reusable <ArticleCard> component.
Add a basic header and navigation between pages: / (home), /login, /profile.
Use Tailwind for all styling.
Save the resulting files in frontend/ directory.
```

Once the code is generated, you’ll see several new files appear.

Take your time to explore them — and if anything feels unclear, don’t hesitate to ask the AI agent to explain specific parts. You can simply say something like “What does this file do?” or “Can you walk me through this function?”

After that, you can compare your result with the example in the repository to better understand how everything works and see if there are any differences.

---

## More AI Prompt Examples for Step 2

Here are example prompts you can use with your AI coding assistant to build the Next.js application:

### Prompt 1: Set up Next.js project structure
```plaintext
Create a Next.js project structure for a mini library application with the following requirements:
- Use Next.js 14 with pages directory (not app directory)
- Include Tailwind CSS for styling
- Create proper folder structure for components, pages, and styles
- Set up package.json with all necessary dependencies
- Include configuration files for Next.js, Tailwind, and PostCSS
```

### Prompt 2: Create reusable Header component
```plaintext
Create a reusable Header component for a Next.js application with the following features:
- Navigation links to Home (/), Login (/login), and Profile (/profile)
- Use Next.js Link component for client-side navigation
- Apply Tailwind CSS styling with hover effects
- Include a logo/brand name "Mini Library"
- Make it responsive and clean looking
- Save it as components/Header.js
```

### Prompt 3: Build ArticleCard component
```plaintext
Create a reusable ArticleCard component in React with the following specifications:
- Accept title and description as props
- Display an article icon (📰) at the top
- Show title in large, bold text
- Display description in readable format
- Include a "Read More" button that shows alert "This article is available for subscribers only"
- Use Tailwind CSS for styling with hover effects and shadows
- Make it responsive and visually appealing
- Save it as components/ArticleCard.js
```

### Prompt 4: Create home page with article grid
```plaintext
Create the main home page (pages/index.js) for a Next.js application with these requirements:
- Import and use the Header and ArticleCard components
- Display 3 sample articles in a responsive grid layout
- Articles should have titles about AI, Web Development, and Cloud Computing
- Include a welcome message and call-to-action section
- Use Tailwind CSS for responsive design (mobile-first)
- Add proper spacing and typography
- Include a "Subscribe Now" button at the bottom
```

### Prompt 5: Build login page with form
```plaintext
Create a login page (pages/login.js) for the Next.js application with:
- Clean login form with email and password fields
- Form validation and state management using React hooks
- Submit handler that shows alert "Login functionality will be implemented in the next steps!"
- Use Tailwind CSS for form styling with focus states
- Include "Sign up" link that goes back to home page
- Responsive design that works on mobile and desktop
- Import and use the Header component
```

### Prompt 6: Create profile page
```plaintext
Create a profile page (pages/profile.js) with the following features:
- Display mock user information (name, email, subscription status)
- Show user statistics (articles read, member since date)
- Include a profile avatar with user's initial
- Add quick action buttons for navigation
- Use Tailwind CSS for layout and styling
- Make it responsive and visually appealing
- Import and use the Header component
```

### Prompt 7: Set up global styles and Tailwind
```plaintext
Set up global styles for the Next.js application with Tailwind CSS:
- Create styles/globals.css with Tailwind imports
- Add custom CSS classes for buttons (btn-primary, btn-secondary)
- Configure custom colors in tailwind.config.js
- Set up PostCSS configuration
- Import global styles in _app.js
- Ensure proper font loading and base styles
```

### Prompt 8: Add responsive design
```plaintext
Make the Next.js application fully responsive with these improvements:
- Ensure the article grid adapts to different screen sizes
- Make the header navigation mobile-friendly
- Add proper spacing and typography for mobile devices
- Test and optimize for tablet and desktop views
- Use Tailwind's responsive prefixes (sm:, md:, lg:)
- Ensure forms and buttons work well on touch devices
```

### Prompt 9: Optimize component structure
```plaintext
Refactor the Next.js application components for better organization:
- Extract common styling patterns into reusable classes
- Create a Layout component to wrap pages with Header
- Add PropTypes or TypeScript for better type safety
- Implement proper error boundaries
- Add loading states for better UX
- Optimize component re-renders
```

### Prompt 10: Add interactive features
```plaintext
Enhance the Next.js application with interactive features:
- Add hover effects and transitions to all interactive elements
- Implement form validation with error messages
- Add loading states for form submission
- Create smooth page transitions
- Add keyboard navigation support
- Implement dark mode toggle
- Add animations using CSS transitions
```

---

## 💡 Tips for Using AI Prompts with Next.js

### Be Specific About Framework Version
- **Good**: "Create a Next.js component"
- **Better**: "Create a Next.js 14 component using the pages directory (not app directory)"

### Mention File Structure
- Specify exact file paths: `components/Header.js`, `pages/index.js`
- Include folder organization in your requests
- Ask for proper import/export statements

### Request Modern React Patterns
- Ask for functional components with hooks
- Request proper state management
- Include error handling and validation

### Specify Styling Approach
- Mention Tailwind CSS specifically
- Request responsive design
- Ask for accessibility considerations

### Iterate and Improve
- Start with basic functionality
- Add styling and responsiveness
- Enhance with interactive features
- Optimize for performance

---

## 🔄 Development Workflow

1. **Setup**: Use Prompt 1 to create project structure
2. **Components**: Use Prompts 2-3 to build reusable components
3. **Pages**: Use Prompts 4-6 to create main pages
4. **Styling**: Use Prompt 7 to set up global styles
5. **Responsive**: Use Prompt 8 to make it mobile-friendly
6. **Enhance**: Use Prompts 9-10 to add advanced features

This approach helps you build a complete, professional Next.js application step by step!
