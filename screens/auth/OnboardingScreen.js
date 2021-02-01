import React from 'react';
import { Text, View , StyleSheet , Image , ImageBackground } from 'react-native';
import CustomButton from '../../src/components/CustomButton';
import Dimensions from '../../constants/Dimensions';

const OnboardingScreen = props => {
    return  (
    <View style={styles.screen} >
        <ImageBackground style={styles.image} source={require('../../assets/images/background.png')} >
            <View style={styles.secondHalf}>
                <Image style={styles.logo} source={require('../../assets/images/Group.png')} />
                <View style={styles.welcometextBlock} >
                    <Text style={styles.welcomeText}>Welcome to our Store</Text>
                </View>
                <View style={styles.smalltextBlock} >
                    <Text style={styles.smallText}>Ger your groceries in as fast as one hour</Text>
                </View>
                <CustomButton label="Get Started" style={styles.button} onPress={() => props.navigation.navigate('Signin')}/>
            </View>
        </ImageBackground>
    </View>
    );
}

OnboardingScreen.navigationOptions = {
    headerShown : null
}

const styles = StyleSheet.create({
    screen : {
        flex: 1
    },
    image: {
        flex: 1,
        width : '100%',
        height : '100%'
    },
    secondHalf : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-end'
    },
    logo : {
        height : Dimensions.height * 76 ,
        width : Dimensions.width * 66
    },
    welcometextBlock : {
        paddingHorizontal : 15,
        marginTop : 10,
        height : Dimensions.height * 100,
        width : '80%'
    },
    welcomeText : {
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        fontSize : 48,
        textAlign : 'center',
        color : '#FFFFFF'
    },
    smalltextBlock : {
        marginTop : 20,
        height : '5%',
        width : '90%'
    },
    smallText : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 16,
        textAlign : 'center',
        color : '#FFFFFF'
    },
    button : {
        marginVertical : 40
    }
});

export default OnboardingScreen;