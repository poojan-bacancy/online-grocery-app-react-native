import React from 'react';
import { View ,Text ,StyleSheet,Image } from 'react-native';

const SplashScreen = props => {
    return  <View style={styles.screen} >
        <View style={styles.centered}>
            <View style={styles.firstBlock} >
                <Image style={styles.logo} source={require('../assets/images/Group.png')} />
            </View>
            <View style={styles.secondBlock} >
                <View><Image style={styles.title} source={require('../assets/images/title.png')} /></View>
                <View style={{alignItems : 'center'}} ><Text style={styles.smallText} >online groceries</Text></View>
            </View>
        </View>
    </View> ;
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
    firstBlock : {
        height : '90%',
        width : '15%',

    },
    secondBlock : {
        width : '75%'
    },
    title : {
        height : '72%',
        width : '100%'
    },    
    smallText:{
        fontSize : 14,
    
        color:'#FFFFFF'
    },
     
    logo : {
        marginTop : 10,
        height : 64,
        width : 54
    }

});

export default SplashScreen;