import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from './styles';
import {STYLES} from '@/themes';

const Payment = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <View style={styles.service}>
        <View style={styles.serviceOne}>
          <View style={styles.serviceOneOne}>
            <Image
              source={require('@/assets/images/history/1.png')}
              style={styles.serviceAvatar}
            />
            <View>
              <Text style={styles.name}>Marguerite Cross Day Salon</Text>
              <Text style={styles.address}>
                171 Pagac Drive, Chicago, Illinois, US.
              </Text>
            </View>
          </View>
          <View style={styles.serviceOneTwo}>
            <Text style={styles.type}>Hair Styling</Text>
            <View
              style={[STYLES.FlexRow, STYLES.ItemsCenter, {marginBottom: 12}]}>
              <Image
                source={require('@/assets/images/icons/user.png')}
                style={{marginRight: 5}}
              />
              <Text style={styles.staff}>Luis Delgado</Text>
            </View>
            <View
              style={[
                STYLES.FlexRow,
                STYLES.JustifyBetween,
                STYLES.ItemsCenter,
              ]}>
              <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
                <Text style={styles.time}>1:30 - 2:30 PM</Text>
                <Image
                  source={require('@/assets/images/icons/dot.png')}
                  style={{marginHorizontal: 10}}
                />
                <Text style={styles.time}>June 15,2020</Text>
              </View>
              <Text style={styles.time}>$25</Text>
            </View>
          </View>
        </View>
        <View style={styles.serviceTwo}>
          <Text style={styles.payText}>Total Pay</Text>
          <Text style={styles.price}>$25</Text>
        </View>
      </View>
      <View style={styles.payment}>
        <View style={styles.paymentHeader}>
          <Text style={styles.paymentTitle}>Payment Methods</Text>
          <Text style={styles.add}>Add new method</Text>
        </View>
        <View style={styles.paymentBody}>
          <View style={styles.item}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image
                source={require('@/assets/images/payment/1.png')}
                style={styles.paymentAvatar}
              />
              <Text style={styles.paymentName}>**** **** *325</Text>
            </View>
            <CheckBox
              isChecked={true}
              checkedImage={
                <Image
                  source={require('@/assets/images/checkbox/checked.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('@/assets/images/checkbox/unchecked.png')}
                />
              }
            />
          </View>
          <View style={styles.item}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Image
                source={require('@/assets/images/payment/2.png')}
                style={styles.paymentAvatar}
              />
              <Text style={styles.paymentName}>**** **** *112</Text>
            </View>
            <CheckBox
              isChecked={false}
              checkedImage={
                <Image
                  source={require('@/assets/images/checkbox/checked.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('@/assets/images/checkbox/unchecked.png')}
                />
              }
            />
          </View>
          <View style={styles.item}>
            <View style={[STYLES.FlexRow, STYLES.ItemsCenter]}>
              <Text style={styles.paymentName}>Payment in cash</Text>
            </View>
            <CheckBox
              isChecked={false}
              checkedImage={
                <Image
                  source={require('@/assets/images/checkbox/checked.png')}
                />
              }
              unCheckedImage={
                <Image
                  source={require('@/assets/images/checkbox/unchecked.png')}
                />
              }
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[STYLES.ButtonStyle, styles.nextButton]}
        onPress={() => props.handleNext()}>
        <Text style={STYLES.ButtonTextStyle}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
