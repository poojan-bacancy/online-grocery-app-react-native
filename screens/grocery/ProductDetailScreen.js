import React , { useState } from 'react';
import { View , Text ,ScrollView,TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/CustomButton';
import {FlatListSlider} from 'react-native-flatlist-slider';


const images = [
    {
        id : 1,
        image: require('../../assets/images/Apple.png')
    },
    {
        id : 2,
        image: require('../../assets/images/Apple.png')
    },
    {
        id : 3,
        image: require('../../assets/images/Apple.png')
   },
    {
        id : 4,
        image: require('../../assets/images/Apple.png')
   },   
];

const ProductDetailScreen = props => {
    const [isFav,setIsFav] = useState(false);
    return (
        <View style={styles.screen}>
            <View style={styles.backAndUploadButtonBlock}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}><MaterialCommunityIcons name="less-than" size={23}/></TouchableOpacity>
            <TouchableOpacity><Feather name="upload" size={23} /></TouchableOpacity>
            </View>
            <FlatListSlider 
                autoscroll = {false}
                height = {180}
                data = {images}
                imageKey={'image'}
                local
                contentContainerStyle={{paddingTop: 25 , paddingBottom : 10}}
                indicatorContainerStyle	= {{ marginBottom : 25}}
                indicatorActiveWidth={20}
                indicatorActiveColor={'#53B175'}
            />
            <ScrollView style={{flex:1}}>
            <View style={styles.backgroundStyle}>
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
                    <TouchableOpacity style={styles.iconBlock} onPress={() => setIsFav(prevState => !prevState)}>
                    <Entypo name={ isFav ? "heart" : "heart-outlined"} color="black" size={23} />
                    </TouchableOpacity>
                </View>
                <View style={styles.priceButtonBlock}>
                    <View style={styles.inc_dec_buttons}>
                        <TouchableOpacity><Entypo name="minus" style={styles.buttonSymbol} color="#B3B3B3" size={23}/></TouchableOpacity>
                        <View style={styles.qty}><Text style={{textAlign : 'center' , fontSize : 18}}>1</Text></View>
                        <TouchableOpacity><Entypo name="plus" style={styles.buttonSymbol} color="#53B175" size={23}/></TouchableOpacity>
                    </View>
                    <View style={styles.priceBlock}>
                        <Text style={styles.price}>$4.99</Text>
                    </View>
                </View>
            </View>
            </View>
            <View style={styles.detailBlock}>
                <View style={styles.headerDetailBlock}>
                <Text style={styles.detailTitle}>Product Detail</Text>
                <TouchableOpacity><Feather name="chevron-down" size={23} /></TouchableOpacity>
                </View>
                <View style={styles.textBlock}>
                    <Text numberOfLines={3} style={styles.paragraph}>Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.</Text>
                </View>
            </View>
            <View style={styles.ingredients}>
                <View style={styles.ingredientsLabel}><Text style={styles.detailTitle} >Nutritious</Text></View>
                <View style={styles.secondIngredientsBlock}>
                <View style={styles.weightBlock}><Text style={styles.weight}>100gr</Text></View>
                <TouchableOpacity><MaterialCommunityIcons name="greater-than" size={23} /></TouchableOpacity>
                </View>
            </View>
            <View style={styles.ingredients}>
                <View style={styles.ingredientsLabel}><Text style={styles.detailTitle} >Review</Text></View>
                <View style={styles.secondIngredientsBlock}>
                <View style={styles.starIconBlock}><Entypo name="star" color="#F3603F" size={23}/><Entypo name="star" color="#F3603F" size={23}/><Entypo name="star" color="#F3603F" size={23}/><Entypo name="star-outlined" size={23}/><Entypo name="star-outlined" size={23}/></View>
                <TouchableOpacity><MaterialCommunityIcons name="greater-than" size={23} /></TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            <View style={{alignItems : 'center'}}>
                <CustomButton  label="Add to Basket" />
            </View>
            
        </View>
    );
}

ProductDetailScreen.navigationOptions = {
    headerShown : false,
}


const styles = StyleSheet.create({
    screen : {
        flex : 1
    },
    imageSlider : {
        borderColor : 'black',
        borderWidth : 1,
        height : 270,
        justifyContent : 'center',
        alignItems : 'center'
    },  
    backAndUploadButtonBlock : {
        marginTop : 15,
        paddingHorizontal : 15,
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center'
    },
    backgroundStyle : {
        height : 140 ,
        paddingHorizontal : 10,
        borderBottomColor : '#E2E2E2',
        borderTopColor : '#E2E2E2',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        flexDirection : 'row'
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
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    priceButtonBlock : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center'
    },
    iconBlock : {
        marginBottom : 15,
    },
    qty : {
        borderRadius : 19, 
        marginHorizontal : 10, 
        borderWidth : 1, 
        borderColor : '#B3B3B3' , 
        paddingHorizontal : 10, 
        paddingVertical : 4 
    },
    priceBlock : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        marginRight : 10
    },
    inc_dec_buttons : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    buttonSymbol : {
        marginLeft : 4
    },
    name : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 24,
        marginTop : 5,
    },
    button : {
        backgroundColor : 'white' ,
        borderColor : '#B3B3B3',
        borderWidth: 0.5,
        width : 40 , 
        height : 40,
        marginHorizontal : 10,
        borderRadius : 17
    },
    price : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 24, 
        fontWeight : '600',
        
    },
    description : {
        fontFamily : 'Gilroy-Medium',
        marginTop : 3,
        fontSize : 16,  
        lineHeight : 18, 
        color : '#7C7C7C'
    },
    detailBlock : {
        height : 125 ,
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderBottomColor : '#E2E2E2',
        borderTopColor : '#E2E2E2',
        borderTopWidth : 1,
        borderBottomWidth : 1
    },
    detailTitle : {
        fontFamily : 'Gilroy-Bold',
        fontWeight : '600',
        fontSize : 16,
        lineHeight : 18
    },
    headerDetailBlock : {
        paddingHorizontal : 5,
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center'
    },
    textBlock : {
        marginTop : 5,
        paddingHorizontal : 5,
    },
    paragraph : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 13,
        lineHeight : 21,
        color : '#7C7C7C'
    },
    ingredients : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        borderBottomColor : '#E2E2E2',
        borderTopColor : '#E2E2E2',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        height : 60,
    },
    ingredientsLabel : {
        marginHorizontal : 20
    },
    secondIngredientsBlock : {
        marginHorizontal : 20,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : "flex-end"
    },
    weightBlock: {
        backgroundColor : '#EBEBEB',
        borderRadius: 4,
        marginHorizontal : 10
    },
    starIconBlock : {
        marginHorizontal : 10,
        flexDirection : 'row',
        alignItems : 'center'
    },  
    weight : {
        marginHorizontal : 5,
        fontFamily : 'Gilroy-Regular',
        fontWeight : '600',
        fontSize : 11 ,
        lineHeight : 13.5   
    }
});

export default ProductDetailScreen;