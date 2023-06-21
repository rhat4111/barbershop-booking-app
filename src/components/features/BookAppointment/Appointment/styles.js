import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  calendar: {
    borderRadius: 12,
    marginBottom: 12,
  },
  specialists: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  sHeader: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.DARK,
    marginBottom: 15,
  },
  item: {
    marginRight: 15,
  },
  itemDetail: {
    paddingTop: 8,
  },
  name: {
    fontFamily: 'Sarala-Bold',
    fontSize: 12,
    color: COLORS.DARK,
  },
  slots: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  slotTitle: {
    fontFamily: 'Sarala-Bold',
    fontSize: 15,
    color: COLORS.DARK,
    marginBottom: 15,
  },
  slotItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  slotItemContainer: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  slotItem: {
    width: '100%',
    height: 36,
    borderWidth: 1,
    borderColor: '#C5CEE0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  slotText: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  nextButton: {marginBottom: 30},
});
