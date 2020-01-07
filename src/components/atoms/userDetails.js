import React from "react";
import {ActivityIndicator, Image, Text, View} from "react-native";
import {Colors} from "../../styles";

const UserDetails = props => {
    const imageUrl1 = require("./user.png");

    if(props.loading){
        return (
            <View style={props.userDetailsViewStyle}>
                <ActivityIndicator color={Colors.PRIMARY_2} size="large"></ActivityIndicator>
                <Text style={{color:Colors.WHITE}}>{props.creatorName}</Text>
            </View>
        );
    }
    if(props.creatorPhoto){
        return (
            <View style={props.userDetailsViewStyle}>
                <Image style={props.userProfileStyle} source={{uri: props.creatorPhoto}}/>
                <Text style={{color:Colors.WHITE}}>{props.creatorName}</Text>
            </View>
        );
    }
    return (
        <View style={props.userDetailsViewStyle}>
            <Image style={props.userProfileStyle} source={imageUrl1}/>
            <Text style={{color:Colors.WHITE}}>{props.user?.username}</Text>
        </View>
    );
};
export default UserDetails;
