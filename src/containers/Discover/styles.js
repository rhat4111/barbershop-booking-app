import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    padding: 15,
    paddingBottom: 10,
  },
  name: {
    fontFamily: 'Sarala-Regular',
    fontSize: 24,
  },
  notification: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: COLORS.WARNING,
    color: COLORS.WHITE,
    width: 13,
    height: 13,
    fontFamily: 'Sarala-Bold',
    fontSize: 8,
    padding: 0,
    borderRadius: 10,
    textAlign: 'center',
  },
  addressInfo: {
    marginTop: 12,
    marginBottom: 21,
  },
  address: {
    marginLeft: 3,
    fontFamily: 'Sarala-Regular',
    fontSize: 14,
    color: COLORS.DARK,
  },
  filterInputContainer: {
    flex: 1,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
  },
  searchImage: {
    position: 'absolute',
    top: 8,
    left: 5,
  },
  filterInput: {
    height: 40,
    paddingLeft: 35,
    paddingRight: 5,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
  },
  filterButton: {
    marginLeft: 15,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
  },
});
