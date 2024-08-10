import './App.css';
import Welcome from './componente1';
import Good from './componente2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <head>
          <title>Exer 1</title>
        </head>
        <div>
          <h1>Bem Vindo ao site!!</h1>
        </div>
        <div>
          <p>
            Aproveite a estadia.
          </p>
          <Welcome name="João" />
          <Good name="João" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;