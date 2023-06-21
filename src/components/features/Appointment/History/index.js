import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {STYLES} from '@/themes';

const Ongoing = () => {
  const history = [
    {
      name: 'Conado Hair Studio',
      address: '311 Jefferey Springs Suite, Chica…',
      avatar: require('@/assets/images/history/2.png'),
      service: 'Makeup Marguerite',
      staff: 'Lettie Neal',
      date: 'Match 24, 2020',
    },
    {
      name: 'Ora Burgess Salon',
      address: '460 Bergnaum Rapids, Chicago,…',
      avatar: require('@/assets/images/history/3.png'),
      service: 'Change Hair Color',
      staff: 'Emilie Rose',
      date: 'January 12, 2020',
    },
    {
      name: 'Girls Salon Studio',
      address: '134 Kozey Garden, Chicago, Illino…',
      avatar: require('@/assets/images/history/4.png'),
      service: 'Beauty Girl Event',
      staff: 'Ina Jennings',
      date: 'December 17, 2019',
    },
  ];
  return (
    <View>
      {history.map((item, index) => {
        return (
          <View style={styles.card}>
            <View style={styles.header}>
              <Image source={item.avatar} style={{marginRight: 10}} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                  <Image
                    source={require('@/assets/images/icons/location.png')}
                  />
                  <Text style={styles.address}>{item.address}</Text>
                </View>
              </View>
            </View>
            <View style={styles.body}>
              <View>
                <Text style={styles.service}>{item.service}</Text>
                <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                  <Image source={require('@/assets/images/icons/user.png')} />
                  <Text style={styles.staff}>{item.staff}</Text>
                </View>
              </View>
              <Text style={styles.time}>{item.date}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Ongoing;
