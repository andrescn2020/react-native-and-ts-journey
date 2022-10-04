import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from './MoviePoster';

interface Props {
    title: string;
}

const FlatListPersonal = ({title}:Props) => {
    const { peliculasEnCine } = useMovies();
    return (
        <View style={{ height: 260, backgroundColor: 'orange' }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>{title}</Text>
            <FlatList
                data={peliculasEnCine}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default FlatListPersonal