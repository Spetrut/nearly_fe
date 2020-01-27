import React from "react";
import {Image, ImageBackground, ScrollView, Text, TouchableHighlight, View} from "react-native";
import commonStyles from "../common.styles.js";
import profileStyle from "./profile.style.js";
import {PRIMARY_1, WHITE} from "../../styles/colors";
import {Ionicons} from "@expo/vector-icons";
import {Colors, Mixins, Typography} from "../../styles";
import Fire from "../../services/Fire";


const ProfileLayout = props => {

    return (
        <View style={commonStyles.screen}>
            {/*<HomeHeader viewStyle={profileStyle.headerView} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}*/}
            {/*            showLocationView={false}*/}
            {/*            showLogOut={true}*/}
            {/*            logOutButtonStyle={profileStyle.logOutButtonStyle}*/}
            {/*            logOutButtonView={profileStyle.logOutButtonView}*/}
            {/*/>*/}
            <ScrollView style={commonStyles.scrollView}>
                <View style={profileStyle.userView}>
                    <ImageBackground source={{uri: props.user?.avatar}} style={{width: '100%', height: 250}}>
                        {/*<UserDetails userDetailsViewStyle={profileStyle.userDetailsView}*/}
                        {/*             userProfileStyle={profileStyle.userProfileImageStyle}*/}
                        {/*             usernameStyle={profileStyle.usernameStyle}*/}
                        {/*             user={props.user}*/}
                        {/*             creatorName={props.user?.username}*/}
                        {/*             creatorPhoto={props.user?.avatar}*/}
                        {/*             loading={props.loading}*/}
                        {/*/>*/}
                        <Text style={{
                            position: 'absolute',
                            fontSize: 18,
                            right: 15,
                            top: 40,
                            color: PRIMARY_1,
                            zIndex: 1, ...Typography.FONT_BOLD
                        }} onPress={() => {
                            Fire.shared.signOut();
                        }}>log out</Text>
                        <View style={profileStyle.userProfileView}>
                            <View style={{flexDirection: 'row', alignItems: "center"}}>
                                <Image style={profileStyle.userProfileImageStyle} source={{uri: props.user?.avatar}}/>
                                <View style={{marginLeft: 10, alignItems: 'center'}}>
                                    <Text style={{
                                        color: WHITE,
                                        fontSize: 20
                                    }}>{props.user?.username}</Text>
                                    <Text style={{color: PRIMARY_1}}>{props.posts.length} posts</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableHighlight style={profileStyle.editIconView} onPress={() => props.pickImage()}>
                        <Ionicons name="md-camera" size={10} onPress={props.takePhoto} color={PRIMARY_1}/>
                        {/*<Image style={profileStyle.editIcon} source={require('../../../assets/icons/edit.png')}/>*/}
                    </TouchableHighlight>
                </View>
                <View style={{marginLeft: 15, marginTop: 30, marginRight: 15}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom: 10}}>
                        <Text style={{color: WHITE, ...Typography.FONT_BOLD, fontSize: 18}}>About
                            me</Text>
                        <TouchableHighlight style={{ backgroundColor: Colors.SECONDARY_3,
                            marginLeft:5,
                            padding: Mixins.scaleSize(5),
                            borderWidth: 1,
                            borderColor: Colors.PRIMARY_2,
                            borderRadius: 40}} onPress={() => props.pickImage()}>
                            {/*<Ionicons name="md-camera" size={10} onPress={props.takePhoto} color={PRIMARY_1}/>*/}
                            <Image style={profileStyle.editIcon} source={require('../../../assets/icons/edit.png')}/>
                        </TouchableHighlight>
                    </View>
                    <Text style={{color: WHITE}}>{props.user.about}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    width: '100%',
                    marginTop: 30
                }}>
                    {props.posts.map(post => {
                        return (<TouchableHighlight style={{width: 100, height: 150, margin: 10, borderRadius: 6}}
                                                    onPress={() => props.navigateToIndividualPost(post)}>
                            <Image style={{width: 100, height: 150, borderRadius: 6}}
                                   source={{uri: post.image}}/>
                        </TouchableHighlight>);
                    })}
                </View>
            </ScrollView>
        </View>
    );

};

export default ProfileLayout;
