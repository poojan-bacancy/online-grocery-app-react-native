import React , {useState,useEffect} from 'react';
import { TextInput,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,TouchableOpacity,View,StyleSheet,Text, Button, } from 'react-native';
import Flag from 'react-native-flags';
import CustomButton from '../../components/CustomButton';

const NumberScreen = props => {

    const [enteredNumber , setEnteredNumber] = useState('');
    const [mobileNumber , setMobileNumber] = useState('');
    const [error,setError] = useState('');

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

    return  (
       
        <KeyboardAvoidingView style={{flex:1}}>
            <View style={styles.headerMobileNumber}>
                <Text style={styles.headerMobileNumberText}>Enter your Mobile Number</Text>
            </View>
            <View style={styles.smallHeaderMobileNumber}>
                <Text style={styles.smallHeaderMobileNumberText}>Mobile Number</Text>
            </View>         
            <View style={styles.inputBlock}>
                <Flag code="IN" size={32}/>
                <View style={{marginLeft : 10}} ><Text>+91</Text></View>
                <View style={styles.input}>
                    <TextInput
                        autoFocus
                        value={enteredNumber} 
                        maxLength={10}
                        keyboardType='numeric'
                        onChangeText = {numberInputHandler}   
                    />
                </View>
            </View>
            <View style={styles.errorBlock}><Text style={styles.errorText}>{error}</Text></View>
            <View style={styles.belowInputBlock}>
                <CustomButton label=">" style={styles.button} onPress={confirmNumberHandler} />
                {/* <TouchableOpacity onPress={confirmNumberHandler} style={styles.button} >
                    <Text style={styles.buttonText}>{'>'}</Text>
                </TouchableOpacity> */}
            </View>
        </KeyboardAvoidingView>
        
    ) ;
}

NumberScreen.navigationOptions = {
    headerTitle : ''
}

const styles = StyleSheet.create({
    headerMobileNumber : {
        marginVertical : 50 , 
        marginHorizontal : 18
    },
    smallHeaderMobileNumber : {
        marginVertical : 10 , 
        marginHorizontal : 18
    },
    headerMobileNumberText : {
        fontFamily:'Gilroy-Medium' , fontWeight : '600', fontSize:26
    },
    smallHeaderMobileNumberText : {
        fontFamily:'Gilroy-Medium' , fontWeight : '600', fontSize:16 , color : '#707070'
    },
    inputBlock : {
        flexDirection : 'row',
        alignItems : 'center',
        height : 40,     
        marginHorizontal : 18,
        borderBottomColor : '#888' , 
        borderBottomWidth : 1
    },
    input:{
        flex: 1,
        marginLeft : 8,
    },
    errorBlock: {
        marginTop : 5,
        marginHorizontal : 18
    },
    errorText : {
        color : 'red'
    },
    belowInputBlock: {
        flex: 1 ,justifyContent :'flex-end' , alignItems : 'flex-end'
    },
    button :{
        height : 62 , 
        width : 63,
        marginBottom : 15,
        borderRadius : 70 , 
        backgroundColor : '#53B175', 
    }
});

export default NumberScreen;