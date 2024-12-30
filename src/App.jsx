import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import External from './components/External';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gray-200">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <External />
        <Experience />
        <Tech />
        <Works />
        
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
