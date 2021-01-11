import React from "react";
import { TouchableOpacity,FlatList, StyleSheet,Text , View} from "react-native";
import { withNavigation } from 'react-navigation';
import ProductCard from './ProductCard';

const data = [
    {
        id : '1',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    },
    {
        id : '2',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    },
    {
        id : '3',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    },
    {
        id : '4',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    },
]

const ProductList = props => {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity><Text style={styles.pressableText}>See all</Text></TouchableOpacity>
            </View>
            <FlatList 
                showsHorizontalScrollIndicator = {false}
                horizontal
                style={styles.list}
                data={data}
                keyExtractor = { (prod) => prod.id }
                renderItem = { ({item}) => {
                    return(
                        <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetail')}>
                            <ProductCard prod={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginHorizontal : 5,
        marginTop : 5
    },
    title : {
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        fontSize : 24
    },
    pressableText : {
        color:'#53B175',
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        fontSize : 16
    },
    list : {
        marginVertical : 10
    }

});

export default withNavigation(ProductList);