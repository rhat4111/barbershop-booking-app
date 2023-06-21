import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';

const Card = props => {
  return (
    <View style={styles.card}>
      <Image source={props.avatar} />
      <View style={styles.detail}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
    </View>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Hair Stylist',
      items: [
        {
          name: 'Rose Hansen',
          avatar: require('@/assets/images/salon_specialists/1.png'),
        },
        {
          name: 'Pearl Austin',
          avatar: require('@/assets/images/salon_specialists/2.png'),
        },
        {
          name: 'Brian Parsons',
          avatar: require('@/assets/images/salon_specialists/3.png'),
        },
      ],
    },
    {
      title: 'Makeup Artist',
      items: [
        {
          name: 'Georgia Daniels',
          avatar: require('@/assets/images/salon_specialists/4.png'),
        },
        {
          name: 'Willie Carpen',
          avatar: require('@/assets/images/salon_specialists/5.png'),
        },
        {
          name: 'Theresa Floyd',
          avatar: require('@/assets/images/salon_specialists/6.png'),
        },
      ],
    },
    {
      title: 'Sr.Barber',
      items: [
        {
          name: 'Georgia Daniels',
          avatar: require('@/assets/images/salon_specialists/7.png'),
        },
        {
          name: 'Willie Carpen',
          avatar: require('@/assets/images/salon_specialists/8.png'),
        },
        {
          name: 'Theresa Floyd',
          avatar: require('@/assets/images/salon_specialists/9.png'),
        },
      ],
    },
  ];
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        {services.map((service, index) => {
          return (
            <View key={index} style={styles.service}>
              <Text style={styles.title}>{service.title}</Text>
              <ScrollView horizontal={true}>
                {service.items.map((item, subindex) => {
                  return (
                    <View style={styles.cardContainer} key={subindex}>
                      <Card {...item} />
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Services;
