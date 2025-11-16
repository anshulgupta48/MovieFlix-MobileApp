import { GradientButtonProps } from '@/utils/types';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GradientButton = ({ title, handlePress }: GradientButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8} className='h-full w-full'>
      <LinearGradient colors={['#D6C7FF', '#AB8BFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} className='h-full w-full flex flex-row justify-center items-center' style={{ borderRadius: 5 }}>
        <Text className='text-deep-void text-[16px] font-dmSans-medium'>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton;