import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.WHITE,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    right: 15,
  },
  editText: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.WARNING,
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  pageTitle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 17,
    color: COLORS.DARK,
  },
  avatarContainer: {
    paddingHorizontal: 15,
    paddingTop: 21,
    paddingBottom: 33,
    alignItems: 'center',
  },
  selectAvatarButton: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: COLORS.WARNING,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 6,
    bottom: 6,
  },
  body: {
    flex: 1,
    padding: 15,
    marginBottom: 15
  },
  card: {
    borderRadius: 8,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginBottom: 15
  },
});
