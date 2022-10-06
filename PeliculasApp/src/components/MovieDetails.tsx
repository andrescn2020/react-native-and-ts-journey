import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from "currency-formatter";
import CastItem from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: "row" }}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text style={{ color: "black" }}>{movieFull.vote_average}</Text>
                    <Text style={{ color: "black", marginLeft: 5 }}>
                        - {movieFull.genres.map(genre => genre.name).join(", ")}
                    </Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold", color: "black" }}>
                    Historia
                </Text>
                <Text style={{ color: "black", fontSize: 16 }}>
                    {movieFull.overview}
                </Text>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold", color: "black" }}>
                    Presupuesto
                </Text>
                <Text style={{ color: "black", fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold", color: "black" }}>
                        Actores
                    </Text>
                    <FlatList style={{marginTop: 10, height: 70}} data={cast} keyExtractor={(item) => item.id.toString()} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({item}) => <CastItem actor={item} />}/>
                </View>
            </View>
        </>
    )
}

export default MovieDetails