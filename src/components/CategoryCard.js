import React from "react";
import { Text,Image, StyleSheet , View} from "react-native";
import Dimensions from '../../constants/Dimensions'

const CategoryCard = ({category}) => {
  return (
        <View style={{ ...styles.backgroundStyle , ...{backgroundColor : category.bgColor , borderColor : category.bdColor} }} >
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../../assets/images/vegetable.png')} />
            </View>
            <View style={styles.titleBlock}>
                <View style={styles.title}><Text style={styles.titleText}>{category.label}</Text></View>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        paddingHorizontal: 10,
        height : Dimensions.height * 210,
        width : Dimensions.width *175,
        borderRadius : 18,
        backgroundColor : 'rgba(83, 177, 117, 0.1)', 
        margin : 5,
        borderColor : 'rgba(83, 177, 117, 0.7)',
        borderWidth : 1,
        justifyContent : 'space-evenly'
    },
    imageBlock : {
        padding : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    image : {
        width : Dimensions.width * 110,
        height : Dimensions.height * 90
    },
    titleBlock : {
        padding : 10,
        alignItems : 'center',
        justifyContent : 'center'
    }, 
    titleText : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
        textAlign : 'center',
        lineHeight : 22
    }
});

export default CategoryCard;
