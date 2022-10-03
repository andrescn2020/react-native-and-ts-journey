import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores } from '../theme/appTheme';

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
        {authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={150} color={colores.primary}/>}
  
    </View>
  )
}

export default SettingsScreens