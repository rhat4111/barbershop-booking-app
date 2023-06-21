import React from 'react';
import {Calendar} from 'react-native-calendars';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {COLORS, STYLES} from '@/themes';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Appointment = props => {
  const specialists = [
    {
      name: 'Emily Mack',
      avatar: require('@/assets/images/appointment/1.png'),
    },
    {
      name: 'Luis Delgado',
      avatar: require('@/assets/images/appointment/2.png'),
    },
    {
      name: 'Noah Atkins',
      avatar: require('@/assets/images/appointment/3.png'),
    },
    {
      name: 'Curtis Paul',
      avatar: require('@/assets/images/appointment/4.png'),
    },
  ];

  const slots = [
    {
      name: '7:30 - 8:30 AM',
      active: false,
    },
    {
      name: '9:00 - 10:00 AM',
      active: false,
    },
    {
      name: '10:30 - 11:30 AM',
      active: false,
    },
    {
      name: '1:30 - 2:30 PM',
      active: true,
    },
    {
      name: '3:00 - 4:00 PM',
      active: false,
    },
    {
      name: '4:30 - 5:30 PM',
      active: false,
    },
  ];

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
      <View style={styles.specialists}>
        <View style={[STYLES.FlexRow, STYLES.JustifyBetween, styles.sHeader]}>
          <Text>Choose Specialists</Text>
          <Text style={{color: COLORS.WARNING}}>Hair Stylists</Text>
        </View>
        <ScrollView horizontal={true}>
          {specialists.map((item, index) => {
            return (
              <View style={styles.item} key={index}>
                <Image source={item.avatar} />
                <View style={styles.itemDetail}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.slots}>
        <Text style={styles.slotTitle}>Available Slot</Text>
        <View style={styles.slotItems}>
          {slots.map((slot, index) => {
            return (
              <View key={index} style={styles.slotItemContainer}>
                <View
                  style={[
                    styles.slotItem,
                    {
                      backgroundColor: slot.active
                        ? COLORS.WARNING
                        : COLORS.WHITE,
                      borderColor: slot.active ? COLORS.WARNING : '#C5CEE0',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.slotText,
                      {color: slot.active ? COLORS.WHITE : COLORS.SECONDARY},
                    ]}>
                    {slot.name}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        style={[STYLES.ButtonStyle, styles.nextButton]}
        onPress={() => props.handleNext()}>
        <Text style={STYLES.ButtonTextStyle}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Appointment;
