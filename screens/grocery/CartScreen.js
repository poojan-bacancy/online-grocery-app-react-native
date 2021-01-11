import React , {useState} from 'react';
import { View , Text,ScrollView , StyleSheet} from 'react-native';
import CartItem from '../../src/components/CartItem';
import CustomButton from '../../src/components/CustomButton';
import PlaceOrderModal from '../../src/components/PlaceOrderModal';

const CartScreen = () => {

    const [isModalOpen,setIsModalOpen] = useState(false);

    return (
        <View style={styles.screen}>
            <ScrollView >
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            </ScrollView>
            <CustomButton style={styles.button} label="Go to Checkout" onPress = {() => setIsModalOpen(true)} >
                <View style={styles.amountBlock}><Text style={styles.amount}>$12.96</Text></View>
            </CustomButton>
            <PlaceOrderModal 
                visible={isModalOpen} 
                closeModal = { () => setIsModalOpen(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({  
    screen : {
        flex : 1,
        marginHorizontal : 8,
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