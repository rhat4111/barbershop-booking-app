import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 25,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
    color: COLORS.DARK,
  },
  item: {
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  detailInfo: {
    padding: 10,
    position: 'relative',
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  description: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  percent: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    color: COLORS.WARNING,
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
  },
});
