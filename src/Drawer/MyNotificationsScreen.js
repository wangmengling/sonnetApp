import React from 'react';
import { View,StyleSheet, Text, Button,Image } from 'react-native';
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

  export default MyNotificationsScreen;