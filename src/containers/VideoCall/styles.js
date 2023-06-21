import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../themes';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    position: 'absolute',
    height,
    justifyContent: 'space-between',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WHITE,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 40,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: '#222B4560',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCall: {
    marginHorizontal: 45,
    width: 68,
    height: 68,
    borderRadius: 50,
    backgroundColor: COLORS.DANGER,
  },
  me: {
    position: 'absolute',
    right: 15,
    bottom: 200,
    borderWidth: 4,
    borderColor: COLORS.WHITE,
    borderRadius: 12,
  },
});
