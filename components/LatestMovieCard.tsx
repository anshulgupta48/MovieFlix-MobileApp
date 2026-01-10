import { Icons } from '@/utils/icons';
import { LatestMovieCardProps } from '@/utils/interfaces';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const LatestMovieCard = ({ movieId, title, bannerUrl, rating, genres, isMovieSaved, handleToggleIsMovieSaved }: LatestMovieCardProps) => {
  return (
    <Link href={{ pathname: '/movie/[movieId]', params: { movieId } }} className='h-[210px] w-[32%]'>
      <View className='h-[210px] w-full flex flex-col gap-[8px]'>
        <View className='relative'>
          <Image source={{ uri: bannerUrl }} className='h-[151px] w-full rounded-[4px]' />

          <TouchableOpacity activeOpacity={0.8} className='absolute top-[5px] right-[5px] h-[20px] w-[20px] bg-silver-haze/95 rounded-[3px] flex flex-row justify-center items-center gap-[2px] z-10' onPress={() => handleToggleIsMovieSaved(movieId, title, bannerUrl, rating * 2, genres[genres?.length - 1])}>
            <Image source={isMovieSaved ? Icons.BookmarkFilledIcon : Icons.BookmarkIcon} tintColor='#FFFFFF' className='h-[12px] w-[12px]' />
          </TouchableOpacity>
        </View>

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
    </Link>
  );
};

export default LatestMovieCard;