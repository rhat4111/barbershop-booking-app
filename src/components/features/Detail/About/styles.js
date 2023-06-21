import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    marginBottom: 12,
  },
  information: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    lineHeight: 20,
    color: COLORS.SECONDARY,
  },
  contactInfoItem: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
    marginLeft: 8,
  },
  period: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  time: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    marginLeft: 25,
    color: COLORS.DARK,
  },
  address: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.WARNING,
  },
  map: {
    height: 128,
    borderRadius: 8,
    overflow: 'hidden',
  }
});
