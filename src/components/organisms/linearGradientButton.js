import React from "react";
import {Text, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient/build/index';

const LinearGradientButton = props => {
    return (
        <View style={props.viewStyle}>
            <LinearGradient colors={props.colors} style={props.linearGradientStyle}>
                <Text style={props.textStyle}> {props.text}</Text>
            </LinearGradient>
        </View>
    );
};
export default LinearGradientButton;


