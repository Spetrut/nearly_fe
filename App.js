import React from "react";
import {AppTabNavigator} from "./src/navigations/appTabNavigator";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import * as firebase from "firebase";
import {firebaseConfig} from "./firebase.config";
import {AuthStackNavigator} from "./src/navigations/authStackNavigator";
import Loading from "./src/scenes/loading/loading";

firebase.initializeApp(firebaseConfig);

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: {
              screen: Loading,
              navigationOptions: {
                title: 'Welcome',
                headerShown: false
              }
            },
            Auth: AuthStackNavigator,
            App: AppTabNavigator
        },
        {
            initialRouteName: "Loading",
        }
    )
);
