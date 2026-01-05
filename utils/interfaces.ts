import { ImageSourcePropType } from 'react-native';

// <======== Exporting Interfaces ========>
export interface TabsBarIconProps {
    focused: boolean,
    title: string,
    icon: ImageSourcePropType,
};

export interface LatestMovieCardProps {
    title: string,
    banner: ImageSourcePropType,
    rating: number,
    genres: string[],
};