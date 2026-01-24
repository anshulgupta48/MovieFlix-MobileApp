import LatestMovieCard from '@/components/LatestMovieCard';
import { fetchLatestMovies } from '@/services/api';
import { updateSearchCount } from '@/services/appwrite';
import { localStorage } from '@/services/localStorage';
import useFetch from '@/services/useFetch';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import { LatestMovieData } from '@/utils/interfaces';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TextInput, TextInputChangeEvent, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const { data: searchMoviesData, loading: searchMoviesLoading, error: searchMoviesError, reFetch: reFetchSearchMovies } = useFetch(() => fetchLatestMovies(searchInput), false);
  const [savedMoviesData, setSavedMoviesData] = useState<LatestMovieData[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await reFetchSearchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  useEffect(() => {
    if ((searchInput !== '') && searchMoviesData?.length > 0) {
      updateSearchCount(searchMoviesData[0]?.id, searchMoviesData[0]?.title, (searchMoviesData[0]?.poster_path ? `https://image.tmdb.org/t/p/w500${searchMoviesData[0]?.poster_path}` : 'https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'), (Math.round(searchMoviesData[0]?.vote_average / 2) || 0), (['Movie', searchMoviesData[0]?.release_date?.split('-')[0]]), searchInput);
    }
  }, [searchMoviesData]);

  useFocusEffect(
    useCallback(() => {
      const fetchSavedMovies = async () => {
        const moviesData: LatestMovieData[] = await localStorage.getItem('savedMovies') || [];
        setSavedMoviesData(moviesData);
      };
      fetchSavedMovies();
    }, [])
  );

  const handleChange = (e: TextInputChangeEvent) => {
    setSearchInput(e.nativeEvent.text);
  };

  const handleToggleIsMovieSaved = async (movieId: number, title: string, bannerUrl: string, rating: number, release_date: string) => {
    if (savedMoviesData?.some((movie) => movie?.id === movieId)) {
      const updatedSavedMoviesData = savedMoviesData?.filter((movie) => movie?.id !== movieId) || [];
      setSavedMoviesData(updatedSavedMoviesData);
      await localStorage.setItem('savedMovies', updatedSavedMoviesData);
    } else {
      const updatedSavedMoviesData = [...savedMoviesData, { id: movieId, title, poster_path: bannerUrl, vote_average: rating, release_date }];
      setSavedMoviesData(updatedSavedMoviesData);
      await localStorage.setItem('savedMovies', updatedSavedMoviesData);
    }
  };

  return (
    <SafeAreaView className='h-full w-full bg-cosmic-black'>
      <ScrollView className='h-full w-full'>
        <View className='h-[100px] w-full flex justify-center items-center relative'>
          <Image source={Images.HeroBg} className='absolute left-0 top-0 h-[400px] w-[400px]' />
          <Image source={Images.Logo} className='h-[43px] w-[59px] relative top-[40px] z-10' />
        </View>

        <View className='w-full mt-[70px] px-[16px] pb-[70px] flex flex-col gap-[20px]'>
          <View className='h-[44px] w-full px-[14px] bg-nebula-ink rounded-[30px] flex flex-row items-center gap-[4px]'>
            <Image source={Icons.SearchIcon} tintColor='#AB8BFF' className='h-[16px] w-[16px]' />

            <TextInput placeholder='Search through 300+ movies online' placeholderTextColor='#A8B5DB' value={searchInput} onChange={(e) => handleChange(e)} className='h-full w-full text-lunar-glow text-[14px] font-dmSans-regular' />
          </View>

          {searchMoviesLoading && <ActivityIndicator color='#FFFFFF' className='mt-[100px]' />}
          {searchMoviesError && <Text className='text-stellar-rose text-[14px] font-dmSans-medium'>Error: {searchMoviesError?.message}</Text>}

          {!(searchMoviesLoading || searchMoviesError) && (searchMoviesData?.length > 0 ? <FlatList
            data={searchMoviesData}
            numColumns={3}
            keyExtractor={(item) => item?.id?.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <LatestMovieCard movieId={item?.id} title={item?.title} bannerUrl={item?.poster_path ? `https://image.tmdb.org/t/p/w500${item?.poster_path}` : 'https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} rating={Math.round(item?.vote_average / 2) || 0} genres={['Movie', item?.release_date?.split('-')[0]]} isMovieSaved={savedMoviesData?.some((movie) => movie?.id === item?.id)} handleToggleIsMovieSaved={handleToggleIsMovieSaved} />
            )}
            contentContainerStyle={{ gap: 14 }}
            columnWrapperStyle={{ justifyContent: (searchMoviesData?.length % 3 === 2) ? 'flex-start' : 'space-between', gap: (searchMoviesData?.length % 3 === 2) ? 7 : 0 }}
          /> : <Text className='text-lunar-glow text-[12px] font-dmSans-medium'>No Search Results Found</Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;