import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {PRIMARY_1, PRIMARY_2} from "../../../styles/colors";
import {SocialIcon} from 'react-native-elements/src/index'
import {LinearGradient} from 'expo-linear-gradient/build/index';
import welcomeStyles from './welcome.style.js'
import authenticationStyles from '../authentication.style.js'
import commonStyles from '../../common.styles.js'
import * as Facebook from 'expo-facebook';
import * as firebase from "firebase";

export default class Welcome extends React.Component {

    async loginWithFacebook(){
        try {
            await Facebook.initializeAsync('1564485277022519');
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                firebase.auth().signInWithCredential(credential).catch(err=>console.log(err));
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        return (
            <View style={commonStyles.screen}>
                <View style={welcomeStyles.mainView}>
                    <Text style={{...welcomeStyles.logo, ...commonStyles.colorWhite}}>Nearly</Text>
                    <Text
                        style={{...authenticationStyles.mainCallToAction, ...commonStyles.colorWhite, ...authenticationStyles.wrapper}}>Find
                        new friends
                        nearby and all over the world</Text>
                </View>
                <View style={welcomeStyles.buttonView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}
                        style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.backgroundWhite, ...authenticationStyles.wrapper}}
                    >
                        <Text style={{...authenticationStyles.colorPrimary_1, ...authenticationStyles.buttonText,}}> Log
                            In </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => this.props.navigation.navigate("Register")} style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                        <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                        style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper,width:'100%'}}>
                            <Text style={{...commonStyles.colorWhite, ...authenticationStyles.buttonText}}> Sign
                                Up </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
                <View style={welcomeStyles.mainView}>
                    <Text style={{...welcomeStyles.socialLoginText, ...authenticationStyles.wrapper}}>Or login
                        with</Text>
                    <SocialIcon
                        onPress={()=>this.loginWithFacebook()}
                        light
                        type='facebook'
                    />
                </View>
            </View>
        );
    }
}

