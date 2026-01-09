import { MovieData } from '@/utils/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorage = {
    setItem: async (key: string, value: MovieData[]) => {
        AsyncStorage.setItem(key, JSON.stringify(value));
    },
    getItem: async <T>(key: string): Promise<T | null> => {
        const value = await AsyncStorage.getItem(key);
        return (value ? JSON.parse(value) : null);
    },
    removeItem: (key: string) => {
        AsyncStorage.removeItem(key);
    },
};