import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.SECONDARY,
    marginBottom: 15,
  },
  service: {
    marginBottom: 30,
  },
  serviceOne: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  serviceOneOne: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  serviceAvatar: {
    marginRight: 10,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
  },
  address: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.DARK,
    opacity: 0.5,
  },
  serviceOneTwo: {
    paddingVertical: 15,
  },
  type: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
    marginBottom: 12,
    lineHeight: 18,
  },
  staff: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  time: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
  },
  serviceTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderTopColor: COLORS.LIGHT,
    borderTopWidth: 1,
  },
  payText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  price: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WARNING,
  },
  payment: {
    marginBottom: 8,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  paymentTitle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.SECONDARY,
  },
  add: {
    fontFamily: 'Sarala-Regular',
    fontSize: 17,
    color: COLORS.WARNING,
  },
  item: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    minHeight: 58,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  paymentAvatar: {
    marginRight: 15,
  },
  paymentName: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
  },
});
