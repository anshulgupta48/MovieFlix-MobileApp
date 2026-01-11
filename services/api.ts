export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`,
    },
};

export const fetchLatestMovies = async (query: string) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });

        if (!response.ok) {
            console.error('Error while Fetching Movies:', response?.statusText);
        }

        const data = await response.json();
        return data?.results?.slice(0, 15) || [];
    } catch (error) {
        console.error('Error while Fetching Movies:', error);
        throw error;
    }
};

export const fetchMovieDetails = async (movieId: string) => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });

        if (!response.ok) {
            console.error('Error while Fetching Movie-Details:', response?.statusText);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error while Fetching Movie-Details:', error);
        throw error;
    }
};