import { sliderImages } from '@/constants';
import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemCard from './ItemCard';

export default function ImageSlider() {
  return (
    <View className='mt-4'>
      <Carousel
        data={sliderImages}
        loop
        autoPlay
        width={wp(100)}
        height={hp(25)}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: wp(21),
        }}
        renderItem={({ item, index, animationValue }) => (
          <ItemCard item={item} animationValue={animationValue} />
        )}
      />
    </View>
  );
}
