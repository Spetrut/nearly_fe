import React from "react";
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import * as firebase from "firebase";
import commonStyles from "../common.styles.js";
import {Colors} from "../../styles";


export default class Loading extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style={{...commonStyles.screen,...styles.container}}>
                <Text style={styles.text}>Loading...</Text>
                <ActivityIndicator color={Colors.PRIMARY_2} size="large"></ActivityIndicator>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        paddingBottom:30,
        color:Colors.PRIMARY_2,
    }
});
