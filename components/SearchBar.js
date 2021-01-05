import React from "react";
import { TextInput, StyleSheet , View} from "react-native";
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = props => {
  return (
        <View style={styles.backgroundStyle}>
          <Feather name = "search" style={styles.iconStyle} size={25} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder ="search store" 
            value = {props.term}
          />
      </View>
  );
};

const styles = StyleSheet.create({
 backgroundStyle : {
    backgroundColor : '#ccc',
    flexDirection:'row',
    height : 50,
    marginVertical : 20 , 
    marginHorizontal : 20,
    borderRadius : 20
 },
 inputStyle : {
    flex : 1,
    marginHorizontal : 15
 },
 iconStyle : {
     marginLeft : 10,
     alignSelf : 'center'
 }
});

export default SearchBar;
