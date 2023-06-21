import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    position: 'relative',
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    marginBottom: 21,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  body: {
    padding: 15,
    flex: 1,
  },
});
