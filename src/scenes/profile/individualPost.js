import React from "react";
import ProfileLayout from "./profile.layout";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {UserDetails} from "../../components/atoms/atoms";
import commonStyles from "../common.styles";
import {Ionicons} from "@expo/vector-icons";
import {PRIMARY_2} from "../../styles/colors";
import postStyles from "../post.styles";

export default class IndividualPost extends React.Component {


    goBack() {
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (<View style={{...commonStyles.screen}}>
            <View style={{width: '100%'}}>
                <TouchableOpacity style={{marginLeft: 15,marginBottom:50}} onPress={() => this.goBack()}>
                    <Ionicons name="md-arrow-back" style={commonStyles.goBackIcon} size={40}
                              color={PRIMARY_2}></Ionicons>
                </TouchableOpacity>
                <UserDetails userDetailsViewStyle={postStyles.creatorDetailsView}
                             userProfileStyle={postStyles.creatorProfileImageStyle}
                             usernameStyle={postStyles.creatorUsername}
                             creatorPhoto={this.props.navigation.state.params.post.creatorPhoto}
                             creatorName={this.props.navigation.state.params.post.creatorUsername}
                             user={this.props.navigation.state.params.post.user}/>

                <Image style={{...postStyles.imageStyle}}
                       source={{uri: this.props.navigation.state.params.post.image}}/>
                <Text
                    style={{...postStyles.descriptionTextStyle, ...commonStyles.colorWhite}}>{this.props.navigation.state.params.post.description}</Text>
            </View>
        </View>)
    }
}
