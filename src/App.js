import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';
import Particles from 'react-particles-js';
import AboutMe from './component/AboutMe/AboutMe';
import Contacts from './component/Contacts/Contacts';
import Portfolio from './component/Portfolio/Portfolio';
import Resume from './component/Resume/Resume';



function App() {
  return (
    <>
    <Particles
      params={{
        particles: {
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
        }
      }}
    />
    
    <Nav/>
    <Header/>
    <AboutMe/>
    <Resume/>
    <Portfolio/>
    <Contacts/>
    </>
  );
}

export default App;
