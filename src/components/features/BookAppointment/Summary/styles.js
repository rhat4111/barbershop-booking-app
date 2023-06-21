import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  sectionOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    marginBottom: 10,
  },
  address: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.SECONDARY,
    marginBottom: 12,
  },
  id: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.DARK,
  },
  sectionTwo: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  type: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
    marginBottom: 11,
  },
  user: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    marginLeft: 5,
  },
  time: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.WARNING,
  },
  sectionThree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 10,
  },
  barcode: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  more: {
    marginBottom: 15,
  },
  gotoAppointment: {
    height: 44,
    borderWidth: 1,
    borderColor: COLORS.WARNING,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WARNING,
  },
});
