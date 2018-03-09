import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import SettingsScreen from "./SettingsScreen";
import ModalScreen from "./ModalScreen";

// const RootStack = StackNavigator(
//     {
//       Home: {
//         screen: HomeScreen,
//       },
//       Details: {
//         screen: DetailsScreen,
//       },
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );

//   export default RootStack;

  const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });
  
  const SettingsStack = StackNavigator({
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
  },
  {
    headerMode: 'none',
  });

  const RootStack = StackNavigator(
    {
      Main: {
        screen: HomeStack,
      },
      MyModal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

//   <RootStack />
  
  export default TabNavigator(
    {
      Home: { screen: HomeStack },
      Settings: { screen: SettingsStack },
    },
    {
      /* Other configuration remains unchanged */
    //   tabBarComponent: () => null,
    }
  );