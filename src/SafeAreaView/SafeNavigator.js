import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import { TabNavigator, StackNavigator } from 'react-navigation';

export default StackNavigator({
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
      screen: Screen2,
    },
  }, {
    headerMode: 'none',
  });