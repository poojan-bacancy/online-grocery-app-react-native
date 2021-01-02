import React , {useState} from 'react';
import { TextInput,ScrollView,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,TouchableOpacity,View,StyleSheet,Image,Text, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Flag from 'react-native-flags';

const NumberScreen = props => {

    const [mobileNumber , setMobileNumber] = useState();
    const [error,setError] = useState('');

    const changePhoneNumber = (number) => {
        
    }

    return  (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
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
                        value={mobileNumber} 
                        maxLength={10}
                        keyboardType={'number-pad'}
                        onChangeText = {changePhoneNumber}
                        autoFocus = {true}
                    />
                </View>
            </View>
    
            <View style={styles.belowInputBlock}>
                <View>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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
    belowInputBlock: {
        flex: 1 ,justifyContent :'flex-end' , alignItems : 'flex-end'
    },
    button :{
        height : 62 , 
        width : 63,
        marginBottom : 15 , 
        marginHorizontal : 22 , 
        borderRadius : 70 , 
        backgroundColor : '#53B175', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-evenly'
    },
    buttonText : { 
        color :'white', 
        fontSize : 30
    }
});

export default NumberScreen;