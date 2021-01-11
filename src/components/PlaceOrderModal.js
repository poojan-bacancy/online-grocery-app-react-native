import React from 'react';
import { View ,Text , TouchableOpacity , StyleSheet , Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from './CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ModalItem = props => {
    return(
        <View style={styles.modalItem}>
            <View><Text style={styles.modalItemLabel}>{props.label}</Text></View>
            <View style={styles.modalItemRightBlock}>
                <View style={{marginHorizontal : 10}}>{props.children}</View>
                <TouchableOpacity><MaterialCommunityIcons name="greater-than" size={23} /></TouchableOpacity>
            </View>
        </View>);
}

const PlaceOrderModal = props => {
    return (
        <Modal
            animationType = 'fade'
            transparent={true}
            visible = {props.visible}
        >
            <View style={styles.modalScreen}>
                <View style={styles.modalBox}>
                    <View style={styles.modalBoxHeader}>
                        <View><Text style={styles.modalBoxHeaderTitle}>Checkout</Text></View>
                        <View>
                            <TouchableOpacity onPress={props.closeModal}>
                                <Entypo name="cross" color="black" size={23} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ModalItem label="Delivery">
                        <Text style={styles.modalItemRightText}>Select Method</Text>
                    </ModalItem>
                    <ModalItem label="Payment">
                        <FontAwesome name="cc-mastercard" size={23} color="#5286F9" />
                    </ModalItem>
                    <ModalItem label="Promocode">
                        <Text style={styles.modalItemRightText}>Pick Discount</Text>
                    </ModalItem>
                    <ModalItem label="Total Cost">
                        <Text style={styles.modalItemRightText}>$13.97</Text>
                    </ModalItem>
                    <View style={styles.termsAndCondition}>
                        <Text numberOfLines={2} style={styles.termsAndConditionText}>By placing an order you agree to our <Text style={{color : 'black'}}>Terms</Text> And <Text style={{color : 'black'}}>Conditions</Text></Text>
                    </View>
                    <View style={styles.buttonBlock}>
                        <CustomButton label="Place Order" onPress={props.placeOrder} />
                    </View>
                </View>
            </View>
        </Modal>);
}

const styles = StyleSheet.create({
    modalScreen : {
        flex : 1 , 
        justifyContent : 'flex-end' , 
        alignItems : 'center' , 
        backgroundColor : '#000000aa'
    },
    modalBox : { 
        backgroundColor : '#ffffff' , 
        width : '100%' , 
        borderTopLeftRadius : 30 , 
        borderTopRightRadius : 30,
        paddingHorizontal : 15
    },
    modalBoxHeader : {
        alignItems : 'center', 
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        paddingVertical : 20 ,
        borderBottomColor : '#E2E2E2',
        borderBottomWidth : 1, 
    },
    modalBoxHeaderTitle : { 
        fontFamily : 'Gilroy-Medium' , 
        fontWeight : '600' , 
        fontSize : 24
    },
    modalItem : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        borderBottomColor : '#E2E2E2',
        borderBottomWidth : 1 , 
        paddingVertical : 18
    },
    modalItemLabel : {
        fontFamily : 'Gilroy-Medium' , 
        fontWeight : '600' , 
        fontSize : 18 , 
        color : '#7C7C7C'  
    },
    modalItemRightBlock : { 
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : "flex-end"
    },
    modalItemRightText : {
        fontFamily : 'Gilroy-Medium' , 
        fontSize : 16 , 
        fontWeight : '600'
    },
    termsAndCondition : {
        width : '60%' , 
        marginTop : 15
    },
    termsAndConditionText : {
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        lineHeight : 21,
        color : '#7C7C7C'
    },
    buttonBlock : { 
        alignItems : 'center' , 
        marginVertical : 10
    }
});


export default PlaceOrderModal;