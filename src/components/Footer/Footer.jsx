import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  Services: [
    { label: 'Return Filing', href: '#services' },
    { label: 'GST Registration', href: '#services' },
    { label: 'Virtual Accounting', href: '#services' },
    { label: 'Consultancy', href: '#services' },
    { label: 'Loan Assistance', href: '#services' },
    { label: 'Financial Planning', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blogs', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Support: [
    { label: 'Terms of Use', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Payment Policy', href: '#' },
    { label: 'Help Center', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src="https://taxsafar.com/assets/images/logo/login.png" alt="TaxSafar Logo" className="footer__logo-img" />
          </Link>
          <p className="footer__tagline">
            One stop for all your Tax &amp; Compliance needs. Trusted by 10,000+ Indians across the country.
          </p>
          <div className="footer__contact-items">
            <a href="mailto:support@taxsafar.com" className="footer__contact-link">
              ✉ support@taxsafar.com
            </a>
            <a href="tel:+919784818899" className="footer__contact-link">
              📞 +91 97848 18899
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer__col">
            <h4 className="footer__col-title">{group}</h4>
            <ul className="footer__col-links">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 TaxSafar · Swilesure Private Limited · All rights reserved.</span>
          <span className="footer__badges">
            <span>🔒 SSL Secured</span>
            <span>ISO Compliant</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
