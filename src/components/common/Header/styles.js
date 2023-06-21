import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    padding: 15,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 24,
    color: COLORS.WHITE,
    maxWidth: 200,
    lineHeight: 30,
  },
  rate: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.WHITE,
    marginRight: 5,
  },
  status: {
    marginTop: 9,
    textTransform: 'uppercase',
    fontFamily: 'Sarala-Bold',
    fontSize: 13,
    color: COLORS.WHITE,
    paddingVertical: 0,
    paddingHorizontal: 10,
    backgroundColor: COLORS.SUCCESS,
    borderRadius: 4,
  },
});
