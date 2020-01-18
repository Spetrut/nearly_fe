import React, { useState } from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {PRIMARY_1, PRIMARY_2, WHITE} from "../../../styles/colors";
import {LinearGradient} from 'expo-linear-gradient/build/index';
import authenticationStyles from "../authentication.style";
import commonStyles from '../../common.styles.js'

export const RegisterLayout = props => {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
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
                <TextInput onChangeText={value => setUsername(value)}
                           value={username}
                           placeholder='Username' underlineColorAndroid='transparent' placeholderTextColor={WHITE}
                           style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                <TextInput
                    onChangeText={value => setEmail(value)}
                    value={email}
                    placeholder='Email' underlineColorAndroid='transparent' placeholderTextColor={WHITE}
                    style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                <TextInput
                    onChangeText={value => setPassword(value)}
                    value={password}
                    placeholder='Password' secureTextEntry={true} underlineColorAndroid='transparent'
                    placeholderTextColor={WHITE}
                    style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
            </View>
            <View style={authenticationStyles.buttonView}>
                <TouchableOpacity onPress={() => props.handleSignUp({email,password,username})}
                                  style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                    <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                    style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper,width:'100%'}}>
                        <Text style={commonStyles.colorWhite}>Sign up </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterLayout;
