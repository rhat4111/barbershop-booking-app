import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  tabTxt: {
    fontFamily: 'Sarala-Regular',
    fontSize: 20,
    color: COLORS.SECONDARY,
  },
});
