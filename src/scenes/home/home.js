import React, {Component} from "react";
import HomeLayout from "./home.layout";
import Constants from 'expo-constants';
import {_getLocationAsync} from '../../services/business/location/location.service'
import * as firebase from "firebase";

export default class Home extends Component {

    imageUrl1 = require("./shutterstock_793481701.jpg");
    imageUrl2 = require("./influencer-marketing-3-things.jpg");
    imageUrl3 = require("./0_Cs1LVVwsqVZP50DR.jpg");

    mockPosts = [
        {
            key: "1", description: "lorem ipsum lorem ipsum", imageUrl: this.imageUrl1, user: {
                username: 'Blanche Hall',
                profileImageUrl: this.imageUrl1
            }, likeCount: 33, isLikedPost: true
        },
        {
            key: "2", description: "lorem ipsum lorem ipsum", imageUrl: this.imageUrl2, user: {
                username: 'Blanche Hall',
                profileImageUrl: this.imageUrl2
            }, likeCount: 33, isLikedPost: false
        },
        {
            key: "3", description: "lorem ipsum lorem ipsum", imageUrl: this.imageUrl3, user: {
                username: 'Blanche Hall',
                profileImageUrl: this.imageUrl3
            }, likeCount: 33, isLikedPost: true
        }
    ];

    state = {
        email: "",
        displayName: "",
        location: null,
        errorMessage: null,
    };

    componentDidMount() {
        const { email, displayName,photoURL } = firebase.auth().currentUser;

        this.setState({ email, displayName });

        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            _getLocationAsync().then(res=>{this.setState(res)});
        }
    }

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
           text=this.state.location.city+', '+this.state.location.country;
        }
        return (
            <HomeLayout location={text} posts={this.mockPosts}/>
        );
    }
}

