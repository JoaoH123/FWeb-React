import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Calculadora from './components/pageCalc';
import Contador from './components/pageCounter';
import Form from './components/pageNameForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/calculadora' element={<Calculadora />} />
        <Route path='/contador' element={<Contador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
