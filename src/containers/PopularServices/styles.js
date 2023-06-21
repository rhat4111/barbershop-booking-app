import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 15,
    position: 'relative',
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
    color: COLORS.DARK,
  },
  services: {
    paddingBottom: 75,
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
