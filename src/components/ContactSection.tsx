import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const socials = [
  { icon: Phone, label: '9159511998', href: 'tel:9159511998' },
  { icon: Mail, label: 'kaviyaofficial1105@gmail.com', href: 'mailto:kaviyaofficial1105@gmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/kaviya-11-k' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kaviya-k-1673242a7/' },
];

const ContactSection = () => (
  <section id="contact" className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-muted-foreground">Let's build something amazing together</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-strong p-8">
          <h3 className="font-display font-bold text-lg text-foreground mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="glow-input w-full" />
            <input type="email" placeholder="Your Email" className="glow-input w-full" />
            <textarea placeholder="Your Message" rows={4} className="glow-input w-full resize-none" />
            <button type="submit" className="neon-button w-full font-display">Send Message</button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="floating-card flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{s.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
