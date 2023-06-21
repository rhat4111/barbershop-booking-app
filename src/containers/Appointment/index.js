import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Ongoing from '@/components/features/Appointment/Ongoing';
import History from '@/components/features/Appointment/History';
import {COLORS} from '@/themes';
import styles from './styles';

const Appointment = ({navigation}) => {
  const tabs = [
    {
      id: 'ongoing',
      label: 'Ongoing',
    },
    {
      id: 'history',
      label: 'History',
    },
  ];

  const [activeTab, setActiveTab] = useState('ongoing');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {tabs.map(tab => {
          return (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                {
                  borderBottomColor:
                    activeTab === tab.id ? COLORS.WARNING : COLORS.LIGHT,
                },
              ]}
              onPress={() => {
                setActiveTab(tab.id);
              }}>
              <Text
                style={[
                  styles.tabTxt,
                  {
                    color:
                      activeTab === tab.id ? COLORS.WARNING : COLORS.SECONDARY,
                  },
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.body}>
        {activeTab === 'ongoing' ? <Ongoing /> : <History />}
      </View>
    </ScrollView>
  );
};

export default Appointment;
