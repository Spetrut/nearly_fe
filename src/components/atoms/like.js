import React from "react";
import {Image, Text, View} from "react-native";
import commonStyles from "../../scenes/common.styles";
import {Colors} from "../../styles";
import moment from "moment";


const Like = props => {
    debugger
    var datePast = new Date(props.timestamp);
    var dateNow = new Date();

    var seconds = Math.floor(((dateNow)-(datePast))/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    var text;
    if(days>0){
        text=days;
    }else{
        if(hours>0){
            text=hours;
        }else{
            if(minutes>0){
                text=minutes;
            }else{
                text=seconds;
            }
        }
    }
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
            {/*<Text style={{color:Colors.DARK_GREY,alignSelf:'flex-end'}}>{moment(props.timestamp?.toNumber()).fromNow()}</Text>*/}
            {/*<Text style={{color:Colors.DARK_GREY,alignSelf:'flex-end'}}>{text}</Text>*/}

        </View>
    );
};
export default Like;
