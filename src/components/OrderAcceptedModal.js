import React from 'react';
import { View ,Text , Image, TouchableOpacity , StyleSheet , Modal } from 'react-native';
import CustomButton from './CustomButton';
import Dimensions from '../../constants/Dimensions';

const OrderAcceptedModal = props => {
    return (
        <Modal
            animationType = 'fade'
            transparent={true}
            visible = {props.visible}
        >
            <View style={styles.modalScreen}>
                <View style={styles.logoAndTextBlock}>
                    <View style={styles.logoBlock}>
                        <Image style={styles.logo} source={require('../../assets/images/orderPlaced.png')}  />
                    </View>
                    <View style={styles.textBlock}> 
                        <Text style={styles.primaryText}>
                            Your Order has been accepted
                        </Text>
                        <Text style={styles.secondaryText}>
                            Your items has been placed and is on it’s way to being processed
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonsBlock}>
                    <CustomButton label = "Track Order" />
                    <TouchableOpacity onPress={props.back}>
                        <Text style={styles.backButton}>Back to Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>);
}

const styles = StyleSheet.create({
    modalScreen : {
        flex : 1 , 
        justifyContent : 'space-between' , 
        alignItems : 'center' , 
        backgroundColor : '#ffffff'
    },
    logoAndTextBlock : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-end',
        paddingTop : Dimensions.height * 310,
    },
    logoBlock : {
        height : Dimensions.height * 255,
        marginLeft : 55,
        marginRight : 95,
        marginVertical : 30
    }, 
    logo : {
        height : '100%'
    },  
    textBlock : {
        paddingHorizontal : 30,
        marginTop : 20,
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
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    backButton : {
        marginTop : 5,
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        fontSize : 18
    }
});


export default OrderAcceptedModal;