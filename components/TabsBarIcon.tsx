import { TabsBarIconProps } from '@/utils/interfaces';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabsBarIcon = ({ focused, title, icon }: TabsBarIconProps) => {
  if (focused) {
    return (
      <View className='h-[42px] min-w-[100px] mt-[16px] bg-astral-violet rounded-full flex flex-row justify-center items-center gap-[5px]'>
        <Image source={icon} tintColor='#151312' className='h-[18px] w-[18px]' />
        <Text className='text-deep-void text-[14px] font-dmSans-semibold'>{title}</Text>
      </View>
    );
  }

  return (
    <View className='h-[42px] min-w-[60px] mt-[16px] flex justify-center items-center'>
      <Image source={icon} tintColor='#A8B5DB' className='h-[18px] w-[18px]' />
    </View>
  );
};

export default TabsBarIcon;