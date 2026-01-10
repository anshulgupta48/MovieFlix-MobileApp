import { fetchMovieDetails } from '@/services/api';
import { localStorage } from '@/services/localStorage';
import useFetch from '@/services/useFetch';
import { Icons } from '@/utils/icons';
import { MovieData } from '@/utils/interfaces';
import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieDetails = () => {
  const params: { movieId: string } = useLocalSearchParams();
  const { data: movieDetailsData, loading: movieDetailsLoading, error: movieDetailsError } = useFetch(() => fetchMovieDetails(params?.movieId));
  const [savedMoviesData, setSavedMoviesData] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchSavedMovies = async () => {
      const moviesData: MovieData[] = await localStorage.getItem('savedMovies') || [];
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
        {movieDetailsLoading && <ActivityIndicator color='#FFFFFF' className='mt-[300px]' />}
        {movieDetailsError && <Text className='mt-[20px] text-stellar-rose text-[14px] font-dmSans-medium'>Error: {movieDetailsError?.message}</Text>}

        {!(movieDetailsLoading || movieDetailsError) && (<>
          <View className='h-[560px] w-full relative'>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetailsData?.poster_path}` }} className='h-full w-full' />

            <TouchableOpacity activeOpacity={0.8} className='absolute top-[10px] right-[10px] h-[24px] w-[24px] bg-silver-haze/95 rounded-[3px] flex flex-row justify-center items-center gap-[2px] z-10' onPress={() => handleToggleIsMovieSaved(movieDetailsData?.id, movieDetailsData?.title, `https://image.tmdb.org/t/p/w500${movieDetailsData?.poster_path}`, Math.round(movieDetailsData?.vote_average / 2) * 2 || 0, movieDetailsData?.release_date)}>
              <Image source={savedMoviesData?.some((movie) => movie?.id === movieDetailsData?.id) ? Icons.BookmarkFilledIcon : Icons.BookmarkIcon} tintColor='#FFFFFF' className='h-[14px] w-[14px]' />
            </TouchableOpacity>
          </View>

          <View className='w-full mt-[20px] px-[20px] pb-[20px] flex flex-col gap-[30px]'>
            <View className='flex flex-col gap-[6px]'>
              <View className='flex flex-col gap-[6px]'>
                <Text className='text-lunar-glow text-[20px] font-dmSans-semibold'>{movieDetailsData?.title}</Text>

                <View className='w-full flex flex-row gap-[10px]'>
                  <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>{movieDetailsData?.release_date?.split('-')[0]}</Text>
                  {(movieDetailsData?.genres?.length > 0) && <>
                    <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>•</Text>
                    <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>{movieDetailsData?.genres[0]?.name}</Text>
                  </>}
                  <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>•</Text>
                  <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>{Math.floor(movieDetailsData?.runtime / 60)}h {movieDetailsData?.runtime % 60}m</Text>
                </View>
              </View>

              <View className='w-full flex flex-row items-center gap-[10px]'>
                <View className='h-[30px] px-[12px] bg-midnight-plum rounded-[4px] flex flex-row justify-center items-center gap-[5px]'>
                  <Image source={Icons.StarIcon} className='h-[14px] w-[14px]' />

                  <View className='flex flex-row items-center'>
                    <Text className='text-lunar-glow text-[12px] font-dmSans-regular'>{movieDetailsData?.vote_average?.toFixed(2) ?? 0}</Text>
                    <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>/10 ({movieDetailsData?.vote_count ?? 0})</Text>
                  </View>
                </View>

                <View className='h-[30px] px-[10px] bg-midnight-plum rounded-[4px] flex flex-row justify-center items-center gap-[4px]'>
                  <Image source={Icons.TrendingIcon} tintColor='#A8B5DB' className='h-[14px] w-[14px]' />
                  <Text className='text-moonlight-gray text-[12px] font-dmSans-semibold'>{Math.round(movieDetailsData?.popularity)}</Text>
                </View>
              </View>
            </View>

            <View className='w-full flex flex-col gap-[24px]'>
              <View className='flex flex-col gap-[4px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Overview</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-regular'>{movieDetailsData?.overview}</Text>
              </View>

              <View className='flex flex-row items-center gap-[32px]'>
                <View className='flex flex-col gap-[4px]'>
                  <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Release date</Text>
                  <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>{new Date(movieDetailsData?.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} (Worldwide)</Text>
                </View>

                <View className='flex flex-col gap-[4px]'>
                  <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Status</Text>
                  <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>{movieDetailsData?.status}</Text>
                </View>
              </View>

              <View className='flex flex-col gap-[8px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Genres</Text>

                <View className='w-full flex flex-row items-center gap-[9px] flex-wrap'>
                  {movieDetailsData?.genres?.map((item: { id: number, name: string }, index: number) => (
                    <View key={index} className='h-[24px] px-[10px] bg-midnight-plum rounded-[4px] flex justify-center items-center'>
                      <Text className='text-lunar-glow text-[12px] font-dmSans-semibold'>{item?.name}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View className='flex flex-col gap-[4px] flex-wrap'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Countries</Text>

                <View className='w-full flex flex-row gap-[8px]'>
                  {movieDetailsData?.production_countries?.map((item: { iso_3166_1: string, name: string }, index: number) => (
                    <View className='flex flex-row gap-[8px]' key={index}>
                      <Text className='text-lunar-glow text-[14px] font-dmSans-medium' key={index}>{item?.name}</Text>
                      {(index < movieDetailsData?.production_countries?.length - 1) && <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>•</Text>}
                    </View>
                  ))}
                </View>
              </View>

              <View className='flex flex-row items-center gap-[32px]'>
                <View className='flex flex-col gap-[4px]'>
                  <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Budget</Text>
                  <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>${((movieDetailsData?.budget ?? 0) / 1000000)?.toFixed(2)} million</Text>
                </View>

                <View className='flex flex-col gap-[4px]'>
                  <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Revenue</Text>
                  <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>${((movieDetailsData?.revenue ?? 0) / 1000000)?.toFixed(2)} Million</Text>
                </View>
              </View>

              <View className='flex flex-col gap-[4px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Tagline</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>{movieDetailsData?.tagline}</Text>
              </View>

              <View className='flex flex-col gap-[4px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Production Companies</Text>

                <View className='w-full flex flex-row gap-[8px] flex-wrap'>
                  {movieDetailsData?.production_companies?.map((item: { id: number, name: string }, index: number) => (
                    <View className='flex flex-row gap-[8px]' key={index}>
                      <Text className='text-lunar-glow text-[14px] font-dmSans-medium' key={index}>{item?.name}</Text>
                      {(index < movieDetailsData?.production_companies?.length - 1) && <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>•</Text>}
                    </View>
                  ))}
                </View>
              </View>

              <Link href='/(tabs)/Home' asChild>
                <TouchableOpacity activeOpacity={0.8} className='h-[36px] w-full bg-astral-violet rounded-[4px] flex flex-row justify-center items-center gap-[4px]'>
                  <Text className='text-deep-void text-[12px] font-dmSans-semibold'>Visit Homepage</Text>
                  <Image source={Icons.ArrowRightIcon} className='h-[16px] w-[16px]' />
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </>)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;