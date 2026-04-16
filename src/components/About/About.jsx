import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const coreServices = [
  'Income Tax Return (ITR) Filing',
  'GST Return Filing',
  'Company Registration (Pvt Ltd, LLP, OPC)',
  'Assessment & Notice Resolution',
  'FSSAI, MSME, Import Export Registration',
  'Virtual Bookkeeping & Accounting',
  'Consultancy & Legal Compliance',
  'Loan & Finance Documentation',
  'Financial Planning & Investment Advisory',
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        {/* Left visual */}
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about__img-wrap">
            <div className="about__img-bg" />
            <div className="about__info-card about__info-card--1">
              <Target size={18} color="var(--primary)" />
              <div>
                <div className="about__info-card-title">Our Mission</div>
                <div className="about__info-card-text">
                  Make compliance accessible for every Indian citizen
                </div>
              </div>
            </div>
            <div className="about__info-card about__info-card--2">
              <Eye size={18} color="#7c3aed" />
              <div>
                <div className="about__info-card-title">Our Vision</div>
                <div className="about__info-card-text">
                  India's most trusted fintech platform by 2030
                </div>
              </div>
            </div>
            <div className="about__badge">
              <span className="about__badge-num">A+</span>
              <span className="about__badge-label">Rated Platform</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">About TaxSafar</span>
          <h2 className="section-title">
            Built for India's <span className="text-gradient">Entrepreneurs</span> &amp; Professionals
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            TaxSafar is a fast-growing fintech and consultancy platform operated by
            <strong> Swilesure Private Limited</strong>, Jaipur. We offer end-to-end business services —
            from company registration to return filing, virtual accounting to financial advisory —
            bringing simplicity and scale to business compliance across India.
          </p>

          <div className="about__services-list">
            {coreServices.map((s, i) => (
              <motion.div
                key={s}
                className="about__service-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <CheckCircle2 size={16} color="var(--primary)" strokeWidth={2.5} />
                <span>{s}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/contact" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
            Talk to an Expert
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
