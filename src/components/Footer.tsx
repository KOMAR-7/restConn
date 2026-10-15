import { Store } from 'lucide-react';

interface FooterProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export function Footer({ currentPath = '/', onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a page path
    if (href.startsWith('/') && !href.startsWith('/#')) {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href);
      }
      return;
    }

    // If it's an anchor to landing page section
    if (href.startsWith('#') || href.startsWith('/#')) {
      const anchor = href.replace(/^\/?#/, '');
      if (currentPath !== '/') {
        if (onNavigate) {
          e.preventDefault();
          onNavigate('/');
          setTimeout(() => {
            const el = document.getElementById(anchor);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        const el = document.getElementById(anchor);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', `#${anchor}`);
        }
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Store style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--purple)' }} />
              Restro<span>Connect</span>
            </div>
            <p className="footer-desc">Your Restaurant. Your Customers. Your Orders.</p>
            <div style={{ fontSize: '0.85rem', color: 'var(--gray-400)' }}>
              Restaurant management & direct ordering platform.
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="/#restaurants" onClick={(e) => handleLinkClick(e, '/#restaurants')}>For Restaurants</a></li>
              <li><a href="/#customers" onClick={(e) => handleLinkClick(e, '/#customers')}>For Customers</a></li>
              <li><a href="/#features" onClick={(e) => handleLinkClick(e, '/#features')}>Features & POS</a></li>
              <li><a href="/#how-it-works" onClick={(e) => handleLinkClick(e, '/#how-it-works')}>How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="/#demo" onClick={(e) => handleLinkClick(e, '/#demo')}>Request Demo</a></li>
              <li><a href="/#faq" onClick={(e) => handleLinkClick(e, '/#faq')}>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Legal & Compliance</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="/privacy-policy" 
                  onClick={(e) => handleLinkClick(e, '/privacy-policy')}
                  style={currentPath === '/privacy-policy' ? { color: 'white', fontWeight: 600 } : undefined}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms-of-service" 
                  onClick={(e) => handleLinkClick(e, '/terms-of-service')}
                  style={currentPath === '/terms-of-service' ? { color: 'white', fontWeight: 600 } : undefined}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/data-deletion" 
                  onClick={(e) => handleLinkClick(e, '/data-deletion')}
                  style={currentPath === '/data-deletion' ? { color: 'white', fontWeight: 600 } : undefined}
                >
                  Data Deletion Instructions
                </a>
              </li>
              <li>
                <a href="/#demo" onClick={(e) => handleLinkClick(e, '/#demo')}>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} RestroConnect Technology. All rights reserved.</div>
          <div>Built for restaurants in India and worldwide.</div>
        </div>
      </div>
    </footer>
  );
}
