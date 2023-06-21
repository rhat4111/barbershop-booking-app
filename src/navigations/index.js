import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthNavigator from './auth-navigator';
import MainNavigator from './main-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
