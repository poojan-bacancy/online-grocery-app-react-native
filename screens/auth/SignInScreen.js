import React , { useState } from 'react';
import { TextInput , KeyboardAvoidingView , TouchableWithoutFeedback , View , StyleSheet , Image , Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Flag from 'react-native-flags';
import CustomButton from '../../src/components/CustomButton';
import Dimensions from '../../constants/Dimensions';

const Input = (props) => {
    return(
        <View style={styles.inputBlock}>
            <Flag
                code="IN"
                size={32}
            />
            <View style={{marginLeft : 10}} ><Text>+91</Text></View>
            <View style={styles.input}>
                <TextInput 
                    {...props} 
                    maxLength={10}
                    keyboardType='numeric'        
                />
            </View>
        </View>
    );
}

const SignInScreen = props => {

    const [enteredNumber , setEnteredNumber] = useState('');
    const [mobileNumber , setMobileNumber] = useState('');
    const [error,setError] = useState('');
    const [isFocused , setIsFocused] = useState(false);

    const numberInputHandler = (number) => {
        setEnteredNumber(number.replace(/[^0-9]/g, ''));
    }
   
    const confirmNumberHandler = () => {
        const chosenNumber = enteredNumber;
        if(chosenNumber.length < 10){
            setError('Please Enter Valid Number');
            return;
        }
        setMobileNumber(chosenNumber);
        setEnteredNumber('');
        setError('');
        props.navigation.navigate('Verification');
    };

    if(isFocused) {
        return (
            <TouchableWithoutFeedback onPress={()=>{ setIsFocused(false) }}>
                <KeyboardAvoidingView style={{flex:1}}>
                    <View style={styles.headerMobileNumber}>
                        <Text style={styles.headerMobileNumberText}>Enter your Mobile Number</Text>
                    </View>
                    <View style={styles.smallHeaderMobileNumber}>
                        <Text style={styles.smallHeaderMobileNumberText}>Mobile Number</Text>
                    </View>  
                    <Input 
                        autoFocus
                        value={enteredNumber}
                        onChangeText = {numberInputHandler}
                    />       
                    <View style={styles.errorBlock}><Text style={styles.errorText}>{error}</Text></View>
                    <View style={styles.belowInputBlock}>
                        <CustomButton label=">" style={styles.button} onPress={confirmNumberHandler} />
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }else{
        return (
            <View style={styles.screen} >
                <View style={styles.imageBlock}>
                    <Image style={styles.image} source={require('../../assets/images/groceryImage.png')} />
                </View>
                <View style={styles.titleBlock} >
                    <Text style={{fontSize : 28}} >
                        Get your groceries with nectar
                    </Text>
                </View>
                <Input 
                    onFocus={() => {setIsFocused(true)}}
                />
                <View style={styles.smallTextblock}>
                    <Text>
                        Or connect with social media
                    </Text>
                </View>
                <CustomButton label="Continue with Google" style={styles.buttonGoogle}>
                    <FontAwesome name='google' size={25} color='white' />
                </CustomButton>
                <CustomButton label="Continue with Facebook" style={styles.buttonFacebook}>
                    <FontAwesome name='facebook' size={25} color='white' />
                </CustomButton>
            </View>           
        ) ;
    }    
}

SignInScreen.navigationOptions = {
    headerShown : null
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        backgroundColor : 'white',
        alignItems : 'center'
    },
    imageBlock : {
        height : '42%'
    },
    image:{
        height: '100%'
    },
    titleBlock : { 
        alignSelf : 'flex-start',
        marginTop : 15,
        marginLeft : 15 , 
        height : '12%' , 
        width : '70%' 
    },
    inputBlock : {
        marginTop : 10,
        flexDirection : 'row',
        alignItems : 'center',
        height : Dimensions.height * 50 , 
        marginHorizontal : 18,
        borderBottomColor : '#888' , 
        borderBottomWidth : 1
    },
    input:{
        flex: 1,
        marginLeft : 8,
    },
    smallTextblock :{
        height : '5%',  
        marginTop : 15,
        marginHorizontal : 18 , 
        alignSelf : 'center'
    },
    buttonGoogle : {
        backgroundColor : '#5383EC',
        marginVertical : 10
    },
    buttonFacebook : {
        backgroundColor : '#4A66AC',
        marginVertical : 10
    },
    headerMobileNumber : {
        marginVertical : 40 , 
        marginHorizontal : 18
    },
    smallHeaderMobileNumber : {
        marginTop : 10 , 
        marginHorizontal : 18
    },
    headerMobileNumberText : {
        fontFamily:'Gilroy-Medium' , 
        fontWeight : '600', 
        fontSize:26
    },
    smallHeaderMobileNumberText : {
        fontFamily:'Gilroy-Medium' , 
        fontWeight : '600', 
        fontSize:16 , 
        color : '#707070'
    },
    errorBlock: {
        marginTop : 5,
        marginHorizontal : 18
    },
    errorText : {
        color : 'red'
    },
    belowInputBlock: {
        flex: 1 ,
        justifyContent :'flex-end' , 
        alignItems : 'flex-end'
    },
    button :{
        height : Dimensions.height * 75 , 
        width : Dimensions.width * 73,
        marginBottom : 15,
        borderRadius : 70 , 
        backgroundColor : '#53B175' 
    }
});

export default SignInScreen;