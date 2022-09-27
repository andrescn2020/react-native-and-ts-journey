import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import BotonCalc from '../components/BotonCalc';
import { useState } from 'react';

const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState("0");
    const [numero, setNumero] = useState("0");

    const limpiar = () => {
        setNumero("0")
    }

    const armarNumero = (numeroTexto: string) => {
        if(numero.includes(".") && numeroTexto === ".") return;
        if(numero.startsWith("0") || numero.startsWith("-0")) {
            if(numeroTexto === "."){
                setNumero(numero + numeroTexto);
            } else if(numeroTexto === "0" && numero.includes(".")){
                setNumero(numero + numeroTexto);
            } else if(numeroTexto !== "0" && !numero.includes(".")){
                setNumero(numeroTexto);
            } else if(numeroTexto === "0" && !numero.includes(".")){
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes("-")){
            setNumero(numero.replace("-", ""))
        } else {
            setNumero( "-" + numero)
        }
    }

    const del = () => {
        if(numero.length === 1) {
            setNumero("0")
        } else if(numero.length === 2 && numero.includes("-")) {
            setNumero("0")
        } else {
            let nuevoNumero = numero.substring(0, numero.length - 1)
            setNumero(nuevoNumero)
        }
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo}/>
                <BotonCalc texto="del" color="#9B9B9B" accion={del}/>
                <BotonCalc texto="/" color="#FF9427" accion={limpiar}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero}/>
                <BotonCalc texto="8" accion={armarNumero}/>
                <BotonCalc texto="9" accion={armarNumero}/>
                <BotonCalc texto="X" color="#FF9427" accion={limpiar}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero}/>
                <BotonCalc texto="5" accion={armarNumero}/>
                <BotonCalc texto="6" accion={armarNumero}/>
                <BotonCalc texto="-" color="#FF9427" accion={limpiar}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="1" accion={armarNumero}/>
                <BotonCalc texto="2" accion={armarNumero}/>
                <BotonCalc texto="3" accion={armarNumero}/>
                <BotonCalc texto="+" color="#FF9427" accion={limpiar}/>
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="0" ancho accion={armarNumero}/>
                <BotonCalc texto="." accion={armarNumero}/>
                <BotonCalc texto="=" color="#FF9427" accion={limpiar}/>
            </View>
        </View>
    )
}

export default CalculadoraScreen