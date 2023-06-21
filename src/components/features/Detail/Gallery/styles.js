import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 5,
    width: '50%',
    minHeight: 168,
  },
  image: {
    width: '100%',
    borderRadius: 8,
    height: 168,
  },
});
