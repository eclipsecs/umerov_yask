import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, PenTool } from 'lucide-react';
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
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-serif font-bold text-2xl tracking-tight">Articles</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm tracking-wide uppercase',
                  location.pathname === item.path && 'text-accent-pink'
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 hover:bg-transparent"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-muted-foreground hover:text-foreground transition-colors text-sm',
                  location.pathname === item.path && 'text-accent-pink'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 hover:bg-transparent"
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