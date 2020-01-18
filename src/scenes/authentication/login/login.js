import React from "react";
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
