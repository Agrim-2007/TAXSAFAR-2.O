import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Stats.css';

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Happy Clients', color: '#16a34a' },
  { icon: Shield, value: 50, suffix: '+', label: 'Expert CAs', color: '#7c3aed' },
  { icon: Award, value: 4.78, suffix: '/5', label: 'Average Rating', color: '#f59e0b', decimal: true },
  { icon: Clock, value: 8, suffix: ' Yrs', label: 'Industry Experience', color: '#0891b2' },
];

function Counter({ value, suffix, decimal, color }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(decimal ? parseFloat((eased * value).toFixed(2)) : Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, decimal]);

  return (
    <span ref={ref} className="stats-card__value" style={{ color }}>
      {decimal ? display.toFixed(2) : display.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section stats">
      <div className="container stats__inner">
        <motion.div
          className="stats__text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Track Record</span>
          <h2 className="section-title">
            Numbers That<br />
            <span className="text-gradient">Speak for Us</span>
          </h2>
          <p className="section-subtitle">
            Thousands of individuals, freelancers, and businesses across India
            trust TaxSafar to handle their most important compliance needs.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>
            Join Them Today
          </Link>
        </motion.div>

        <div className="stats__grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="stats-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="stats-card__icon" style={{ background: `${stat.color}14`, color: stat.color }}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <Counter {...stat} />
                <p className="stats-card__label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
