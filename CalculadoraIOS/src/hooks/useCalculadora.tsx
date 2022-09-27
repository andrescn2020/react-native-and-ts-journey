import { useState, useRef } from 'react';

enum Operadores {
    sumar, resta, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState("0");
    const [numero, setNumero] = useState("0");

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero("0")
        setNumeroAnterior("0")
    }

    const armarNumero = (numeroTexto: string) => {
        if (numero.includes(".") && numeroTexto === ".") return;
        if (numero.startsWith("0") || numero.startsWith("-0")) {
            if (numeroTexto === ".") {
                setNumero(numero + numeroTexto);
            } else if (numeroTexto === "0" && numero.includes(".")) {
                setNumero(numero + numeroTexto);
            } else if (numeroTexto !== "0" && !numero.includes(".")) {
                setNumero(numeroTexto);
            } else if (numeroTexto === "0" && !numero.includes(".")) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes("-")) {
            setNumero(numero.replace("-", ""))
        } else {
            setNumero("-" + numero)
        }
    }

    const del = () => {
        if (numero.length === 1) {
            setNumero("0")
        } else if (numero.length === 2 && numero.includes("-")) {
            setNumero("0")
        } else {
            let nuevoNumero = numero.substring(0, numero.length - 1)
            setNumero(nuevoNumero)
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if (numero.endsWith(".")) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero)
        }
        setNumero("0")
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.resta;
    }

    const btnSumar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.resta:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                ultimaOperacion.current = undefined;
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                ultimaOperacion.current = undefined;
                break;

            default:
                break;
        }
        setNumeroAnterior("0")
    }
    return {
        limpiar,
        armarNumero,
        positivoNegativo,
        del,
        cambiarNumeroPorAnterior,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        numero,
        numeroAnterior,
        ultimaOperacion
    }
}
