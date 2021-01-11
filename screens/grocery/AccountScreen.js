import React from 'react';
import { View ,Image, Text , ScrollView , TouchableOpacity ,StyleSheet} from 'react-native';
import CustomButton from '../../src/components/CustomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//shopping bag Feather

const AccountItem = props => {
    return <View style={styles.accItem}>
        <View style={styles.name_iconBlock}>
            {props.children}
            <Text style={styles.accItemLabel}>{props.label}</Text>
        </View>
        <View style={styles.secondBlock}>
        <TouchableOpacity><MaterialCommunityIcons name="greater-than" size={23} /></TouchableOpacity>
        </View>
    </View>
}

const AccountScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.userDetailBlock}>
                <View style={styles.imageBlock}>
                    <Image style={styles.image} source={require('../../assets/images/user.png')} />
                </View>
                <View style={styles.nameEmailBlock}>
                    <View style={styles.nameIconBlock}>
                        <View><Text style={styles.name}>Afsar Hossen</Text></View>
                        <TouchableOpacity style={styles.iconBlock}><EvilIcons name="pencil" size={23} color="#53B175"/></TouchableOpacity>
                    </View>
                        <Text style={styles.email}>Imshuvo97@gmail.com</Text>
                </View>
            </View>
            <ScrollView style={{flex:1}}>
                <AccountItem label="Orders">
                    <Feather name="shopping-bag" size={23} />
                </AccountItem>
                <AccountItem label="My Details">
                    <AntDesign name="idcard" size={23} />
                </AccountItem>
                <AccountItem label="Delivery Address">
                    <Ionicons name="location-outline" size={23} />
                </AccountItem>
                <AccountItem label="Payment Methods">
                    <AntDesign name="creditcard" size={23} />
                </AccountItem>
                <AccountItem label="Promo Cord">
                    <Feather name="shopping-bag" size={23} />
                </AccountItem>
                <AccountItem label="Notifications ">
                    <Feather name="bell" size={23} />
                </AccountItem>
                <AccountItem label="Help">
                    <Feather name="help-circle" size={23} />
                </AccountItem>
                <AccountItem label="About">
                    <AntDesign name="exclamationcircleo" size={23} />
                </AccountItem>
            </ScrollView>
            <View style={styles.buttonBlock}>
                <CustomButton  style={styles.button} >
                    <MaterialIcons style={styles.icon} name="logout" size={23} color="#53B175" />
                    <Text style={styles.buttonText}>Log Out</Text>
                </CustomButton>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    accItem : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomColor : '#E2E2E2',
        borderTopColor : '#E2E2E2',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        height : 60,
    },
    name_iconBlock : {
        marginHorizontal : 20,
        alignItems : 'center',
        flexDirection : 'row'
    },
    accItemLabel : {
        marginHorizontal : 20,
        fontFamily : 'Gilroy-Medium',
        fontSize : 18,
        lineHeight : 22,
        fontWeight : '600'
    },
    secondBlock : {
        marginHorizontal : 20,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : "flex-end"
    },
    screen : {
        flex : 1,
    },
    userDetailBlock : {
        height : 100,
        flexDirection : 'row'
    },
    imageBlock : {
        justifyContent : 'center',
        marginHorizontal : 5,
        
    },
    image : {
        borderRadius : 27,
        height : 60,
        width : 60,
        marginHorizontal : 5,
        
    },
    nameEmailBlock : {
        marginHorizontal : 5,
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'center',
        
    },
    nameIconBlock : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
      
    }, 
    name : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 20,
        lineHeight : 18,
    },
    iconBlock : {
        marginBottom : 6,
        marginLeft : 5,
    },
    email : {
        marginTop : 5,
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
        lineHeight : 18,
        color : '#7C7C7C'
    },
    buttonBlock : {
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    button : {
        backgroundColor : 'white',
        width : '85%',
        justifyContent : 'space-around'
    },
    icon : {
        marginRight : 5
    },
    buttonText : {
        color :'#53B175' , 
        fontSize : 18,
        fontFamily : 'Gilroy-Regular',
        marginRight : 10
    }
});

export default AccountScreen;