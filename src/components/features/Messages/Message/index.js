import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const Message = ({navigation}) => {
  const messages = [
    {
      name: 'Marguerite Cross Da…',
      avatar: require('@/assets/images/messages/1.png'),
      online: true,
      history: 'Hi Jackson, can you tell …',
      time: 'Now',
    },
    {
      name: 'Caroline Briggs Salon',
      avatar: require('@/assets/images/messages/2.png'),
      online: false,
      history: 'Oh, so nice.',
      time: '8:30 AM',
    },
    {
      name: 'Norah Beauty Salon',
      avatar: require('@/assets/images/messages/3.png'),
      online: true,
      history: 'Yah, you can call me at 3…',
      time: 'Yesterday',
    },
    {
      name: 'Sherman Barber Shop',
      avatar: require('@/assets/images/messages/4.png'),
      online: true,
      history: 'Okay, let me check this.',
      time: '2 days ago',
    },
    {
      name: 'Dale Howard & Friends',
      avatar: require('@/assets/images/messages/5.png'),
      online: false,
      history: 'Thank you.',
      time: 'Jun 10',
    },
    {
      name: 'Young Girls Salon',
      avatar: require('@/assets/images/messages/6.png'),
      online: false,
      history: 'You can come in the aftern…',
      time: 'Jun 2',
    },
  ];

  return (
    <View>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder="Search..." />
        <TouchableOpacity style={styles.chatButton}>
          <Image source={require('@/assets/images/icons/chat_plus.png')} />
        </TouchableOpacity>
      </View>
      <View>
        {messages.map((message, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => navigation.navigate('Chat')}>
              <View style={styles.mainInfo}>
                <View style={styles.avatarContainer}>
                  <Image source={message.avatar} style={styles.avatar} />
                  {message.online && <View style={styles.circle}></View>}
                </View>
                <View>
                  <Text style={styles.name}>{message.name}</Text>
                  <Text style={styles.history}>{message.history}</Text>
                </View>
              </View>
              <Text style={styles.time}>{message.time}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default withNavigation(Message);
