import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const VideoCall = ({navigation}) => {
  return (
    <View>
      <Image source={require('@/assets/images/video_call_bg.png')} />
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('@/assets/images/icons/arrow_left.png')} />
          </TouchableOpacity>
          <Text style={styles.name}>Marguerite Cross…</Text>
          <TouchableOpacity>
            <Image source={require('@/assets/images/icons/camera_sm.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('@/assets/images/icons/microphone_slash.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.endCall]}
            onPress={() => navigation.goBack()}>
            <Image source={require('@/assets/images/icons/phone_slash.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('@/assets/images/icons/camera_slash.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.me}>
        <Image source={require('@/assets/images/me.png')} />
      </View>
    </View>
  );
};

export default withNavigation(VideoCall);
