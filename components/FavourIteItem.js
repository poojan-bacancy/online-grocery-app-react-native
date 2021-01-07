import React from 'react';
import { View , Image, Text , TouchableOpacity , StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavouriteItem = () => {
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../assets/images/drink.png')} />
            </View>
            <View style={styles.secondBlock}>
                <View style={styles.titleBlock}>
                    <View style={styles.titleTextBlock}>
                        <Text style={styles.name}>Sprite Can</Text>
                        <Text style={styles.description}>325ml, Price</Text>
                    </View>
                </View>
                <View style={styles.priceButtonBlock}>
                    <Text style={styles.price}>$1.50</Text>
                    <TouchableOpacity style={styles.iconBlock}><MaterialCommunityIcons name="greater-than" size={23} /></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle : {
        height : 110 ,
        paddingHorizontal : 15,
        paddingVertical : 10,
        borderBottomColor : '#E2E2E2',
        borderTopColor : '#E2E2E2',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        flexDirection : 'row',
        
    },
    imageBlock : {
        justifyContent : 'center',
        marginRight : 5,
        
    },
    image : {
        height : 60,
        width : 35,
        marginHorizontal : 5,
       
    },
    secondBlock : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        paddingBottom : 8,
        
    },
    titleBlock : {
        marginLeft : 5,
        flex : 1,
        justifyContent : 'space-between',
        
    },
    priceButtonBlock : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-end',
        
    },
    iconBlock:{
        marginLeft : 10,
        marginRight : 3,
    },
    name : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
        marginTop : 5,
        lineHeight : 18,
    },
    price : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 18, 
        fontWeight : '600',
        lineHeight : 27,
    },
    description : {
        fontFamily : 'Gilroy-Medium',
        marginTop : 2,
        fontSize : 14,  
        lineHeight : 18, 
        color : '#7C7C7C'
    }
});

export default FavouriteItem;