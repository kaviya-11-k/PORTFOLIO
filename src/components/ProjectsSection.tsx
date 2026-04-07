import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Brain, Cloud, Sun } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  role: string;
  icon: typeof FileText;
  summary: string[];
  details: string;
}

const projects: Project[] = [
  {
    title: 'AI Question Paper Generator',
    subtitle: 'Upload the syllabus → Get a complete question paper instantly.',
    role: 'Developer',
    icon: Brain,
    summary: [
      'Developed a system to generate question papers based on syllabus input',
      'Automated the process, reducing manual workload and staff dependency',
      'Improved efficiency through quick and accurate question generation',
    ],
    details: `AI Question Paper Generator (Syllabus-Based Input System)

This system allows users to upload only the syllabus, and the AI automatically analyzes it to generate accurate, relevant, and balanced questions based strictly on the uploaded content.

⚙️ How It Works
📂 User uploads syllabus (PDF) → 🧠 AI processes content using NLP → 🔍 Extracts key topics, keywords, and concepts → 🏷️ Classifies questions into Easy / Moderate / Hard → 📝 Generates structured question paper → 📄 Outputs ready-to-use exam paper

🎯 Key Highlight
"The system does not require manual question input. By simply uploading the syllabus, it automatically generates accurate questions aligned with the curriculum."

💡 Advanced Features
• Topic-wise weightage generation
• Smart question mapping to syllabus units
• Dynamic question variation (no repetition)
• Supports multiple subjects
• Auto formatting (Part A, Part B, Part C)

🚀 Impact
✅ Completely removes manual question paper setting
✅ Ensures syllabus coverage is 98% accurate
✅ Saves time for teachers and institutions
✅ Generates standardized exam papers
✅ Reduces bias and human errors

🎓 Student Role
• Built syllabus parser using NLP
• Designed AI model for question generation
• Developed UI for file upload and output display
• Integrated difficulty-level classification
• Tested accuracy with different syllabus inputs`,
  },
  {
    title: 'Sentiment Analysis',
    subtitle: 'Hackathon Project — NLP-based text classification',
    role: 'Developer',
    icon: FileText,
    summary: [
      'Built a text classification model using NLP techniques',
      'Performed sentiment classification (Positive / Negative / Neutral)',
      'Successfully implemented within hackathon time constraint',
    ],
    details: `Sentiment Analysis (Hackathon Project)

Developed a sentiment analysis model during a hackathon to classify text data into positive, negative, or neutral sentiments using basic NLP techniques. The system automates the analysis of user feedback, helping understand opinions and emotions from textual data.

💡 Key Contributions
• Built a text classification model using NLP techniques
• Performed sentiment classification (Positive / Negative / Neutral)
• Preprocessed text data (tokenization, stopword removal, etc.)
• Analyzed user feedback and opinion data automatically
• Successfully implemented the solution within a hackathon time constraint

🛠️ Technologies Used
Python, NLP, NLTK / TextBlob / Scikit-learn

🎯 Impact
✅ Automated sentiment detection from large text data
✅ Helps in understanding customer/user opinions quickly
✅ Demonstrated real-time problem-solving skills
✅ Showcased teamwork and innovation in a hackathon`,
  },
  {
    title: 'Online Student Result Management System',
    subtitle: 'Cloud-based system with auto-scaling & load balancing',
    role: 'Developer',
    icon: Cloud,
    summary: [
      'Leverages cloud-based auto-scaling and load balancing',
      'Automatic CGPA and grade calculation',
      'Solves heavy traffic issues during result publication',
    ],
    details: `Online Student Result Management System (Mini Project)

Developed an online result management system to address heavy server traffic during result publication. The system leverages cloud-based concepts such as auto-scaling and load balancing.

⚙️ Key Features
☁️ Cloud-Based Architecture – Uses auto-scaling to handle sudden traffic spikes
⚖️ Load Balancing – Distributes user requests to avoid server overload
🧮 Automatic CGPA Calculation – Computes grades and CGPA instantly
📊 Result Automation – Staff only upload marks; system handles all calculations
🚀 High Performance – Reduced network congestion during peak result time

🛠️ Technologies Used
Processing (Java-based), Cloud Concepts, MySQL

🎯 Impact
✅ Solves heavy traffic issues during result publication
✅ Ensures smooth and uninterrupted access for students
✅ Reduces manual calculation errors
✅ Saves time for faculty and administration

📊 Status: Partially completed – Core functionalities successfully implemented.`,
  },
  {
    title: 'Weather Forecasting Web Application',
    subtitle: 'Full-stack app with real-time API integration',
    role: 'Full Stack Developer',
    icon: Sun,
    summary: [
      'Integrated external weather APIs for live updates',
      'Responsive UI for mobile, tablet, and desktop',
      'Location-based forecasting with clean interface',
    ],
    details: `Weather Forecasting Web Application (Full Stack Project)

Developed a full-stack web application that provides real-time weather updates by integrating external weather APIs. Delivers accurate, user-friendly forecasts through a responsive interface.

⚙️ Key Features
🌦️ Real-Time Weather Data – Integrated APIs for live weather updates
📍 Location-Based Forecasting – Users can search weather by city/location
📱 Responsive UI – Works smoothly on mobile, tablet, and desktop
⚡ Efficient Backend – Handles API requests and data processing
🎯 User-Friendly Interface – Clean design for easy understanding

🛠️ Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js / Express
API: OpenWeatherMap

🎯 Impact
✅ Provides accurate and real-time weather information
✅ Enhances user experience with responsive design
✅ Demonstrates full-stack development skills
✅ Improves understanding of API integration`,
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="text-muted-foreground">Click to explore detailed views</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
              onClick={() => setSelected(p)}
              className="floating-card cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <p.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">{p.title}</h3>
                  <span className="text-xs text-primary/80">Role: {p.role}</span>
                </div>
              </div>
              <p className="text-sm text-accent mb-4 italic">{p.subtitle}</p>
              <ul className="space-y-2">
                {p.summary.map((s, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-primary/60 group-hover:text-primary transition-colors">Click to view details →</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <X size={16} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <selected.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">{selected.title}</h3>
                  <span className="text-sm text-primary/80">Role: {selected.role}</span>
                </div>
              </div>
              <div className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">
                {selected.details}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
