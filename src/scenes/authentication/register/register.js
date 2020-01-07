import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {PRIMARY_1, PRIMARY_2, WHITE} from "../../../styles/colors";
import {LinearGradient} from 'expo-linear-gradient/build/index';
import authenticationStyles from "../authentication.style";
import commonStyles from '../../common.styles.js'
import {Ionicons} from "@expo/vector-icons";
import * as firebase from "firebase";
import Fire from "../../../Fire"

export default class Register extends React.Component {

    state = {
        user: {
            username: "",
            email: "",
            password: "",
            avatar: null
        },
        errorMessage: null
    };

    handleSignUp = () => {
        Fire.shared.createUser(this.state.user);
        // firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(userCredentials => {
        //         return userCredentials.user.updateProfile({
        //             displayName: this.state.name
        //         });
        //     })
        //     .catch(error => this.setState({errorMessage: error.message}));
    };

    render() {
        return (
            <View style={commonStyles.screen}>
                <View style={authenticationStyles.textView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>

                        <Ionicons name="md-arrow-back" style={commonStyles.goBackIcon} size={40}
                                  color={PRIMARY_2}></Ionicons>

                    </TouchableOpacity>
                    <Text style={{...authenticationStyles.greeting, ...commonStyles.colorWhite}}>Create an
                        account</Text>
                </View>
                <View style={authenticationStyles.inputView}>
                    <TextInput onChangeText={username => this.setState({user: {...this.state.user, username}})}
                               value={this.state.user.username}
                               placeholder='Username' underlineColorAndroid='transparent' placeholderTextColor={WHITE}
                               style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                    <TextInput
                        onChangeText={email => this.setState({user: {...this.state.user, email}})}
                        value={this.state.user.email}
                        placeholder='Email' underlineColorAndroid='transparent' placeholderTextColor={WHITE}
                        style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                    <TextInput
                        onChangeText={password => this.setState({user: {...this.state.user, password}})}
                        value={this.state.user.password}
                        placeholder='Password' secureTextEntry={true} underlineColorAndroid='transparent'
                        placeholderTextColor={WHITE}
                        style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                    <View style={commonStyles.errorMessageView}>
                        {this.state.errorMessage && <Text style={{color: PRIMARY_1}}>{this.state.errorMessage}</Text>}
                    </View>
                </View>
                <View style={authenticationStyles.buttonView}>
                    <TouchableOpacity onPress={this.handleSignUp}
                                      style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                        <LinearGradient colors={[PRIMARY_1, PRIMARY_2]}
                                        style={{
                                            ...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper,
                                            width: '100%'
                                        }}>
                            <Text style={commonStyles.colorWhite}>Sign up </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
