import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  toolbar: {
    display: 'flex',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Sarala-Bold',
    fontSize: 32,
    color: COLORS.DARK,
    marginBottom: 40,
  },
  form: {
    paddingHorizontal: 30,
  },
  register: {
    height: 44,
    borderRadius: 8,
    backgroundColor: COLORS.WARNING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  registerText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WHITE,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  footerTitle: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    marginRight: 8,
  },
  loginText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.WARNING,
  },
});
