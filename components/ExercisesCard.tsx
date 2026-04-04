import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Exercise } from './ExercisesList';

type Props = {
  item: Exercise;
  index: number;
};

export default function ExercisesCard({ item }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/exercises/exercisesDetails/details',
          params: { data: JSON.stringify(item) },
        })
      }
      className='py-3'
    >
      <View
        className='bg-neutral-200 shadow rounded-[25px] items-center justify-center'
        style={{ width: wp(44), height: wp(44) }}
      >
        <Text
          style={{ fontSize: hp(1.7) }}
          className='text-neutral-700 font-semibold tracking-wide text-center px-3'
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
