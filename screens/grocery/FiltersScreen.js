import React , {useState} from 'react';
import { View ,Text , StyleSheet} from 'react-native';
import { HeaderButtons , Item} from 'react-navigation-header-buttons';
import  HeaderButton from '../../src/components/HeaderButton';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../src/components/CustomButton';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxItem = props => {
    const [isSelected,setIsSelected] = useState(false);
    return(
        <View style={styles.selectionItem}>
            <CheckBox value={isSelected} onValueChange={setIsSelected}  />
            <Text style={{...styles.options , ...{color : isSelected ? '#53B175' : 'black'}}}>{props.name}</Text>
        </View>
    );
}

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.selctionBlock}>
                <Text style={styles.selctionLabel}>Categories</Text>
                <CheckBoxItem name="Eggs" />
                <CheckBoxItem name="Noodles & Pasta" />
                <CheckBoxItem name="Chips & Crisps" />
                <CheckBoxItem name="Fast Food" />
            </View>
            <View style={styles.selctionBlock}>
                <Text style={styles.selctionLabel}>Brands</Text>
                <CheckBoxItem name="Individual Callection" />
                <CheckBoxItem name="Cocola" />
                <CheckBoxItem name="Ifad" />
                <CheckBoxItem name="Kazi Farmas" />
            </View>
            <View style={styles.buttonBlock}>
                <CustomButton label="Apply Filter" />
            </View>
        </View>
    );
}

FiltersScreen.navigationOptions = navData => {
    return { 
        headerLeft : () => 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            iconSize = {30}
            IconComponent = {Entypo}
            title="Close" 
            iconName = 'cross'
            onPress={() => navData.navigation.goBack() } 
        />
        </HeaderButtons> 
    };
}

const styles = StyleSheet.create({
    screen : {
        paddingHorizontal : 20,
        marginTop : 2,
        flex : 1,
        backgroundColor : '#ccc',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30
    },
    buttonBlock : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'center'
    } , 
    selctionBlock : {
        marginTop : 30,
    },  
    selctionLabel : {
        marginBottom : 20,
        fontWeight : '600',
        fontFamily : 'Gilroy-Medium',
        fontSize : 24,
        lineHeight : 29,
    },
    selectionItem : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    options : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 16,
        lineHeight : 18,
        marginHorizontal : 10,
    }
});

export default FiltersScreen;