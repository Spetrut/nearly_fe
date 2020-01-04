import React from "react";
import {Text, View} from "react-native";
import {Location} from "../atoms/atoms";

const HomeHeader = props => {

    return (
        <View style={props.viewStyle}>
            <Text style={props.logoStyle}>Nearly</Text>
            <Location locationIconViewStyle={props.locationIconViewStyle} locationIconStyle={props.locationIconStyle}
                      locationIconTextStyle={props.locationIconTextStyle} location={props.location}/>
        </View>
    );
};

export default HomeHeader;
