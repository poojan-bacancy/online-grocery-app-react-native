import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/auth/SplashScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SignInScreen from "../screens/auth/SignInScreen";
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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const authFlowNavigator = createStackNavigator({
    // Splash : SplashScreen,
    // Onboarding : OnboardingScreen,
    // Signin : SignInScreen,
    // Verification : VerificationScreen,
    // SelectLocation : SelectLocationScreen,
    // LogIn : LogInScreen,
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
    Shop : {
        screen : shopTab,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Entypo name='shop' size={23} color={tabInfo.tintColor} />
            }
        }
    },
    Explore : {
        screen : exploreTab,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <MaterialCommunityIcons name='text-search' size={23} color={tabInfo.tintColor} />
            }
        }
    },
    Cart : {
        screen : CartScreen,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Entypo name='shopping-cart' size={23} color={tabInfo.tintColor} />
            }
        }
    },
    Favourites : {
        screen : FavouritesScreen,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <Entypo name='heart-outlined' size={23} color={tabInfo.tintColor} />
            }
        }
    },
    Account : {
        screen : AccountScreen,
        navigationOptions : {
            tabBarIcon : (tabInfo) => {
                return <AntDesign name='user' size={23} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    activeColor : '#53B175',
    shifting : false,
    barStyle : {
        backgroundColor : 'white',
    }
});

const mainNavigator = createSwitchNavigator({
    Auth : authFlowNavigator,
    Grocery : groceryNavigator
});


export default createAppContainer(mainNavigator);