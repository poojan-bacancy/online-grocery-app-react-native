import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

const groceryNavigator = createStackNavigator({
    //Splash : SplashScreen
    Onboarding : OnboardingScreen
});


export default createAppContainer(groceryNavigator);