import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {PRIMARY_1, PRIMARY_2} from "../../../styles/colors";
import {SocialIcon} from 'react-native-elements/src/index'
import {LinearGradient} from 'expo-linear-gradient/build/index';
import welcomeStyles from './welcome.style.js'
import authenticationStyles from '../authentication.style.js'
import commonStyles from '../../common.styles.js'
import * as firebase from "firebase";
import Fire from "../../../Fire"

export default class Welcome extends React.Component {

    async loginWithFacebook(){
        Fire.shared.createUserWithFacebook();
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

