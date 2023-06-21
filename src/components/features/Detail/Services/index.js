import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import ViewAll from '@/components/common/ViewAll';
import styles from './styles';
import {COLORS, STYLES} from '@/themes';
import ServiceCard from '../../../common/ServiceCard';

const Services = ({navigation}) => {
  const types = [
    {
      name: 'All',
      avatar: require('@/assets/images/service_types/all.png'),
      active: true,
    },
    {
      name: 'Skin Care',
      avatar: require('@/assets/images/service_types/skin_care.png'),
    },
    {
      name: 'Make Up',
      avatar: require('@/assets/images/service_types/make_up.png'),
    },
    {
      name: 'Hair Color',
      avatar: require('@/assets/images/service_types/hair_color.png'),
    },
  ];

  const offers = [
    {
      name: 'Personality Girl Event',
      period: 'June 10 - June 25',
      avatar: require('@/assets/images/offers/3.png'),
      price: {
        previous: 100,
        current: 89,
      },
    },
    {
      name: 'Happy Day',
      period: 'June 6 - June 25',
      avatar: require('@/assets/images/offers/4.png'),
      price: {
        previous: 460,
        current: 299,
      },
    },
  ];

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
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View
          style={[STYLES.FlexRow, STYLES.JustifyBetween, STYLES.ItemsCenter]}>
          {types.map((type, index) => {
            return (
              <View key={index} style={styles.type}>
                <View style={styles.typeAvatar}>
                  <Image source={type.avatar} />
                </View>
                <Text
                  style={[
                    styles.typeName,
                    {color: type.active ? COLORS.WARNING : COLORS.SECONDARY},
                  ]}>
                  {type.name}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{marginBottom: 25}}>
          <View
            style={[
              STYLES.FlexRow,
              STYLES.JustifyBetween,
              STYLES.ItemsCenter,
              {marginBottom: 15},
            ]}>
            <Text style={styles.title}>Package & Offers</Text>
            <ViewAll link="Discover" />
          </View>
          <ScrollView horizontal={true}>
            {offers.map((offer, index) => {
              return (
                <TouchableOpacity
                  style={styles.offer}
                  key={index}
                  onPress={() => navigation.navigate('PackageDetail')}>
                  <Image source={offer.avatar} />
                  <View style={styles.offerInfo}>
                    <Text style={styles.name}>{offer.name}</Text>
                    <View
                      style={[
                        STYLES.FlexRow,
                        STYLES.JustifyBetween,
                        STYLES.ItemsCenter,
                      ]}>
                      <Text style={styles.period}>{offer.period}</Text>
                      <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                        <Text style={styles.pPrice}>
                          {' '}
                          ${offer.price.previous}{' '}
                        </Text>
                        <Text style={styles.cPrice}>
                          {offer.price.current}$
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View>
          <Text style={[styles.title, {marginBottom: 15}]}>
            Popular Services
          </Text>
          <View>
            {services.map((service, index) => {
              return <ServiceCard key={index} {...service} />;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default withNavigation(Services);
