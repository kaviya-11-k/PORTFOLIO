import { motion } from 'framer-motion';
import { Code, Server, Database, Terminal, GitBranch, MonitorSmartphone, MessageSquare, Users, Brain, Clock, RefreshCw, Target, Lightbulb } from 'lucide-react';

const technicalSkills = [
  { category: 'Frontend', skills: 'HTML, CSS, JavaScript, React', icon: MonitorSmartphone, level: 85 },
  { category: 'Backend', skills: 'Node.js', icon: Server, level: 75 },
  { category: 'Database', skills: 'MongoDB, MySQL', icon: Database, level: 70 },
  { category: 'Languages', skills: 'Java, JavaScript, Python, C', icon: Code, level: 80 },
  { category: 'Core Concepts', skills: 'Data Structures', icon: Terminal, level: 75 },
  { category: 'Tools & Platforms', skills: 'Git, GitHub, VS Code', icon: GitBranch, level: 85 },
];

const softSkills = [
  { name: 'Communication Skills', desc: 'Ability to clearly explain ideas and technical concepts', icon: MessageSquare },
  { name: 'Teamwork', desc: 'Worked effectively in teams during hackathons/projects', icon: Users },
  { name: 'Problem-Solving', desc: 'Ability to analyze problems and develop efficient solutions', icon: Brain },
  { name: 'Time Management', desc: 'Completed projects within deadlines', icon: Clock },
  { name: 'Adaptability', desc: 'Quick to learn new technologies and tools', icon: RefreshCw },
  { name: 'Critical Thinking', desc: 'Evaluates situations logically for better decision-making', icon: Target },
  { name: 'Creativity', desc: 'Builds innovative solutions and project ideas', icon: Lightbulb },
];

const SkillsSection = () => (
  <section id="skills" className="relative py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-muted-foreground">Technologies & tools I work with</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {technicalSkills.map((skill, i) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="floating-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <skill.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{skill.category}</h3>
                <p className="text-sm text-muted-foreground">{skill.skills}</p>
              </div>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                className="skill-bar-fill"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h2 className="section-title">Soft Skills</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {softSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="floating-card flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <skill.icon size={16} className="text-accent" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-foreground">{skill.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
