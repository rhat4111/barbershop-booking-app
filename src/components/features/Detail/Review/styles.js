import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
    paddingBottom: 30,
  },
  form: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    marginBottom: 13,
  },
  description: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    marginBottom: 27,
  },
  rating: {
    marginBottom: 46,
  },
  message: {
    flex: 1,
    height: 44,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
    marginRight: 15,
  },
  send: {
    width: 44,
    height: 44,
    backgroundColor: COLORS.WARNING,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  reviewCards: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
  },
  reviewCard: {
    padding: 12,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT,
  },
  avatar: {
    marginRight: 12,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
  },
  date: {
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
    color: COLORS.SECONDARY,
  },
  ratingTxt: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
    marginRight: 5,
  },
  review: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.DARK,
  },
});
