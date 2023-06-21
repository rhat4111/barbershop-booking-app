import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.WARNING,
    marginRight: 8,
  },
});
