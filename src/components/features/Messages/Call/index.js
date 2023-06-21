import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const Call = ({navigation}) => {
  const calls = [
    {
      name: 'Marguerite Cro…',
      avatar: require('@/assets/images/messages/1.png'),
      type: 'out',
    },
    {
      name: 'Marguerite Cro…',
      avatar: require('@/assets/images/messages/2.png'),
      type: 'in',
    },
    {
      name: 'Marguerite Cro…',
      avatar: require('@/assets/images/messages/3.png'),
      type: 'out',
    },
    {
      name: 'Marguerite Cro…',
      avatar: require('@/assets/images/messages/4.png'),
      type: 'out',
    },
    {
      name: 'Marguerite Cro…',
      avatar: require('@/assets/images/messages/5.png'),
      type: 'in',
    },
    {
      name: 'Marguerite Cro…',
      avatar: require('@/assets/images/messages/6.png'),
      type: 'out',
    },
  ];
  return (
    <View>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder="Search..." />
      </View>
      <View>
        {calls.map((call, index) => {
          return (
            <View key={index} style={styles.item}>
              <View style={styles.mainInfo}>
                <Image source={call.avatar} style={styles.avatar} />
                <View>
                  <Text style={styles.name}>{call.name}</Text>
                  <View style={styles.type}>
                    {call.type === 'in' ? (
                      <>
                        <Image
                          source={require('@/assets/images/icons/phone_success.png')}
                        />
                        <Text style={styles.typeTxt}>You call them</Text>
                      </>
                    ) : (
                      <>
                        <Image
                          source={require('@/assets/images/icons/phone_danger.png')}
                        />
                        <Text style={styles.typeTxt}>Them missed call</Text>
                      </>
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity
                  style={[styles.button, styles.videoCallButton]}
                  onPress={() => navigation.navigate('VideoCall')}>
                  <Image source={require('@/assets/images/icons/carema.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.callButton]}>
                  <Image source={require('@/assets/images/icons/call.png')} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default withNavigation(Call);
