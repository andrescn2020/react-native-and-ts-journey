import React from "react";

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import SettingsScreens from '../screens/SettingsScreens';
import { Image, Linking, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MenuInterno {...props}/>}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreens} />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props:any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.avatarContainer}>
        <Image source={{
          uri: "https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01.png",
        }} style={styles.avatar}/>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://google.com')}
        style={{backgroundColor: "orange"}}
      />
    </DrawerContentScrollView>
  );
}