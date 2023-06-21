import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {COLORS} from '@/themes';
import styles from './styles';

const MyPackages = ({navigation}) => {
  const [activeServices, setActiveServices] = useState([]);
  const services = [
    {
      name: 'July 2021 Promo - 10 Sessions',
      leftSessionCount: 10,
      expireDate: '08-18-2022 09:37 AM',
      items: [
        'Hair Cut(Men)',
        'Hair Cut & Beard',
        'Brown spot',
        'Spa Manicure',
        "Women's Cut",
        'Full Leg + Bikini',
        'Laser Hair Romoval',
      ],
    },
  ];

  const renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.txt}>{section.name}</Text>
          <Text style={styles.txt}>
            Session Left: {section.leftSessionCount}
          </Text>
          <Text style={styles.txt}>Expiry Date: {section.expireDate}</Text>
        </View>
        <View>
          {isActive ? (
            <Image source={require('@/assets/images/icons/arrow_up.png')} />
          ) : (
            <Image source={require('@/assets/images/icons/arrow_down.png')} />
          )}
        </View>
      </View>
    );
  };

  const handleChange = activeSections => {
    setActiveServices(activeSections);
  };

  const renderContent = section => {
    return (
      <View style={styles.content}>
        {section.items.map((item, index) => {
          return (
            <View style={styles.service} key={index}>
              <Text style={styles.txt}>{item}</Text>
              <TouchableOpacity
                style={styles.bookBtn}
                onPress={() => navigation.navigate('Employee')}>
                <Text style={styles.bookTxt}>Redeem</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Accordion
          sections={services}
          activeSections={activeServices}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={handleChange}
          underlayColor={COLORS.WHITE}
        />
      </ScrollView>
    </>
  );
};

export default withNavigation(MyPackages);
