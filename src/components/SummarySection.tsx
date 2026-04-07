import { motion } from 'framer-motion';

const SummarySection = () => (
  <section id="about" className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="glass-strong p-8 md:p-12 animate-float"
      >
        <h2 className="section-title text-3xl md:text-4xl mb-8">Executive Summary</h2>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
          I am passionate about transforming ideas into meaningful digital experiences through clean, efficient code. As an aspiring Full Stack Developer, I aim to contribute to building scalable and innovative applications. Equipped with strong technical skills, adaptability, and a problem-solving mindset, I am confident in my ability to align with job expectations and deliver value as a proactive and reliable team player.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SummarySection;
