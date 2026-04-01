import { bodyParts } from '@/constants';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BodyPartCard from './BodyPartCard';

export default function BodyParst() {
  return (
    <View className='mx-4'>
      <Text
        style={{ fontSize: hp(3) }}
        className='font-semibold text-neutral-700'
      >
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <BodyPartCard item={item} index={index} />
        )}
      />
    </View>
  );
}
