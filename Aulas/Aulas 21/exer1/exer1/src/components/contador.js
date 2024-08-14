import { useState, useEffect } from "react";

function Contador() {
    const [contador, setContador] = useState(0)
    useEffect(() => {
        const timerID = setInterval(() => { setContador(contador + 1) }, 1000)
        return () => clearInterval(timerID)
    }, [])

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
        </div>
    )
}

export default Contador;