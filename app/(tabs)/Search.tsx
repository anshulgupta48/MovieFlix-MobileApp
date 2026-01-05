import LatestMovieCard from '@/components/LatestMovieCard';
import { latestMoviesData } from '@/utils/constants';
import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, TextInput, TextInputChangeEvent, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChange = (e: TextInputChangeEvent) => {
    setSearchInput(e.nativeEvent.text);
  };

  return (
    <SafeAreaView className='h-full w-full bg-cosmic-black'>
      <ScrollView className='h-full w-full'>
        <View className='h-[100px] w-full flex justify-center items-center relative'>
          <Image source={Images.HeroBg} className='absolute left-0 top-0 h-[400px] w-[400px]' />
          <Image source={Images.Logo} className='h-[43px] w-[59px] relative top-[30px] z-10' />
        </View>

        <View className='w-full mt-[70px] px-[16px] pb-[70px] flex flex-col gap-[20px]'>
          <View className='h-[44px] w-full px-[14px] bg-nebula-ink rounded-[30px] flex flex-row items-center gap-[4px]'>
            <Image source={Icons.SearchIcon} tintColor='#AB8BFF' className='h-[16px] w-[16px]' />

            <TextInput placeholder='Search through 300+ movies online' placeholderTextColor='#A8B5DB' value={searchInput} onChange={(e) => handleChange(e)} className='h-full w-full text-lunar-glow text-[14px] font-dmSans-regular' />
          </View>

          <FlatList
            data={latestMoviesData}
            numColumns={3}
            keyExtractor={(item) => item?.movieId?.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <LatestMovieCard title={item?.title} banner={item?.banner} rating={item?.rating} genres={item?.genres} />
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