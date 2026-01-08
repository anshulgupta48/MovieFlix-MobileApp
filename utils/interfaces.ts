import { ImageSourcePropType } from 'react-native';

// <======== Exporting Interfaces ========>
export interface TabsBarIconProps {
    focused: boolean,
    title: string,
    icon: ImageSourcePropType,
};

export interface PopularMovieCardProps {
    movieId: number,
    title: string,
    banner: ImageSourcePropType,
    rating: number,
    genres: string[],
};

export interface LatestMovieCardProps {
    movieId: number,
    title: string,
    bannerUrl: string,
    rating: number,
    genres: string[],
};

export interface fetchMoviesProps {
    query: string,
};