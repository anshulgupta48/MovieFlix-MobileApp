import GradientButton from '@/components/GradientButton';
import GradientView from '@/components/GradientView';
import { genresOptions } from '@/utils/constants';
import { Images } from '@/utils/images';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [activeLoginIndex, setActiveLoginIndex] = useState<number>(0);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(['Action', 'Drama', 'Comedy', 'Thriller', 'Sci-fi']);
  const router = useRouter();

  const handleNext = () => {
    if (activeLoginIndex === 0) {
      setActiveLoginIndex(1);
    } else {
      router.push('/Home');
    }
  };

  const handleGenres = (selectedItem: string) => {
    if (selectedGenres.includes(selectedItem)) {
      const updatedGenres = selectedGenres.filter((item) => (item !== selectedItem));
      setSelectedGenres(updatedGenres);
    } else {
      const updatedGenres = [...selectedGenres, selectedItem]
      setSelectedGenres(updatedGenres);
    }
  };

  return (
    <SafeAreaView className='h-full w-full py-[40px] bg-cosmic-black flex flex-col justify-between items-center gap-[40px]'>
      <View className='w-full flex flex-col items-end gap-[40px]'>
        <Link href='/Home' className='pr-[20px]'>
          <Text className='text-lunar-glow text-[16px] font-dmSans-medium'>Skip</Text>
        </Link>

        <View className='h-[374px] w-full flex flex-col gap-[11px]'>
          {activeLoginIndex === 0 && <View className='flex flex-row gap-[10px] relative left-[-84px]'>
            <Images.LoginBanner1 className='h-[182px] w-[133px]' />
            <Images.LoginBanner2 className='h-[182px] w-[133px]' />
            <Images.LoginBanner3 className='h-[182px] w-[133px]' />
            <Images.LoginBanner4 className='h-[182px] w-[133px]' />
          </View>}

          {activeLoginIndex === 0 && <View className='flex flex-row gap-[10px] relative left-[-114px]'>
            <Images.LoginBanner5 className='h-[182px] w-[133px]' />
            <Images.LoginBanner6 className='h-[182px] w-[133px]' />
            <Images.LoginBanner7 className='h-[182px] w-[133px]' />
            <Images.LoginBanner8 className='h-[182px] w-[133px]' />
          </View>}

          {activeLoginIndex === 1 && <View className='h-full w-full justify-center items-center'>
            <FlatList
              data={genresOptions}
              numColumns={4}
              keyExtractor={(item) => item}
              contentContainerStyle={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              columnWrapperStyle={{ justifyContent: 'center', gap: 6, marginBottom: 6 }} className='w-full'
              renderItem={({ item }) => (
                <Pressable className={`h-[32px] w-max px-[14px] rounded-[4px] flex justify-center items-center ${selectedGenres.includes(item) ? 'bg-quasar-silver' : 'bg-slate-mist'}`} onPress={() => handleGenres(item)}>
                  <Text className={`text-[12px] font-dmSans-semibold ${selectedGenres.includes(item) ? 'text-deep-void' : 'text-lunar-glow'}`}>{item}</Text>
                </Pressable>
              )} />
          </View>}
        </View>
      </View>

      <View className='w-full flex flex-col items-center gap-[40px]'>
        <Text className='w-[200px] text-lunar-glow text-[18px] text-center font-dmSans-medium'>{activeLoginIndex === 0 ? 'Tell us about your favorite movie genres' : 'Select the genres you like to watch'}</Text>

        <View className='w-full flex flex-col items-center gap-[14px]'>
          <View className='h-[48px] w-[86%]'>
            <GradientButton title='Next' handlePress={handleNext} />
          </View>

          <View className='h-[3.5px] w-[40%] flex flex-row justify-center items-center gap-[5px]'>
            <View className='h-full w-[50%]'>
              <GradientView isActive={activeLoginIndex === 0} />
            </View>

            <View className='h-full w-[50%]'>
              <GradientView isActive={activeLoginIndex === 1} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login;