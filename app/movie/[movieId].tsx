import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieDetails = () => {
  return (
    <SafeAreaView className='h-full w-full bg-cosmic-black'>
      <ScrollView className='h-full w-full'>
        <View className='h-[560px] w-full relative'>
          <Image source={Images.MovieBanner10} className='h-full w-full' />

          <TouchableOpacity activeOpacity={0.8} className='absolute top-[10px] right-[10px] h-[24px] w-[24px] bg-silver-haze/95 rounded-[3px] flex flex-row justify-center items-center gap-[2px] z-10'>
            <Image source={Icons.BookmarkIcon} tintColor='#FFFFFF' className='h-[14px] w-[14px]' />
          </TouchableOpacity>
        </View>

        <View className='w-full mt-[20px] px-[20px] pb-[20px] flex flex-col gap-[30px]'>
          <View className='flex flex-col gap-[6px]'>
            <View className='flex flex-col gap-[6px]'>
              <Text className='text-lunar-glow text-[20px] font-dmSans-semibold'>Squid Game 2</Text>

              <View className='w-full flex flex-row gap-[10px]'>
                <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>2024</Text>
                <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>•</Text>
                <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>PG-13</Text>
                <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>•</Text>
                <Text className='text-moonlight-gray text-[14px] font-dmSans-medium'>2h 46m</Text>
              </View>
            </View>

            <View className='w-full flex flex-row items-center gap-[10px]'>
              <View className='h-[30px] w-[116px] bg-midnight-plum rounded-[4px] flex flex-row justify-center items-center gap-[5px]'>
                <Image source={Icons.StarIcon} className='h-[14px] w-[14px]' />

                <View className='flex flex-row items-center'>
                  <Text className='text-lunar-glow text-[12px] font-dmSans-regular'>8.9</Text>
                  <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>/10 (200K)</Text>
                </View>
              </View>

              <View className='h-[30px] w-[39px] bg-midnight-plum rounded-[4px] flex flex-row justify-center items-center gap-[4px]'>
                <Image source={Icons.TrendingIcon} tintColor='#A8B5DB' className='h-[14px] w-[14px]' />
                <Text className='text-moonlight-gray text-[12px] font-dmSans-semibold'>1</Text>
              </View>
            </View>
          </View>

          <View className='w-full flex flex-col gap-[24px]'>
            <View className='flex flex-col gap-[4px]'>
              <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Overview</Text>
              <Text className='text-lunar-glow text-[14px] font-dmSans-regular'>Hundreds of cash-strapped players accept a strange invitation to compete in children&apos;s games. Inside, a tempting prize awaits with deadly high stakes: a game that has a whopping 45.6 billion-won prize at stake.</Text>
            </View>

            <View className='flex flex-row items-center gap-[32px]'>
              <View className='flex flex-col gap-[4px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Release date</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>December 26, 2024 (Worldwide)</Text>
              </View>

              <View className='flex flex-col gap-[4px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Status</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>Released</Text>
              </View>
            </View>

            <View className='flex flex-col gap-[8px]'>
              <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Genres</Text>

              <View className='w-full flex flex-row items-center gap-[9px] flex-wrap'>
                {['Adventure', 'Action', 'Drama']?.map((item, index) => (
                  <View key={index} className='h-[24px] px-[10px] bg-midnight-plum rounded-[4px] flex justify-center items-center'>
                    <Text className='text-lunar-glow text-[12px] font-dmSans-semibold'>{item}</Text>
                  </View>))}
              </View>
            </View>

            <View className='flex flex-col gap-[4px] flex-wrap'>
              <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Countries</Text>

              <View className='w-full flex flex-row gap-[8px]'>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>United States</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>•</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>Canada</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>•</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>UAE</Text>
              </View>
            </View>

            <View className='flex flex-row items-center gap-[32px]'>
              <View className='flex flex-col gap-[4px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Budget</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>$21.4 million</Text>
              </View>

              <View className='flex flex-col gap-[4px]'>
                <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Revenue</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>$900 Million</Text>
              </View>
            </View>

            <View className='flex flex-col gap-[4px]'>
              <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Tagline</Text>
              <Text className='text-lunar-glow text-[14px] font-dmSans-semibold'>45.6 Billion Won is Child&apos;s Play</Text>
            </View>

            <View className='flex flex-col gap-[4px]'>
              <Text className='text-moonlight-gray text-[12px] font-dmSans-regular'>Production Companies</Text>

              <View className='w-full flex flex-row gap-[8px] flex-wrap'>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>Legendary Entertainment</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>•</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>Villeneuve Films</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>•</Text>
                <Text className='text-lunar-glow text-[14px] font-dmSans-medium'>Warner Bros Entertainment</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;