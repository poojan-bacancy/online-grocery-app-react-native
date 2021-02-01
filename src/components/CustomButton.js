import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import Dimensions from '../../constants/Dimensions'
const CustomButton = props => {
    return(
        <TouchableOpacity 
            style={{...styles.button,...props.style}} 
            onPress={props.onPress} 
        >
            {props.children}
            <Text style={styles.buttonText}>{props.label}</Text>    
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        height : Dimensions.height * 77,
        width : '80%', 
        marginVertical: 10 , 
        marginHorizontal : 22 , 
        borderRadius : 19 , 
        backgroundColor : '#53B175', 
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'space-evenly'
    },
    buttonText : {  
        color :'white' , 
        fontSize : 18,
        fontFamily : 'Gilroy-Regular',
        fontWeight : '600',
    }
});

export default CustomButton;