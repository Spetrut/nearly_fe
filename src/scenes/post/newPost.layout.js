import * as React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import commonStyles from "../common.styles.js";
import newPostStyles from "./newPost.style"
import authenticationStyles from "../authentication/authentication.style";
import {LinearGradient} from "expo-linear-gradient";
import {DARK_GREY, PRIMARY_1, PRIMARY_2, WHITE} from "../../styles/colors";
import {Location} from "../../components/atoms/atoms";
import homeStyles from "../home/home.style";
import {HomeHeader} from "../../components/molecules/molecules";
import {useState} from "react";
import {Ionicons} from "@expo/vector-icons";

const NewPostLayout = props => {

    const [description, setDescription] = useState(null);
    if (props.loading) {
        return <View style={commonStyles.screen}>
            <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                        locationIconViewStyle={homeStyles.locationIconView}
                        locationIconStyle={homeStyles.locationIcon}
                        locationIconTextStyle={{...commonStyles.colorPrimary_1}}
                        location={props.location}
                        showLocationView={true}
            />
            <View style={newPostStyles.formView}>
                <View style={newPostStyles.imageView}>
                    {props.image &&
                    <Image source={{uri: props.image}} style={newPostStyles.image}/>}
                </View>
            </View>
            <View style={newPostStyles.buttonsView}>
                <ActivityIndicator color={PRIMARY_2} size="large"></ActivityIndicator>
            </View>
        </View>
    }
    return (
        <View style={commonStyles.screen}>
            <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                        locationIconViewStyle={homeStyles.locationIconView}
                        locationIconStyle={homeStyles.locationIcon}
                        locationIconTextStyle={{...commonStyles.colorPrimary_1}}
                        location={props.location}
                        showLocationView={true}
            />
            <View style={newPostStyles.formView}>
                {/*<View style={newPostStyles.imageView}>*/}
                {props.image &&
                <Image source={{uri: props.image}} style={newPostStyles.image}/>}
                {/*</View>*/}

            </View>
            <View style={newPostStyles.inputsView}>
                <TextInput
                    onChangeText={value => setDescription(value)}
                    value={description}
                    placeholder='write a description...' underlineColorAndroid='transparent'
                    placeholderTextColor={DARK_GREY}
                    style={{
                         ...authenticationStyles.colorPrimary_1,fontSize:18,marginTop:30,marginBottom:30
                    }}/>
            </View>
            <View style={newPostStyles.buttonsView}>

                <Ionicons name="md-photos" size={64} onPress={props.pickImage} color={DARK_GREY} style={{margin: 15}}/>
                <Ionicons name="md-camera" size={64} onPress={props.takePhoto} color={DARK_GREY} style={{margin: 15}}/>
                <Ionicons name="md-done-all" size={64} onPress={() => props.handlePost(description)} color={PRIMARY_1}
                          style={{margin: 15}}/>
            </View>
            {/*<TouchableOpacity onPress={()=>props.handlePost(description)}*/}
            {/*                  style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>*/}
            {/*    <LinearGradient*/}
            {/*        colors={[PRIMARY_1, PRIMARY_2]}*/}
            {/*        style={{...authenticationStyles.button, ...commonStyles.userInput, ...authenticationStyles.wrapper}}>*/}
            {/*        <Text style={{...commonStyles.colorWhite, ...authenticationStyles.buttonText}}> done </Text>*/}
            {/*    </LinearGradient>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
};

export default NewPostLayout;
