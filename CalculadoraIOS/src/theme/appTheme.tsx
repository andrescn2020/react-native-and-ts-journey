import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "black",
    },
    resultado: {
        color: "white",
        fontSize: 60,
        textAlign: "right",

    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end"
    },
    resultadoPequenio: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 30,
        textAlign: "right",
    },
    fila: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 5
    },
    boton: {
        width: 75,
        height: 75,
        backgroundColor: "#2D2D2D",
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 5
    },
    botonText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: "white",
        fontWeight: "300"
    }
});