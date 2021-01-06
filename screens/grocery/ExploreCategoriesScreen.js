import React from 'react';
import { View  , StyleSheet} from 'react-native';
import SearchBar from '../../components/SearchBar';
import CategoryList from '../../components/CategoryList';

const ExploreCategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <SearchBar />
            <CategoryList />
        </View>
    );
}

ExploreCategoriesScreen.navigationOptions = {
    headerTitle : 'Find Products'
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginHorizontal : 10,
    }
});

export default ExploreCategoriesScreen;