import { GradientViewProps } from '@/utils/types';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';

const GradientView = ({ isActive }: GradientViewProps) => {
  return (
    <View className='h-full w-full'>
      <LinearGradient colors={isActive ? ['#D6C7FF', '#AB8BFF'] : ['#9CA4AB', '#A8B5DB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} className='h-full w-full flex flex-row justify-center items-center' style={{ borderRadius: 5 }}>
      </LinearGradient>
    </View>
  );
};

export default GradientView;