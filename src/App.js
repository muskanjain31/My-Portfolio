import { Navbar } from 'react-bootstrap';
import './App.css';
import TopNav from './Components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Footer from './Components/Footer';
import ContactForm from './Components/Contact';


function App() {
  return (
    <div className="App">
     <TopNav/>
     <Banner/>
     <Skills/>
     <Projects/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

export default App;
