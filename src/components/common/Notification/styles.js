import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.LIGHT,
    marginBottom: 12,
    overflow: 'hidden',
  },
  avatar: {
    width: 125,
    height: 125,
  },
  detail: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 17,
    marginBottom: 4,
    textTransform: 'uppercase',
    lineHeight: 20,
  },
  description: {
    fontSize: 10,
    marginBottom: 4,
  },
  time: {
    fontFamily: 'Sarala-Regular',
    fontSize: 10,
    color: COLORS.SECONDARY,
  },
  seen: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
