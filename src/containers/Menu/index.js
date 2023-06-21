import React from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Menu = ({navigation}) => {
  const menus = [
    {
      name: 'Profile',
      avatar: require('@/assets/images/navigation/user.png'),
      link: 'Profiles',
    },
    {
      name: 'Chat Box',
      avatar: require('@/assets/images/navigation/chat.png'),
      link: 'Chat',
    },
    {
      name: 'Waiting List',
      avatar: require('@/assets/images/navigation/list.png'),
      link: 'WaitingList',
    },
    {
      name: 'Notification',
      avatar: require('@/assets/images/navigation/list.png'),
      link: 'Notifications',
    },
    {
      name: 'My Packages',
      avatar: require('@/assets/images/navigation/dashboard.png'),
      link: 'MyPackages',
    },
    {
      name: 'Logout',
      avatar: require('@/assets/images/navigation/logout.png'),
      link: 'Login',
    },
  ];
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.menus}>
          {menus.map((menu, index) => {
            return (
              <View key={index} style={styles.menu}>
                <TouchableOpacity
                  style={styles.menuBtn}
                  onPress={() => navigation.navigate(menu.link)}>
                  <Image source={menu.avatar} style={styles.avatar} />
                  <Text style={styles.txt}>{menu.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default withNavigation(Menu);
