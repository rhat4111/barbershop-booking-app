import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
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
  formGroup: {
    marginBottom: 82,
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
  send: {
    height: 44,
    borderRadius: 8,
    backgroundColor: COLORS.WARNING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  sendText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WHITE,
  },
});
