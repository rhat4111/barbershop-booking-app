import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/themes';
import styles from './styles';

const Notification = props => {
  const [seen, setSeen] = useState(props.seen);

  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Text
          style={[
            styles.name,
            {
              fontFamily: !seen ? 'Sarala-Bold' : 'Sarala-Regular',
              color: !seen ? COLORS.DARK : COLORS.SECONDARY,
            },
          ]}>
          {props.title}
        </Text>
        <Text
          style={[
            styles.description,
            {
              fontFamily: !seen ? 'Sarala-Bold' : 'Sarala-Regular',
              color: !seen ? COLORS.DARK : COLORS.SECONDARY,
            },
          ]}>
          {props.description}
        </Text>
        <Text style={styles.time}>({props.time})</Text>
      </View>
      {!seen && (
        <TouchableOpacity style={styles.seen} onPress={() => setSeen(!seen)}>
          <Image source={require('@/assets/images/tag.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Notification;
