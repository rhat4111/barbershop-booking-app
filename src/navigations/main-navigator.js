import React from 'react';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {COLORS} from '@/themes';

import Discover from '@/containers/Discover';
import Nearby from '@/containers/Nearby';
import Appointment from '@/containers/Appointment';
import Messages from '@/containers/Messages';
import Menu from '@/containers/Menu';
import Profiles from '@/containers/Profiles/List';
import WaitingList from '@/containers/WaitingList';
import MyPackages from '@/containers/MyPackages';
import Notifications from '@/containers/Notifications';

const TabNavigatorConfig = {
  initialRouteName: 'Nearby',
  backBehavior: 'history',
  tabBarOptions: {
    style: {
      height: 68,
      backgroundColor: COLORS.WHITE,
      borderTopColor: COLORS.SECONDARY,
    },
  },
};

const TabBarIcon = ({active, normal, focused}) => {
  return <Image source={focused ? active : normal} style={{top: -5}} />;
};

const TabBarLabel = ({focused, label}) => (
  <Text
    style={{
      fontFamily: focused ? 'Sarala-Bold' : 'Sarala-Regular',
      fontSize: 10,
      color: focused ? COLORS.WARNING : '#C5CEE0',
      textAlign: 'center',
      bottom: 15,
    }}>
    {label}
  </Text>
);

const RouteConfigs = {
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          normal={require('@/assets/images/navigation/discover.png')}
          active={require('@/assets/images/navigation/discover_active.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="Discover" {...props} />,
    },
  },
  Nearby: {
    screen: Nearby,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          normal={require('@/assets/images/navigation/nearby.png')}
          active={require('@/assets/images/navigation/nearby_active.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="Nearby" {...props} />,
    },
  },
  Appointment: {
    screen: Appointment,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          normal={require('@/assets/images/navigation/appointment.png')}
          active={require('@/assets/images/navigation/appointment_active.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="Appointment" {...props} />,
    },
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          normal={require('@/assets/images/navigation/message.png')}
          active={require('@/assets/images/navigation/message_active.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="Messages" {...props} />,
    },
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          normal={require('@/assets/images/navigation/more.png')}
          active={require('@/assets/images/navigation/more_active.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="" {...props} />,
    },
  },
  Profiles: {
    screen: Profiles,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
  WaitingList: {
    screen: WaitingList,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
  MyPackages: {
    screen: MyPackages,
    navigationOptions: {
      tabBarButtonComponent: () => null,
    },
  },
};

const MainNavigator = createBottomTabNavigator(
  RouteConfigs,
  TabNavigatorConfig,
);

export default MainNavigator;
