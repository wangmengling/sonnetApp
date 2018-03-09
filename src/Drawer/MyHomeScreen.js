import React from 'react';
import { View,StyleSheet , Text, Button, Image } from 'react-native';
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
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
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }
export default MyHomeScreen;  