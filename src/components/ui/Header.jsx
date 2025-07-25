import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import logo from '../../assets/ib-brand-logo-with-name.png';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage' },
    { name: 'Personal Banking', path: '/personal-banking-services' },
    { name: 'Business Solutions', path: '/business-solutions-center' },
    { name: 'Agency Network', path: '/agency-banking-network' },
    { name: 'Digital Banking', path: '/digital-banking-hub' }
  ];

  const moreItems = [
    { name: 'About Us', path: '/about-international-bank-liberia' },
    { name: 'Contact', path: '/contact' },
    { name: 'Support', path: '/support' },
    { name: 'Careers', path: '/careers' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-2 left-0 right-0 z-header brand-transition ${
        isScrolled
          ? "glassmorphic shadow-brand-lg"
          : "bg-background/80 backdrop-blur-subtle"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-3 brand-transition brand-hover-scale"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt="" className="w-[12rem] py-2 px-2 " />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-brand text-sm font-medium brand-transition ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-brand"
                    : "text-foreground hover:bg-muted hover:text-accent-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-brand text-sm font-medium text-foreground hover:bg-muted hover:text-accent-foreground brand-transition">
                More
                <Icon
                  name="ChevronDown"
                  size={16}
                  className="ml-1 group-hover:rotate-180 brand-transition"
                />
              </button>

              <div className="absolute right-0 top-full mt-2 w-48 glassmorphic rounded-brand-lg shadow-brand-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible brand-transition z-50">
                <div className="py-2">
                  {moreItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted/50 hover:text-accent-foreground brand-transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
            >
              Contact
            </Button>
            <Button
              variant="default"
              size="sm"
              className="conversion-cta"
              iconName="UserPlus"
              iconPosition="left"
              iconSize={16}
            >
              Open Account
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-brand text-foreground hover:bg-muted brand-transition thumb-friendly"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? "X" : "Menu"}
              size={24}
              className="brand-transition"
            />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="hidden lg:flex items-center justify-center py-2 border-t border-border/50">
          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-2 trust-badge">
              <Icon name="Shield" size={14} className="text-success" />
              <span>CBL Licensed</span>
            </div>
            <div className="flex items-center space-x-2 trust-badge">
              <Icon name="Lock" size={14} className="text-success" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center space-x-2 trust-badge">
              <Icon name="Award" size={14} className="text-success" />
              <span>FDIC Insured</span>
            </div>
            <div className="flex items-center space-x-2 trust-badge">
              <Icon name="Globe" size={14} className="text-success" />
              <span>International Banking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden glassmorphic border-t border-border/50 brand-transition ${
          isMobileMenuOpen
            ? "opacity-100 visible max-h-screen"
            : "opacity-0 invisible max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-brand text-sm font-medium brand-transition thumb-friendly ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "text-foreground hover:bg-muted hover:text-accent-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="border-t border-border/50 pt-2 mt-4">
            {moreItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-brand text-sm font-medium text-foreground hover:bg-muted hover:text-accent-foreground brand-transition thumb-friendly"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-border/50 pt-4 mt-4 space-y-3">
            <Button
              variant="outline"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
              className="thumb-friendly"
            >
              Contact Us
            </Button>
            <Button
              variant="default"
              fullWidth
              className="conversion-cta thumb-friendly"
              iconName="UserPlus"
              iconPosition="left"
              iconSize={16}
            >
              Open Account Today
            </Button>
          </div>

          {/* Mobile Trust Indicators */}
          <div className="border-t border-border/50 pt-4 mt-4">
            <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={14} className="text-success" />
                <span>CBL Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={14} className="text-success" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={14} className="text-success" />
                <span>FDIC Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={14} className="text-success" />
                <span>International</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;