import React from 'react';
import { View,StyleSheet,Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OnboardingScreen = props => {
    return  <View style={styles.screen} >
        <ImageBackground style={styles.image} source={require('../assets/images/background.png')} >
        <View style={{height:'50%',width:'100%'}}></View>
        <View style={styles.secondHalf}>
        <Image style={styles.logo} source={require('../assets/images/Group.png')} />
        <Image style={styles.welcometext} source={require('../assets/images/welcometoourstore.png')} />
        <Image style={styles.smallWelcometext} source={require('../assets/images/smallWelcomeText.png')} />
        <TouchableOpacity>
        <Image style={styles.button} source={require('../assets/images/button.png')} />
        </TouchableOpacity>
        </View>
        </ImageBackground>
    </View> ;
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
        alignItems : 'center',
        justifyContent : 'flex-start'
    },
    logo : {
        height : 64,
        width : 54
    },
    welcometext : {
        marginTop : 10,
    },
    smallWelcometext : {
        marginTop : 15
    },
    button : {
        marginTop : 20
    }
});

export default OnboardingScreen;