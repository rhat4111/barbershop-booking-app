import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
  },
  job: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.SECONDARY,
  },
});
