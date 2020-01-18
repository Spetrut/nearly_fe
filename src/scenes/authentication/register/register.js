import React from "react";
import RegisterLayout from "./register.layout";
import * as authenticationService from "../../../services/http/authentication.service";

export default class Register extends React.Component {
  handleSignUp = ({ email, password, username }) => {
    authenticationService.emailSignUp({ email, password, username });
  };

  render() {
    return (
      <RegisterLayout
        navigation={this.props.navigation}
        handleSignUp={this.handleSignUp}
      />
    );
  }
}
