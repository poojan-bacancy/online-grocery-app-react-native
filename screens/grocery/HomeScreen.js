import React from 'react';
import { View,Text,ScrollView ,Image , StyleSheet} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Entypo from 'react-native-vector-icons/Entypo';
import ProductList from '../../components/ProductList';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../../assets/images/Group-color.png')}/>
            </View>
            <View style={styles.location}>
                <Entypo name='location-pin' color = '#C4C4C4' size={23} />
                <Text style={styles.locationText}> Dhaka , Banassre</Text>
            </View>
            <SearchBar />
           <ScrollView showsVerticalScrollIndicator={false} >
           <ProductList title="Exclusive Offer" />
           <ProductList title="Best Selling" />
           <ProductList title="Groceries" />
           </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
    headerShown : false
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginHorizontal : 10,
    },
    imageBlock : {
        justifyContent : 'center',
        alignItems : 'center',
        height : 40,
        marginTop : 20
    },
    image : {
        height : 30,
        width : 26
    },
    location : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    locationText : {
        fontFamily : 'Gilroy-Regular',
        fontWeight :'600',
        fontSize : 18,

    }
});

export default HomeScreen;