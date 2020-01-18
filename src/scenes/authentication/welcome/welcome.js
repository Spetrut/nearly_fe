import React from "react";
import WelcomeLayout from "./welcome.layout";
import * as authenticationService from "../../../services/http/authentication.service";

export default class Welcome extends React.Component {

    loginWithFacebook = async ()=>{
            authenticationService.loginWithFacebook();
    };

    render() {
        return (
            <WelcomeLayout navigation={this.props.navigation} loginWithFacebook={this.loginWithFacebook}/>
        );
    }
}

