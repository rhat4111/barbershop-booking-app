import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import TextField from '@/components/common/TextField';

const ResetPassword = ({navigation}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('@/assets/images/icons/arrow_left.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.description}>
          Enter your new password and confirm it.
        </Text>
        <TextField type="password" label="New Password" />
        <TextField type="password" label="Confirm new Password" />
        <TouchableOpacity
          style={styles.reset}
          onPress={() => setIsShowModal(true)}>
          <Text style={styles.resetText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade" transparent={true} visible={isShowModal}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => setIsShowModal(false)}>
            <View style={styles.modalBg} />
          </TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Image
              source={require('@/assets/images/icons/checkmark-circle-outline.png')}
            />
            <Text style={styles.modalTitle}>Congratulation!</Text>
            <Text style={styles.modalContent}>
              Your password has been completely reset, login and use the app
            </Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ResetPassword;
