import '../styles/globals.css'

// Main App component that wraps all pages
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp 