import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const ContacsScreens = () => {

  const { signIn, authState: {isLoggedIn} } = useContext(AuthContext)


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Contacts Screens</Text>
        {isLoggedIn ? <></> :<Button title='SignIn' onPress={signIn}/>}
    </View>
  )
}

export default ContacsScreens