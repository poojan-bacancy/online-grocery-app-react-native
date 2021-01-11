import React , {useState} from 'react';
import { View , Text,ScrollView , StyleSheet} from 'react-native';
import CartItem from '../../src/components/CartItem';
import CustomButton from '../../src/components/CustomButton';
import PlaceOrderModal from '../../src/components/PlaceOrderModal';
import OrderAcceptedModal from '../../src/components/OrderAcceptedModal';
import OrderFailedModal from '../../src/components/OrderFailedModal';


const CartScreen = props => {

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [ isOrderAcceped , setIsOrderAccepted ] = useState(false);
    const [ isErrorInOrder , setIsErrorInOrder ] = useState(false);

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
                placeOrder = { () => {
                    setIsModalOpen(false);
                    //setIsOrderAccepted(true);
                    setIsErrorInOrder(true);
                }}
            />
            <OrderAcceptedModal
                visible = {isOrderAcceped}
                back = { () => {
                    setIsOrderAccepted(false);
                    props.navigation.navigate('Shop');
                }}
            />
            <OrderFailedModal 
                visible = {isErrorInOrder}
                closeModal = { () => setIsErrorInOrder(false) }
                back = { () => {
                    setIsErrorInOrder(false);
                    props.navigation.navigate('Shop');
                }}
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