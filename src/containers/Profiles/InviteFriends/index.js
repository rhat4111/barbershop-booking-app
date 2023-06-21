import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {STYLES} from '@/themes';

const InviteFriends = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('@/assets/images/icons/arrow_left_dark.png')}
          />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Invite Friends</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <Image source={require('@/assets/images/artwork.png')} />
          <Text style={styles.description}>
            Please share the code below for your friends to join the HASA.
          </Text>
          <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
            <Text style={styles.randomKey}>HK457fb068</Text>
            <TouchableOpacity style={styles.copyBtn}>
              <Text style={styles.copyTxt}>Copy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialCards}>
          <View style={styles.item}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/facebook.png')} />
              <Text style={styles.name}>Facebook</Text>
            </View>
            <Image source={require('@/assets/images/icons/arrow_right.png')} />
          </View>
          <View style={styles.item}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/twitter.png')} />
              <Text style={styles.name}>Twitter</Text>
            </View>
            <Image source={require('@/assets/images/icons/arrow_right.png')} />
          </View>
          <View style={styles.item}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/instagram.png')} />
              <Text style={styles.name}>Instagram</Text>
            </View>
            <Image source={require('@/assets/images/icons/arrow_right.png')} />
          </View>
          <View style={styles.item}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image source={require('@/assets/images/contacts.png')} />
              <Text style={styles.name}>Contacts</Text>
            </View>
            <Image source={require('@/assets/images/icons/arrow_right.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InviteFriends;
