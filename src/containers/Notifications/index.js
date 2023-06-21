import React from 'react';
import {ScrollView, View} from 'react-native';
import Notification from '@/components/common/Notification';
import styles from './styles';

const Notifications = () => {
  const notifications = [
    {
      title: 'Booking Cancelled',
      description:
        'A booking for at Look Easy1 at 08-10-2021 19:40 with Looks has been cancelled',
      time: '08-13-2021 09:54 am',
      seen: false,
    },
    {
      title: 'Booking Cancelled',
      description:
        'A booking for at Look Easy1 at 08-10-2021 19:40 with Looks has been cancelled',
      time: '08-13-2021 09:54 am',
      seen: false,
    },
    {
      title: 'Booking Cancelled',
      description:
        'A booking for at Look Easy1 at 08-10-2021 19:40 with Looks has been cancelled',
      time: '08-13-2021 09:54 am',
      seen: false,
    },
    {
      title: 'Booking Cancelled',
      description:
        'A booking for at Look Easy1 at 08-10-2021 19:40 with Looks has been cancelled',
      time: '08-13-2021 09:54 am',
      seen: false,
    },
    {
      title: 'Booking Cancelled',
      description:
        'A booking for at Look Easy1 at 08-10-2021 19:40 with Looks has been cancelled',
      time: '08-13-2021 09:54 am',
      seen: false,
    },
    {
      title: 'Booking Cancelled',
      description:
        'A booking for at Look Easy1 at 08-10-2021 19:40 with Looks has been cancelled',
      time: '08-13-2021 09:54 am',
      seen: false,
    },
    {
      title: 'Booking Cancelled',
      description:
        'A booking for at Look Easy1 at 08-10-2021 19:40 with Looks has been cancelled',
      time: '08-13-2021 09:54 am',
      seen: false,
    },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.notifications}>
          {notifications.map((item, index) => {
            return <Notification key={index} {...item} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Notifications;
