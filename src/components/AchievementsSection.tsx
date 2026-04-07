import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';

const achievements = [
  { text: 'Secured 2nd Prize for "Biodiesel Production from Waste Cooking Oil" Project in 1st Year', icon: Trophy },
  { text: 'Won Bronze Medal in CM Trophy (District-Level Sports Event) with a cash award of ₹18,000', icon: Medal },
  { text: 'Achieved Gold Medals in inter-college sports competitions (Chess, Cricket, Handball)', icon: Medal },
  { text: 'Secured Silver Medal in inter-college Ball Badminton competition', icon: Medal },
];

const AchievementsSection = () => (
  <section className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="section-title">Achievements</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="floating-card flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <a.icon size={20} className="text-accent" />
            </div>
            <p className="text-sm text-foreground/80">{a.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Extra-curricular */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 glass p-6 text-center">
        <h3 className="font-display font-bold text-foreground mb-3">Extra-Curricular Activities</h3>
        <p className="text-sm text-muted-foreground">Participated in dance and drawing events • Basic skills in video and photo editing</p>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
