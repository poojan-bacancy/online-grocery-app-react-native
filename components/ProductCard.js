import React from "react";
import { Text,Image, StyleSheet , View} from "react-native";
import CustomButton from "./CustomButton";

const ProductCard = ({prod}) => {
  return (
        <View style={styles.backgroundStyle} >
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../assets/images/banana.png')} />
            </View>
            <Text style={styles.name} >
                {prod.name}
            </Text>
            <Text style={styles.description}>
            {prod.description}
            </Text>
            <View style={styles.belowBlock}>
                <View style={styles.priceAndButtonBlock}>
                    <Text style={styles.price}>
                        ${prod.price}
                    </Text>
                    <CustomButton  label="+" style={styles.button} />
                </View>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        paddingHorizontal: 10,
        height : 240,
        width : 160,
        borderRadius : 18,
        backgroundColor : 'white', 
        marginRight : 8,
        borderColor : '#E2E2E2',
        borderWidth : 1
    },
    imageBlock : {
        padding : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    image : {
        width : 99,
        height : 79
    },
    name : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
        marginTop : 10
    },
    description : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 14,
        
        marginTop : 5,
        color : '#7C7C7C'
    },
    belowBlock : {
        flex : 1,
        justifyContent : 'flex-end'
    },  
    priceAndButtonBlock : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        
    },
    price : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 18, 
        fontWeight : '600' 
    },
    button :{
        height : 45,
        width : 45,
        borderRadius : 17,
        marginHorizontal : 0   
    }
});

export default ProductCard;
