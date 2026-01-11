import { PopularMoviesData } from '@/utils/interfaces';
import { Client, Databases, ID, Query } from 'react-native-appwrite';

const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client().setEndpoint('https://nyc.cloud.appwrite.io/v1').setProject(PROJECT_ID);
const database = new Databases(client);

export const updateSearchCount = async (movieId: number, title: string, bannerUrl: string, rating: number, genres: string[], searchTerm: string) => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal('searchTerm', searchTerm)]);

        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, existingMovie.$id, { searchCount: existingMovie.searchCount + 1 });
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), { movieId, title, bannerUrl, rating, genres, searchTerm });
        }
    } catch (error) {
        console.error('Error while updating SearchCount:', error);
        throw error;
    }
};

export const fetchPopularMovies = async (): Promise<PopularMoviesData[]> => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.limit(5), Query.orderDesc('searchCount')]);

        if (result.documents.length > 0) {
            const popularMovies = result.documents.map((item) => ({ movieId: item?.movieId, title: item?.title, bannerUrl: item?.bannerUrl, rating: item?.rating, genres: item?.genres }));
            return popularMovies;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error while Fetching PopularMovies:', error);
        return [];
    }
};