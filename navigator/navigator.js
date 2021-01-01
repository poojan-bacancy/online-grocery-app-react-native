import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from "../screens/SignInScreen";
const groceryNavigator = createStackNavigator({
    //Splash : SplashScreen
    Onboarding : OnboardingScreen
    //Signin : SignInScreen
});


export default createAppContainer(groceryNavigator);