import { useEffect, useState } from 'react';

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await fetchFunction();
            setData(result);
        } catch (error) {
            setError(error instanceof Error ? error : new Error('Error while Fetching Data'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, [fetchFunction]);

    return { data, loading, error, reFetch: fetchData };
};

export default useFetch;