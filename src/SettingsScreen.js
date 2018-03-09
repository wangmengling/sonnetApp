import React from 'react';
import { View, Text, Button } from 'react-native';
class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
        // headerStyle: {
        //     backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          { /* other code from before here */ }
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }

  export default SettingsScreen;