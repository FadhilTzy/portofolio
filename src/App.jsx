import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TeamSection from './components/TeamSection'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <TeamSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App