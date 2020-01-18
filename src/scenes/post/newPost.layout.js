import * as React from 'react';
import {ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import commonStyles from "../common.styles.js";
import newPostStyles from "./newPost.style"
import authenticationStyles from "../authentication/authentication.style";
import {LinearGradient} from "expo-linear-gradient";
import { PRIMARY_1, PRIMARY_2, WHITE} from "../../styles/colors";
import {Location} from "../../components/atoms/atoms";
import homeStyles from "../home/home.style";
import {HomeHeader} from "../../components/molecules/molecules";
import {useState} from "react";

const NewPostLayout = props =>{

    const [description,setDescription] = useState(null);
    if(props.loading){
        return <View style={commonStyles.screen}>
            <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                        showLocationView={false}
            />
            <View  style={newPostStyles.formView}>
                <View style={newPostStyles.imageView}>
                    {props.image &&
                    <Image source={{uri: props.image}} style={newPostStyles.image}/>}
                </View>
            </View>
            <View  style={newPostStyles.buttonsView}>
                <ActivityIndicator color={PRIMARY_2} size="large"></ActivityIndicator>
            </View>
        </View>
    }
    return(
        <View style={commonStyles.screen}>
            <HomeHeader viewStyle={homeStyles.header} logoStyle={{...homeStyles.logo, ...commonStyles.colorWhite}}
                        showLocationView={false}
            />
            <View style={newPostStyles.formView}>
                <View style={newPostStyles.imageView}>
                    {props.image &&
                    <Image source={{uri: props.image}} style={newPostStyles.image}/>}
                </View>
                <View style={newPostStyles.inputsView}>
                    <TextInput
                        onChangeText={value => setDescription(value)}
                        value={description}
                        placeholder='description...' underlineColorAndroid='transparent'
                        placeholderTextColor={WHITE}
                        style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                    <Location locationIconViewStyle={newPostStyles.locationIconView} locationIconStyle={newPostStyles.locationIcon}
                              locationIconTextStyle={commonStyles.colorPrimary_1} location={props.location}/>
                </View>
            </View>
            <View style={newPostStyles.buttonsView}>
                <TouchableOpacity
                    onPress={props.pickImage}
                    style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.backgroundWhite, ...authenticationStyles.wrapper}}
                >
                    <Text
                        style={{...authenticationStyles.colorPrimary_1, ...authenticationStyles.buttonText,}}> open
                        gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.takePhoto}
                    style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.backgroundWhite, ...authenticationStyles.wrapper}}
                >
                    <Text
                        style={{...authenticationStyles.colorPrimary_1, ...authenticationStyles.buttonText,}}> take
                        a new
                        photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.handlePost(description)}
                                  style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                    <LinearGradient
                        colors={[PRIMARY_1, PRIMARY_2]}
                        style={{...authenticationStyles.button, ...commonStyles.userInput, ...authenticationStyles.wrapper}}>
                        <Text style={{...commonStyles.colorWhite, ...authenticationStyles.buttonText}}> done </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NewPostLayout;
