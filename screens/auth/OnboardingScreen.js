import React from 'react';
import { TouchableOpacity,Text, View,StyleSheet,Image, ImageBackground } from 'react-native';

const OnboardingScreen = props => {
    return  <View style={styles.screen} >
        <ImageBackground style={styles.image} source={require('../../assets/images/background.png')} >
        
        <View style={styles.secondHalf}>
        <Image style={styles.logo} source={require('../../assets/images/Group.png')} />
        <View style={styles.welcometextBlock} >
            <Text style={styles.welcomeText} >Welcome to our Store</Text>
        </View>
        <View style={styles.smalltextBlock} >
            <Text style={styles.smallText}>Ger your groceries in as fast as one hour</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Signin')} >
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
        flex: 1,
        
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
        height : 64,
        width : 54
    },
    welcometextBlock : {
        marginTop : 10,
        height : 86,
        width : '80%',
       
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
        width : '90%',
     
    },
    smallText : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 16,
        textAlign : 'center',
        color : '#FFFFFF',

    },
    button : {
        height : 67,
        width : '80%', 
        marginVertical: 40 , 
        marginHorizontal : 22 , 
        borderRadius : 19 , 
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