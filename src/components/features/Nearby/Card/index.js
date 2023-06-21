import React from 'react';
import {Image, Text, View} from 'react-native';
import {STYLES} from '@/themes';
import styles from './styles';

const Card = props => {
  return (
    <View style={styles.container}>
      <Image source={props.avatar} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
          <Image source={require('@/assets/images/icons/location.png')} />
          <Text style={styles.address}>{props.address}</Text>
        </View>
        <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
          <Text style={styles.rate}>{props.rate}</Text>
          <Image source={require('@/assets/images/icons/star.png')} />
          <Image
            source={require('@/assets/images/icons/dot.png')}
            style={styles.dot}
          />
          <Text style={styles.distance}>{props.distance}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
