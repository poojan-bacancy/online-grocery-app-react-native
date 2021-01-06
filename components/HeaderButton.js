import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';


const CustomHeaderButton = props => {
    return <HeaderButton 
                {...props} 
                IconComponent = {FontAwesome}
                iconSize = {23} 
            />;
};

export default CustomHeaderButton;