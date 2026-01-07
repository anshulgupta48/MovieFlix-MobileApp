import { Icons } from '@/utils/icons';
import { Images } from '@/utils/images';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView className='h-full w-full bg-cosmic-black'>
      <ScrollView className='h-full w-full'>
        <View className='h-full w-full px-[16px] pt-[20px] pb-[70px] flex flex-col gap-[25px]'>
          <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
            <Text className='text-lunar-glow text-[17px] font-dmSans-semibold'>Profile</Text>

            <View className='relative'>
              <Image source={Icons.NotificationIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
              <View className='absolute right-[3.5px] top-[4px] h-[5px] w-[5px] rounded-full bg-astral-violet z-10'></View>
            </View>
          </View>

          <View className='w-full flex flex-col items-center gap-[14px]'>
            <View className='h-[140px] w-full flex justify-center items-center'>
              <View className='h-[140px] w-[140px] relative'>
                <Image source={Images.ProfileBanner} className='h-full w-full rounded-full' />

                <TouchableOpacity activeOpacity={0.8} className='absolute bottom-0 right-[10px] h-[30px] w-[30px] bg-astral-violet rounded-[4px] flex justify-center items-center z-10'>
                  <Image source={Icons.EditIcon} className='h-[20px] w-[20px]' />
                </TouchableOpacity>
              </View>
            </View>

            <Text className='text-lunar-glow text-[20px] font-dmSans-semibold'>Anshul Gupta</Text>
          </View>

          <View className='h-[1px] w-full border-b border-solid border-slate-mist'></View>

          <View className='w-full flex flex-col gap-[24px]'>
            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.NotificationIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
                <Text className='text-lunar-glow text-[16px] font-dmSans-semibold'>Notification</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.SecurityIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
                <Text className='text-lunar-glow text-[16px] font-dmSans-semibold'>Security</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.LanguageIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
                <Text className='text-lunar-glow text-[16px] font-dmSans-semibold'>Language</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.HelpCenterIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
                <Text className='text-lunar-glow text-[16px] font-dmSans-semibold'>Help Center</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
            </View>

            <View className='w-full flex flex-row justify-between items-center gap-[40px]'>
              <View className='flex flex-row items-center gap-[6px]'>
                <Image source={Icons.InviteFriendsIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
                <Text className='text-lunar-glow text-[16px] font-dmSans-semibold'>Invite Friends</Text>
              </View>

              <Image source={Icons.ChevronRightIcon} tintColor='#FFFFFF' className='h-[20px] w-[20px]' />
            </View>

            <Link href='/'>
              <View className='w-full flex flex-row items-center gap-[6px]'>
                <Image source={Icons.LogoutIcon} tintColor='#F75555' className='h-[20px] w-[20px]' />
                <Text className='text-stellar-rose text-[16px] font-dmSans-semibold'>Logout</Text>
              </View>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;