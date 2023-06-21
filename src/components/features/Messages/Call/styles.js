import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
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
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    paddingHorizontal: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: COLORS.LIGHT,
    borderBottomWidth: 1,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 15,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  type: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeTxt: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
    marginLeft: 5,
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    width: 38,
    height: 38,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoCallButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  callButton: {
    backgroundColor: COLORS.SUCCESS,
    marginLeft: 20,
  },
});
