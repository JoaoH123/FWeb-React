import './App.css';
import Title from './components/componente1';
import Input from './components/componente2';
import Button from './components/componente3';

function App() {
  return (
    <body>
    <div className="container">
        <Title name="João" />
        <Input />
        <Button />
    </div>
  </body>
  );
}

export default App;