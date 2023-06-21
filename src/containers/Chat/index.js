import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {STYLES} from '@/themes';
import styles from './styles';

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('@/assets/images/icons/arrow_left_dark.png')}
            />
          </TouchableOpacity>
          <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
            <Image
              source={require('@/assets/images/messages/1.png')}
              style={styles.avatar}
            />
            <Text style={styles.name}>Marguerite Cross Da…</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('@/assets/images/icons/phone_black.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/icons/dot_more.png')}
            style={styles.button}
          />
        </TouchableOpacity>
        <TextInput style={styles.message} />
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/icons/send_warning.png')}
            style={styles.button}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;
