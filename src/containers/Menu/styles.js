import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  menus: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 12,
    paddingHorizontal: 9,
  },
  menu: {
    width: '50%',
    padding: 6,
  },
  menuBtn: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  txt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: COLORS.DARK,
  },
});
