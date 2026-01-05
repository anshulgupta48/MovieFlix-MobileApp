import { Icons } from '@/utils/icons';
import { LatestMovieCardProps } from '@/utils/interfaces';
import React from 'react';
import { Image, Text, View } from 'react-native';

const LatestMovieCard = ({ title, banner, rating, genres }: LatestMovieCardProps) => {
  return (
    <View className='h-[210px] w-[32%] flex flex-col gap-[8px]'>
      <Image source={banner} className='h-[151px] w-full rounded-[4px]' />

      <View className='w-full flex flex-col gap-[2px]'>
        <Text className='text-lunar-glow text-[12px] font-dmSans-bold' numberOfLines={1}>{title}</Text>

        <View className='w-full flex flex-col'>
          <View className='w-full flex flex-row items-center gap-[2px]'>
            <Image source={Icons.StarIcon} tintColor='#FFCD1A' className='h-[10px] w-[10px]' />
            <Text className='w-full text-lunar-glow text-[10px] font-dmSans-bold'>{rating}</Text>
          </View>

          <View className='w-full flex flex-row gap-[2px]'>
            {genres?.map((subItem, subIndex) => (
              <Text key={subIndex} className='text-silver-haze text-[10px] font-dmSans-medium'>{subItem} {(subIndex < (genres?.length - 1)) ? '•' : ''}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default LatestMovieCard;