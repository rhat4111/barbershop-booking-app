import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Rating from '../../../common/Rating';
import styles from './styles';
import {STYLES} from '@/themes';

const Services = () => {
  const reviews = [
    {
      name: 'Carlos Day',
      date: '5 Days Ago.',
      avatar: require('@/assets/images/users/1.png'),
      rating: 4,
      review: 'Love it !!! \n I had a fun party with my new hair. Thank you.',
    },
    {
      name: 'Carlos Day',
      date: '2 Weeks Ago.',
      avatar: require('@/assets/images/users/2.png'),
      rating: 5,
      review:
        'Good !!! This is a good place for you if you want to cut your hair, service style is very enthusiastic and professional.',
    },
  ];

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Your Review</Text>
          <Text style={styles.description}>
            What are you feel about this salon?
          </Text>
          <View style={styles.rating}>
            <Rating rating={3} />
          </View>
          <View style={STYLES.FlexRow}>
            <TextInput style={styles.message} placeholder="Say something…" />
            <TouchableOpacity style={styles.send}>
              <Image source={require('@/assets/images/icons/send.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.reviewCards}>
          {reviews.map((review, index) => {
            return (
              <View key={index} style={styles.reviewCard}>
                <View
                  style={[
                    STYLES.FlexRow,
                    STYLES.JustifyBetween,
                    {marginBottom: 12},
                  ]}>
                  <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                    <Image source={review.avatar} style={styles.avatar} />
                    <View>
                      <Text style={styles.name}>{review.name}</Text>
                      <Text style={styles.date}>{review.date}</Text>
                    </View>
                  </View>
                  <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                    <Text style={styles.ratingTxt}>{review.rating}.0</Text>
                    <Image source={require('@/assets/images/icons/star.png')} />
                  </View>
                </View>
                <View>
                  <Text style={styles.review}>{review.review}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Services;
