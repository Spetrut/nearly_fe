import React, {Component} from "react";
import HomeLayout from "./home.layout";
import Constants from 'expo-constants';
import {_getLocationAsync} from '../../services/business/location/location.service'
import * as firebase from "firebase";
import Fire from "../../Fire"
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);
import { withNavigation } from 'react-navigation';

class Home extends React.Component {


    state = {
        email: "",
        displayName: "",
        location: null,
        errorMessage: null,
        posts:[]
    };



    _getPosts (location) {
       return Fire.shared.getPostsFromLocation(location);
    };


    componentDidMount() {
        const { email, displayName,photoURL } = firebase.auth().currentUser;

        this.setState({ email, displayName });

        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                location:"Timișoara, România"
            });
            this._getPosts("Timișoara, România").then(res=>{
               // debugger
                this.setState({posts:res});
            });

        } else {
            _getLocationAsync().then(res=>{
                this.setState(res);
                this._getPosts(res.location).then(posts=>{
                    this.setState({posts:posts});
                });
            });
        }
    }

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
           text=this.state.location;
        }
        if(this.props.navigation.state.params&&this.props.navigation.state.params.reload){
            console.log("aleluia");
            this.props.navigation.state.params.reload=false;
            this.componentDidMount();
        }

        if(this.state.posts.length>0){
           // debugger
            return <HomeLayout location={text} posts={this.state.posts}/>
        }
        else{
            return  <HomeLayout location={text}/>
        }
    }
}

export default withNavigation(Home);
