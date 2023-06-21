import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    position: 'relative',
  },
  map: {
    width,
    height,
  },
  mainContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  pageTitle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  filterButton: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
  },
  board: {
    alignItems: 'center',
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    left: 15,
    right: 15,
    backgroundColor: COLORS.WHITE,
    paddingTop: 10,
  },
  list: {
    height: 420,
    backgroundColor: '#F4F4F4',
    padding: 15,
    marginBottom: 100,
  },
  boardHeader: {
    width: '100%',
    flex: 1,
    padding: 15,
  },
  input: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.LIGHT,
    marginTop: 15,
    fontFamily: 'Sarala-Regular',
    fontSize: 16,
    color: COLORS.DARK,
    paddingHorizontal: 15,
  },
  bg: {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#00000080',
  },
  overviewBoard: {
    position: 'absolute',
    width,
    top: 400,
    paddingHorizontal: 15
  },
  overviewItem: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    borderRadius: 8,
    marginRight: 15
  }
});
