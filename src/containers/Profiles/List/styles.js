import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 86,
    height: 86,
    marginBottom: 10,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
    color: COLORS.DARK,
  },
  email: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  body: {
    padding: 15,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 12,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: 40,
    backgroundColor: COLORS.WARNING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkName: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
    marginLeft: 12,
  },
});
