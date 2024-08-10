
import './App.css';
import Title from './components/components1';
import Username from './components/components2';
import CaixaUsername from './components/components3';
import Password from './components/components4';
import CaixaPassWord from './components/components5';
import Button from './components/components6';

function App() {
  return (
    <body>
      <div className="container">
        <div className='login'>
          <div className='title'>
          <Title />
          </div>
          <div className="itens">
            <Username />
            <CaixaUsername />
            <Password />
            <CaixaPassWord />
          </div>
          <div className='button'>
          <Button />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
