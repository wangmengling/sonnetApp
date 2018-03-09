import React from 'react';
import { View, Text, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    
        return {
          headerLeft: (
            <Button
              onPress={() => navigation.navigate('MyModal')}
              title="Info"
              color="#fff"
            />
          ),
          /* the rest of this config is unchanged */
        };
      };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                { /* other code from before here */}
                <Text> Home </Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}
export default HomeScreen;
// export default StackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });