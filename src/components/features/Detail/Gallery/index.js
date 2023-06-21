import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from './styles';

const Services = () => {
  const galley = [
    require('@/assets/images/gallery/1.png'),
    require('@/assets/images/gallery/2.png'),
    require('@/assets/images/gallery/3.png'),
    require('@/assets/images/gallery/4.png'),
    require('@/assets/images/gallery/5.png'),
    require('@/assets/images/gallery/6.png'),
    require('@/assets/images/gallery/7.png'),
    require('@/assets/images/gallery/1.png'),
  ];
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        {galley.map((item, index) => {
          return (
            <View key={index} style={styles.item}>
              <Image source={item} style={styles.image} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Services;
