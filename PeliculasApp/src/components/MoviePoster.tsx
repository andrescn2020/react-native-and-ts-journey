import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('DetailScreen' as never, movie as never)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal: 8
        }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius:7,
        elevation: 9,
    }
});


export default MoviePoster