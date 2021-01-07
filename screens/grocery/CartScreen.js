import React from 'react';
import { View , Text,ScrollView , StyleSheet} from 'react-native';
import CartItem from '../../components/CartItem';
import CustomButton from '../../components/CustomButton';

const CartScreen = () => {
    return (
        <View style={styles.screen}>
            <ScrollView >
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            </ScrollView>
            <CustomButton style={styles.button} label="Go to Checkout" >
                <View style={styles.amountBlock}><Text style={styles.amount}>$12.96</Text></View>
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({  
    screen : {
        flex : 1,
        marginHorizontal : 8
    },
    button : {
        flexDirection : 'row-reverse' ,
        justifyContent : 'flex-start',
        width : '92%',
        marginHorizontal : 15
    },
    amountBlock : {
        marginLeft : 35,
        marginRight : 20,
        alignItems : 'center',
        backgroundColor : '#489E67',
        borderRadius: 4,
        paddingHorizontal : 5,
        paddingVertical : 2
    },
    amount : {
        fontFamily : 'Gilroy-Regular',
        fontWeight : '600',
        fontSize : 12 ,
        lineHeight : 18,
        color : '#FCFCFC'    
    }
});

export default CartScreen;