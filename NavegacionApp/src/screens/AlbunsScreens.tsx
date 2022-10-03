import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

const AlbunsScreens = () => {

  const {logout, authState: {isLoggedIn}} = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Albuns Screens</Text>
        {isLoggedIn && <Button title='Logout' onPress={logout}/>}
    </View>
  )
}

export default AlbunsScreens