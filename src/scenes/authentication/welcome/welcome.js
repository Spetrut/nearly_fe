import React from "react";
import WelcomeLayout from "./welcome.layout";

export default class Welcome extends React.Component {
    render() {
        return (
            <WelcomeLayout navigation={this.props.navigation}/>
        );
    }
}

