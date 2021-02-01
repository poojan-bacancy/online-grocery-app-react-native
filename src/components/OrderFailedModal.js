import React from 'react';
import { View ,Text , Image , TouchableOpacity , StyleSheet , Modal } from 'react-native';
import CustomButton from './CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';
import Dimensions from '../../constants/Dimensions';

const OrderFailedModal = props => {
    return (
        <Modal
            animationType = 'fade'
            transparent={true}
            visible = {props.visible}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modalBox}>
                    <TouchableOpacity onPress={props.closeModal}>
                        <Entypo name="cross" color="black" size={23} />
                    </TouchableOpacity>        
                    <View style={styles.logoBlock}>
                        <Image style={styles.logo} source={require('../../assets/images/orderFailed.png')} />
                    </View>                        
                    <View>
                        <Text style={styles.primaryText}>Oops ! Order Failed</Text>
                        <Text style={styles.secondaryText}>somehing went terribly wrong.</Text>
                    </View>
                    <View style={styles.buttonsBlock}>
                        <CustomButton style={styles.tryAgainButton} label = "Please Try again" onPress={props.closeModal} />
                        <TouchableOpacity onPress={props.back}>
                            <Text style={styles.backButton}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
            </View>
        </Modal>);
}

const styles = StyleSheet.create({
    modalScreen : {
        flex : 1 ,
        justifyContent : 'center' , 
        alignItems : 'center' , 
        justifyContent : 'center',
        backgroundColor : '#000000aa'
    },
    modalBox : { 
        marginTop : 50,
        width : '85%',
        backgroundColor : '#ffffff' , 
        borderRadius : 18,
        paddingHorizontal : 15,
        paddingVertical : 10
    },
    logo : {
        height : Dimensions.height * 220,
        width : Dimensions.width * 210
    }, 
    logoBlock : {
        alignItems : 'center'
    },  
    primaryText : {
        textAlign : 'center',
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        fontSize : 28,
        lineHeight : 34,
        marginVertical : 10
    },
    secondaryText : {
        textAlign : 'center',
        fontFamily : 'Gilroy-Medium',
        fontSize : 16,
        lineHeight : 21,
        color : '#7C7C7C',
        marginVertical : 10
    },
    buttonsBlock : {
        marginTop : 30,
        alignItems : 'center',
        justifyContent : 'center'
    },
    tryAgainButton : {
        width : '90%',
    },  
    backButton : {
        marginTop : 5,
        marginBottom : 10,
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        fontSize : 18
    }
});


export default OrderFailedModal;