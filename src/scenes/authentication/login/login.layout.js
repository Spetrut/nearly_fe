import {Text, TextInput, TouchableOpacity, View} from "react-native";
import commonStyles from "../../common.styles";
import authenticationStyles from "../authentication.style";
import {Ionicons} from "@expo/vector-icons";
import {PRIMARY_1, PRIMARY_2, WHITE} from "../../../styles/colors";
import {LinearGradient} from "expo-linear-gradient";
import React, {useState} from "react";

const LoginLayout = props =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View style={commonStyles.screen}>
            <View style={authenticationStyles.textView}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>

                    <Ionicons name="md-arrow-back" style={commonStyles.goBackIcon} size={40}
                              color={PRIMARY_2}></Ionicons>

                </TouchableOpacity>
                <Text style={{...authenticationStyles.greeting, ...commonStyles.colorWhite}}>Welcome back</Text>
                <Text style={{...authenticationStyles.mainCallToAction, ...commonStyles.colorWhite}}>Log in into
                    your account</Text>
            </View>
            <View style={authenticationStyles.inputView}>
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
                <View style={commonStyles.errorMessageView}>
                    {props.errorMessage && <Text style={{color:PRIMARY_1}}>{props.errorMessage}</Text>}
                </View>
            </View>
            <View style={authenticationStyles.buttonView}>
                <TouchableOpacity onPress={()=>props.handleLogin({email,password})} style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                    <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                    style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper,width:'100%'}}>
                        <Text style={commonStyles.colorWhite}>Log In </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default LoginLayout;
