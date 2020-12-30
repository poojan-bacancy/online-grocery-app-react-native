import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';

const groceryNavigator = createStackNavigator({
    Splash : SplashScreen
});


export default createAppContainer(groceryNavigator);