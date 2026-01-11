import { ImageSourcePropType } from 'react-native';

// <======== Exporting Interfaces ========>
export interface TabsBarIconProps {
    focused: boolean,
    title: string,
    icon: ImageSourcePropType,
};

export interface PopularMovieCardProps {
    movieId: number,
    movieIndex: number,
    title: string,
    bannerUrl: string,
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
    handleToggleIsMovieSaved: (movieId: number, title: string, bannerUrl: string, rating: number, release_date: string) => void;
};

export interface fetchLatestMoviesProps {
    query: string,
};

export interface PopularMoviesData {
    movieId: number,
    title: string,
    bannerUrl: string,
    rating: number,
    genres: string[],
};

export interface LatestMovieData {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date?: string;
};