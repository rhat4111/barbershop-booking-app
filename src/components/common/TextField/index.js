import React, {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import {COLORS} from '@/themes';
import {useEffect} from 'react/cjs/react.development';

const ShowIcon = require('@/assets/images/icons/eye.png');
const HideIcon = require('@/assets/images/icons/eye-slash.png');

const TextField = props => {
  const [date, setDate] = useState(new Date());
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(
    props.type === 'password' && true,
  );

  const prefixZero = string => {
    return `0${string}`.slice(-2);
  };

  const getDateString = date => {
    if (props.type === 'date') {
      return `${prefixZero(date.getMonth() + 1)}/${prefixZero(
        date.getDate(),
      )}/${date.getFullYear()}`;
    } else {
      return `${prefixZero(date.getHours())}:${prefixZero(date.getMinutes())}`;
    }
  };

  const [borderColor, setBorderColor] = useState(COLORS.LIGHT);

  return (
    <View style={[styles.formGroup, {marginBottom: props.marginBottom || 30}]}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TextInput
        onFocus={() => setBorderColor(COLORS.WARNING)}
        onBlur={() => setBorderColor(COLORS.LIGHT)}
        secureTextEntry={isShowPassword}
        placeholder={props.placeholder}
        style={[
          styles.textField,
          {paddingRight: props.icon || props.type === 'password' ? 40 : 0},
          {borderColor},
          props.style,
        ]}
        defaultValue={
          props.type === 'date' || props.type === 'time'
            ? getDateString(date)
            : ''
        }
        onPressIn={() => setIsShowModal(true)}
      />

      {props.icon && (
        <TouchableOpacity style={styles.icon}>
          <Image source={props.icon} />
        </TouchableOpacity>
      )}

      {props.type === 'password' && (
        <TouchableOpacity
          style={styles.statusShowPassword}
          onPress={() => setIsShowPassword(!isShowPassword)}>
          <Image source={!isShowPassword ? ShowIcon : HideIcon} />
        </TouchableOpacity>
      )}
      {props.type === 'date' ||
        (props.type === 'time' && (
          <Modal animationType="fade" transparent={true} visible={isShowModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalBg} />
              <View style={styles.modalView}>
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  androidVariant="nativeAndroid"
                  mode={props.type}
                />
                <TouchableOpacity
                  style={styles.okButton}
                  onPress={() => {
                    setIsShowModal(false);
                  }}>
                  <Text style={styles.okText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        ))}
    </View>
  );
};

export default TextField;
