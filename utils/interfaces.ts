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
    isMovieSaved: boolean,
    handleToggleIsMovieSaved: (movieId: number, title: string, bannerUrl: string, rating: number) => void;
};

export interface fetchMoviesProps {
    query: string,
};

export interface MovieData {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date?: string;
};