import Welcome from "../scenes/authentication/welcome/welcome";
import Login from "../scenes/authentication/login/login";
import Register from "../scenes/authentication/register/register";
import {createStackNavigator} from "react-navigation-stack";

export const AuthStackNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            title: 'Welcome',
            headerShown: false
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerShown: false
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
            headerShown: false
        }
    },
});
