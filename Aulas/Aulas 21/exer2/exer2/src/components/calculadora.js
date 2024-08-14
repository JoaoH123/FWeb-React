import { useState, useMemo } from "react";

function Calculadora(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)

    const soma = useMemo(()=>{console.log('Calculando a soma');return numero1+numero2;},[numero1, numero2]);
    const subtracao = useMemo(()=>{console.log('Calculando a subtração');return numero1-numero2;},[numero1, numero2]);
    const multiplicacao = useMemo(()=>{console.log('Calculando a soma');return numero1*numero2;},[numero1, numero2]);
    const divisao = useMemo(()=>{console.log('Calculando a subtração');return numero1/numero2;},[numero1, numero2]);

    return (
        <div>
            <input type="number" value={numero1} onChange={(e)=>setNumero1(parseInt(e.target.value))}/>
            <input type="number" value={numero2} onChange={(e)=>setNumero2(parseInt(e.target.value))}/>
            <p className="mensagem">Soma:{soma}</p>
            <p className="mensagem">Subtração:{subtracao}</p>
            <p className="mensagem">Multiplicação:{multiplicacao}</p>
            <p className="mensagem">Divisão:{divisao}</p>
        </div>
    )
}

export default Calculadora