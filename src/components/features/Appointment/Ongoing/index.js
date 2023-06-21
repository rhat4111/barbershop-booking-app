import React from 'react';
import {Image, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {COLORS, STYLES} from '@/themes';
import styles from './styles';
import {JustifyBetween} from '../../../../themes/styles';

const History = () => {
  return (
    <View>
      <Calendar
        style={styles.calendar}
        theme={{
          calendarBackground: COLORS.WHITE,
          todayTextColor: COLORS.WARNING,
          selectedDayBackgroundColor: COLORS.WARNING,
          selectedDayTextColor: COLORS.WHITE,
          dayTextColor: COLORS.DARK,
          arrowColor: COLORS.SECONDARY,
          monthTextColor: COLORS.WARNING,
          textDayFontFamily: 'Sarala-Regular',
          textMonthFontFamily: 'Sarala-Regular',
          textDayHeaderFontFamily: 'Sarala-Regular',
          textDayHeaderFontSize: 13,
        }}
      />
      <View style={styles.card}>
        <View style={[STYLES.FlexRow, styles.header]}>
          <Image
            source={require('@/assets/images/history/1.png')}
            style={{marginRight: 12}}
          />
          <View style={[STYLES.JustifyBetween]}>
            <Text style={styles.name}>Marguerite Cross Day Salon</Text>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/icons/location.png')} />
              <Text style={styles.address}>
                171 Pagac Drive, Chicago, Illinois…
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.service}>Men's Haircuts</Text>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/icons/user.png')} />
              <Text style={styles.user}>Jessie Robertson</Text>
            </View>
          </View>
          <Text style={styles.time}>1:30 - 2:30 PM</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.barcode}>Scan Barcode</Text>
          <Image source={require('@/assets/images/barcode.png')} />
        </View>
      </View>
      <View
        style={[
          STYLES.FlexRow,
          STYLES.JustifyBetween,
          STYLES.ItemsCenter,
          styles.card,
        ]}>
        <Text style={styles.remindTxt}>Remind me 1h in advance</Text>
        <Image source={require('@/assets/images/toggle.png')} />
      </View>
    </View>
  );
};

export default History;
