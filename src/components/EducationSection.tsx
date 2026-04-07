import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const education = [
  {
    institution: 'CK College of Engineering and Technology',
    period: '2023 - 2027',
    degree: 'B.E Computer Science and Engineering',
    grade: 'CGPA: 8.15',
    icon: GraduationCap,
  },
  {
    institution: 'Government Girls Higher Secondary School',
    period: '2022 - 2023',
    degree: 'HSC',
    grade: 'Percentage: 72.6%',
    icon: School,
  },
];

const EducationSection = () => (
  <section id="education" className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="section-title">Education</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`relative flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-12 pl-16 md:pl-0`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-border z-10" />

            <div className={`floating-card max-w-md w-full ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
              <div className="flex items-center gap-3 mb-2">
                <edu.icon size={20} className="text-primary" />
                <span className="text-xs text-primary/80 font-display">{edu.period}</span>
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">{edu.institution}</h3>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              <p className="text-sm text-primary font-semibold mt-1">{edu.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
