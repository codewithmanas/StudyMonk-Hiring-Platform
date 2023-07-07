
import './App.css'
import FAQs from './components/FAQs'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import Pricing from './components/Pricing'
import Sitemap from './components/Sitemap'

function App() {

  return (
    <div className="app">
      <Header />
      <Feature />
      <Pricing />
      <FAQs />
      <Sitemap />
      <Footer />

    </div>
  )
}

export default App
