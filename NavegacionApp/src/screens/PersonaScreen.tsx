import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootsStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// FORMA 1: interface RouterParams {
//     id: number,
//     nombre: string
// }

interface Props extends StackScreenProps<RootsStackParams,'PersonaScreen'>{}

const PersonaScreen = ( { route, navigation }:Props ) => {

const {changeUsername} = useContext(AuthContext)
// FORMA 1: const params = route.params as RouterParams;
const params = route.params

useEffect(() => {
    navigation.setOptions({
        title: params!.nombre
    })
    changeUsername(params.nombre)
}, [])

useEffect(() => {
  changeUsername(params.nombre)
}, [])


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  )
}

export default PersonaScreen