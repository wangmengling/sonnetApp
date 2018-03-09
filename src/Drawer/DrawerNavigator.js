
import MyHomeScreen from "./MyHomeScreen";
import React from "react";
import { StyleSheet } from "react-native";
import MyNotificationsScreen from "./MyNotificationsScreen";
import {DrawerNavigator } from 'react-navigation';

  
  const MyDrawerApp = DrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });


  export default MyDrawerApp;
  