import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function Contador() {
    const [contador, setContador] = useState(0)
    useEffect(() => {
        const intervalo = setInterval(() => { setContador(contador + 1) }, 1000)
        return () => clearInterval(intervalo)
    }, [contador])

    function adicionarCont() {
        setContador(contador + 1);
    }
    function removerCont() {
        setContador(contador - 1);
    }
    return (
        <div>
            <div className="contador">{contador}</div>
            <button className="button" onClick={removerCont}>Diminuir</button>
            <button className="button" onClick={adicionarCont}>Adicionar</button>
            <p className="link">
            <Link to='/'> Página Principal</Link>
            </p>
        </div>
    )
}

export default Contador;