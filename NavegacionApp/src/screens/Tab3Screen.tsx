import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

const Tab3Screen = () => {
  useEffect(() => {
    console.log('Tab3ScreenEffect');
    
  }, [])
  return (
    <View>
        <Text>
            Tab 3 Screen
        </Text>
    </View>
  )
}

export default Tab3Screen;