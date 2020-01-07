import React from "react";
import {Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {UserDetails} from "../../components/atoms/atoms.js";
import { PostList} from "../../components/organisms/organisms.js";
import commonStyles from "../common.styles.js";
import profileStyle from "./profile.style.js";
import postStyles from "../post.styles.js"
import homeStyles from "../home/home.style";
import {HomeHeader} from "../../components/molecules/molecules";
import {Colors} from "../../styles";
import * as firebase from "firebase";
import Fire from "../../Fire";
import Constants from "expo-constants";
import {_getLocationAsync} from "../../services/business/location/location.service";
import {_pickImage, getPermissionAsync} from "../../services/business/post/image.service";

export default class Profile extends React.Component {

    state = {
        user:{
            email: "",
            username: "",
            avatar:null,
            uid:null
        },
        location: null,
        errorMessage: null,
        image:null,
        imageToUpload:null,
        posts:[],
        loading:false
    };


    componentDidMount() {
        this._getUserById().then(res=>{
            this.setState({user:res});
        });
        this._getPostFromUserAync().then(posts=>{
            this.setState({posts:posts});
        });
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            _getLocationAsync().then(res=>{this.setState(res)});
        }
        getPermissionAsync();
    }

    _getPostFromUserAync () {
        return Fire.shared.getPostsFromUser();
    };

    pickImage = async () => {
        let result = await _pickImage();
        this.setState({ loading: true });
        Fire.shared.uploadAvatar({localUri: result.image}).then(()=>{
            this._getUserById().then(res=>{
                this.setState({ loading: false });
                this.setState({user:res});
            });
        })
    };

    _getUserById () {
        return Fire.shared.getUserById();
    };

    render() {
        if(this.state.user.uid){
            return(
            <View style={commonStyles.screen}>
                <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                            showLocationView={false} username='alex stoica'
                            showLogOut={true}
                            usernameViewStyle={profileStyle.usernameViewStyle}
                />
                <ScrollView style={commonStyles.scrollView}>
                    <UserDetails userDetailsViewStyle={profileStyle.userDetailsView}
                                 userProfileStyle={profileStyle.userProfileImageStyle}
                                 usernameStyle={profileStyle.usernameStyle}
                                 image={this.state.image}
                                 user={this.state.user}
                                 creatorName={this.state.user?.username}
                                 creatorPhoto={this.state.user.avatar}
                                 loading={this.state.loading}
                    />

                    <TouchableHighlight style={profileStyle.editIconView}  onPress={this.pickImage}>
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
                        posts={this.state.posts}
                        descriptionTextStyle={postStyles.descriptionTextStyle}
                        likeViewStyle={postStyles.likeView}
                        likeIconStyle={postStyles.likeIcon}
                    />
                </ScrollView>
            </View>
            );
        }else{
            return (
                <View style={commonStyles.screen}>
                    <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                                showLocationView={false} username='alex stoica'
                                usernameViewStyle={profileStyle.usernameViewStyle}
                    />
                </View>
            );
        }

    }
}
