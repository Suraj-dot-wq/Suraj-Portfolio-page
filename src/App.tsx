import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import DjangoCicdProject from '@/pages/DjangoCicdProject';
import GnnCybersecurityProject from '@/pages/GnnCybersecurityProject';
import AiAutomationProject from '@/pages/AiAutomationProject';
import Certifications from '@/pages/Certifications';
import Resume from '@/pages/Resume';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/django-cicd" element={<DjangoCicdProject />} />
          <Route
            path="/projects/gnn-cybersecurity"
            element={<GnnCybersecurityProject />}
          />
          <Route path="/projects/ai-automation" element={<AiAutomationProject />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
