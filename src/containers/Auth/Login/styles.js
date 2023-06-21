import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WARNING,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 50,
  },
  form: {
    height: '100%',
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  formGroup: {
    marginTop: 5,
    marginBottom: 25,
    position: 'relative',
  },
  label: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  textField: {
    height: 40,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY,
    color: COLORS.DARK,
  },
  statusShowPassword: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
    opacity: 0.5,
  },
  forgotPassword: {
    textAlign: 'right',
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    marginBottom: 50,
    color: COLORS.DARK,
  },
  login: {
    height: 44,
    borderRadius: 8,
    backgroundColor: COLORS.WARNING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WHITE,
  },
  socialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: COLORS.LIGHT,
  },
  socialTitle: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  socialBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 78,
  },
  socialItem: {
    marginHorizontal: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerTitle: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    marginRight: 8,
  },
  signupText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.WARNING,
  },
});
