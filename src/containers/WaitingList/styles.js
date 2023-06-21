import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  item: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT,
    borderRadius: 12,
    backgroundColor: COLORS.WHITE,
  },
  cardHeader: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT,
  },
  cardBody: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  txt: {
    fontFamily: 'Sarala-Regular',
    fontSize: 16,
    color: COLORS.DARK,
    marginBottom: 6,
  },
  cancel: {
    backgroundColor: COLORS.WARNING,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
  cancelTxt: {
    color: COLORS.WHITE,
    fontFamily: 'Sarala-Regular',
    fontSize: 12,
  },
  timeTxt: {
    fontFamily: 'Sarala-Regular',
    color: COLORS.SECONDARY,
  },
  centeredView: {
    width,
    height,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBg: {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.45,
  },
  modalView: {
    backgroundColor: '#FFF',
    width: 345,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    fontFamily: 'Sarala-Bold',
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.DARK,
    marginBottom: 20,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    width: 80,
    alignItems: 'center',
    backgroundColor: COLORS.WARNING,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 3,
    borderRadius: 50,
  },
  btnTxt: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.WHITE,
  },
});
