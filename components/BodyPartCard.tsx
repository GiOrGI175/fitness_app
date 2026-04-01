import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type Item = {
  name: string;
  image: ImageSourcePropType;
};

type Props = {
  item: Item;
  index: number;
};

export default function BodyPartCard({ item, index }: Props) {
  return (
    <Link
      href={{
        pathname: '/exercises/[id]',
        params: { id: item.name },
      }}
      asChild
    >
      <TouchableOpacity
        style={{ width: wp(44), height: wp(52) }}
        className='flex justify-end p-4 mb-4'
      >
        <Image
          source={item.image}
          resizeMode='cover'
          style={{ width: wp(44), height: wp(52) }}
          className='rounded-[35px] absolute'
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{
            width: wp(44),
            height: hp(15),
            position: 'absolute',
            bottom: 0,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text
          style={{ fontSize: hp(2.3) }}
          className='text-white font-semibold text-center tracking-wide'
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}
