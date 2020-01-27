import React from "react";
import {ActivityIndicator, Image, Text, View} from "react-native";
import {Colors, Typography} from "../../styles";

const UserDetails = props => {
    const imageUrl1 = require("../../../assets/icons/user.png");

    if (props.loading) {
        return (
            <View style={props.userDetailsViewStyle}>
                <ActivityIndicator color={Colors.PRIMARY_2} size="large"></ActivityIndicator>
                <Text style={{...Typography.FONT_BOLD, color: Colors.WHITE}}>{props.creatorName}</Text>
            </View>
        );
    }
    if (props.creatorPhoto) {
        return (
            <View style={props.userDetailsViewStyle}>
                <Image style={props.userProfileStyle} source={{uri: props.creatorPhoto}}/>
                <View>
                    <Text style={{...Typography.FONT_BOLD, color: Colors.WHITE,fontSize:16}}>{props.creatorName}</Text>
                    {/*<Text style={{...Typography.FONT_LIGHT,color: Colors.DARK_GREY,fontSize:12}}>{props.creatorName}</Text>*/}
                </View>
            </View>
        );
    }
    return (
        <View style={props.userDetailsViewStyle}>
            <Image style={props.userProfileStyle} source={imageUrl1}/>
            <Text style={{...Typography.FONT_BOLD, color: Colors.WHITE}}>{props.creatorName}</Text>
        </View>
    );
};
export default UserDetails;
