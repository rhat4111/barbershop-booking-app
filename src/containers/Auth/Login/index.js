import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  brightness,
  ColorMatrix,
  concatColorMatrices,
  invert,
} from 'react-native-color-matrix-image-filters';
import TextField from '@/components/common/TextField';
import styles from './styles';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <ColorMatrix matrix={concatColorMatrices([brightness(0), invert()])}>
          <Image source={require('@/assets/images/logo.png')} />
        </ColorMatrix>
      </View>
      <View style={styles.form}>
        <TextField label="Email" />
        <TextField type="password" label="Password" />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Discover')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.socialHeader}>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.socialTitle}>Or sign in with</Text>
          </View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.socialBody}>
          <Image
            style={styles.socialItem}
            source={require('@/assets/images/icons/Fb.png')}
          />
          <Image
            style={styles.socialItem}
            source={require('@/assets/images/icons/Twitter.png')}
          />
          <Image
            style={styles.socialItem}
            source={require('@/assets/images/icons/Whatsapp.png')}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>You don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
