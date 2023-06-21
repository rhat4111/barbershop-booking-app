import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../themes';
import Message from 'components/features/Messages/Message';
import Call from 'components/features/Messages/Call';
import styles from './styles';

const Messages = ({navigation}) => {
  const tabs = [
    {
      id: 'messages',
      label: 'Messages',
    },
    {
      id: 'calls',
      label: 'Calls',
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id || '');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {tabs.map(tab => {
          return (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                {
                  borderBottomColor:
                    tab.id === activeTab ? COLORS.WARNING : COLORS.WHITE,
                  borderBottomWidth: 1,
                },
              ]}
              onPress={() => setActiveTab(tab.id)}>
              <Text
                style={[
                  styles.tabTxt,
                  {
                    color:
                      tab.id === activeTab ? COLORS.WARNING : COLORS.SECONDARY,
                    fontFamily:
                      tab.id === activeTab ? 'Sarala-Bold' : 'Sarala-Regular',
                  },
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView>
        {activeTab === 'messages' ? <Message /> : <Call />}
      </ScrollView>
    </View>
  );
};

export default Messages;
