import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
    paddingBottom: 30
  },
  title: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.SECONDARY,
    marginBottom: 15,
  },
  cardContainer: {
    marginRight: 12,
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.LIGHT,
    overflow: 'hidden',
  },
  detail: {
    padding: 10,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 12,
    color: COLORS.DARK,
  },
});
