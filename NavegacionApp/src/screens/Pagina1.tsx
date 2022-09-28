import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

const Pagina1 = ( { navigation } : Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina 1</Text>
        <Button title='Ir pagina 2' onPress={() => navigation.navigate('Pagina2')}/>
    </View>
  )
}

export default Pagina1;