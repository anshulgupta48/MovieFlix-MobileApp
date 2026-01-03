import { genresOptions } from '@/utils/constants';
import { Images } from '@/utils/images';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [activeLoginIndex, setActiveLoginIndex] = useState<number>(0);
  const [selectedGenresOptions, setSelectedGenresOptions] = useState<string[]>(['Action', 'Drama', 'Comedy', 'Thriller', 'Sci-fi']);

  const handleGenresOptions = (selectedGenres: string) => {
    if (selectedGenresOptions?.includes(selectedGenres)) {
      const updatedGenresOptions = selectedGenresOptions.filter((item) => (item !== selectedGenres));
      setSelectedGenresOptions(updatedGenresOptions);
    } else {
      const updatedGenresOptions = [...selectedGenresOptions, selectedGenres];
      setSelectedGenresOptions(updatedGenresOptions);
    }
  };

  return (
    <SafeAreaView className='h-full w-full py-[40px] bg-cosmic-black flex flex-col justify-between gap-[40px]'>
      <View className='w-full flex flex-col items-end gap-[40px]'>
        <Link href='/' className='text-lunar-glow text-[16px] mr-[20px] font-dmSans-medium'>Skip</Link>

        {activeLoginIndex === 0 && <View className='h-[374px] w-full flex flex-col gap-[10px]'>
          <View className='w-full flex flex-row justify-center items-center gap-[10px] relative left-[20px]'>
            <Image source={Images.LoginBanner1} className='h-[182px] w-[134px]' />
            <Image source={Images.LoginBanner2} className='h-[182px] w-[134px]' />
            <Image source={Images.LoginBanner3} className='h-[182px] w-[134px]' />
            <Image source={Images.LoginBanner4} className='h-[182px] w-[134px]' />
          </View>

          <View className='w-full flex flex-row justify-center items-center gap-[10px] relative right-[20px]'>
            <Image source={Images.LoginBanner5} className='h-[182px] w-[134px]' />
            <Image source={Images.LoginBanner6} className='h-[182px] w-[134px]' />
            <Image source={Images.LoginBanner7} className='h-[182px] w-[134px]' />
            <Image source={Images.LoginBanner8} className='h-[182px] w-[134px]' />
          </View>
        </View>}

        {activeLoginIndex === 1 && <View className='h-[374px] w-full px-[10px] flex flex-row justify-center items-center'>
          <FlatList
            data={genresOptions}
            numColumns={4}
            keyExtractor={(item) => item}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={1} className={`h-[30px] px-[14px] rounded-[4px] flex justify-center items-center ${selectedGenresOptions?.includes(item) ? 'bg-astral-violet' : 'bg-slate-mist'}`} onPress={() => handleGenresOptions(item)}>
                <Text className='text-lunar-glow text-[12px] font-dmSans-medium'>{item}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            columnWrapperStyle={{ marginBottom: 6, gap: 6 }} />
        </View>}
      </View>

      <View className='w-full flex flex-col items-center gap-[30px]'>
        <Text className='w-[220px] text-lunar-glow text-[20px] text-center font-dmSans-medium'>{activeLoginIndex === 0 ? 'Tell us about your favorite movie genres' : 'Select the genres you like to watch'}</Text>

        <View className='w-full flex flex-col items-center gap-[14px]'>
          <TouchableOpacity activeOpacity={0.8} className='h-[48px] w-[90%] bg-astral-violet rounded-[5px] flex justify-center items-center' onPress={() => setActiveLoginIndex(1)}>
            <Text className='text-lunar-glow text-[16px] font-dmSans-semibold'>Next</Text>
          </TouchableOpacity>

          <View className='w-full flex flex-row justify-center gap-[5px]'>
            {[0, 1].map((item) => (
              <TouchableOpacity activeOpacity={1} key={item} className={`h-[4px] w-[20%] rounded-full ${activeLoginIndex === item ? 'bg-astral-violet' : 'bg-slate-mist'}`} onPress={() => setActiveLoginIndex(item)}></TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;