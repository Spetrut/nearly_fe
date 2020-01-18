import React from "react";
import {AppTabNavigator} from "./src/navigations/appTabNavigator";
import {createAppContainer, createSwitchNavigator} from "react-navigation";

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
         // Auth: AuthStack,
          App: AppTabNavigator
        },
        {
          initialRouteName: "App",
        }
    )
);
