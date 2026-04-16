import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FileText, AlertTriangle, Building2, MapPin,
  Briefcase, BarChart2, Landmark, TrendingUp, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    icon: FileText,
    title: 'Return Filing',
    sub: 'GST, ITR, TDS, FSSAI & more',
    desc: 'Expert-led filing across all tax types. Fast, accurate, and 100% compliant with latest regulations.',
    color: '#16a34a',
    bg: '#f0fdf4',
    featured: true,
  },
  {
    icon: AlertTriangle,
    title: 'Notice Resolution',
    sub: 'Income Tax, GST, Professional Tax',
    desc: 'Expert handling of income tax or GST notices. Case-specific consultation and reply drafting.',
    color: '#d97706',
    bg: '#fffbeb',
  },
  {
    icon: Building2,
    title: 'Registrations',
    sub: 'Company, GST, Trademark, MSME',
    desc: 'Start-to-finish company and LLP incorporation. Comprehensive legal and compliance support.',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: MapPin,
    title: 'Virtual Office',
    sub: 'For GST, MCA Registrations & more',
    desc: 'Professional address for registration purposes. Pan-India presence with instant setup.',
    color: '#0891b2',
    bg: '#ecfeff',
  },
  {
    icon: Briefcase,
    title: 'Consultancy',
    sub: 'Tax, Business, Start-up & more',
    desc: 'Business structuring and tax advisory. End-to-end growth, legal, and compliance guidance.',
    color: '#db2777',
    bg: '#fdf2f8',
  },
  {
    icon: BarChart2,
    title: 'Virtual Accounting',
    sub: 'Cloud & Client Based Services',
    desc: 'Real-time cloud-based bookkeeping. Timely reports and monthly reconciliation tailored to your business.',
    color: '#16a34a',
    bg: '#f0fdf4',
  },
  {
    icon: Landmark,
    title: 'Loan Assistance',
    sub: 'Business, Home, Gold, Education',
    desc: 'Expert help in choosing the best loan offers. Quick approval and smooth documentation process.',
    color: '#ea580c',
    bg: '#fff7ed',
  },
  {
    icon: TrendingUp,
    title: 'Financial Planning',
    sub: 'Wealth Management & Advisory',
    desc: 'Tax-efficient investment strategies. Goal-based planning with SEBI-registered advisors.',
    color: '#0284c7',
    bg: '#f0f9ff',
  },
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centreX = rect.width / 2;
    const centreY = rect.height / 2;
    const rotY = ((x - centreX) / centreX) * 8;
    const rotX = ((centreY - y) / centreY) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
    card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      className={`svc-card ${service.featured ? 'svc-card--featured' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="svc-card__glow" />
      <div className="svc-card__icon" style={{ background: service.bg, color: service.color }}>
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <div className="svc-card__content">
        <h3 className="svc-card__title">{service.title}</h3>
        <p className="svc-card__sub">{service.sub}</p>
        <p className="svc-card__desc">{service.desc}</p>
      </div>
      <Link to="/contact" className="svc-card__cta" style={{ color: service.color }}>
        Learn More <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          className="services__header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Everything Your Business{' '}
            <span className="text-gradient">Needs to Comply</span>
          </h2>
          <p className="section-subtitle">
            From filing your first GST return to planning your financial future —
            our team of 50+ CAs handles it all, so you can focus on growing.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          className="services__cta-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
          <p className="services__cta-note">Response within 2 hours · No charges to consult</p>
        </motion.div>
      </div>
    </section>
  );
}
