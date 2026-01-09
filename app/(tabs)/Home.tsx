import LatestMovieCard from '@/components/LatestMovieCard';
import PopularMovieCard from '@/components/PopularMovieCard';
import { fetchMovies } from '@/services/api';
import { localStorage } from '@/services/localStorage';
import useFetch from '@/services/useFetch';
import { popularMoviesData } from '@/utils/constants';
import { Images } from '@/utils/images';
import { MovieData } from '@/utils/interfaces';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const { data: latestMoviesData, loading: latestMoviesLoading, error: latestMoviesError } = useFetch(() => fetchMovies(''));
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

        <View className='w-full mt-[70px] px-[16px] flex flex-col gap-[12px]'>
          <Text className='text-lunar-glow text-[17px] font-dmSans-semibold'>Popular Movies</Text>

          <FlatList
            data={popularMoviesData}
            keyExtractor={(item) => item?.movieId?.toString()}
            scrollEnabled={true}
            horizontal={true}
            renderItem={({ item }) => (
              <PopularMovieCard movieId={item?.movieId} title={item?.title} banner={item?.banner} rating={item?.rating} genres={item?.genres} />
            )}
            contentContainerStyle={{ gap: 10 }}
          />
        </View>

        <View className='w-full mt-[30px] px-[16px] pb-[70px] flex flex-col gap-[12px]'>
          <Text className='text-lunar-glow text-[17px] font-dmSans-semibold'>Latest Movies</Text>
          {latestMoviesLoading && <ActivityIndicator color='#FFFFFF' className='mt-[80px]' />}
          {latestMoviesError && <Text className='text-stellar-rose text-[14px] font-dmSans-medium'>Error: {latestMoviesError?.message}</Text>}

          {latestMoviesData?.length > 0 && <FlatList
            data={latestMoviesData}
            numColumns={3}
            keyExtractor={(item) => item?.id?.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <LatestMovieCard movieId={item?.id} title={item?.title} bannerUrl={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} rating={Math.round(item?.vote_average / 2) || 0} genres={['Movie', item?.release_date?.split('-')[0]]} isMovieSaved={savedMoviesData?.some((movie) => movie?.id === item?.id)} handleToggleIsMovieSaved={handleToggleIsMovieSaved} />
            )}
            contentContainerStyle={{ gap: 14 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;