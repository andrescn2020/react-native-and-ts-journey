import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

const CalculadoraScreen = () => {

    const { 
        limpiar,
        positivoNegativo,
        armarNumero,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        cambiarNumeroPorAnterior,
        del,
        numero,
        numeroAnterior
    } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== "0") && (<Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>)
            }

            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
                <BotonCalc texto="del" color="#9B9B9B" accion={del} />
                <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />
                <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />
                <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="0" ancho accion={armarNumero} />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#FF9427" accion={calcular} />
            </View>
        </View>
    )
}

export default CalculadoraScreen