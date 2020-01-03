import React from "react";
import {Image, Text, View} from "react-native";
import commonStyles from "../../scenes/common.styles";

const UserDetails = props => {
    return (
        <View style={props.userDetailsViewStyle}>
            <Image style={props.userProfileStyle} source={props.user?.profileImageUrl}/>
            <Text style={{...props.usernameStyle, ...commonStyles.colorWhite}}>{props.user?.username}</Text>
        </View>
    );
};
export default UserDetails;
