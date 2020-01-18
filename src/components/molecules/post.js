import React from "react";
import {Image, Text, View} from "react-native";
import commonStyles from "../../scenes/common.styles";
//remove commonStyles, move it into props
import {UserDetails} from "../atoms/atoms";

const Post = props => {
    // const {item} = props;
    return (
        <View style={props.postContainerStyle}>
            <UserDetails userDetailsViewStyle={props.creatorDetailsViewStyle}
                         userProfileStyle={props.creatorProfileImageStyle}
                         usernameStyle={props.creatorUsernameStyle}
                         creatorPhoto={props.item?.creatorPhoto}
                         creatorName={props.item?.creatorUsername}
                         user={props.item?.user}/>
            <View style={props.postViewStyle}>
                <Image style={props.imageStyle} source={{uri:props.item?.image}}/>
                {/*<Text*/}
                {/*    style={{...props.descriptionTextStyle, color: Colors.PRIMARY_2}}>{props.item?.creatorUsername}</Text>*/}
                <Text
                    style={{...props.descriptionTextStyle, ...commonStyles.colorWhite}}>{props.item?.description}</Text>
                {/*<Like likeCount={props.item?.likeCount} isLikedPost={props.item?.isLikedPost}*/}
                {/*      likeViewStyle={props.likeViewStyle}*/}
                {/*      timestamp={props.item?.timestamp}*/}
                {/*      likeIconStyle={props.likeIconStyle}/>*/}
            </View>
        </View>

    );
};
export default Post;
