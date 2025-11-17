import { Icons } from '@/utils/icons';
import { TabsBarIconProps } from '@/utils/types';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const TabsBarIcon = ({ focused, title }: TabsBarIconProps) => {
  if (focused) {
    return (
      <View style={{ height: 44, minWidth: 90, marginTop: 16, marginLeft: (title === 'Home' ? 10 : 0), marginRight: (title === 'Profile' ? 10 : 0) }}>
        <LinearGradient colors={['#D6C7FF', '#AB8BFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} className='h-full w-full flex flex-row justify-center items-center' style={{ width: 90, borderRadius: 50, gap: (title === 'Home' ? 4 : 2) }}>
          {title === 'Home' && <Icons.HomeIconDark />}
          {title === 'Search' && <Icons.SearchIconDark />}
          {title === 'Saved' && <Icons.SavedIconDark />}
          {title === 'Profile' && <Icons.ProfileIconDark />}

          <Text className='text-deep-void text-[14px] font-dmSans-medium'>{title}</Text>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={{ height: 44, minWidth: 80, marginTop: 15 }} className='flex flex-row justify-center items-center'>
      {title === 'Home' && <Icons.HomeIconWhite />}
      {title === 'Search' && <Icons.SearchIconWhite />}
      {title === 'Saved' && <Icons.SavedIconWhite />}
      {title === 'Profile' && <Icons.ProfileIconWhite />}
    </View>
  );
};

export default TabsBarIcon;