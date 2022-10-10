import React from 'react'
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Carousel from 'react-native-snap-carousel';

import FlatListPersonal from '../components/FlatListPersonal';
import MoviePoster from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/getImageColors';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const getPosterColor = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primary, secondary] = await getImageColors(uri);
        console.log(primary, secondary);
        
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColor(index)}
                        />
                    </View>
                    <FlatListPersonal title='Popular' movies={popular} />
                    <FlatListPersonal title='Top Rated' movies={topRated} />
                    <FlatListPersonal title='Upcoming' movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen