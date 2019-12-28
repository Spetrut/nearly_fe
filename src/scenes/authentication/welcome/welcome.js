import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {PRIMARY_1, PRIMARY_2} from "../../../styles/colors";
import {SocialIcon} from 'react-native-elements/src/index'
import {LinearGradient} from 'expo-linear-gradient/build/index';
import welcomeStyles from './welcome.style.js'
import authenticationStyles from '../authentication.style.js'

const Welcome = props => {
    return (
        <View style={authenticationStyles.screen}>
            <View style={welcomeStyles.mainView}>
                <Text style={{...welcomeStyles.logo, ...authenticationStyles.colorWhite}}>Nearly</Text>
                <Text
                    style={{...authenticationStyles.mainCallToAction, ...authenticationStyles.colorWhite, ...authenticationStyles.wrapper}}>Find
                    new friends
                    nearby and all over the world</Text>
            </View>
            <View style={welcomeStyles.buttonView}>
                <TouchableOpacity
                    style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.backgroundWhite, ...authenticationStyles.wrapper}}
                >
                    <Text style={{...authenticationStyles.colorPrimary_1, ...authenticationStyles.buttonText,}}> Log
                        In </Text>
                </TouchableOpacity>
                <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                style={{...authenticationStyles.button,  ...authenticationStyles.userInput,...authenticationStyles.wrapper}}>
                    <Text style={{...authenticationStyles.colorWhite, ...authenticationStyles.buttonText}}> Sign
                        Up </Text>
                </LinearGradient>
            </View>
            <View style={welcomeStyles.mainView}>
                <Text style={{...welcomeStyles.socialLoginText, ...authenticationStyles.wrapper}}>Or login with</Text>
                <SocialIcon
                    light
                    type='facebook'
                />
            </View>
        </View>
    );
};
export default Welcome;

