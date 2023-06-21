import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {COLORS, STYLES} from '@/themes';
import BestSpecialists from '@/components/features/Discover/BestSpecialists';
import SpecialOffers from '@/components/features/Discover/SpecialOffers';

const Discover = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View
          style={[STYLES.FlexRow, STYLES.JustifyBetween, STYLES.ItemsCenter]}>
          <Text style={styles.name}>
            Hi <Text style={{color: COLORS.WARNING}}>Jackson</Text>
          </Text>
          <TouchableOpacity style={styles.notification}>
            <Image
              style={STYLES.FlexShrink}
              source={require('@/assets/images/icons/bell.png')}
            />
            <Text style={styles.badge}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={[STYLES.FlexRow, STYLES.ItemsCenter, styles.addressInfo]}>
          <Image source={require('@/assets/images/icons/marker.png')} />
          <Text style={styles.address}>
            301 Dorthy Walks, Chicago, Illinois, US.
          </Text>
        </View>
        <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
          <View style={styles.filterInputContainer}>
            <Image
              source={require('@/assets/images/icons/search.png')}
              style={styles.searchImage}
            />
            <TextInput
              placeholder="Find a salon, specialists,…"
              style={styles.filterInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('@/assets/images/icons/filter.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <BestSpecialists />
        <SpecialOffers />
      </View>
    </ScrollView>
  );
};

export default Discover;
