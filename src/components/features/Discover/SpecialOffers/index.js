import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import ViewAll from '@/components/common/ViewAll';
import {STYLES} from '@/themes';
import styles from './styles';

const SpecialOffers = ({navigation}) => {
  const items = [
    {
      name: 'Joseph Drake Hair Salon',
      description: 'Cool Summer Event!!!!',
      percent: -15,
      avatar: require('@/assets/images/offers/1.png'),
    },
    {
      name: 'Owen Roberson',
      description: 'Opening a new shop',
      percent: -15,
      avatar: require('@/assets/images/offers/2.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={[STYLES.FlexRow, STYLES.JustifyBetween, {marginBottom: 16}]}>
        <Text style={styles.title}>Special Offers</Text>
        <ViewAll link="Discover" />
      </View>
      <ScrollView horizontal={true}>
        <View style={STYLES.FlexRow}>
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => navigation.navigate('ServiceDetail')}>
                <Image source={item.avatar} />
                <View style={styles.detailInfo}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.percent}>{item.percent}%</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default withNavigation(SpecialOffers);
