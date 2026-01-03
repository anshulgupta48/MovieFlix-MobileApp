import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { ActivityIndicator, StatusBar, useColorScheme, View } from 'react-native';
import './globals.css';

export default function RootLayout() {
  const theme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'DMSans-Regular': require('@/assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Medium': require('@/assets/fonts/DMSans-Medium.ttf'),
    'DMSans-SemiBold': require('@/assets/fonts/DMSans-SemiBold.ttf'),
    'DMSans-Bold': require('@/assets/fonts/DMSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View className='h-full w-full bg-cosmic-black flex justify-center items-center'>
        <ActivityIndicator color={theme === 'light' ? '#030014' : '#FFFFFF'} />
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle='light-content' />

      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};