import LatestMovieCard from '@/components/LatestMovieCard';
import { latestMoviesData } from '@/utils/constants';
import { Images } from '@/utils/images';
import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Saved = () => {
  return (
    <SafeAreaView className='h-full w-full bg-cosmic-black'>
      <ScrollView className='h-full w-full'>
        <View className='h-[100px] w-full flex justify-center items-center relative'>
          <Image source={Images.HeroBg} className='absolute left-0 top-0 h-[400px] w-[400px]' />
          <Image source={Images.Logo} className='h-[43px] w-[59px] relative top-[40px] z-10' />
        </View>

        <View className='w-full mt-[70px] px-[16px] pb-[70px] flex flex-col gap-[12px]'>
          <Text className='text-lunar-glow text-[17px] font-dmSans-semibold'>Saved Movies</Text>

          <FlatList
            data={latestMoviesData}
            numColumns={3}
            keyExtractor={(item) => item?.movieId?.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <LatestMovieCard movieId={item?.movieId} title={item?.title} banner={item?.banner} rating={item?.rating} genres={item?.genres} />
            )}
            contentContainerStyle={{ gap: 14 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Saved;