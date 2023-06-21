import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const ViewAll = ({navigation, link}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(link)}>
      <Text style={styles.text}>View all</Text>
      <Image source={require('@/assets/images/icons/more.png')} />
    </TouchableOpacity>
  );
};

export default withNavigation(ViewAll);
