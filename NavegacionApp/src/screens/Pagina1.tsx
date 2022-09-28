import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

const Pagina1 = ( { navigation } : Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina 1</Text>
        <Button title='Ir pagina 2' onPress={() => navigation.navigate('Pagina2')}/>
        <Text style={styles.title}>Navegar con argumentos</Text>
        <View style={{
          flexDirection: "row"
        }}>
        <TouchableOpacity style={{...styles.botonGrande, backgroundColor: "#5856D6"}} onPress={() => navigation.navigate('PersonaScreen', {
          id: 1,
          nombre: "Andrés"
        })}>
          <Text style={styles.botonGrandeTexto}>Andrés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.botonGrande, backgroundColor: "#FF9427"}} onPress={() => navigation.navigate('PersonaScreen', {
          id: 2,
          nombre: "Maria"
        })}>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
        {/* <Button title='Ir persona' onPress={() => navigation.navigate('PersonaScreen')}/> */}
        </View>
    </View>
  )
}

export default Pagina1;