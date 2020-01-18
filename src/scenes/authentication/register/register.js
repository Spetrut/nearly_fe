import React from "react";
import RegisterLayout from "./register.layout";

export default class Register extends React.Component {
    render() {
        return (
           <RegisterLayout navigation={this.props.navigation}/>
        );
    }
}
