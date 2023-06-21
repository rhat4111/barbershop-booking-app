import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ColorMatrix, invert} from 'react-native-color-matrix-image-filters';
import styles from './styles';
import TextField from '@/components/common/TextField';

const Register = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <ColorMatrix matrix={invert()}>
            <Image source={require('@/assets/images/icons/arrow_left.png')} />
          </ColorMatrix>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Create new Account</Text>
      <View style={styles.form}>
        <TextField label="Name" placeholder="Enter your Name" />
        <TextField label="Email" placeholder="Enter your Email" />
        <TextField label="Phone No" placeholder="Enter your Phone No" />
        <TextField label="Password" type="password" placeholder="Enter your Password" />
        <TextField label="Password" type="password" placeholder="Enter your Confirm Password" />
        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>You have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
