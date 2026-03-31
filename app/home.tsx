import ImageSlider from '@/components/ImageSlider';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-white space-x-5' edges={['top']}>
      <StatusBar style='dark' />
      <View className='flex-row justify-between items-center mx-5'>
        <View className='space-y-2'>
          <Text
            style={{ fontSize: hp(4.5) }}
            className='font-bold tracking-wider text-neutral-700'
          >
            READY TO
          </Text>

          <Text
            style={{ fontSize: hp(4.5) }}
            className='font-bold tracking-wider text-rose-500'
          >
            WORKOUT
          </Text>
        </View>

        <View className='flex justify-center items-center space-y-2 '>
          <View className='rounded-full overflow-hidden mb-2'>
            <Image
              source={require('../assets/images/avatar.jpg')}
              style={{ height: hp(6), width: hp(6) }}
            />
          </View>
          <View
            className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300'
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name='notifications' size={hp(3)} color='gray' />
          </View>
        </View>
      </View>

      <View>
        <ImageSlider />
      </View>
    </SafeAreaView>
  );
}
