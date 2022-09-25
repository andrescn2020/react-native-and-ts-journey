import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.casaNaranja}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: "#5856D6",
        borderWidth: 10,
        borderColor: 'white'
    },
    casaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: "#F0A23B",
        borderWidth: 10,
        borderColor: 'white'
    }
});