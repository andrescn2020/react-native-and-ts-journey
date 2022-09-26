import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaAzul}></View>
    </View>
  )
}

// TAREA 1 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100,
        backgroundColor: "#28425B",
        flexDirection: "column",
        // justifyContent: "flex-start",
        // alignItems: "flex-start"
    },
    cajaMorada: {
        flex: 1,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#5856D6"
    },
    cajaNaranja: {
        flex: 8,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#F0A23B"
    },
    cajaAzul: {
        flex: 1,
        borderWidth: 10,
        borderColor: "white",
        backgroundColor: "#28C4D9",
        borderBottomWidth: 10
    }
});

// TAREA 2

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         justifyContent: "center",
//     },
//     cajaMorada: {
//         height: 100,
//         width: 100,
//         alignSelf: "flex-start",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         alignSelf: "flex-start",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 3

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         justifyContent: "center",
//     },
//     cajaMorada: {
//         height: 100,
//         width: 100,
//         alignSelf: "flex-end",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         alignSelf: "flex-start",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         height: 100,
//         width: 100,
//         alignSelf: "center",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 4

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         justifyContent: "space-between",
//     },
//     cajaMorada: {
//         height: 100,
//         width: 100,
//         alignSelf: "flex-end",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         alignSelf: "center",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         height: 100,
//         width: 100,
//         alignSelf: "flex-start",
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 5

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         justifyContent: "space-between",
//         flexDirection: "row",
//     },
//     cajaMorada: {
//         width: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         width: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 6

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//     },
//     cajaMorada: {
//         flex: 2,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         flex: 2,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         flex: 4,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 7

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 8

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         alignSelf: "flex-end",
//         right: 30,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 9

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         top: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         alignSelf: "flex-end",
//         right: 30,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

// TAREA 10

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#28425B",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#5856D6"
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         top: 50,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#F0A23B"
//     },
//     cajaAzul: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: "white",
//         backgroundColor: "#28C4D9",
//     }
// });

