import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import commonStyles from "../../common.styles";
import welcomeStyles from "./welcome.style";
import authenticationStyles from "../authentication.style";
import {LinearGradient} from "expo-linear-gradient";
import {PRIMARY_1, PRIMARY_2} from "../../../styles/colors";
import {SocialIcon} from "react-native-elements";
import {loginWithFacebook} from "./welcome.service";

const WelcomeLayout = props => {
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
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}
                                  style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.backgroundWhite, ...authenticationStyles.wrapper}}
                >
                    <Text style={{...authenticationStyles.colorPrimary_1, ...authenticationStyles.buttonText,}}> Log
                        In </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("Register")}
                                  style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                    <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                    style={{
                                        ...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper,
                                        width: '100%'
                                    }}>
                        <Text style={{...commonStyles.colorWhite, ...authenticationStyles.buttonText}}> Sign
                            Up </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={welcomeStyles.mainView}>
                <Text style={{...welcomeStyles.socialLoginText, ...authenticationStyles.wrapper}}>Or login
                    with</Text>
                <SocialIcon
                    onPress={() => loginWithFacebook()}
                    light
                    type='facebook'
                />
            </View>
        </View>
    );
};

export default WelcomeLayout
