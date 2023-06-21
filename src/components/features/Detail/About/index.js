import React from 'react';
import MapView from 'react-native-maps';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {STYLES} from '@/themes';

const About = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Information</Text>
          <Text style={styles.information}>
            Marhuerite Cross Day Salon is dolor sit amet, labore consectetur
            adipiscing elit, sed do eiusmod tempor incididunt enim labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullam commodo consequat. consectetur adipiscing elit,
            sed do eiusmod commodo. Read more
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Contact</Text>
          <View>
            <View
              style={[STYLES.FlexRow, STYLES.ItemsCenter, {marginBottom: 12}]}>
              <Image source={require('@/assets/images/icons/phone_dark.png')} />
              <Text style={styles.contactInfoItem}>+1 (325) 1256 7592</Text>
            </View>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/icons/world_dark.png')} />
              <Text style={styles.contactInfoItem}>
                www.margueritesalon.com
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Opending time</Text>
          <View>
            <View style={[STYLES.FlexRow, STYLES.JustifyBetween]}>
              <Text style={styles.period}>Monday - Friday</Text>
              <View>
                <View
                  style={[
                    STYLES.FlexRow,
                    STYLES.ItemsCenter,
                    {marginBottom: 10},
                  ]}>
                  <Image source={require('@/assets/images/icons/dot.png')} />
                  <Text style={styles.time}>7:30 - 11:30 AM</Text>
                </View>
                <View
                  style={[
                    STYLES.FlexRow,
                    STYLES.ItemsCenter,
                    {marginBottom: 10},
                  ]}>
                  <Image source={require('@/assets/images/icons/dot.png')} />
                  <Text style={styles.time}>1:30 - 5:30 PM</Text>
                </View>
              </View>
            </View>
            <View style={[STYLES.FlexRow, STYLES.JustifyBetween]}>
              <Text style={styles.period}>Saturday</Text>
              <View>
                <View
                  style={[
                    STYLES.FlexRow,
                    STYLES.ItemsCenter,
                    {marginBottom: 10},
                  ]}>
                  <Image source={require('@/assets/images/icons/dot.png')} />
                  <Text style={styles.time}>7:30 - 11:30 AM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={[
              STYLES.FlexRow,
              STYLES.JustifyBetween,
              STYLES.ItemsCenter,
              {marginBottom: 12},
            ]}>
            <Text style={[styles.title, {marginBottom: 0}]}>Address</Text>
            <Text style={styles.address}>
              171 Pagac Drive, Chicago, Illinois…
            </Text>
          </View>
          <View style={styles.map}>
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
