import React from 'react';
import { View ,TouchableOpacity , FlatList , StyleSheet} from 'react-native';
import ProductCard from '../../src/components/ProductCard';
import { HeaderButtons , Item} from 'react-navigation-header-buttons';
import  HeaderButton from '../../src/components/HeaderButton';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';

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

ExploreCategoriesDetailScreen.navigationOptions = navData => {
    return {
    headerRight : () => 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            iconSize = {23} 
            IconComponent = {FontAwesome}
            title="Filter" 
            iconName = 'sliders'
            onPress={() => navData.navigation.navigate('Filters') } 
        />
        </HeaderButtons> 
    };
}

const styles = StyleSheet.create({
    screen : {
        alignItems : 'center',
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