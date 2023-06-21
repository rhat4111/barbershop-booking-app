import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import {COLORS, STYLES} from '@/themes';

const Summary = ({navigation}) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.sectionOne}>
          <View>
            <Text style={styles.name}>Marguerite Cross Day Salon</Text>
            <View style={STYLES.FlexRow}>
              <Image
                source={require('@/assets/images/icons/marker.png')}
                style={{marginRight: 5}}
              />
              <Text style={styles.address}>
                171 Pagac Drive, Chicago, Illinois, US.
              </Text>
            </View>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Text style={[styles.id, {marginRight: 5, color: COLORS.LIGHT}]}>
                ID
              </Text>
              <Text style={styles.id}>1121EH543734</Text>
            </View>
          </View>
          <View>
            <Image source={require('@/assets/images/paid.png')} />
          </View>
        </View>
        <View style={styles.sectionTwo}>
          <View>
            <Text style={styles.type}>Hair Styling</Text>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/icons/user.png')} />
              <Text style={styles.user}>Jessie Robertson</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.time, {marginBottom: 10}]}>June 15, 2020</Text>
            <Text style={styles.time}>1:30 - 2:30 PM</Text>
          </View>
        </View>
        <View style={styles.sectionThree}>
          <Text style={styles.barcode}>Scan Barcode</Text>
          <Image source={require('@/assets/images/barcode.png')} />
        </View>
      </View>
      <TouchableOpacity style={[STYLES.ButtonStyle, styles.more]}>
        <Text style={STYLES.ButtonTextStyle}>Book more Appointment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.gotoAppointment}
        onPress={() => navigation.navigate('Appointment')}>
        <Text style={styles.buttonStyle}>Go to Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Summary);
