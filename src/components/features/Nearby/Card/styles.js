import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    marginRight: 10,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
  },
  address: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.SECONDARY,
  },
  rate: {
    fontFamily: 'Sarala-Bold',
    fontSize: 12,
    color: COLORS.DARK,
    marginRight: 4.5,
  },
  dot: {
    marginHorizontal: 10,
  },
  distance: {
    fontFamily: 'Sarala-Bold',
    fontSize: 12,
    color: COLORS.DARK,
  },
});
