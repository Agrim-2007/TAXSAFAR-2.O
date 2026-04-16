import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const services = [
  'Return Filing (GST/ITR/TDS)',
  'Notice Resolution',
  'Company Registration',
  'Virtual Office',
  'Consultancy',
  'Virtual Accounting',
  'Loan Assistance',
  'Financial Planning',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        {/* Left: Info */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's Start Your <span className="text-gradient">Compliance Journey</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            Have questions? Our expert team is ready to help. Fill out the form
            and we'll get back to you within 2 hours — guaranteed.
          </p>

          <div className="contact__details">
            <a href="mailto:support@taxsafar.com" className="contact__detail-item">
              <div className="contact__detail-icon"><Mail size={18} /></div>
              <div>
                <div className="contact__detail-label">Email Us</div>
                <div className="contact__detail-val">support@taxsafar.com</div>
              </div>
            </a>
            <a href="tel:+919784818899" className="contact__detail-item">
              <div className="contact__detail-icon"><Phone size={18} /></div>
              <div>
                <div className="contact__detail-label">Call Us</div>
                <div className="contact__detail-val">+91 97848 18899</div>
              </div>
            </a>
            <div className="contact__detail-item">
              <div className="contact__detail-icon"><MapPin size={18} /></div>
              <div>
                <div className="contact__detail-label">Office</div>
                <div className="contact__detail-val">Jaipur Electric Market, Jaipur, Rajasthan — 302018</div>
              </div>
            </div>
          </div>

          {/* Quick trust badges */}
          <div className="contact__badges">
            <div className="contact__badge">🔒 100% Confidential</div>
            <div className="contact__badge">⚡ 2-hr Response Time</div>
            <div className="contact__badge">✅ Expert CA Support</div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="contact__form-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <motion.div
              className="contact__success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <CheckCircle size={56} color="var(--primary)" strokeWidth={1.5} />
              <h3>Request Submitted!</h3>
              <p>Our expert team will reach out to you within 2 hours.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className={`contact__field ${focused === 'name' ? 'focused' : ''}`}>
                  <label>Full Name</label>
                  <input
                    name="name" type="text" placeholder="Rahul Sharma"
                    value={form.name} onChange={handleChange}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                    required
                  />
                </div>
                <div className={`contact__field ${focused === 'email' ? 'focused' : ''}`}>
                  <label>Email Address</label>
                  <input
                    name="email" type="email" placeholder="rahul@example.com"
                    value={form.email} onChange={handleChange}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                    required
                  />
                </div>
              </div>
              <div className="contact__form-row">
                <div className={`contact__field ${focused === 'mobile' ? 'focused' : ''}`}>
                  <label>Mobile Number</label>
                  <input
                    name="mobile" type="tel" placeholder="+91 98765 43210"
                    value={form.mobile} onChange={handleChange}
                    onFocus={() => setFocused('mobile')} onBlur={() => setFocused('')}
                    required
                  />
                </div>
                <div className={`contact__field ${focused === 'service' ? 'focused' : ''}`}>
                  <label>Service Required</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    onFocus={() => setFocused('service')} onBlur={() => setFocused('')}
                    required
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className={`contact__field ${focused === 'message' ? 'focused' : ''}`}>
                <label>Your Message (Optional)</label>
                <textarea
                  name="message" rows={4} placeholder="Tell us more about your requirement..."
                  value={form.message} onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg contact__submit">
                <Send size={18} />
                Send Request — It's Free
              </button>
              <p className="contact__form-note">
                By submitting, you agree to our Privacy Policy. Your data is 100% secure.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
