import React, {useState} from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import About from '@/components/features/Detail/About';
import Services from '@/components/features/Detail/Services';
import Gallery from '@/components/features/Detail/Gallery';
import Review from '@/components/features/Detail/Review';
import SalonSpecialists from '@/components/features/Detail/SalonSpecialists';
import Header from '@/components/common/Header';
import {COLORS} from '@/themes';

const renderScene = SceneMap({
  about: About,
  services: Services,
  gallery: Gallery,
  review: Review,
  salon_specialists: SalonSpecialists,
});

const ServiceDetail = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'about', title: 'About'},
    {key: 'services', title: 'Services'},
    {key: 'gallery', title: 'Gallery'},
    {key: 'review', title: 'Reviews'},
    {key: 'salon_specialists', title: 'Salon Specialists'},
  ]);

  const renderTabBar = props => {
    return (
      <TabBar
        scrollEnabled={true}
        renderLabel={({route, focused}) => (
          <Text
            style={{
              display: 'flex',
              color: COLORS.DARK,
              fontSize: 17,
              fontFamily: 'Sarala-Regular',
              color: focused ? COLORS.WARNING : '#C5CEE0',
            }}>
            {route.title}
          </Text>
        )}
        {...props}
        tabStyle={{width: 'auto', marginRight: 40}}
        style={{
          justifyContent: 'center',
          height: 63,
          backgroundColor: COLORS.WHITE,
        }}
        indicatorStyle={{
          backgroundColor: COLORS.WARNING,
          height: 1,
        }}
      />
    );
  };

  return (
    <>
      <Header />
      <TabView
        style={{width: layout.width, minHeight: 500, height: 700}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
      />
    </>
  );
};

export default ServiceDetail;
