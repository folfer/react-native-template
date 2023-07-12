import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import normalize from 'react-native-normalize';

const { height, width } = Dimensions.get('screen');
const { height: dimensionHeight, width: dimensionWidth } =
  Dimensions.get('window');

export const metrics = {
  dimensionHeight,
  dimensionWidth,
  isIos: Platform.OS === 'ios',
  height: height,
  width: width,
  bottomSpotlight: 77,
  defaultSpace: (multiplier = 1) => normalize(5 * multiplier),
  header: isIphoneX() ? 44 + getStatusBarHeight() : 44,
  normalize: normalize,
};
