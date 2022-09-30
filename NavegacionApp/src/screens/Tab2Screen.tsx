import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2ScreenEffect');
    
  }, [])
  return (
    <View>
        <Text>
            Tab 2 Screen
        </Text>
    </View>
  )
}

export default Tab2Screen