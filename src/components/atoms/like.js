import React from "react";
import {Image, Text, View} from "react-native";
import commonStyles from "../../scenes/common.styles";


const Like = props => {
    let icon;
    if(props.isLikedPost){
        icon= <Image style={props.likeIconStyle} source={require('../../../assets/icons/heart_filled.png')} />
    }else{
        icon=<Image style={props.likeIconStyle} source={require('../../../assets/icons/heart.png')} />;
    }
    return (
        <View style={props.likeViewStyle}>
            {icon}
            <Text style={commonStyles.colorWhite}>{props.likeCount}</Text>
        </View>
    );
};
export default Like;
