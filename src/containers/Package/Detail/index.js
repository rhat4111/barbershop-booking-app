import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ServiceCard from '@/components/common/ServiceCard';
import styles from './styles';
import {STYLES} from '@/themes';

const PackageDetail = ({navigation}) => {
  const services = [
    {
      name: 'Hair Styling',
      time: '45 Min',
      price: 25,
      checked: true,
      avatar: require('@/assets/images/services/1.png'),
    },
    {
      name: 'Take care Eyebro…',
      time: '45 Min',
      price: 17.5,
      avatar: require('@/assets/images/services/2.png'),
    },
    {
      name: 'Change Hair Color',
      time: '45 Min',
      price: 24,
      avatar: require('@/assets/images/services/3.png'),
    },
    {
      name: 'Haircuts',
      time: '45 Min',
      price: 30,
      avatar: require('@/assets/images/services/4.png'),
    },
    {
      name: 'Take care Eyebro…',
      time: '45 Min',
      price: 17.5,
      avatar: require('@/assets/images/services/5.png'),
    },
    {
      name: 'Skin Care',
      time: '45 Min',
      price: 45,
      avatar: require('@/assets/images/services/6.png'),
    },
    {
      name: 'Haircuts',
      time: '45 Min',
      price: 30,
      avatar: require('@/assets/images/services/7.png'),
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={require('@/assets/images/icons/arrow_left.png')} />
          </TouchableOpacity>
          <Image
            source={require('@/assets/images/2.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.body}>
          <View
            style={[
              STYLES.FlexRow,
              STYLES.JustifyBetween,
              STYLES.ItemsEnd,
              {marginBottom: 25},
            ]}>
            <Text style={styles.title}>Personality Girl Event</Text>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Text style={styles.pPrice}> $100 </Text>
              <Text style={styles.cPrice}>$89</Text>
            </View>
          </View>
          <View style={styles.timeEvent}>
            <Text style={styles.timeEventTitle}>Time of Event</Text>
            <View>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <Text style={styles.timeLabel}>From</Text>
                <Text style={styles.timeContent}>7:30 AM - June 10, 2020</Text>
              </View>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <Text style={styles.timeLabel}>To</Text>
                <Text style={styles.timeContent}>5:30 PM - June 25,2020</Text>
              </View>
            </View>
          </View>
          <View style={styles.services}>
            <Text style={styles.serviceTitle}>Services Include</Text>
            <View>
              {services.map((service, index) => {
                return <ServiceCard key={index} {...service} />;
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[STYLES.ButtonStyle, styles.btn]}
        onPress={() => navigation.navigate('BookAppointment')}>
        <Text style={STYLES.ButtonTextStyle}>Book Appointment</Text>
      </TouchableOpacity>
    </>
  );
};

export default PackageDetail;
