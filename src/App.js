import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#6F8AB7" }}>

      <NavBar />

      <Profile />

      <AboutMe />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;
