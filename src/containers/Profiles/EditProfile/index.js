import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import TextField from '@/components/common/TextField';
import styles from './styles';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Profiles')}>
            <Image
              source={require('@/assets/images/icons/arrow_left_dark.png')}
            />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Account Information</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.avatarContainer}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('@/assets/images/avatar.png')}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.selectAvatarButton}>
              <Image source={require('@/assets/images/icons/plus.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.card}>
          <TextField label="Full Name" />
          <TextField type="date" label="Date of Birth" />
          <TextField type="email" label="Email" />
          <TextField type="number" label="Phone Number" />
          <TextField type="password" label="Password" marginBottom={1} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
