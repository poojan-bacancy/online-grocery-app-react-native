import React from 'react';
import {TextInput,Image, TouchableOpacity , ScrollView , KeyboardAvoidingView ,View,Text,StyleSheet} from 'react-native';
import CustomButton from '../../src/components/CustomButton';
import Dimensions from '../../constants/Dimensions';

const SignUpScreen = props => {
    return (
        <KeyboardAvoidingView style={styles.screen} behavior="height" keyboardVerticalOffset = { 40 }>
            <ScrollView>
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
                <View style={{flexDirection : 'row'}}><Text>By continuing you agree to our </Text><TouchableOpacity><Text style={styles.pressableText}>Terms of Service</Text></TouchableOpacity><Text> and</Text></View><TouchableOpacity><Text style={styles.pressableText}>Privacy Policy</Text></TouchableOpacity>
            </View>
            
            <View style={{alignItems : 'center'}}>
                <CustomButton label="Sign Up" onPress={() => props.navigation.navigate('Grocery')} style={styles.button}/>
            </View>

            <View style={styles.askSignUpText}>
                <Text>Already have an account? </Text><TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}><Text style={styles.pressableText}>SignIn</Text></TouchableOpacity>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        height : Dimensions.height * 65,
        width : Dimensions.width * 57
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
        marginTop : 30,
        
    },
    formField : {
        marginTop : 15
    },
    input:{
        borderBottomColor : '#707070',
        borderBottomWidth : 1
    },
    belowForm :{
        marginTop : 5,
        marginHorizontal : 18,
        
    },
    button : {
        marginTop : 40 , 
        borderRadius : 40 , 
    },
    askSignUpText :{ marginTop : 5,flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center'},
    pressableText : { 
        color:'#53B175',

    }
});

export default SignUpScreen;