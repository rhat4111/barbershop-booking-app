import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import ViewAll from '@/components/common/ViewAll';
import {STYLES} from '@/themes';
import styles from './styles';

const BestSpecialists = ({navigation}) => {
  const items = [
    {
      name: 'Eliza Burke',
      job: 'Makeup Artist',
      avatar: require('@/assets/images/best_specialists/1.png'),
    },
    {
      name: 'Cecelia Reyes',
      job: 'Hair Stylist',
      avatar: require('@/assets/images/best_specialists/2.png'),
    },
    {
      name: 'Jared Guerrero',
      job: 'Barber',
      avatar: require('@/assets/images/best_specialists/3.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={[STYLES.FlexRow, STYLES.JustifyBetween, {marginBottom: 16}]}>
        <Text style={styles.title}>Best Specialists</Text>
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
                  <Text style={styles.job}>{item.job}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default withNavigation(BestSpecialists);
