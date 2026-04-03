import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Exercise } from './ExercisesList';

type Props = {
  item: Exercise;
  index: number;
};

export default function ExercisesCard({ item, index }: Props) {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity className='flex py-3 space-y-2'>
        <View className='bg-neutral-200 shadow rounded-[25px]'>
          <Image
            source={{
              uri:
                item.gifUrl ??
                `https://via.placeholder.com/300x200?text=${encodeURIComponent(item.name)}`,
            }}
            contentFit='cover'
            style={{ width: wp(44), height: wp(52) }}
            className='rounded-[25px]'
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
