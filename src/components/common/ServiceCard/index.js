import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import styles from './styles';
import {STYLES} from '@/themes';

const ServiceCard = props => {
  const [checked, setChecked] = useState(props.checked || false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.navigate('PopularServices')}>
      <Image source={props.avatar} style={styles.avatar} />
      <View style={styles.detailInfo}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
          <Text style={styles.time}>{props.time}</Text>
          <Image
            source={require('@/assets/images/icons/dot.png')}
            style={{marginHorizontal: 8}}
          />
          <Text style={styles.price}>${props.price}</Text>
        </View>
      </View>
      {props?.checkable && (
        <View style={styles.checkbox}>
          <CheckBox
            onClick={() => setChecked(!checked)}
            isChecked={checked}
            checkedImage={
              <Image source={require('@/assets/images/checkbox/checked.png')} />
            }
            unCheckedImage={
              <Image
                source={require('@/assets/images/checkbox/unchecked.png')}
              />
            }
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default withNavigation(ServiceCard);
