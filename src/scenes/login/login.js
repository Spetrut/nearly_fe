import React, {useState, useRef, useEffect} from "react";
import {View, Text, Button, StyleSheet, Alert} from "react-native";
import {PRIMARY_2, SECONDARY} from "../../styles/colors";



const Login = props => {
    return (
        <View style={styles.screen}>
        <Text>login page</Text>
            <Button title="Log in" />
            <Button title="Sign up" />
            <Text>Or login with</Text>


        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    screen: {
        backgroundColor:SECONDARY,
        color:PRIMARY_2,
        flex:1,
        padding:100,
        alignSelf: 'stretch',
        alignItems: "center"
    }
});
