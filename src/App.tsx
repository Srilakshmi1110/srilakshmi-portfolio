
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Experience from './components/Experience'
import Volunteering from './components/Volunteering'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Languages from './components/Languages'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Publication />
        <Experience />
        <Education />
        <Volunteering />
        <Achievements />
        <Languages />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
