import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Appointment from '../../components/features/BookAppointment/Appointment';
import Payment from '../../components/features/BookAppointment/Payment';
import Summary from '../../components/features/BookAppointment/Summary';
import styles from './styles';
import {COLORS} from '@/themes';

const BookAppointment = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const labels = ['Book Appointment', 'Payment', 'Finished'];
  const customStyles = {
    labelFontFamily: 'Sarala-Bold',
    labelSize: 12,
    labelColor: COLORS.DARK,
    currentStepLabelColor: COLORS.DARK,
    stepIndicatorCurrentColor: COLORS.WARNING,
    stepIndicatorUnFinishedColor: '#C5CEE0',
    stepIndicatorFinishedColor: COLORS.WARNING,
    separatorUnFinishedColor: '#C5CEE0',
    separatorFinishedColor: COLORS.WARNING,
    stepStrokeUnFinishedColor: COLORS.WHITE,
    stepStrokeFinishedColor: COLORS.WHITE,
    stepStrokeCurrentColor: COLORS.WHITE,
    separatorStrokeWidth: 1,
    stepIndicatorLabelCurrentColor: COLORS.WHITE,
    stepStrokeWidth: 5,
    currentStepStrokeWidth: 5,
    stepIndicatorSize: 40,
    currentStepIndicatorSize: 40,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('@/assets/images/icons/arrow_left_dark.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Book Appointment</Text>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={index}
          labels={labels}
          stepCount={3}
        />
      </View>
      <ScrollView style={styles.body}>
        {index === 0 && <Appointment handleNext={() => setIndex(1)} />}
        {index === 1 && <Payment handleNext={() => setIndex(2)} />}
        {index === 2 && <Summary />}
      </ScrollView>
    </View>
  );
};

export default BookAppointment;
