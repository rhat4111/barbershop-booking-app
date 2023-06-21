import {createStackNavigator} from 'react-navigation-stack';

import Welcome from '@/containers/Welcome';
import Login from '@/containers/Auth/Login';
import ForgotPassword from '@/containers/Auth/ForgotPassword';
import Verification from '@/containers/Auth/Verification';
import ResetPassword from '@/containers/Auth/ResetPassword';
import Register from '@/containers/Auth/Register';
import MainNavigator from './main-navigator';
import ServiceDetail from '@/containers/ServiceDetail';
import PopularServices from '@/containers/PopularServices';
import PackageDetail from '@/containers/Package/Detail';
import BookAppointment from '@/containers/BookAppointment';
import EditProfile from '@/containers/Profiles/EditProfile';
import InviteFriends from '@/containers/Profiles/InviteFriends';
import VideoCall from '@/containers/VideoCall';
import Chat from '@/containers/Chat';

const AuthNavConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Main: MainNavigator,
  VideoCall: VideoCall,
  Chat: Chat,
  PopularServices: PopularServices,
  ServiceDetail: ServiceDetail,
  PackageDetail: PackageDetail,
  BookAppointment: BookAppointment,
  EditProfile: EditProfile,
  InviteFriends: InviteFriends,
  Welcome: Welcome,
  Login: Login,
  ForgotPassword: ForgotPassword,
  Verification: Verification,
  ResetPassword: ResetPassword,
  Register: Register,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavConfig);

export default AuthNavigator;
