import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ServiceCard from '../../components/common/ServiceCard';
import styles from './styles';
import {STYLES} from '@/themes';

const PopularServices = ({navigation}) => {
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
        <Text style={[styles.title, {marginBottom: 15}]}>Popular Services</Text>
        <View style={styles.services}>
          {services.map((service, index) => {
            return <ServiceCard key={index} {...service} checkable={true} />;
          })}
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

export default PopularServices;
