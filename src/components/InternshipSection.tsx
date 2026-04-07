import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const InternshipSection = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="section-title">Internship</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong p-8 md:p-10 glow-border"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Briefcase size={28} className="text-primary" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-foreground">Frontend Development Intern</h3>
            <p className="text-sm text-primary/80">Ocean Academy | June 2025</p>
          </div>
        </div>
        <ul className="space-y-3">
          {[
            'Completed a 15-day offline internship specializing in Frontend Development',
            'Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript',
            'Gained hands-on experience in building user-friendly and visually appealing web interfaces',
            'Applied fundamental UI/UX principles and improved practical coding skills',
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-foreground/80 text-sm flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default InternshipSection;
