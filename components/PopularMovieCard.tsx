import { Icons } from '@/utils/icons';
import { LatestMovieCardProps } from '@/utils/interfaces';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const PopularMovieCard = ({ movieId, banner, title, rating, genres }: LatestMovieCardProps) => {
  return (
    <Link href={{ pathname: '/movie/[movieId]', params: { movieId } }}>
      <View className='h-[210px] w-[120px] flex flex-col gap-[8px] relative'>
        <Image source={banner} className='h-[167px] w-full rounded-[4px]' />
        <View className='absolute top-[5px] right-[5px] h-[16px] w-[30px] bg-silver-haze/95 rounded-[3px] flex flex-row justify-center items-center gap-[2px] z-10'>
          <Image source={Icons.StarIcon} tintColor='#FFCD1A' className='h-[8px] w-[8px]' />
          <Text className='text-lunar-glow text-[8px] font-dmSans-semibold'>{rating}</Text>
        </View>

        <View className='w-full flex flex-col gap-[2px]'>
          <Text className='text-lunar-glow text-[12px] font-dmSans-bold' numberOfLines={1}>{title}</Text>

          <View className='w-full flex flex-row gap-[2px]'>
            {genres?.map((subItem, subIndex) => (
              <Text key={subIndex} className='text-silver-haze text-[10px] font-dmSans-medium'>{subItem} {(subIndex < (genres?.length - 1)) ? '•' : ''}</Text>
            ))}
          </View>
        </View>
      </View>
    </Link>
  );
};

export default PopularMovieCard;