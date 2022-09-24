import { Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{
        fontSize: 50,
        textAlign: "center"
      }}>Hola Mundo</Text>
    </View>
  )
}

export default App;
