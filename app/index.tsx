import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Index() {
  return (
    <View className='flex-1 justify-end'>
      <StatusBar style='light' />
      <Image
        source={require('../assets/images/welcome.jpg')}
        style={StyleSheet.absoluteFill}
        contentFit='cover'
      />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{
          width: wp(100),
          height: hp(70),
          justifyContent: 'flex-end',
          paddingBottom: hp(6),
          gap: hp(4),
          alignItems: 'center',
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className='items-center'
        >
          <Text
            style={{ fontSize: hp(5) }}
            className='text-white font-bold tracking-wide'
          >
            Best <Text className='text-rose-500'>Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className='text-white font-bold tracking-wide'
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).springify()}>
          <Link href='/home' asChild>
            <TouchableOpacity
              style={{ height: hp(7), width: wp(80) }}
              className='bg-rose-500 items-center justify-center rounded-full border-2 border-neutral-200'
            >
              <Text
                style={{ fontSize: hp(3) }}
                className='text-white font-bold tracking-widest'
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
