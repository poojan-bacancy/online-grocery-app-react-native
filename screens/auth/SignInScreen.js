import React from 'react';
import { TextInput,TouchableOpacity,View,StyleSheet,Image,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Flag from 'react-native-flags';

const SignInScreen = props => {
    return  (
    <View style={styles.screen} >
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../../assets/images/groceryImage.png')} />
            </View>
            <View style={styles.titleBlock} >
                <Text style={{fontSize : 28}} >
                    Get your groceries with nectar
                </Text>
            </View>
            <View style={styles.inputBlock}>
            <Flag
                code="IN"
                size={32}
            />
            <View style={{marginLeft : 10}} ><Text>+91</Text></View>
            <View style={styles.input}><TextInput onFocus={() => {
                props.navigation.navigate('Number')
            }} /></View>
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

    </View>
    
    ) ;
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
        height : '42%'
    },
    image:{
        height: '100%'
    },
    titleBlock : { 
        marginTop : 15,
        marginLeft : 15 , 
        height : '12%' , 
        width : '60%' 
    },
    inputBlock : {
        marginTop : 5,
        flexDirection : 'row',
        alignItems : 'center',
        height : '8%' , 
        marginHorizontal : 18,
        borderBottomColor : '#888' , 
        borderBottomWidth : 1
    },
    input:{
        flex: 1,
        marginLeft : 8,
    },
    smallTextblock :{
        height : '5%' , 
        marginTop  : 5, 
        marginHorizontal : 18 , 
        alignSelf : 'center'
    },
    button :{
        height : 62 , 
        width : 63,
        marginTop : 15 , 
        marginHorizontal : 22 , 
        borderRadius : 70 , 
        backgroundColor : '#53B175', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-evenly'
    },
    buttonGoogle : {
        height : '10%' , 
        marginTop : 15 , 
        marginHorizontal : 22 , 
        borderRadius : 35 , 
        backgroundColor : '#5383EC', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-evenly'
    },
    buttonFacebook : {
        height : '10%' , 
        marginTop : 15 , 
        marginHorizontal : 22 , 
        borderRadius : 35 , 
        backgroundColor : '#4A66AC', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-evenly'
    },
    buttonText : {  color :'white' , fontSize : 20}

});

export default SignInScreen;