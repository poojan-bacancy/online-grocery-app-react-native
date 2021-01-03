import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from "../screens/SignInScreen";
import NumberScreen from '../screens/NumberScreen';
import VerificationScreen from '../screens/VerificationScreen';

const groceryNavigator = createStackNavigator({
    //Splash : SplashScreen
    //Onboarding : OnboardingScreen
    Signin : SignInScreen,
    Number : NumberScreen,
    Verification : VerificationScreen
});


export default createAppContainer(groceryNavigator);