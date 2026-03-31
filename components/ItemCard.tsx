import { Image } from 'expo-image';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
  item: any;
  animationValue: SharedValue<number>;
};

export default function ItemCard({ item, animationValue }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.85, 1, 0.85],
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[{ height: hp(25), paddingHorizontal: 10 }, animatedStyle]}
    >
      <Image
        source={item}
        contentFit='cover'
        style={{ width: '100%', height: '100%', borderRadius: 25 }}
      />
    </Animated.View>
  );
}
