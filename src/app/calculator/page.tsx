'use client';

import { useState } from "react";


function Calculaate() {

    const [number1, setNumber1] = useState<number>(0);
    const [number2, setNumber2] = useState<number>(0);
    const [operator, setOpeartor] = useState<string>('+');
    const [resultado, setResultado] = useState<number | string>(0);

    function CalculateNumbers() {
        switch (operator) {
            case '+':
                setResultado(number1 + number2);
                break;
            case '-':
                setResultado(number1 - number2);
                break;
            case '*':
                setResultado(number1 * number2);
                break;
            case '/':
                if (number2 === 0) {
                    setResultado('Erro: Divisao por zero');
                } else {
                    setResultado(number1 / number2);
                }
                break;
            default:
                setResultado('Operacao Invalida!');
                break;
        }
    }

    return (
        <>
            <input type="number" value={number1} onChange={(e) => setNumber1(parseFloat(e.target.value))} />

            <select value={operator} onChange={(e) => setOpeartor(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input type="number" value={number2} onChange={(e) => setNumber2(parseFloat(e.target.value))} />

            <button onClick={() => CalculateNumbers()}>CALCULAR</button>


            <br /><br />

            <strong>Resultado:</strong> {resultado}
        </>
    );
}

export default Calculaate