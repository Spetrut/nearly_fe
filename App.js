import React from "react";
import * as firebase from "firebase";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/scenes/home/home"
import Profile from "./src/scenes/profile/profile"
import Post from "./src/scenes/post/newPost"

import Welcome from "./src/scenes/authentication/welcome/welcome"
import Login from "./src/scenes/authentication/login/login"
import Register from "./src/scenes/authentication/register/register"
import Loading from "./src/scenes/loading/loading"
import {Colors} from "./src/styles";


var firebaseConfig = {
    apiKey: "AIzaSyCHuSdvETmyLwY5mxx8yI6SCMDrcaBBJRA",
    authDomain: "nearly-7c7b2.firebaseapp.com",
    databaseURL: "https://nearly-7c7b2.firebaseio.com",
    projectId: "nearly-7c7b2",
    storageBucket: "nearly-7c7b2.appspot.com",
    messagingSenderId: "318878935327",
    appId: "1:318878935327:web:58a8796569cf7b3dd3a82a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerShown: false //this will hide the header
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            headerShown: false //this will hide the header
        }
    },
    Post: {
        screen: Post,
        navigationOptions: {
            title: 'Post',
            headerShown: false //this will hide the header
        }
    }
});

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home',
                headerShown: false,//this will hide the header
                tabBarIcon: ({ tintColor }) => <Ionicons name="md-home" size={24} color={tintColor} />
            }
        },
        Post: {
            screen: Post,
            navigationOptions: {
                title: 'Post',
                headerShown: false ,//this will hide the header
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        color={tintColor}
                        name="md-add-circle"
                        size={24}
                    />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile',
                headerShown: false, //this will hide the header
                tabBarIcon: ({ tintColor }) => <Ionicons name="md-person" size={24} color={tintColor} />
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
                backgroundColor: Colors.SECONDARY_3,
            }
        },
    }
);
const AuthStack = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            title: 'Welcome',
            headerShown: false //this will hide the header
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerShown: false //this will hide the header
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
            headerShown: false //this will hide the header
        }
    },
});


export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: {
                screen: Loading,
                navigationOptions: {
                    title: 'Welcome',
                    headerShown: false //this will hide the header
                }
            },
            Auth: AuthStack,
            App: AppTabNavigator
        },
        {
            initialRouteName: "Loading",
        }
    )
);

