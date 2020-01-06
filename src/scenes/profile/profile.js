import React from "react";
import {Image, ScrollView, View} from "react-native";
import {UserDetails} from "../../components/atoms/atoms.js";
import { PostList} from "../../components/organisms/organisms.js";
import commonStyles from "../common.styles.js";
import profileStyle from "./profile.style.js";
import postStyles from "../post.styles.js"
import homeStyles from "../home/home.style";
import {HomeHeader} from "../../components/molecules/molecules";


const Profile = props => {
    const imageUrl1 = require("./shutterstock_793481701.jpg");
    const imageUrl2 = require("./influencer-marketing-3-things.jpg");
    const imageUrl3 = require("./0_Cs1LVVwsqVZP50DR.jpg");

    const mockPosts = [
        {
            key: "1", description: "lorem ipsum lorem ipsum", imageUrl: imageUrl1, user: {
                username: 'Blanche Hall',
                profileImageUrl: imageUrl1
            }, likeCount: 33, isLikedPost: true
        },
        {
            key: "2", description: "lorem ipsum lorem ipsum", imageUrl: imageUrl2, user: {
                username: 'Blanche Hall',
                profileImageUrl: imageUrl2
            }, likeCount: 33, isLikedPost: false
        },
        {
            key: "3", description: "lorem ipsum lorem ipsum", imageUrl: imageUrl3, user: {
                username: 'Blanche Hall',
                profileImageUrl: imageUrl3
            }, likeCount: 33, isLikedPost: true
        }
    ];

    const mockUser = {
        username: 'Blanche Hall',
        profileImageUrl: imageUrl2
    };

    return (
        <View style={commonStyles.screen}>
            <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                        showLocationView={false} username='alex stoica' usernameViewStyle={profileStyle.usernameViewStyle}
            />
            <ScrollView style={commonStyles.scrollView}>
                <UserDetails userDetailsViewStyle={profileStyle.userDetailsView}
                             userProfileStyle={profileStyle.userProfileImageStyle}
                             usernameStyle={profileStyle.usernameStyle}
                             user={mockUser}
                />
                <View style={profileStyle.editIconView}>
                    <Image style={profileStyle.editIcon} source={require('../../../assets/icons/edit.png')}/>
                </View>
                <PostList
                    postContainerStyle={postStyles.postContainer}
                    listViewStyle={postStyles.listView}
                    creatorDetailsViewStyle={postStyles.creatorDetailsView}
                    creatorProfileImageStyle={postStyles.creatorProfileImageStyle}
                    creatorUsernameStyle={postStyles.creatorUsername}
                    postViewStyle={postStyles.postView}
                    imageStyle={postStyles.imageStyle}
                    posts={mockPosts}
                    descriptionTextStyle={postStyles.descriptionTextStyle}
                    likeViewStyle={postStyles.likeView}
                    likeIconStyle={postStyles.likeIcon}
                />
            </ScrollView>
        </View>
    );
};
export default Profile;
