import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services', href: '/services',
    children: [
      'Return Filing (GST, ITR, TDS)',
      'Assessment & Notice Resolution',
      'Registrations & Compliance',
      'Virtual Office Facilities',
      'Consultancy & Compliances',
      'Virtual Accounting',
      'Loan Assistance',
      'Financial Planning',
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-tax">TAX</span>
          <span className="navbar__logo-safar">safar</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="navbar__item navbar__item--dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="navbar__link navbar__link--btn">
                  {link.label}
                  <ChevronDown size={14} className={`navbar__chevron ${dropdownOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="navbar__dropdown"
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.children.map((item) => (
                        <Link key={item} to="/services" className="navbar__dropdown-item">
                          <span className="navbar__dropdown-dot" />
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.label} to={link.href} className="navbar__link">
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="tel:+919784818899" className="navbar__phone">
            <Phone size={14} />
            +91 97848 18899
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">Get Started</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
              Get Started Free
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
