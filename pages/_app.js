import { useState, useEffect, createContext, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

// Context for theme management across the app
export const ThemeContext = createContext({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function MyApp({ Component, pageProps }) {
  // Default to dark theme
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  // Load saved preference from localStorage on mount
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark') {
        setTheme(storedTheme);
      } else {
        // Default to dark theme as required
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
      }
    } catch (error) {
      console.warn('Unable to access localStorage for theme:', error);
    }
    setMounted(true);
  }, []);

  // Sync DOM classes and attributes whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }

    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Unable to persist theme to localStorage:', error);
    }
  }, [theme]);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Smooth page transition listener on route change
  useEffect(() => {
    const handleRouteChangeStart = () => setIsTransitioning(true);
    const handleRouteChangeComplete = () => setIsTransitioning(false);
    const handleRouteChangeError = () => setIsTransitioning(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Smooth page transition wrapper div */}
      <div
        key={router.asPath}
        className={`min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-opacity duration-300 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100 animate-fade-in'
        }`}
      >
        <Component
          {...pageProps}
          theme={theme}
          toggleTheme={toggleTheme}
          setTheme={setTheme}
          isDark={isDark}
          darkMode={isDark}
          toggleDarkMode={toggleTheme}
        />
      </div>
    </ThemeContext.Provider>
  );
}
