import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Star, Shield, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const floatingCards = [
  { icon: '📄', label: 'ITR Filed', value: '10K+', color: '#16a34a', delay: 0 },
  { icon: '🏢', label: 'GST Registrations', value: '5K+', color: '#0891b2', delay: 0.15 },
  { icon: '⚖️', label: 'Legal Filings', value: '8K+', color: '#7c3aed', delay: 0.3 },
  { icon: '📊', label: 'CA Experts', value: '50+', color: '#ea580c', delay: 0.45 },
];

const tags = ['Return Filing', 'GST Registration', 'Financial Planning', 'Virtual Accounting', 'Notice Resolution'];

function FloatingCard({ icon, label, value, color, delay }) {
  return (
    <motion.div
      className="hero-float-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="hero-float-card__icon" style={{ background: `${color}18` }}>{icon}</span>
      <div>
        <div className="hero-float-card__value" style={{ color }}>{value}</div>
        <div className="hero-float-card__label">{label}</div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="hero" ref={containerRef}>
      {/* Background blobs */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
        <div className="hero-blob hero-blob--3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero__inner">
        {/* Left: Text */}
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>
            <span className="tag tag-green">
              <Star size={12} fill="currentColor" />
              Trusted by 10,000+ Indians — A+ Rated Platform
            </span>
          </motion.div>

          <motion.h1 className="hero__heading font-display" variants={childVariants}>
            Your Complete
            <br />
            <span className="text-gradient">Tax & Compliance</span>
            <br />
            Partner in India
          </motion.h1>

          <motion.p className="hero__sub" variants={childVariants}>
            From GST and ITR filing to company registration, virtual accounting,
            and financial planning — TaxSafar simplifies every step of your
            business journey with expert CAs at your side.
          </motion.p>

          {/* Tags */}
          <motion.div className="hero__tags" variants={childVariants}>
            {tags.map((tag) => (
              <span key={tag} className="hero__tag">{tag}</span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={childVariants}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-ghost btn-lg">
              Explore Services
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div className="hero__trust" variants={childVariants}>
            <div className="hero__trust-item">
              <Shield size={16} className="hero__trust-icon" />
              <span>50+ Expert CAs</span>
            </div>
            <div className="hero__trust-sep" />
            <div className="hero__trust-item">
              <Star size={16} className="hero__trust-icon" />
              <span>4.78 / 5.0 Rating</span>
            </div>
            <div className="hero__trust-sep" />
            <div className="hero__trust-item">
              <Users size={16} className="hero__trust-icon" />
              <span>10,000+ Clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: 3D Card Visual */}
        <motion.div
          className="hero__visual"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main dashboard card */}
          <div className="hero-dashboard">
            <div className="hero-dashboard__header">
              <div className="hero-dashboard__dots">
                <span style={{ background: '#ff5f57' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#28c840' }} />
              </div>
              <span className="hero-dashboard__title">TaxSafar Portal</span>
            </div>
            <div className="hero-dashboard__body">
              <div className="hero-dashboard__stat-row">
                <div className="hero-dashboard__stat">
                  <TrendingUp size={18} color="var(--primary)" />
                  <div>
                    <div className="hero-dashboard__stat-val">₹2.4L</div>
                    <div className="hero-dashboard__stat-label">Tax Saved This Year</div>
                  </div>
                </div>
                <div className="hero-dashboard__badge">✓ Filed</div>
              </div>
              <div className="hero-dashboard__progress-label">
                <span>GST Filing Progress</span>
                <span className="text-green">98%</span>
              </div>
              <div className="hero-dashboard__progress-bar">
                <motion.div
                  className="hero-dashboard__progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: '98%' }}
                  transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
                />
              </div>
              <div className="hero-dashboard__services">
                {['ITR Filing', 'GST Return', 'TDS Filing', 'Company Reg.'].map((s) => (
                  <div key={s} className="hero-dashboard__service-chip">
                    <span className="hero-dashboard__check">✓</span> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="hero__float-cards">
            {floatingCards.map((card) => (
              <FloatingCard key={card.label} {...card} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
