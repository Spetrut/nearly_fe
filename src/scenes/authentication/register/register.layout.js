import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {PRIMARY_1, PRIMARY_2, WHITE} from "../../../styles/colors";
import {LinearGradient} from 'expo-linear-gradient/build/index';
import authenticationStyles from "../authentication.style";
import commonStyles from '../../common.styles.js'

export const RegisterLayout = props =>{
    return(
        <View style={commonStyles.screen}>
            <View style={authenticationStyles.textView}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>

                    <Ionicons name="md-arrow-back" style={commonStyles.goBackIcon} size={40}
                              color={PRIMARY_2}></Ionicons>

                </TouchableOpacity>
                <Text style={{...authenticationStyles.greeting, ...commonStyles.colorWhite}}>Create an
                    account</Text>
            </View>
            <View style={authenticationStyles.inputView}>
                <TextInput placeholder='Username' underlineColorAndroid='transparent' placeholderTextColor={WHITE}
                           style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                <TextInput placeholder='Email' underlineColorAndroid='transparent' placeholderTextColor={WHITE}
                           style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                <TextInput placeholder='Password' secureTextEntry={true} underlineColorAndroid='transparent'
                           placeholderTextColor={WHITE}
                           style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
            </View>
            <View style={authenticationStyles.buttonView}>
                <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                    <Text style={commonStyles.colorWhite}>Sign up </Text>
                </LinearGradient>
            </View>
        </View>
    );
};

export default RegisterLayout;
