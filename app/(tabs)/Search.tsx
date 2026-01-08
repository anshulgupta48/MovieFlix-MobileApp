import LatestMovieCard from '@/components/LatestMovieCard';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, TextInput, TextInputChangeEvent, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const { data: searchMoviesData, reFetch: reFetchSearchMovies } = useFetch(() => fetchMovies(searchInput), false);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await reFetchSearchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  const handleChange = (e: TextInputChangeEvent) => {
    setSearchInput(e.nativeEvent.text);
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

          <FlatList
            data={searchMoviesData}
            numColumns={3}
            keyExtractor={(item) => item?.id?.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <LatestMovieCard movieId={item?.id} title={item?.title} bannerUrl={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} rating={Math.round(item?.vote_average / 2) || 0} genres={['Movie', item?.release_date?.split('-')[0]]} />
            )}
            contentContainerStyle={{ gap: 14 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;