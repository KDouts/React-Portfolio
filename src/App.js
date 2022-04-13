import './App.css';
import Paragraph from './components/Paragraph';

const funPara = "Hello World!"

function App() {
  return (
    <div className="App">
      <Paragraph text={funPara} />
    </div>
  );
}

export default App;
