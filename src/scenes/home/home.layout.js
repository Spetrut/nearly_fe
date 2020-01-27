import React from "react";
import {ScrollView, Text, View} from "react-native";
import {PostList} from "../../components/organisms/organisms.js";
import commonStyles from "../common.styles.js";
import postStyles from "../post.styles.js"
import homeStyles from "./home.style.js";
import {HomeHeader} from "../../components/molecules/molecules";



const HomeLayout = props => {

    let content = null;
    if (props && props.posts) {
        content = <PostList
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
        />;
    }
    return (
        <View style={commonStyles.screen}>
            <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                        locationIconViewStyle={homeStyles.locationIconView}
                        locationIconStyle={homeStyles.locationIcon}
                        locationIconTextStyle={{...commonStyles.colorPrimary_1}}
                        location={props.location}
                        showLocationView={true}
            />
            <ScrollView style={commonStyles.scrollView}>
                {/*<View style={homeStyles.optionsView}>*/}
                {/*    <View style={homeStyles.latestView}>*/}
                {/*        <Text onPress={()=>props.latestButtonPress()} style={{...props.latestColor, fontSize: 50}}>Latest</Text>*/}
                {/*    </View>*/}
                {/*    <View style={homeStyles.popularView}>*/}
                {/*        <Text onPress={()=>props.popularButtonPress()} style={{...props.popularColor, fontSize: 50}}>Popular</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
                {content}
            </ScrollView>
        </View>
    );
};
export default HomeLayout;
