import React from 'react';
import { FlatList, View } from 'react-native';
import ExercisesCard from './ExercisesCard';

export type Exercise = {
  bodyPart: string;
  category: string;
  description: string;
  difficulty: string;
  equipment: string;
  id: string;
  instructions: string[];
  name: string;
  secondaryMuscles: string[];
  target: string;
  gifUrl: string;
};

type Props = {
  data: Exercise[];
};

export default function ExercisesList({ data }: Props) {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <ExercisesCard item={item} index={index} />
        )}
      />
    </View>
  );
}
