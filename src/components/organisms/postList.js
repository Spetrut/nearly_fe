import React from "react";
import {View} from "react-native";
import {Post} from "../molecules/molecules";

const PostList = props => {
    return (
        <View style={props.listViewStyle}>
            {props.posts.map(post => {
                return <Post
                    key={post.key}
                    postContainerStyle={props.postContainerStyle}
                    creatorDetailsViewStyle={props.creatorDetailsViewStyle}
                    creatorProfileImageStyle={props.creatorProfileImageStyle}
                    creatorUsernameStyle={props.creatorUsernameStyle}
                    postViewStyle={props.postViewStyle}
                    descriptionTextStyle={props.descriptionTextStyle}
                    imageStyle={props.imageStyle}
                    likeViewStyle={props.likeViewStyle}
                    likeIconStyle={props.likeIconStyle}
                    item={post}
                />
            })}
        </View>
    );

};
export default PostList;
