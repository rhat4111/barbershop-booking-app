import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  toolbar: {
    display: 'flex',
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WARNING,
  },
  form: {
    marginTop: -20,
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Sarala-Bold',
    fontSize: 24,
    color: COLORS.DARK,
    marginBottom: 30,
  },
  description: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    marginBottom: 60,
    textAlign: 'center',
  },
  failText: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
    marginBottom: 60,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 25,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textField: {
    width: 50,
    fontFamily: 'Sarala-Bold',
    fontSize: 42,
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHT,
    color: COLORS.DARK,
    textAlign: 'center',
  },
  resendText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.WARNING,
    marginBottom: 40,
    textAlign: 'right',
  },
  continue: {
    height: 44,
    borderRadius: 8,
    backgroundColor: COLORS.WARNING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  continueText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WHITE,
  },
});
