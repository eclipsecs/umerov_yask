import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Youtube, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/articles', label: 'Articles' },
    { path: '/teachings', label: 'Teachings' },
    { path: '/readings', label: 'Reading' },
    { path: '/ielts-essays', label: 'IELTS Essays' },
    { path: '/books', label: 'Books' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-serif font-semibold text-xl tracking-tight">Y</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="https://www.youtube.com/@javokhirsielts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-500 font-light"
            >
              <Youtube className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-semibold text-pink-500">YouTube</span>
            </a>
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-black hover:text-pink-500 dark:text-pink-500 dark:hover:text-pink-500 font-semibold text-sm"
              >
                {item.label}
              </Link>
            ))}
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 hover:bg-muted/50"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 hover:bg-muted/50"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
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
              <a
                href="https://www.youtube.com/@javokhirsielts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-500 font-semibold hover:text-pink-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span className="text-sm">YouTube</span>
              </a>
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-pink-500 font-semibold text-base hover:text-pink-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;