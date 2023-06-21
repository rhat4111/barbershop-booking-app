import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {COLORS, STYLES} from '@/themes';

const Profiles = ({navigation}) => {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Theresa Cohen</Text>
        <Text style={styles.email}>theresa_cohen68@example.com</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('EditProfile')}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <View style={styles.icon}>
                  <Image
                    source={require('@/assets/images/icons/payment.png')}
                  />
                </View>
                <Text style={styles.linkName}>Payment Methods</Text>
              </View>
              <Image
                source={require('@/assets/images/icons/arrow_right.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('EditProfile')}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <View style={styles.icon}>
                  <Image
                    source={require('@/assets/images/icons/account.png')}
                  />
                </View>
                <Text style={styles.linkName}>Account Information</Text>
              </View>
              <Image
                source={require('@/assets/images/icons/arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('EditProfile')}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <View style={styles.icon}>
                  <Image
                    source={require('@/assets/images/icons/payment.png')}
                  />
                </View>
                <Text style={styles.linkName}>Notifications</Text>
              </View>
              <Image
                source={require('@/assets/images/icons/arrow_right.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('InviteFriends')}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <View style={styles.icon}>
                  <Image
                    source={require('@/assets/images/icons/friends.png')}
                  />
                </View>
                <Text style={styles.linkName}>Invite Friends</Text>
              </View>
              <Image
                source={require('@/assets/images/icons/arrow_right.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('EditProfile')}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <View style={styles.icon}>
                  <Image
                    source={require('@/assets/images/icons/setting.png')}
                  />
                </View>
                <Text style={styles.linkName}>Settings</Text>
              </View>
              <Image
                source={require('@/assets/images/icons/arrow_right.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('EditProfile')}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <View style={styles.icon}>
                  <Image source={require('@/assets/images/icons/terms.png')} />
                </View>
                <Text style={styles.linkName}>Terms of services</Text>
              </View>
              <Image
                source={require('@/assets/images/icons/arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.card, {marginBottom: 0}]}>
            <View style={styles.link}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <View style={[styles.icon, {backgroundColor: COLORS.LIGHT}]}>
                  <Image source={require('@/assets/images/icons/logout.png')} />
                </View>
                <Text style={styles.linkName}>Log Out</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profiles;
