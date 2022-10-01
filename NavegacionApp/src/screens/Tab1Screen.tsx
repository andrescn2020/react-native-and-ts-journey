import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

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
        <Icon name="airplane-outline" size={50} color="#900" />
      </Text>
    </View>

  )
}

export default Tab1Screen