import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1 from '../screens/Pagina1';
import Pagina2 from '../screens/Pagina2';
import Pagina3 from '../screens/Pagina3';
import PersonaScreen from '../screens/PersonaScreen';

// FORMA 2

export type RootsStackParams = {
  Pagina1: undefined,
  Pagina2: undefined,
  Pagina3: undefined,
  PersonaScreen: {id: number,nombre: string},
}

const Stack = createStackNavigator<RootsStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: "transparent"
      },
      cardStyle: {
        backgroundColor: 'white'
      }
    }}>
      <Stack.Screen name="Pagina1" options={{ title: "Pagina 1" }} component={Pagina1} />
      <Stack.Screen name="Pagina2" options={{ title: "Pagina 2" }} component={Pagina2} />
      <Stack.Screen name="Pagina3" options={{ title: "Pagina 3" }} component={Pagina3} />
      <Stack.Screen name="PersonaScreen" options={{ title: "PersonaScreen" }} component={PersonaScreen} />
    </Stack.Navigator>
  );
}