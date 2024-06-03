import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './components/PrimerComponente';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Primercomponente></Primercomponente>
      </header>
    </div>
  );
}

export default App;
