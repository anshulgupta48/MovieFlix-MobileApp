import LatestMovieCard from '@/components/LatestMovieCard';
import PopularMovieCard from '@/components/PopularMovieCard';
import { fetchLatestMovies } from '@/services/api';
import { fetchPopularMovies } from '@/services/appwrite';
import { localStorage } from '@/services/localStorage';
import useFetch from '@/services/useFetch';
import { Images } from '@/utils/images';
import { LatestMovieData } from '@/utils/interfaces';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const { data: popularMoviesData, loading: popularMoviesLoading, error: popularMoviesError } = useFetch(() => fetchPopularMovies());
  const { data: latestMoviesData, loading: latestMoviesLoading, error: latestMoviesError } = useFetch(() => fetchLatestMovies(''));
  const [savedMoviesData, setSavedMoviesData] = useState<LatestMovieData[]>([]);

  useEffect(() => {
    const fetchSavedMovies = async () => {
      const moviesData: LatestMovieData[] = await localStorage.getItem('savedMovies') || [];
      setSavedMoviesData(moviesData);
    };
    fetchSavedMovies();
  }, [savedMoviesData]);

  const handleToggleIsMovieSaved = async (movieId: number, title: string, bannerUrl: string, rating: number, release_date: string) => {
    if (savedMoviesData?.some((movie) => movie?.id === movieId)) {
      const updatedSavedMoviesData = savedMoviesData?.filter((movie) => movie?.id !== movieId) || [];
      await localStorage.setItem('savedMovies', updatedSavedMoviesData);
    } else {
      const updatedSavedMoviesData = [...savedMoviesData, { id: movieId, title, poster_path: bannerUrl, vote_average: rating, release_date }];
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
          {popularMoviesLoading && <ActivityIndicator color='#FFFFFF' className='mt-[40px]' />}
          {popularMoviesError && <Text className='text-stellar-rose text-[14px] font-dmSans-medium'>Error: {popularMoviesError?.message}</Text>}

          {!(popularMoviesLoading || popularMoviesError) && (popularMoviesData?.length! > 0) ? (<FlatList
            data={popularMoviesData}
            keyExtractor={(item) => item?.movieId?.toString()}
            scrollEnabled={true}
            horizontal={true}
            renderItem={({ item, index }) => (
              <PopularMovieCard movieId={item?.movieId} movieIndex={index} title={item?.title} bannerUrl={item?.bannerUrl} rating={item?.rating} genres={item?.genres} />
            )}
            contentContainerStyle={{ paddingLeft: 9, gap: 16 }}
          />) : <Text className='text-lunar-glow text-[12px] font-dmSans-medium'>No Popular Movies Yet</Text>}
        </View>

        <View className='w-full mt-[30px] px-[16px] pb-[70px] flex flex-col gap-[12px]'>
          <Text className='text-lunar-glow text-[17px] font-dmSans-semibold'>Latest Movies</Text>
          {latestMoviesLoading && <ActivityIndicator color='#FFFFFF' className='mt-[80px]' />}
          {latestMoviesError && <Text className='text-stellar-rose text-[14px] font-dmSans-medium'>Error: {latestMoviesError?.message}</Text>}

          {!(latestMoviesLoading || latestMoviesError) && (latestMoviesData?.length > 0) ? (<FlatList
            data={latestMoviesData}
            numColumns={3}
            keyExtractor={(item) => item?.id?.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <LatestMovieCard movieId={item?.id} title={item?.title} bannerUrl={item?.poster_path ? `https://image.tmdb.org/t/p/w500${item?.poster_path}` : 'https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} rating={Math.round(item?.vote_average / 2) || 0} genres={['Movie', item?.release_date?.split('-')[0]]} isMovieSaved={savedMoviesData?.some((movie) => movie?.id === item?.id)} handleToggleIsMovieSaved={handleToggleIsMovieSaved} />
            )}
            contentContainerStyle={{ gap: 14 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />) : <Text className='text-lunar-glow text-[12px] font-dmSans-medium'>No Latest Movies Yet</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;