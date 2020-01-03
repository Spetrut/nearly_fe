import React from "react";
import {Image, Text, View} from "react-native";
import commonStyles from "../../scenes/common.styles";
import {UserDetails, Like} from "../atoms/atoms";

const Post = props => {
    // const {item} = props;
    return (
        <View style={props.postContainerStyle}>
            <UserDetails userDetailsViewStyle={props.creatorDetailsViewStyle}
                         userProfileStyle={props.creatorProfileImageStyle}
                         usernameStyle={props.creatorUsernameStyle}
                         user={props.item?.user}/>
            <View style={props.postViewStyle}>
                <Image style={props.imageStyle} source={props.item?.imageUrl}/>
                <Text
                    style={{...props.descriptionTextStyle, ...commonStyles.colorWhite}}>{props.item?.description}</Text>
                <Like likeCount={props.item?.likeCount} isLikedPost={props.item?.isLikedPost}
                      likeViewStyle={props.likeViewStyle}
                      likeIconStyle={props.likeIconStyle}/>
            </View>
        </View>

    );
};
export default Post;
