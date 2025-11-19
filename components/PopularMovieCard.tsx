import { Images } from '@/utils/images';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const PopularMovieCard = () => {
  return (
    <Link href='/' asChild>
      <TouchableOpacity className='h-[196px] w-[124px] flex flex-col gap-[8px]' activeOpacity={0.8}>
        <View className='h-[160px] w-full pl-[10px] relative'>
          <Image source={Images.LatestMovieBanner} className='h-[160px] w-full rounded-[4px]' />

          <View className='absolute bottom-0'>
            <MaskedView maskElement={<Text className='text-lunar-glow text-[44px] font-dmSans-bold shadow-2xl'>1</Text>}>
              <View className='h-[44px] w-[44px]'>
                <LinearGradient colors={['#FAF9F7', '#9B9EA7']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} className='h-[44px] w-[44px]' />
              </View>
            </MaskedView>
          </View>
        </View>

        <View className='w-full pl-[10px] flex flex-col gap-[2px]'>
          <Text numberOfLines={1} className='text-lunar-glow text-[12px] font-dmSans-semibold'>Moana 2</Text>

          <View className='flex flex-row items-center gap-[5px]'>
            <Text className='text-silver-haze text-[10px] font-dmSans-medium'>Action</Text>
            <View className='h-[3px] w-[3px] rounded-full bg-silver-haze'></View>
            <Text className='text-silver-haze text-[10px] font-dmSans-medium'>Movie</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default PopularMovieCard;