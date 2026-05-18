import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import TeamSection from './components/TeamSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#F5F0E8', fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <Home />
      <About />
      <TeamSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App