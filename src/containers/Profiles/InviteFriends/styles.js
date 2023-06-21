import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    position: 'relative',
    paddingVertical: 30,
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  pageTitle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  body: {
    padding: 15,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    borderRadius: 8,
    paddingTop: 32,
    paddingBottom: 25,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  description: {
    width: 245,
    paddingTop: 25,
    paddingBottom: 37,
    textAlign: 'center',
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    lineHeight: 18,
  },
  randomKey: {
    height: 44,
    backgroundColor: '#F4F4F4',
    padding: 10,
    flex: 1,
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
    borderRadius: 8,
    marginRight: 15,
  },
  copyBtn: {
    backgroundColor: COLORS.WARNING,
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyTxt: {
    color: COLORS.WHITE,
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
  },
  socialCards: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  name: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
    marginLeft: 12
  },
});
