import {ColorPropType, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 24,
  },
  backButton: {
    marginRight: 15,
  },
  avatar: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },
  message: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 15,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
  },
});
