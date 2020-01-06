import React from "react";
import {Image, View} from "react-native";

const UserDetails = props => {
    return (
        <View style={props.userDetailsViewStyle}>
            <Image style={props.userProfileStyle} source={props.user?.profileImageUrl}/>
        </View>
    );
};
export default UserDetails;
