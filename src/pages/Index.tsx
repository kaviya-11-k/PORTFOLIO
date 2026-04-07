import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import InternshipSection from '@/components/InternshipSection';
import CertificationsSection from '@/components/CertificationsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => (
  <>
    <LoadingScreen />
    <ScrollProgress />
    <CursorGlow />
    <Navbar />
    <main>
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <InternshipSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
