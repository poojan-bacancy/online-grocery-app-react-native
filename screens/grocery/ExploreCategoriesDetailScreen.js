import React from 'react';
import { View ,TouchableOpacity , FlatList , StyleSheet} from 'react-native';
import ProductCard from '../../components/ProductCard';

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
    {
        id : '5',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    },
    {
        id : '6',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    },
    {
        id : '7',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    },
    {
        id : '8',
        name : 'Organic Bananas',
        description : '7pcs, Priceg',
        price : 4.99
    }
];


const ExploreCategoriesDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <FlatList 
                showsVerticalScrollIndicator = {false}
                style={styles.list}
                data={data}
                numColumns={2} 
                keyExtractor = { (category) => category.id }
                renderItem = { ({item}) => {
                    return(
                        <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('ProductDetail')}>
                            <ProductCard prod={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

ExploreCategoriesDetailScreen.navigationOptions = {
    headerTitle : 'Category',
    
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginHorizontal : 12
    },
    list : {
        marginVertical : 5
    },
    item : {
        marginVertical : 5
    }
});

export default ExploreCategoriesDetailScreen;