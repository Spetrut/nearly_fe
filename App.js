import React from "react";
import {AppTabNavigator} from "./src/navigations/appTabNavigator";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {AuthStackNavigator} from "./src/navigations/authStackNavigator";
import Loading from "./src/scenes/loading/loading";
import IndividualPost from "./src/scenes/profile/individualPost";

console.disableYellowBox = true;

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
            IndividualPost:{
                screen:IndividualPost,
                navigationOptions: {
                    title: 'IndividualPost',
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
