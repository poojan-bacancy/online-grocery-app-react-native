import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SignInScreen from "../screens/auth/SignInScreen";
import NumberScreen from '../screens/auth/NumberScreen';
import VerificationScreen from '../screens/auth/VerificationScreen';
import SelectLocationScreen from '../screens/auth/SelectLocationScreen';
import LogInScreen from '../screens/auth/LogInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import HomeScreen from '../screens/grocery/HomeScreen';
import ProductDetailScreen from '../screens/grocery/ProductDetailScreen';
import SearchScreen from '../screens/grocery/SearchScreen';
import ExploreCategoriesScreen from '../screens/grocery/ExploreCategoriesScreen';
import ExploreCategoriesDetailScreen from '../screens/grocery/ExploreCategoriesDetailScreen';
import FavouritesScreen from '../screens/grocery/FavouritesScreen';
import FiltersScreen from '../screens/grocery/FiltersScreen';
import CartScreen from '../screens/grocery/CartScreen';
import AccountScreen from '../screens/grocery/AccountScreen';

const authFlowNavigator = createStackNavigator({
    Splash : SplashScreen,
    Onboarding : OnboardingScreen,
    Signin : SignInScreen,
    Number : NumberScreen,
    Verification : VerificationScreen,
    SelectLocation : SelectLocationScreen,
    LogIn : LogInScreen,
    SignUp : SignUpScreen
});

const shopTab = createStackNavigator({
    Home : HomeScreen,
    ProductDetail : ProductDetailScreen,
    Search : SearchScreen
});

const exploreTab = createStackNavigator({
    Categories : ExploreCategoriesScreen,
    CategoriesDetail : ExploreCategoriesDetailScreen,
    Filters: FiltersScreen,
    Search : SearchScreen
});

const groceryNavigator = createMaterialBottomTabNavigator({
    Shop : shopTab,
    Explore : exploreTab,
    Cart : CartScreen,
    Favourites : FavouritesScreen,
    Account : AccountScreen
});

const mainNavigator = createSwitchNavigator({
    Auth : authFlowNavigator,
    Grocery : groceryNavigator
});


export default createAppContainer(mainNavigator);