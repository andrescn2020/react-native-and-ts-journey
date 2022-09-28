import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

const Pagina2 = () => {

  const navigator = useNavigation()

  return (
    <View style={styles.globalMargin}>
        <Text>Pagina 2</Text>
        <Button title='Ir pagina 3' onPress={() => navigator.navigate('Pagina3')}/>
    </View>
  )
}

export default Pagina2;