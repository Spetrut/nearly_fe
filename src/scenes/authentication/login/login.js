import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {PRIMARY_1, PRIMARY_2, WHITE} from "../../../styles/colors";
import {LinearGradient} from 'expo-linear-gradient/build/index';
import authenticationStyles from '../authentication.style.js'
import commonStyles from '../../common.styles.js'
import {Ionicons} from "@expo/vector-icons";
import LoginLayout from "./login.layout";
import * as authenticationService from "../../../services/http/authentication.service";

export default class Login extends React.Component {
    state = {
        errorMessage: null
    };

    handleLogin = (user) => {
        authenticationService.loginWithEmail(user).catch(error => this.setState({errorMessage: error.message}));
    };

    render() {
        return (
            <LoginLayout navigation={this.props.navigation} errorMessage={this.state.errorMessage} handleLogin={this.handleLogin}/>
        );
    }
}
