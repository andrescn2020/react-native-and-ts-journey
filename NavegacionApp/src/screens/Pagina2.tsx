import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';

const Pagina2 = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo!',
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina 2</Text>
        <Button title='Ir pagina 3' onPress={() => navigator.navigate('Pagina3')}/>
    </View>
  )
}

export default Pagina2;