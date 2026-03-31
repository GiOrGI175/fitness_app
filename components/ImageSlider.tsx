import { sliderImages } from '@/constants';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import ItemCard from './ItemCard';

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      slideWidth={wp(100)}
      firstItem={1}
      autplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
  );
}
