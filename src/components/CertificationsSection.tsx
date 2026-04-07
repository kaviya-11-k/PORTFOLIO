import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certs = [
  { title: 'Programming in Java', org: 'NPTEL', year: '2025', note: 'Elite certification (68%) | Qualified proctored exam' },
  { title: 'Oracle Cloud Infrastructure 2025', org: 'Oracle (Naan Mudhalvan)', year: '2025', note: 'Certified Foundations Associate' },
  { title: 'Front-End Web Development', org: 'Ocean Academy', year: '2024', note: 'Value Added Course' },
  { title: 'Full Stack Development', org: 'VIPS.TECH', year: '2026', note: 'Value Added Course' },
  { title: 'Java Programming & HTML', org: 'Great Learning', year: '', note: 'Online Platform' },
];

const CertificationsSection = () => (
  <section id="certifications" className="relative py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="section-title">Certifications</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="floating-card text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Award size={22} className="text-primary" />
            </div>
            <h4 className="font-display font-bold text-sm text-foreground mb-1">{c.title}</h4>
            <p className="text-xs text-primary/80 mb-1">{c.org}{c.year && ` | ${c.year}`}</p>
            <p className="text-xs text-muted-foreground">{c.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
