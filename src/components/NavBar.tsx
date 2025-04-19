
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Ritual Dashboard', path: '/dashboard' },
    { name: 'Compassion Mentor', path: '/mentor' },
    { name: 'Philosopher\'s Forge', path: '/philosophy' },
    { name: 'History\'s Lantern', path: '/history' },
    { name: 'Soul Wallet', path: '/wallet' },
  ];

  return (
    <nav className="glass-card sticky top-0 z-50 py-4 px-6 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-xl md:text-2xl text-sacred dark:text-sacred-light">
          Cathedral of Compassion
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm hover:text-sacred dark:hover:text-sacred-light transition-colors ${
                  location.pathname === link.path ? 'text-sacred dark:text-sacred-light font-medium' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card animate-fade-in p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm p-2 hover:bg-accent rounded-md transition-colors ${
                location.pathname === link.path ? 'bg-accent font-medium' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
