import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreens from '../screens/ChatScreens';
import ContacsScreens from "../screens/ContacsScreens";
import AlbunsScreens from '../screens/AlbunsScreens';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets()

  return (
    <Tab.Navigator style={{
        paddingTop: top,
    }}
    sceneContainerStyle={{
        backgroundColor: 'white'
    }}
    screenOptions={({route})=>({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
            backgroundColor: colores.primary
        },
        tabBarStyle: {
            borderTopColor: colores.primary,
            borderBottomWidth: 0,
            elevation: 0,
        },
        tabBarIcon: ({color}) => {
            let iconName: string = '';
            switch (route.name) {
              case 'ChatScreens':
                return <Text style={{ color }}><Icon name="chatbox-outline" size={20} color="#900" /></Text>
              case 'ContacsScreens':
                return <Text style={{ color }}><Icon name="people-circle-outline" size={20} color="#900" /></Text>
              case 'AlbunsScreens':
                return <Text style={{ color }}><Icon name="layers-outline" size={20} color="#900" /></Text>
            }

          }
    })}
    >
      <Tab.Screen name="ChatScreens" component={ChatScreens} />
      <Tab.Screen name="ContacsScreens" component={ContacsScreens} />
      <Tab.Screen name="AlbunsScreens" component={AlbunsScreens} />
    </Tab.Navigator>
  );
}