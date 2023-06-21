import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TextField from '@/components/common/TextField';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('@/assets/images/icons/arrow_left.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.description}>
          Please enter your Email so we can help you recover your password.
        </Text>
        <TextField label="Email" />
        <TouchableOpacity
          style={styles.send}
          onPress={() => navigation.navigate('Verification')}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
