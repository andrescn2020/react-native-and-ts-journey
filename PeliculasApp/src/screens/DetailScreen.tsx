import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

const DetailScreen = ({route}: Props) => {

  const movie = route.params;

  console.log(movie.original_title);
  
  return (
    <View>
        <Text>Detail</Text>
    </View>
  )
}

export default DetailScreen