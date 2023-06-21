import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    backgroundColor: COLORS.WARNING,
  },
  avatar: {
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 20,
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 24,
    color: COLORS.DARK,
    lineHeight: 30,
  },
  pPrice: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: COLORS.SECONDARY,
    marginRight: 15,
  },
  cPrice: {
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
    color: COLORS.WARNING,
  },
  body: {
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  timeEvent: {
    marginBottom: 25,
  },
  timeEventTitle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    marginBottom: 15,
  },
  timeLabel: {
    width: 50,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  timeContent: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
  },
  services: {
    paddingBottom: 30,
  },
  serviceTitle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    marginBottom: 15,
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
