import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/articles', label: 'Articles' },
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
          <div className="md:hidden flex items-center space-x-3">
            <a 
              href="https://www.youtube.com/@javokhirsielts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-red-500 font-light"
            >
              <Youtube className="w-4 h-4 text-pink-500" />
              <span className="text-xs font-semibold text-pink-500">YT</span>
            </a>
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-black hover:text-pink-500 dark:text-pink-500 dark:hover:text-pink-500 font-semibold text-xs"
              >
                {item.label}
              </Link>
            ))}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;