import { useState } from "react";
import {Link} from 'react-router-dom'

function Form() {
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')
    const mudaNome = (event) => {
        setNome(event.target.value);
    }
    const clicaEnter = (event) => {
        event.preventDefault();
        setMensagem(`Bem Vindo: ${nome}`)
    }
    return (
        <div>
            <form onSubmit={clicaEnter}>
                <input
                    type="text"
                    value={nome}
                    placeholder="Digite seu nome"
                    onChange={mudaNome}
                    className="text"
                />
                <button type="submit" className="button">Enviar</button>
            </form>
            <p className="mensagem">{mensagem}</p>
            <a className="linkName">
            <Link to='/contador'> Página Contador</Link>  
            </a>
            <a className="linkName">
            <Link to='/calculadora'> Página Calculadora</Link>  
            </a>
        </div>
    );
}

export default Form;