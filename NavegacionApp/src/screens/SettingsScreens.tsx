import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const SettingsScreens = () => {

  const {authState} = useContext(AuthContext)

  return (
    <View>
        <Text>
            Settings Screen
        </Text>
        <Text style={{color: "black"}}>
          {JSON.stringify(authState, null, 4)}
        </Text>
    </View>
  )
}

export default SettingsScreens