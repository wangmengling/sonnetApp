import  React from "react";
import { View, Text, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
export default class Screen2 extends React.Component {
    render() {
      return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#ecf0f1"
          />
          <Text style={styles.paragraph}>
            Dark Screen
          </Text>
          <Button
            title="Next screen"
            onPress={() => this.props.navigation.navigate('Screen1')}
          />
        </SafeAreaView>
      );
    }
  }