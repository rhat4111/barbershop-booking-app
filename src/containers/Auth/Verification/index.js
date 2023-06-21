import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {COLORS} from '@/themes';

const TextField = () => {
  const [borderColor, setBorderColor] = useState(COLORS.LIGHT);
  return (
    <TextInput
      onFocus={() => setBorderColor(COLORS.WARNING)}
      onEndEditing={e =>
        setBorderColor(e.nativeEvent.text ? COLORS.WARNING : COLORS.LIGHT)
      }
      style={[styles.textField, {borderColor}]}
      maxLength={1}
    />
  );
};

const Verification = ({navigation}) => {
  const [status, setStatus] = useState(false);
  const handleVerify = () => {
    !status ? setStatus(true) : navigation.navigate('ResetPassword');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('@/assets/images/icons/arrow_left.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Verification</Text>
        {!status ? (
          <Text style={styles.description}>
            Enter the OTP code from the phone we just sent you.
          </Text>
        ) : (
          <Text style={styles.failText}>
            Oh no! You entered wrong OTP code, please check it again.
          </Text>
        )}
        <View style={styles.formGroup}>
          <TextField />
          <TextField />
          <TextField />
          <TextField />
          <TextField />
        </View>
        <Text style={styles.resendText}>Resend on 0:24</Text>
        <TouchableOpacity style={styles.continue} onPress={handleVerify}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Verification;
