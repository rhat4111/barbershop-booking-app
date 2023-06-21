import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderBottomColor: COLORS.LIGHT,
    borderBottomWidth: 1,
    backgroundColor: COLORS.WHITE,
  },
  txt: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: COLORS.DARK,
  },
  content: {
    padding: 12,
  },
  service: {
    height: 40,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.LIGHT,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    padding: 8,
  },
  bookBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
    backgroundColor: COLORS.WARNING,
    borderRadius: 8,
  },
  bookTxt: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.WHITE,
  },
});
