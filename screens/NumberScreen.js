import React , {useState,useEffect} from 'react';
import { TextInput,ScrollView,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,TouchableOpacity,View,StyleSheet,Image,Text, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Flag from 'react-native-flags';

const NumberScreen = props => {

    return  (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <KeyboardAvoidingView style={{flex:1}}>
                <View style={{marginVertical : 50 , marginHorizontal : 18}}><Text style={{fontFamily:'Gilroy-Medium' , fontWeight : '600', fontSize:26}}>Enter your Mobile Number</Text></View>
                <View style={{marginVertical : 10 , marginHorizontal : 18}}><Text style={{fontFamily:'Gilroy-Medium' , fontWeight : '600', fontSize:16 , color : '#707070'}}>Mobile Number</Text></View>
         
            <View style={styles.inputBlock}>
                <Flag
                    code="IN"
                    size={32}
                />
                <View style={styles.input}><TextInput keyboardType={'number-pad'}/></View>
            </View>
            <View style={{ flex: 1 ,justifyContent :'flex-end' , alignItems : 'flex-end'}}>
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
    headerShown : null
}

const styles = StyleSheet.create({
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