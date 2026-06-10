import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import BeforeRead from './components/BeforeRead'
import Meaning from './components/Meaning'
import WhyRead from './components/WhyRead'
import OrderCTA from './components/OrderCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <BeforeRead />
        <Meaning />
        <WhyRead />
        <OrderCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
