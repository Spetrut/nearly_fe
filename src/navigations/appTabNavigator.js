import * as React from 'react';
import Home from "../scenes/home/home";
import NewPost from "../scenes/post/newPost";
import Profile from "../scenes/profile/profile";
import * as Colors from "../styles/colors";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";

export const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ tintColor }) => <Ionicons name="md-home" size={32} color={tintColor} />
            }
        },
        Post: {
            screen: NewPost,
            navigationOptions: {
                title: 'NewPost',
                headerShown: false ,
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        color={tintColor}
                        name="md-add-circle"
                        size={32}
                    />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ tintColor }) => <Ionicons name="md-person" size={32} color={tintColor} />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.PRIMARY_1,
            inactiveTintColor: Colors.DARK_GREY,
            showLabel: false,
            style: {
                borderTopWidth:0,
                borderTopColor:Colors.PRIMARY_1,
                backgroundColor: Colors.SECONDARY_2,
            }
        },
    }
);
