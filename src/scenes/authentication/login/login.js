import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {PRIMARY_1, PRIMARY_2, WHITE} from "../../../styles/colors";
import {LinearGradient} from 'expo-linear-gradient/build/index';
import authenticationStyles from '../authentication.style.js'
import commonStyles from '../../common.styles.js'
import {Ionicons} from "@expo/vector-icons";
import * as firebase from "firebase";

export default class Login extends React.Component {

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}));
    };

    render() {
        return (
            <View style={commonStyles.screen}>
                <View style={authenticationStyles.textView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>

                        <Ionicons name="md-arrow-back" style={commonStyles.goBackIcon} size={40}
                                  color={PRIMARY_2}></Ionicons>

                    </TouchableOpacity>
                    <Text style={{...authenticationStyles.greeting, ...commonStyles.colorWhite}}>Welcome back</Text>
                    <Text style={{...authenticationStyles.mainCallToAction, ...commonStyles.colorWhite}}>Log in into
                        your account</Text>
                </View>
                <View style={authenticationStyles.inputView}>
                    <TextInput placeholder='Email' underlineColorAndroid='transparent' placeholderTextColor={WHITE}
                               onChangeText={email => this.setState({email})}
                               value={this.state.email}
                               style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                    <TextInput placeholder='Password' secureTextEntry={true} underlineColorAndroid='transparent'
                               placeholderTextColor={WHITE}
                               onChangeText={password => this.setState({password})}
                               value={this.state.password}
                               style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                    <View style={commonStyles.errorMessageView}>
                        {this.state.errorMessage && <Text style={{color:PRIMARY_1}}>{this.state.errorMessage}</Text>}
                    </View>
                </View>
                <View style={authenticationStyles.buttonView}>
                    <TouchableOpacity onPress={this.handleLogin} style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                        <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                        style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper,width:'100%'}}>
                            <Text style={commonStyles.colorWhite}>Log In </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
