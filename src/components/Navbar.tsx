import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Youtube, Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-md border bg-muted hover:bg-muted/80 transition"
    >
      {isLight ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/articles', label: 'Articles' },
    { path: '/teachings', label: 'Career' },
    { path: '/readings', label: 'Journals' },
    { path: '/ielts-essays', label: 'IELTS Essays' },
    { path: '/books', label: 'Books' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-serif font-bold text-xl tracking-tight">Y</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center justify-center space-x-6 flex-grow">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-black dark:text-white font-semibold text-sm hover:text-pink-500 dark:hover:text-pink-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4 ml-12">
              <a 
                href="https://www.youtube.com/@javokhirsielts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-light"
              >
                <Youtube className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium text-black dark:text-white">YouTube</span>
              </a>
              <a
                href="https://www.buymeacoffee.com/umerovjavokhir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-light"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                  alt="Buy me a coffee"
                  className="w-5 h-5 filter dark:brightness-0 dark:invert"
                />
                <span className="text-sm font-medium text-black dark:text-white">Buy me a coffee</span>
              </a>
            </div>
            {/* Theme Toggle */}
            <div className="ml-6">
              <ThemeSwitch />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="h-8 w-8 hover:bg-muted/50"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div
              className={cn(
                "absolute top-16 right-4 bg-background border border-border rounded-lg shadow-lg p-4 space-y-2 z-50 min-w-[180px] transform transition-all duration-300 origin-top-right",
                isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
              )}
            >
              <div className="text-xs uppercase tracking-wide text-muted-foreground">Navigation</div>
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block font-semibold text-base text-black dark:text-white hover:text-pink-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="text-xs uppercase tracking-wide text-muted-foreground mt-3">External</div>
              <a
                href="https://www.youtube.com/@javokhirsielts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold hover:text-pink-500 transition-colors"
              >
                <Youtube className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium text-black dark:text-white">YouTube</span>
              </a>
              <a
                href="https://www.buymeacoffee.com/umerovjavokhir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold hover:text-yellow-600 transition-colors"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                  alt="Buy me a coffee"
                  className="w-5 h-5 filter dark:brightness-0 dark:invert"
                />
                <span className="text-sm font-medium text-black dark:text-white">Buy me a coffee</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;