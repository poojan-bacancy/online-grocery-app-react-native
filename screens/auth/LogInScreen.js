import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
//import PasswordInputText from 'react-native-hide-show-password-input';
import CustomButton from '../../src/components/CustomButton';

const LogInScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../../assets/images/Group-color.png')}/>
            </View>
            <View style={styles.headerBlock}>
                <Text style={styles.headerText}>Log In</Text>
            </View>
            <View style={styles.smallHeaderBLock}>
                <Text style={styles.smallHeaderText}>Enter your Email and Password.</Text>
            </View>  
            <View style={styles.form}>
                <View style={styles.formField}>
                    <Text style={styles.smallHeaderText}>Email</Text>
                    <TextInput style={styles.input}  />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.smallHeaderText}>Password</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            
            <TouchableOpacity style={styles.forgotpass} >
                <Text style={{color :'black'}}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{alignItems : 'center'}}>
            <CustomButton label="Log In" style={styles.button}/>
            </View>
            
            <View style={styles.askSignUpText}>
                <Text>Don't have an account? </Text><TouchableOpacity onPress={() => props.navigation.navigate('SignUp')} ><Text style={styles.pressableText}>SignUp</Text></TouchableOpacity>
            </View>
        </View>
    );
}

LogInScreen.navigationOptions = {
    headerShown : null
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,

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
        marginTop : 50
    },
    formField : {
        marginVertical : 10
    },
    input:{
        borderBottomColor : '#707070',
        borderBottomWidth : 1
    },
    forgotpass :{
        marginHorizontal : 18,
        marginTop : 5,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    button : {
        marginTop : 40 , 
        borderRadius : 40 , 
    },
    askSignUpText :{ marginTop : 5,flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center'},
    pressableText : { 
        color:'#53B175'
    }
});

export default LogInScreen;