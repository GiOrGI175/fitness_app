import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ExerciseDetails() {
  const { data } = useLocalSearchParams();
  const router = useRouter();
  const exercise = JSON.parse(data as string);

  return (
    <ScrollView className='flex-1 bg-white'>
      <View
        className='bg-neutral-200 items-center justify-center'
        style={{ height: hp(45) }}
      >
        <Text className='text-neutral-400 text-lg'>No Image</Text>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className='bg-rose-500 mx-4 absolute rounded-full flex justify-center items-center pr-1'
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name='arrow-back' size={hp(3)} color='white' />
      </TouchableOpacity>

      <View className='bg-white rounded-t-[30px] -mt-8 px-5 pt-6 pb-10'>
        <Text
          style={{ fontSize: hp(3) }}
          className='font-bold text-neutral-800 capitalize mb-1'
        >
          {exercise.name}
        </Text>

        <View className='flex-row flex-wrap gap-2 mb-5'>
          <View className='bg-rose-100 px-3 py-1 rounded-full'>
            <Text
              className='text-rose-500 font-semibold capitalize'
              style={{ fontSize: hp(1.6) }}
            >
              {exercise.difficulty}
            </Text>
          </View>
          <View className='bg-blue-100 px-3 py-1 rounded-full'>
            <Text
              className='text-blue-500 font-semibold capitalize'
              style={{ fontSize: hp(1.6) }}
            >
              {exercise.category}
            </Text>
          </View>
        </View>

        <View className='mb-4'>
          <Text
            style={{ fontSize: hp(1.8) }}
            className='text-neutral-500 font-medium'
          >
            Equipment{' '}
            <Text className='text-neutral-800 font-semibold capitalize'>
              {exercise.equipment}
            </Text>
          </Text>
        </View>

        <View className='mb-4'>
          <Text
            style={{ fontSize: hp(1.8) }}
            className='text-neutral-500 font-medium'
          >
            Secondary Muscles{' '}
            <Text className='text-neutral-800 font-semibold capitalize'>
              {exercise.secondaryMuscles?.join(', ')}
            </Text>
          </Text>
        </View>

        <View className='mb-6'>
          <Text
            style={{ fontSize: hp(1.8) }}
            className='text-neutral-500 font-medium'
          >
            Target{' '}
            <Text className='text-neutral-800 font-semibold capitalize'>
              {exercise.target}
            </Text>
          </Text>
        </View>

        <Text
          style={{ fontSize: hp(2.2) }}
          className='font-bold text-neutral-800 mb-3'
        >
          Instructions
        </Text>
        {exercise.instructions?.map((step: string, index: number) => (
          <View key={index} className='flex-row mb-3'>
            <Text
              style={{ fontSize: hp(1.8) }}
              className='text-rose-400 font-bold mr-2'
            >
              {index + 1}.
            </Text>
            <Text
              style={{ fontSize: hp(1.8) }}
              className='text-neutral-700 flex-1 leading-6'
            >
              {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
