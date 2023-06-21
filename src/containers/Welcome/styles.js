import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@/themes';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    top: 430,
  },
  paginationItem: {
    width: 34,
    height: 4,
    color: 'red',
    borderRadius: 2,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    marginBottom: 80,
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 24,
    marginBottom: 33,
    color: COLORS.DARK,
    textAlign: 'center',
  },
  description: {
    width,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    textAlign: 'center',
    marginBottom: 48,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 44,
    backgroundColor: COLORS.WARNING,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Sarala-Regular',
    fontSize: 17,
    color: '#FFF',
  },
  skipButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 44,
  },
  skipButtonText: {
    fontFamily: 'Sarala-Regular',
    fontSize: 17,
    color: COLORS.SECONDARY,
  },
});
