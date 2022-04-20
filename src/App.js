import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Profile from './components/Profile/Profile.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#6F8AB7" }}>

      <NavBar />

      <Profile />

      <AboutMe />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
