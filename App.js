import React from "react";
import {AppTabNavigator} from "./src/navigations/appTabNavigator";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import * as firebase from "firebase";
import {firebaseConfig} from "./src/firebaseConfig";
import {AuthStackNavigator} from "./src/navigations/authStackNavigator";

firebase.initializeApp(firebaseConfig);

export default createAppContainer(
    createSwitchNavigator(
        {
            // Loading: {
            //   screen: Loading,
            //   navigationOptions: {
            //     title: 'Welcome',
            //     headerShown: false //this will hide the header
            //   }
            // },
            Auth: AuthStackNavigator,
            App: AppTabNavigator
        },
        {
            initialRouteName: "Auth",
        }
    )
);
