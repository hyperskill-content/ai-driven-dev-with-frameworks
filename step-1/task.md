# 📚 From Simple Pages to Scalable Apps: Project Kickoff

This project will guide you through building a modern fullstack web app, step by step — not by learning to code line-by-line, but by writing smart prompts and analyzing generated results.

You’ll start with basic HTML and CSS, then transition to frameworks like React and Express, while connecting everything through Supabase and Stripe. This hands-on process is designed for non-technical founders and learners who want to understand how modern apps are built and evolve.

You’ll build a real app: a **Mini Library**, where users can read public articles and subscribe to unlock premium content.

---

# Step 1 — Static Frontend with HTML, CSS, and JS

In this step we create a simple web page that displays a list of article previews using only **HTML, CSS, and JavaScript** — no frameworks yet. Each article should show a title, a short description, and a “Read more” button that shows an alert when clicked.

This step helps you experience what it’s like to build everything manually, so you can later appreciate the benefits of using UI libraries and frameworks like React.

### To start:

1. Create a folder for your project and open it in any vibe-coding IDE (e.g. Cursor, Junie, Windsurf).
2. Ask your AI agent to generate the simple web page with this prompt:

```plaintext
Create a simple HTML page that displays a list of 6 articles using HTML and CSS.
Each article should have a title, a short description, and a “Read more” button.
When the button is clicked, show an alert that says: “This article is available for subscribers only.”
Separate HTML, CSS, and JavaScript into index.html, style.css, and script.js files.
```
---

## What You’ll Build

A static page that looks like this:

📰 Article 1
Lorem ipsum dolor sit amet...
[ Read More ]

📰 Article 2
Consectetur adipiscing elit...
[ Read More ]

📰 Article 3
Sed do eiusmod tempor...
[ Read More ]


When the user clicks “Read More,” show this alert:

> “This article is available for subscribers only.”

---

## Tools You’ll Use

- `index.html`
- `style.css`
- `script.js`

You can run the page by simply opening `index.html` in your browser — no setup or server required.

---

## Why This Matters

This “vanilla” approach gives you full control over your code, but you’ll start to feel its limitations:
- Repeating the same markup over and over.
- Hard to manage interactivity.
- Code becomes harder to update as the page grows.

Soon, you’ll learn how frameworks help you write cleaner, reusable code.

----

## ✅ Success Checklist
- Article cards are displayed with title, description, and button
- Buttons trigger the correct alert when clicked
- Styling is clean and readable
- Code is separated into HTML, CSS, and JS files

### 🖼️ Optional Design Aid
You can use a Figma UI mockup as a visual reference for your article cards.
Look for a simple blog card layout like this:
🔗 [Free Figma Card Layout](https://www.figma.com/design/yyeZTJhBDPxLtmRehnnejA/Wireframing--Copy-?node-id=0-1&p=f&t=9awBPmMWmE33VEtn-0) (or use your own!)

This will help guide your prompt visually — you can even upload the image into your AI IDE (like Cursor) to ask for a layout based on the design.
