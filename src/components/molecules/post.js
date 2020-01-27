import React from "react";
import {Image, Text, View} from "react-native";
import commonStyles from "../../scenes/common.styles";
//remove commonStyles, move it into props
import {UserDetails} from "../atoms/atoms";
import {Typography} from "../../styles";
import Like from "../atoms/like";

const Post = props => {
    // const {item} = props;
    return (
        <View style={props.postContainerStyle}>
            <View style={props.postViewStyle}>
            <UserDetails userDetailsViewStyle={props.creatorDetailsViewStyle}
                         userProfileStyle={props.creatorProfileImageStyle}
                         usernameStyle={props.creatorUsernameStyle}
                         creatorPhoto={props.item?.creatorPhoto}
                         creatorName={props.item?.creatorUsername}
                         user={props.item?.user}/>

                <Image style={props.imageStyle} source={{uri:props.item?.image}}/>
                {/*<Text*/}
                {/*    style={{...props.descriptionTextStyle, color: Colors.PRIMARY_2}}>{props.item?.creatorUsername}</Text>*/}
                <Text
                    style={{...props.descriptionTextStyle, ...commonStyles.colorWhite}}>{props.item?.description}</Text>
                {/*<Like likeCount={33} isLikedPost={props.item?.isLikedPost}*/}
                {/*      likeViewStyle={props.likeViewStyle}*/}
                {/*      timestamp={props.item?.timestamp}*/}
                {/*      likeIconStyle={props.likeIconStyle}/>*/}
            </View>
        </View>

    );
};
export default Post;
