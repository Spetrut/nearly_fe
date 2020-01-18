import React from "react";
import {Image, ScrollView, TouchableHighlight, View} from "react-native";
import {UserDetails} from "../../components/atoms/atoms.js";
import {PostList} from "../../components/organisms/organisms.js";
import commonStyles from "../common.styles.js";
import profileStyle from "./profile.style.js";
import postStyles from "../post.styles.js"
import homeStyles from "../home/home.style";
import {HomeHeader} from "../../components/molecules/molecules";

const ProfileLayout = props => {

    return (
        <View style={commonStyles.screen}>
            <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                        showLocationView={false}
                        showLogOut={true}
                        usernameViewStyle={profileStyle.usernameViewStyle}
            />
            <ScrollView style={commonStyles.scrollView}>
                <UserDetails userDetailsViewStyle={profileStyle.userDetailsView}
                             userProfileStyle={profileStyle.userProfileImageStyle}
                             usernameStyle={profileStyle.usernameStyle}
                             user={props.user}
                             creatorName={props.user?.username}
                             creatorPhoto={props.user?.avatar}
                             loading={props.loading}
                />

                <TouchableHighlight style={profileStyle.editIconView} onPress={()=>props.pickImage()}>
                    <Image style={profileStyle.editIcon} source={require('../../../assets/icons/edit.png')}/>
                </TouchableHighlight>
                <PostList
                    postContainerStyle={postStyles.postContainer}
                    listViewStyle={postStyles.listView}
                    creatorDetailsViewStyle={postStyles.creatorDetailsView}
                    creatorProfileImageStyle={postStyles.creatorProfileImageStyle}
                    creatorUsernameStyle={postStyles.creatorUsername}
                    postViewStyle={postStyles.postView}
                    imageStyle={postStyles.imageStyle}
                    posts={props.posts}
                    descriptionTextStyle={postStyles.descriptionTextStyle}
                    likeViewStyle={postStyles.likeView}
                    likeIconStyle={postStyles.likeIcon}
                />
            </ScrollView>
        </View>
    );

};

export default ProfileLayout;
