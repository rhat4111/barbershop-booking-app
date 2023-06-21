import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: COLORS.LIGHT,
    borderBottomWidth: 1,
    alignItems: 'center',
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
    marginLeft: 5,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 15,
  },
  service: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
    marginBottom: 10,
  },
  staff: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  time: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
  },
});
