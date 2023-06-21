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
    padding: 10,
    borderBottomWidth: 1,
  },
  tabTxt: {
    fontFamily: 'Sarala-Regular',
    color: COLORS.SECONDARY,
    fontSize: 20,
  },
  body: {
    padding: 15,
  },
});
