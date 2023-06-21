import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    borderColor: '#F2F2F2',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    flexShrink: 0,
  },
  detailInfo: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  time: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
  },
  price: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.WARNING,
  },
  checkbox: {
    marginRight: 12
  },
});
