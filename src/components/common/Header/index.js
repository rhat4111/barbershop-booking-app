import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import {STYLES} from '@/themes';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/1.png')} style={styles.image} />
      <View style={styles.content}>
        <View style={[STYLES.FlexRow, STYLES.JustifyBetween]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('@/assets/images/icons/arrow_left.png')} />
          </TouchableOpacity>
          <View style={STYLES.FlexRow}>
            <TouchableOpacity>
              <Image source={require('@/assets/images/icons/phone.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 15}}>
              <Image source={require('@/assets/images/icons/chat.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[STYLES.FlexRow, STYLES.JustifyBetween]}>
          <Text style={styles.name}>Marguerite Cross Day Salon</Text>
          <View style={STYLES.ItemsEnd}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Text style={styles.rate}>4.5</Text>
              <Image source={require('@/assets/images/icons/star.png')} />
            </View>
            <Text style={styles.status}>Open</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Header);
