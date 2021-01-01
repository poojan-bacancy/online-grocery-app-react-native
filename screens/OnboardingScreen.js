import React from 'react';
import { TouchableOpacity,Text, View,StyleSheet,Image, ImageBackground } from 'react-native';

const OnboardingScreen = props => {
    return  <View style={styles.screen} >
        <ImageBackground style={styles.image} source={require('../assets/images/background.png')} >
        <View style={{height:'50%',width:'100%'}}></View>
        <View style={styles.secondHalf}>
        <Image style={styles.logo} source={require('../assets/images/Group.png')} />
        <View style={styles.welcometextBlock} >
            <Text style={styles.welcomeText} >Welcome to our Store</Text>
        </View>
        <View style={styles.smalltextBlock} >
            <Text style={styles.smallText}>Ger your groceries in as fast as one hour</Text>
        </View>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Get Started</Text>    
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
    welcometextBlock : {
        marginTop : 10,
        height : '23%',
        width : '70%',
       
    },
    welcomeText : {
        fontFamily : 'Gilroy-Regular',
        fontWeight : '600',
        fontSize : 48,
        textAlign : 'center',
        color : '#FFFFFF'
    },
    smalltextBlock : {
        marginTop : 5,
        height : '5%',
        width : '80%',
     
    },
    smallText : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 16,
        textAlign : 'center',
        color : '#FFFFFF',

    },
    button : {
        height : '18%',
        width : '80%', 
        marginTop : 40 , 
        marginHorizontal : 22 , 
        borderRadius : 25 , 
        backgroundColor : '#53B175', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'center'
    },
    buttonText : {  
        color :'white' , 
        fontSize : 20
    }
});

export default OnboardingScreen;