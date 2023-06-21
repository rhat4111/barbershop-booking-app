import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {COLORS} from '@/themes';
import styles from './styles';

const images = [
  require('../../assets/images/welcome/1.png'),
  require('../../assets/images/welcome/2.png'),
  require('../../assets/images/welcome/3.png'),
];

const Welcome = ({navigation}) => {
  const items = [
    {
      title: 'Find barbershop nearby',
      description:
        'Choose your hair style choose your hair style choose your hair style.',
      image: images[0],
    },
    {
      title: 'Attractive promotions',
      description:
        'Choose your hair style choose your hair style choose your hair style.',
      image: images[1],
    },
    {
      title: 'The Professional Specialists',
      description:
        'Choose your hair style choose your hair style choose your hair style.',
      image: images[2],
    },
  ];

  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination
        paginationStyle={styles.pagination}
        paginationStyleItem={styles.paginationItem}
        paginationDefaultColor={COLORS.LIGHT}
        paginationActiveColor={COLORS.WARNING}
        data={items}
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            {index === items.length - 1 ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.skipButton}>
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default Welcome;
