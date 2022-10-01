import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
//import Tab3Screen from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios'
  ? <TabsIOS/>
  : <TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({color}) => {
          switch (route.name) {
            case 'Tab1Screen':
              return <Text style={{ color }}><Icon name="arrow-back-outline" size={20} color="#900" /></Text>
            case 'TopTabNavigator':
              return <Text style={{ color }}><Icon name="arrow-up-outline" size={20} color="#900" /></Text>
            case 'StackNavigator':
              return <Text style={{ color }}><Icon name="arrow-forward-outline" size={20} color="#900" /></Text>
          }
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: "TopTab" }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: "white"
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;

            case 'Tab2Screen':
              iconName = 'T2'
              break;

            case 'StackNavigator':
              iconName = 'ST'
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>
        }
      })}

    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: "Tab2" }} component={Tab2Screen} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}