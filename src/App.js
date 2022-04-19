import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer'

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
