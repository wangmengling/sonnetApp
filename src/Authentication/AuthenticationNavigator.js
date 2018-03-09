import { StackNavigator, SwitchNavigator } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import HomeScreen from "./HomeScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";
import SignInScreen from "./SignInScreen";
import OtherScreen from "./OtherScreen";

const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = StackNavigator({ SignIn: SignInScreen });

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);