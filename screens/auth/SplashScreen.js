import React from 'react';
import { View , StyleSheet , Image , Text  } from 'react-native';
import Dimensions from '../../constants/Dimensions';

const SplashScreen = props => {

    setTimeout(() => {
        props.navigation.navigate('Onboarding');
    }, 2500);

    return  (
        <View style={styles.screen} >
            <View style={styles.centered}>
                <View style={styles.logoBlock} >               
                    <Image style={styles.logo} source={require('../../assets/images/Group.png')} />
                </View>
                <View style={styles.secondBlock} >
                    <View style={styles.titleBlock}>
                        <Image style={styles.title} source={require('../../assets/images/title.png')} />
                    </View>
                    <View style={styles.smallTextBlock}>
                        <Text style={styles.smallText}>online groceriet</Text>
                    </View>
                </View>
            </View>
        </View>  
    );
}

SplashScreen.navigationOptions = {
    headerShown : null
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#53B175'
    },
    centered : {
        width: '80%',
        height : '15%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    logoBlock : {
        width : '15%',
        marginBottom : 15,
        marginLeft : 5
    },
    secondBlock : {
        width : '75%',
        marginRight : 5,
        alignItems : 'center'
    },
    titleBlock : {
        height : '50%'
    },
    title : {
        height : Dimensions.height * 56,
        width : Dimensions.width * 225
    },    
    smallTextBlock:{
        height : '25%',
        width : '100%',
        marginTop : 5,
        alignItems : 'center'  
    },
    smallText  :{
        fontSize : 15,
        fontFamily : 'Gilroy-Medium',
        color : '#FFFFFF',
        letterSpacing : 5.5,
        lineHeight : 18
    },
    logo : {
        marginTop :5,
        height : Dimensions.height * 74,
        width : Dimensions.width * 64
    }
});

export default SplashScreen;