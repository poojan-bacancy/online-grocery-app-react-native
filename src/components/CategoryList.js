import React from "react";
import { TouchableOpacity,FlatList, StyleSheet , View} from "react-native";
import { withNavigation } from 'react-navigation';
import CategoryCard from './CategoryCard';
import Dimensions from '../../constants/Dimensions';

const data = [
    {
        id : '1',
        label : 'Frash Fruits & Vegetable',
        bgColor : 'rgba(83, 177, 117, 0.1)',
        bdColor : 'rgba(83, 177, 117, 0.7)'
    },
    {
        id : '2',
        label : 'Cooking Oil & Ghee',
        bgColor : 'rgba(248, 164, 76, 0.1)',
        bdColor : 'rgba(248, 164, 76, 0.7)'
    },
    {
        id : '3',
        label : 'Frash Fruits & Vegetable',
        bgColor : 'rgba(83, 177, 117, 0.1)',
        bdColor : 'rgba(83, 177, 117, 0.7)'
    },
    {
        id : '4',
        label : 'Cooking Oil & Ghee',
        bgColor : 'rgba(248, 164, 76, 0.1)',
        bdColor : 'rgba(248, 164, 76, 0.7)'
    },
    {
        id : '5',
        label : 'Frash Fruits & Vegetable',
        bgColor : 'rgba(83, 177, 117, 0.1)',
        bdColor : 'rgba(83, 177, 117, 0.7)'
    },
    {
        id : '6',
        label : 'Cooking Oil & Ghee',
        bgColor : 'rgba(248, 164, 76, 0.1)',
        bdColor : 'rgba(248, 164, 76, 0.7)'
    },
    {
        id : '7',
        label : 'Frash Fruits & Vegetable',
        bgColor : 'rgba(83, 177, 117, 0.1)',
        bdColor : 'rgba(83, 177, 117, 0.7)'
    },
    {
        id : '8',
        label : 'Cooking Oil & Ghee',
        bgColor : 'rgba(248, 164, 76, 0.1)',
        bdColor : 'rgba(248, 164, 76, 0.7)'
    }
]

const CategoryList = props => {
    return(
        <View>
            <FlatList 
                showsVerticalScrollIndicator = {false}
                style={styles.list}
                data={data}
                numColumns={2} 
                keyExtractor = { (category) => category.id }
                renderItem = { ({item}) => {
                    return(
                        <TouchableOpacity onPress={() => props.navigation.navigate('CategoriesDetail')}>
                            <CategoryCard category={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
   list : {
       marginBottom : Dimensions.height * 90
   }

});

export default withNavigation(CategoryList);