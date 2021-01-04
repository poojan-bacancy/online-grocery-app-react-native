import React  from 'react';
import { TouchableOpacity,View,StyleSheet,Text,Image,ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import CustomButton from '../../components/CustomButton';

const SelectLocationScreen = props => {

    return(
       
        <View style={styles.screen}>
            <View style={styles.imageBlock}>
                <Image style={styles.image} source={require('../../assets/images/illustration.png')} />
            </View>

            <View style={styles.headerBlock}>
                <Text style={styles.title}>Select Your Location</Text>
                <Text style={styles.detailText}>Swithch on your location to stay in tune with what’s happening in your area</Text>
            </View>

            <View style={styles.selectionBlock}>
                <View style={styles.attributeBlock}>
                    <Text style={styles.attributeTitle}>Your Zone</Text>
                    {/* <DropDownPicker
                        placeholder='Select your Zone'
                        items={[
                            {label: 'USA', value: 'usa'},
                            {label: 'UK', value: 'uk'},
                            {label: 'France', value: 'france'},
                        ]}
                        containerStyle={{height: 40}}
                        style={{marginTop : 5}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    /> */}
                    <View style={{borderBottomColor : '#888' , borderBottomWidth : 1}}>
                    <RNPickerSelect
                        placeholder = {{ 
                            label: 'Select your zone', 
                            value: null, 
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                    />
                    </View>
                </View>
                <View style={styles.attributeBlock}>
                    <Text style={styles.attributeTitle}>Your Area</Text>
                    {/* <DropDownPicker
                        placeholder='Select your Area'
                        items={[
                            {label: 'USA', value: 'usa'},
                            {label: 'UK', value: 'uk'},
                            {label: 'France', value: 'france'},
                        ]}
                        containerStyle={{ height: 40}}
                        style={{marginTop : 5}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    /> */}
                    <View style={{borderBottomColor : '#888' , borderBottomWidth : 1}}>
                    <RNPickerSelect
                        placeholder = {{ 
                            label: 'Select your area', 
                            value: null, 
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                    />
                    </View>
                </View>
                <View style={{alignItems : 'center'}}>
                <CustomButton label="Submit" style={styles.button} onPress={() => props.navigation.navigate('LogIn')}/>
                </View>
                
                {/* <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('LogIn')} >
                    <Text style={styles.buttonText}>Submit</Text>    
                </TouchableOpacity> */}
            </View>
        </View>
        
    );
};


SelectLocationScreen.navigationOptions = {
    headerTitle : ''
}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        marginBottom : 20
    },
    imageBlock:{
        marginTop : 50,
        alignItems : 'center'
    },
    image:{
        width : 224,
        height : 170
    },
    headerBlock : {
        marginTop : 20,
        marginHorizontal : 25
    },
    title:{
        fontFamily : 'Gilroy-Medium',
        fontWeight : '600',
        fontSize : 26,
        textAlign : 'center'
    },
    detailText : {
        fontFamily : 'Gilroy-Medium',
        fontSize : 16,
        textAlign : 'center',
        color : '#707070',
        marginTop : 10
    },
    selectionBlock:{
        flex : 1,
        justifyContent : 'flex-end',
        marginHorizontal : 18
    },
    attributeBlock : {
        marginVertical : 15
    },
    attributeTitle : {
        fontFamily : 'Gilroy-Medium',
        fontWeight: '600',
        fontSize : 16,
        color : '#707070',
        
    },
    button : { 
        marginTop : 40 , 
        marginHorizontal : 22 , 
        borderRadius : 40 , 
        backgroundColor : '#53B175', 
        
    },
    
});


export default SelectLocationScreen;