import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1ScreenEffect');
    
  }, [])
  

  return (
    <View>
        <Text>
            Tab 1 Screen
        </Text>
    </View>
  )
}

export default Tab1Screen