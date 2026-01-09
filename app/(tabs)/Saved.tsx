import LatestMovieCard from '@/components/LatestMovieCard';
import { localStorage } from '@/services/localStorage';
import { Images } from '@/utils/images';
import { MovieData } from '@/utils/interfaces';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Saved = () => {
  const [savedMoviesData, setSavedMoviesData] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchSavedMovies = async () => {
      const moviesData: MovieData[] = await localStorage.getItem('savedMovies') || [];
      setSavedMoviesData(moviesData);
    };
    fetchSavedMovies();
  }, [savedMoviesData]);

  const handleToggleIsMovieSaved = async (movieId: number, title: string, bannerUrl: string, rating: number) => {
    if (savedMoviesData?.some((movie) => movie?.id === movieId)) {
      const updatedSavedMoviesData = savedMoviesData?.filter((movie) => movie?.id !== movieId) || [];
      await localStorage.setItem('savedMovies', updatedSavedMoviesData);
    } else {
      const updatedSavedMoviesData = [...savedMoviesData, { id: movieId, title, poster_path: bannerUrl, vote_average: rating }];
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

        <View className='w-full mt-[70px] px-[16px] pb-[70px] flex flex-col gap-[12px]'>
          <Text className='text-lunar-glow text-[17px] font-dmSans-semibold'>Saved Movies</Text>

          {savedMoviesData?.length > 0 ? <FlatList
            data={savedMoviesData}
            numColumns={3}
            keyExtractor={(item) => item?.id?.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <LatestMovieCard movieId={item?.id} title={item?.title} bannerUrl={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} rating={Math.round(item?.vote_average / 2) || 0} genres={['Movie', item?.release_date?.split('-')[0] || '2026']} isMovieSaved={savedMoviesData?.some((movie) => movie?.id === item?.id)} handleToggleIsMovieSaved={handleToggleIsMovieSaved} />
            )}
            contentContainerStyle={{ gap: 14 }}
            columnWrapperStyle={{ justifyContent: (savedMoviesData?.length % 3 === 2) ? 'flex-start' : 'space-between', gap: (savedMoviesData?.length % 3 === 2) ? 10 : 0 }}
          /> : <Text className='text-lunar-glow text-[12px] font-dmSans-medium'>No Saved Movies Yet</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Saved;