import React from 'react';
import {TextInput,Image, TouchableOpacity ,View,Text,StyleSheet} from 'react-native';

const SignUpScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../../assets/images/Group-color.png')}/>
            </View>
            <View style={styles.headerBlock}>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            <View style={styles.smallHeaderBLock}>
                <Text style={styles.smallHeaderText}>Enter your Credentials to continue</Text>
            </View>  
            <View style={styles.form}>
                <View style={styles.formField}>
                    <Text style={styles.smallHeaderText}>UserName</Text>
                    <TextInput style={styles.input}  />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.smallHeaderText}>Email</Text>
                    <TextInput style={styles.input}  />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.smallHeaderText}>Password</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            
            <View style={styles.belowForm}>
                <Text><Text>By continuing you agree to our </Text><TouchableOpacity><Text style={styles.pressableText}>Terms of Service</Text></TouchableOpacity><Text> and</Text><TouchableOpacity><Text style={styles.pressableText}>Privacy Policy</Text></TouchableOpacity></Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Grocery')} >
                    <Text style={styles.buttonText}>Sign Up</Text>    
            </TouchableOpacity>

            <View style={styles.askSignUpText}>
                <Text>Already have an account? </Text><TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}><Text style={styles.pressableText}>SignIn</Text></TouchableOpacity>
            </View>
        </View>
    );
}

SignUpScreen.navigationOptions = {
    headerShown : null
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    imageBlock :{
        justifyContent : 'center',
        alignItems : 'center',
        height : 170
    },
    image : {
        height : 55,
        width : 47
    },
    headerBlock : {
        marginTop : 30 , 
        marginHorizontal : 18
    },
    smallHeaderBLock : {
        marginTop : 10, 
        marginHorizontal : 18
    },
    headerText : {
        fontFamily:'Gilroy-Medium' , fontWeight : '600', fontSize:26
    },
    smallHeaderText : {
        fontFamily:'Gilroy-Medium' , fontWeight : '600', fontSize:16 , color : '#707070'
    },
    form:{
        marginHorizontal :18,
        marginTop : 30
    },
    formField : {
        marginTop : 15
    },
    input:{
        borderBottomColor : '#707070',
        borderBottomWidth : 1
    },
    belowForm :{
        marginHorizontal : 18,
        marginTop : 5,
        justifyContent : 'center',
    },
    
    button : {
        alignSelf : 'center',
        height : 65,
        width : '85%', 
        marginTop : 40 , 
        marginHorizontal : 22 , 
        borderRadius : 40 , 
        backgroundColor : '#53B175', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'center'
    },
    buttonText : {  
        color :'white' , 
        fontSize : 20
    },
    askSignUpText :{ marginTop : 5,flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center'},
    pressableText : { 
        color:'#53B175',

    }
});

export default SignUpScreen;