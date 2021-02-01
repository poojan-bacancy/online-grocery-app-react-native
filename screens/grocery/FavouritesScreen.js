import React from 'react';
import { View , ScrollView , StyleSheet} from 'react-native';
import FavouriteItem from '../../src/components/FavouriteItem';
import CustomButton from '../../src/components/CustomButton';

const FavouritesScreen = () => {

    var favItems = [];
    for ( let i=0 ; i < 10 ; i++){
        favItems.push(
            <View key={i}>
                <FavouriteItem />
            </View>       
        )
    }

    return (
        <View style={styles.screen}>
            <ScrollView>
                { favItems }
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