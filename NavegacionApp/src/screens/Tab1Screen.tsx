import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1ScreenEffect');

  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Iconos
      </Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>

  )
}

export default Tab1Screen