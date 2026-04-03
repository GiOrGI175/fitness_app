import { fetchExercisesByBodyParts } from '@/api/exercisesDB';
import ExercisesList from '@/components/ExercisesList';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';

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

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (!id) return;

    const bodyPart = Array.isArray(id) ? id[0] : id;

    getExercises(bodyPart);
  }, [id]);

  const getExercises = async (bodyPart: string) => {
    let data = await fetchExercisesByBodyParts(bodyPart);
    console.log('get data:', data);

    setExercises(data);
  };

  return (
    <ScrollView className=''>
      <StatusBar style='light' />
      <Image
        source={imagesMap[key]}
        style={{ width: wp(100), height: hp(45) }}
        className='rounded-b-[40px]'
      />

      <TouchableOpacity
        onPress={() => router.back()}
        className='bg-rose-500 mx-4 absolute rounded-full flex justify-center items-center pr-1'
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name='arrow-back' size={hp(3)} color='white' />
      </TouchableOpacity>

      <View className='mx-4 space-y-3 mt-4'>
        <Text className='font-semibold text-neutral-700'>{id} exercises</Text>
        <View className='mb-10'>
          <ExercisesList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
