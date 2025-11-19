import LatestMovieCard from '@/components/LatestMovieCard';
import PopularMovieCard from '@/components/PopularMovieCard';
import { Images } from '@/utils/images';
import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className='h-full w-full bg-cosmic-black'>
      <ScrollView className='h-full w-full'>
        <View className='h-[160px] flex justify-center items-center relative'>
          <Image source={Images.HeroBg} className='absolute top-[-20px] w-full z-0' />
          <Images.Logo />
        </View>

        <View className='w-full flex flex-col gap-[25px] pb-[50px]'>
          <View className='px-[16px] flex flex-col gap-[14px]'>
            <Text className='text-lunar-glow text-[18px] font-dmSans-semibold'>Popular Movies</Text>

            <FlatList
              horizontal={true}
              data={[0, 1, 2, 3, 4]}
              keyExtractor={(item) => item.toString()}
              renderItem={() => (<PopularMovieCard />)}
              scrollEnabled={true}
              contentContainerStyle={{ gap: 14 }}
            />
          </View>

          <View className='px-[16px] flex flex-col gap-[14px]'>
            <Text className='text-lunar-glow text-[18px] font-dmSans-semibold'>Latest Movies</Text>

            <FlatList
              data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
              keyExtractor={(item) => item.toString()}
              numColumns={3}
              renderItem={() => (<LatestMovieCard />)}
              scrollEnabled={false}
              columnWrapperStyle={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;