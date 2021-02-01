import React from 'react';
import { View , Image, Text , TouchableOpacity,StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from './CustomButton';
import Dimensions from '../../constants/Dimensions'
const CartItem =  props  => {
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../../assets/images/cartImage.png')} />
            </View>
            <View style={styles.secondBlock}>
                <View style={styles.titleBlock}>
                    <View style={styles.titleTextBlock}>
                    <Text style={styles.name} >
                    Bell Pepper Red
                    </Text>
                    <Text style={styles.description}>
                    1kg, Price
                    </Text>
                    </View>
                    <TouchableOpacity style={styles.iconBlock}>
                    <Entypo name="cross" color="#B3B3B3" size={23} />
                    </TouchableOpacity>
                </View>
                <View style={styles.priceButtonBlock}>
                    <View style={styles.inc_dec_buttons}>
                        <CustomButton style={styles.button}><Entypo name="minus" style={styles.buttonSymbol} color="#B3B3B3" size={23}/></CustomButton>
                        <Text style={{textAlignVertical : 'center'}}> 1 </Text>
                        <CustomButton style={styles.button}><Entypo name="plus" style={styles.buttonSymbol} color="#53B175" size={23}/></CustomButton>
                    </View>
                    <View style={styles.priceBlock}>
                        <Text style={styles.price}>$4.99</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle : {
        height : Dimensions.height * 200,
        paddingHorizontal : 15,
        paddingVertical : 30,
        borderBottomColor : '#E2E2E2',
        borderTopColor : '#E2E2E2',
        borderTopWidth : 2,
        borderBottomWidth : 1,
        flexDirection : 'row'
    },
    imageBlock : {
       
        justifyContent : 'center',
        marginRight : 5
    },
    image : {
        height : Dimensions.height * 74,
        width : Dimensions.height * 80,
       
    },
    secondBlock : {
        flex : 1,
        flexDirection : 'column',
    },
    titleBlock : {
        marginLeft : 8,
        paddingRight : 5,
        flexDirection : 'row',
        flex : 1,
        justifyContent : 'space-between',
       
    },
    priceButtonBlock : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
       
    },
    priceBlock : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        marginRight : 10
    },
    inc_dec_buttons : {
        flexDirection : 'row'
    },
    buttonSymbol : {
        marginLeft : 4
    },
    name : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
        marginTop : 5,
        lineHeight : 18,
    },
    button : {
        backgroundColor : 'white' ,
        borderColor : '#B3B3B3',
        borderWidth: 0.5,
        width : Dimensions.height * 45 , 
        height : Dimensions.width * 45,
        marginHorizontal : 10,
        borderRadius : 17
    },
    price : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 18, 
        fontWeight : '600',
        lineHeight : 27,
    },
    description : {
        fontFamily : 'Gilroy-Medium',
        marginTop : 3,
        fontSize : 14,  
        lineHeight : 18, 
        color : '#7C7C7C'
    }
});

export default CartItem;