import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    padding: 15,
    paddingBottom: 30,
  },
  type: {
    alignItems: 'center',
    marginBottom: 25,
  },
  typeAvatar: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeName: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
    color: COLORS.DARK,
  },
  offer: {
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  offerInfo: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    marginBottom: 8,
  },
  period: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  pPrice: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.SECONDARY,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  cPrice: {
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
    color: COLORS.WARNING,
  },
});
