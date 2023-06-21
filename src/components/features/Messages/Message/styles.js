import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    padding: 15,
  },
  input: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    backgroundColor: COLORS.WHITE,
    marginRight: 15,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    paddingHorizontal: 12,
  },
  chatButton: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    borderRadius: 100,
  },
  circle: {
    width: 13,
    height: 13,
    position: 'absolute',
    backgroundColor: COLORS.WARNING,
    borderRadius: 50,
    top: 0,
    right: 0,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  history: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  time: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
});
