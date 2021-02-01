import React , {useState} from 'react';
import { TextInput,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,TouchableOpacity,View,StyleSheet,Text } from 'react-native';
import CustomButton from '../../src/components/CustomButton';
import Dimensions from '../../constants/Dimensions';

const VerificationScreen = props => {

    const [enteredCode , setEnteredCode] = useState('');
    const [code , setCode] = useState('');
    const [error,setError] = useState('');

    const codeInputHandler = (number) => {
        setEnteredCode(number.replace(/[^0-9]/g, ''));
    }

    const confirmCodeHandler = () => {
        const chosenCode = enteredCode;
        if(chosenCode.length < 4){
            setError('Please Enter all digits');
            return;
        }
        setCode(chosenCode);
        setEnteredCode('');
        setError('');
        props.navigation.navigate('SelectLocation')
    }

    return(
        <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss(); } }>
            <KeyboardAvoidingView style={{flex:1}}>
                <View style={styles.headerBlock}>
                    <Text style={styles.headerText}>Enter your 4-digit code</Text>
                </View>
                <View style={styles.smallHeaderBLock}>
                    <Text style={styles.smallHeaderText}>Code</Text>
                </View>         
                <View style={styles.inputBlock}>                
                    <View style={styles.input}>
                        <TextInput
                            value = {enteredCode}
                            placeholder = '- - - -'
                            fontSize = {18}
                            placeholderTextColor = 'black'
                            maxLength={4}
                            keyboardType='numeric'
                            onChangeText={codeInputHandler}
                        />
                    </View>
                </View>
                <View style={styles.errorBlock}><Text style={styles.errorText}>{error}</Text></View>
                <View style={styles.belowInputBlock}>   
                    <View style={styles.buttonBlock}>
                        <TouchableOpacity><Text style={{color:'#53B175'}}>Resend Code</Text></TouchableOpacity>   
                        <CustomButton label=">" style={styles.button} onPress={confirmCodeHandler} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};


VerificationScreen.navigationOptions = {
    headerTitle : ''
}

const styles = StyleSheet.create({
    headerBlock : {
        marginVertical : 50 , 
        marginHorizontal : 18
    },
    smallHeaderBLock : {
        marginVertical : 10 , 
        marginHorizontal : 18
    },
    headerText : {
        fontFamily:'Gilroy-Medium' , 
        fontWeight : '600', 
        fontSize:26
    },
    smallHeaderText : {
        fontFamily:'Gilroy-Medium' , 
        fontWeight : '600', 
        fontSize:16 , 
        color : '#707070'
    },
    inputBlock : {
        flexDirection : 'row',
        alignItems : 'center',
        height : Dimensions.height * 50,     
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
        flex: 1 ,
        justifyContent :'flex-end', 
        marginHorizontal : 18
    },
    buttonBlock : {
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-between'
    },
    button :{
        marginHorizontal : 0,
        height : Dimensions.height * 75 , 
        width : Dimensions.width * 73 ,
        marginBottom : 15,
        borderRadius : 70 , 
        backgroundColor : '#53B175', 
    },
    buttonText : { 
        color :'white', 
        fontSize : 30
    }
});


export default VerificationScreen;