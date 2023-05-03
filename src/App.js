import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import Profile from './components/Profile/Profile.js';
import Footer from './components/Footer/Footer.js';
import Game from './components/Game/Game.js';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#6F8AB7" }}>

      <NavBar />

      <Profile />

      {/* <Game /> */}

      <Footer />

    </div>
  );
}

export default App;
