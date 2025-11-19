import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const LatestMovieCard = () => {
  return (
    <Link href='/' asChild>
      <TouchableOpacity className='h-[216px] w-[31%] flex flex-col gap-[8px]' activeOpacity={0.8}>
        <Image source={Images.LatestMovieBanner} className='h-[151px] w-full rounded-[4px]' />

        <View className='w-full flex flex-col gap-[4px]'>
          <Text numberOfLines={1} className='text-lunar-glow text-[12px] font-dmSans-semibold'>Moana 2</Text>

          <View className='w-full flex flex-col gap-[2px]'>
            <View className='flex flex-row items-center gap-[2px]'>
              <Icons.StarIcon />
              <Text className='text-lunar-glow text-[10px] font-dmSans-semibold'>4.6</Text>
            </View>

            <View className='flex flex-row items-center gap-[5px]'>
              <Text className='text-silver-haze text-[10px] font-dmSans-medium'>Action</Text>
              <View className='h-[3px] w-[3px] rounded-full bg-silver-haze'></View>
              <Text className='text-silver-haze text-[10px] font-dmSans-medium'>Movie</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default LatestMovieCard;