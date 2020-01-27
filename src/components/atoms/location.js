import {Image, Text, View} from "react-native";
import React from "react";

const Location = props => {

    return (
        <View style={props.locationIconViewStyle}>
            <Text style={{...props.locationIconTextStyle,fontWeight:"bold"}}>{props.location}</Text>
            <Image style={props.locationIconStyle} source={require('../../../assets/icons/location.png')}/>
        </View>
    );
};

export default Location;
