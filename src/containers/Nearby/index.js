import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '@/components/features/Nearby/Card';
import MapView from 'react-native-maps';
import styles from './styles';
import {STYLES} from '@/themes';

const Nearby = ({navigation}) => {
  const [active, setActive] = useState(false);
  const list = [
    {
      name: 'Trevor Rice Salon',
      address: '75 Jast Expressway, Chicago, Illinois…',
      rate: '4.5',
      distance: '4.5 Km',
      avatar: require('@/assets/images/nearby/1.png'),
    },
    {
      name: 'Lee Gomez Beauty Hair',
      address: '633 Gulgowski Spurs Apt, Chicago, Il…',
      rate: '4.3',
      distance: '7.8 Km',
      avatar: require('@/assets/images/nearby/2.png'),
    },
    {
      name: 'Marguerite Cross Day Salon',
      address: '36 Selina Landing Suite, Chicago, Illin…',
      rate: '4.5',
      distance: '12.1 Km',
      avatar: require('@/assets/images/nearby/3.png'),
    },
    {
      name: 'Sue Poole House',
      address: '5765 Kassulke Ridges Suite, Chicago…',
      rate: '4.0',
      distance: '17.3 Km',
      avatar: require('@/assets/images/nearby/4.png'),
    },
    {
      name: 'Lou Becker Hair Studio',
      address: '937 Hal Neck, Chicago, Illinois, US',
      rate: '4.2',
      distance: '18 Km',
      avatar: require('@/assets/images/nearby/5.png'),
    },
    {
      name: 'The Word of Women Salon',
      address: '4139 Mante Mount Apt, Chicago, Illin…',
      rate: '4.5',
      distance: '23 Km',
      avatar: require('@/assets/images/nearby/6.png'),
    },
    {
      name: 'Tommy Henry Barber Shop',
      address: '5831 Harold Mountain',
      rate: '4.5',
      distance: '4.5 Km',
      avatar: require('@/assets/images/nearby/7.png'),
    },
  ];

  return (
    <View style={styles.container}>
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
      {active && <View style={styles.bg}></View>}
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Salon Near You</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('@/assets/images/icons/filter_dark.png')} />
          </TouchableOpacity>
        </View>
      </View>
      {!active && (
        <ScrollView horizontal={true} style={styles.overviewBoard}>
          {list.map((item, index) => {
            return (
              <View key={index} style={styles.overviewItem}>
                <Card {...item} />
              </View>
            );
          })}
        </ScrollView>
      )}
      <View style={[styles.board, {top: active ? 80 : 515}]}>
        <TouchableOpacity
          style={{rotation: active ? 0 : 180}}
          onPress={() => setActive(!active)}>
          <Image source={require('@/assets/images/down.png')} />
        </TouchableOpacity>
        <View style={styles.boardHeader}>
          <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
            <Image source={require('@/assets/images/icons/location.png')} />
            <Text>Chicago, Illinois, US.</Text>
          </View>
          <TextInput style={styles.input} />
        </View>
        <ScrollView style={styles.list}>
          {list.map((item, index) => {
            return (
              <View key={index} style={{marginBottom: 15}}>
                <Card {...item} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Nearby;
