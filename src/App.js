import { Navbar } from 'react-bootstrap';
import './App.css';
import {useRef} from 'react'
import TopNav from './Components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Footer from './Components/Footer';
import ContactForm from './Components/Contact';


function App() {
  const contactRef = useRef(null)
  const scrollToContact=()=>{
    contactRef.current.scrollIntoView({behaviour: 'smooth'});
  }

  return (
    <div className="App">
     <TopNav scrollToContact= {scrollToContact}/>
     <Banner/>
     <Skills/>
     <Projects/>
     <div ref={contactRef} id='contact'/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

export default App;
