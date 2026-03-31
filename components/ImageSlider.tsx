import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
const width = Dimensions.get('window').width;

export default function ImageSlider() {
  return (
    // <Carousel
    //   data={sliderImages}
    //   loop={true}
    //   // autoplay={true}
    //   renderItem={ItemCard}
    //   // hasParallaxImages={true}
    //   // slideWidth={wp(100)}
    //   // firstItem={1}
    //   // autplayInterval={4000}
    //   itemWidth={wp(100) - 70}
    //   slideStyle={{ display: 'flex', alignItems: 'center' }}
    // />
    <Carousel
      width={width}
      height={200}
      data={[1, 2, 3]}
      renderItem={({ item }) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
    />
  );
}
