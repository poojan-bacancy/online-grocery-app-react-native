import React from 'react';
import { View , ScrollView , StyleSheet} from 'react-native';
import FavouriteItem from '../../components/FavourIteItem';
import CustomButton from '../../components/CustomButton';

const FavouritesScreen = () => {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
            </ScrollView>
            <CustomButton style={styles.button} label="Add all to cart" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginHorizontal : 8
    },
    button : {
        width : '92%',
        marginHorizontal : 15
    },
});

export default FavouritesScreen;