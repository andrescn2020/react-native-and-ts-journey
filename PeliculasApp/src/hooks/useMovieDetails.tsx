import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse } from '../interfaces/creditsInterface';
interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: any[]
}

export const useMovieDetails = (movieId: number) => {
    useEffect(() => {
        getMovieDetails()
    }, [])

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });
    console.log(movieId);

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })

    }
    return {
        ...state
    }
}