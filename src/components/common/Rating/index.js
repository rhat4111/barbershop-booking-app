import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Rating = ({
  rating,
  count = 5,
  active = require('@/assets/images/icons/rate_active_star.png'),
  inactive = require('@/assets/images/icons/rate_inactive_star.png'),
}) => {
  const [activeCount, setActiveCount] = useState(rating);
  const handleActive = index => {
    setActiveCount(index);
  };

  return (
    <View style={styles.container}>
      {Array.from(Array(activeCount).keys()).map(index => {
        return (
          <TouchableOpacity key={index} onPress={() => handleActive(index + 1)}>
            <Image source={active} style={styles.star} />
          </TouchableOpacity>
        );
      })}
      {Array.from(Array(count - activeCount).keys()).map(index => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleActive(activeCount + index + 1)}>
            <Image source={inactive} style={styles.star} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Rating;
