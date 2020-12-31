import React from 'react';
import { TextInput, TouchableOpacity,View,StyleSheet,Image,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignInScreen = props => {
    return  <View style={styles.screen} >
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../assets/images/groceryImage.png')} />
            </View>
            <View style={styles.titleBlock} >
                <Text style={{fontSize : 28}} >
                    Get your groceries with nectar
                </Text>
        </View>
        <View style={styles.inputBlock}>
            <TextInput style={styles.input} />
        </View>
        <View style={styles.smallTextblock}>
            <Text>
                Or connect with social media
            </Text>
        </View>
        <TouchableOpacity style={styles.buttonGoogle} >
            <FontAwesome name='google' size={25} color='white' />
            <Text style={styles.buttonText} >Continue with Google </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFacebook} >
            <FontAwesome name='facebook' size={25} color='white' />
            <Text style={styles.buttonText} >Continue with Facebook </Text>    
        </TouchableOpacity>

    </View> ;
}

SignInScreen.navigationOptions = {
    headerShown : null
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        backgroundColor : 'white'
    },
    imageBlock : {
        height : '45%'
    },
    image:{
        height: '100%'
    },
    titleBlock : { 
        marginLeft : 15 , height : '12%' , width : '60%' 
    },
    inputBlock : {
        height : '8%' , 
        marginHorizontal : 18 
    },
    input:{
        borderBottomColor : '#888' , borderBottomWidth : 1
    },
    smallTextblock :{
        height : '5%' , 
        marginTop  : 5, 
        marginHorizontal : 18 , 
        alignSelf : 'center'
    },
    buttonGoogle : {
        height : '10%' , 
        marginTop : 15 , 
        marginHorizontal : 22 , 
        borderRadius : 20 , 
        backgroundColor : '#5383EC', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-evenly'
    },
    buttonFacebook : {
        height : '10%' , 
        marginTop : 15 , 
        marginHorizontal : 22 , 
        borderRadius : 20 , 
        backgroundColor : '#4A66AC', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-evenly'
    },
    buttonText : {  color :'white' , fontSize : 20}

});

export default SignInScreen;