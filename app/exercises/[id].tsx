import { fetchExercisesByBodyParts } from '@/api/exercisesDB';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const imagesMap: Record<string, any> = {
  back: require('../../assets/images/back.jpg'),
  cardio: require('../../assets/images/cardio.jpg'),
  'lower arms': require('../../assets/images/lowerarms.jpg'),
  'lower legs': require('../../assets/images/lowerlegs.jpg'),
  chest: require('../../assets/images/chest.jpg'),
  neck: require('../../assets/images/neck.jpg'),
  shoulders: require('../../assets/images/shoulders.jpg'),
  'upper arms': require('../../assets/images/upperarms.jpg'),
  'upper legs': require('../../assets/images/upperlegs.jpg'),
  waist: require('../../assets/images/waist.jpg'),
};

export default function exercises() {
  const { id } = useLocalSearchParams();

  const key = id as string;

  useEffect(() => {
    if (!id) return;

    const bodyPart = Array.isArray(id) ? id[0] : id;

    getExercises(bodyPart);
  }, [id]);

  const getExercises = async (bodyPart: string) => {
    let data = await fetchExercisesByBodyParts(bodyPart);
    console.log('get data:', data);
  };

  return (
    <View className='mt-20'>
      <Text>exercises</Text>
      <TouchableOpacity>
        <Text onPress={() => router.back()}>Go Back</Text>
      </TouchableOpacity>

      <View>
        <Image
          source={imagesMap[key]}
          resizeMode='cover'
          style={{ width: wp(44), height: wp(52) }}
          className='rounded-[35px] absolute'
        />
      </View>
    </View>
  );
}
