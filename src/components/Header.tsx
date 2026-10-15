import { useState } from 'react';
import { Store, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export function Header({ currentPath = '/', onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a route path (starts with '/')
    if (href.startsWith('/') && !href.startsWith('/#')) {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href);
        setMobileMenuOpen(false);
      }
      return;
    }

    // If it's an anchor on the landing page
    if (href.startsWith('#') || href.startsWith('/#')) {
      const anchor = href.replace(/^\/?#/, '');
      if (currentPath !== '/') {
        if (onNavigate) {
          e.preventDefault();
          onNavigate('/');
          // Wait for render, then scroll to section
          setTimeout(() => {
            const el = document.getElementById(anchor);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        // On landing page already, smooth scroll
        const el = document.getElementById(anchor);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', `#${anchor}`);
        }
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a 
          href="/" 
          className="logo" 
          onClick={(e) => handleNavClick(e, '/')}
          aria-label="RestroConnect Home"
        >
          <Store style={{ color: 'var(--purple)' }} />
          <span>Restro<span>Connect</span></span>
        </a>
        
        <nav className="nav-links" aria-label="Main Navigation">
          <a href="/#home" className="nav-link" onClick={(e) => handleNavClick(e, '/#home')}>Home</a>
          <a href="/#restaurants" className="nav-link" onClick={(e) => handleNavClick(e, '/#restaurants')}>For Restaurants</a>
          <a href="/#customers" className="nav-link" onClick={(e) => handleNavClick(e, '/#customers')}>For Customers</a>
          <a href="/#how-it-works" className="nav-link" onClick={(e) => handleNavClick(e, '/#how-it-works')}>How It Works</a>
          <a href="/#features" className="nav-link" onClick={(e) => handleNavClick(e, '/#features')}>Features</a>
          <a href="/#faq" className="nav-link" onClick={(e) => handleNavClick(e, '/#faq')}>FAQ</a>
        </nav>
        
        <a 
          href="/#demo" 
          className="btn btn-primary header-desktop-btn"
          onClick={(e) => handleNavClick(e, '/#demo')}
        >
          Request Demo
        </a>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <a href="/#home" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '/#home')}>Home</a>
          <a href="/#restaurants" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '/#restaurants')}>For Restaurants</a>
          <a href="/#customers" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '/#customers')}>For Customers</a>
          <a href="/#how-it-works" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '/#how-it-works')}>How It Works</a>
          <a href="/#features" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '/#features')}>Features</a>
          <a href="/#faq" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '/#faq')}>FAQ</a>
          <a 
            href="/#demo" 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '0.75rem', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
            onClick={(e) => handleNavClick(e, '/#demo')}
          >
            Request Demo
          </a>
        </div>
      )}
    </header>
  );
}
