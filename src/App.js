import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#615D6C" }}>

      <NavBar />


      <Projects />

      <Contact />

    </div>
  );
}

export default App;
