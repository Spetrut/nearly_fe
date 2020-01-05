import * as React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {_pickImage, _takePhoto, getPermissionAsync} from '../../services/business/post/image.service'
import commonStyles from "../common.styles.js";
import newPostStyles from "./newPost.style"
import authenticationStyles from "../authentication/authentication.style";
import {LinearGradient} from "expo-linear-gradient";
import {PRIMARY_1, PRIMARY_2, WHITE} from "../../styles/colors";
import Constants from "expo-constants";
import {_getLocationAsync} from "../../services/business/location/location.service";
import {Location} from "../../components/atoms/atoms";

export default class ImagePickerExample extends React.Component {
    state = {
        image: null,
        validForm: false,
        location: null,
        errorMessage: null,
    };
    validFormColors = [PRIMARY_1, PRIMARY_2];
    invalidFormColors = [PRIMARY_2, PRIMARY_2];

    render() {
        let {image} = this.state;
        let {validForm} = this.state;

        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text=this.state.location.city+', '+this.state.location.country;
        }

        return (
            <View style={commonStyles.screen}>
                <View style={newPostStyles.formView}>
                    <View style={newPostStyles.imageView}>
                        {image &&
                        <Image source={{uri: image}} style={newPostStyles.image}/>}
                    </View>
                    <View style={newPostStyles.inputsView}>
                        <TextInput placeholder='description...' underlineColorAndroid='transparent'
                                   placeholderTextColor={WHITE}
                                   style={{...authenticationStyles.textInput, ...authenticationStyles.userInput, ...authenticationStyles.wrapper, ...authenticationStyles.colorPrimary_1}}/>
                        <Location locationIconViewStyle={newPostStyles.locationIconView} locationIconStyle={newPostStyles.locationIcon}
                                  locationIconTextStyle={commonStyles.colorPrimary_1} location={text}/>
                    </View>
                </View>
                <View style={newPostStyles.buttonsView}>
                    <TouchableOpacity
                        onPress={this.pickImage}
                        style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.backgroundWhite, ...authenticationStyles.wrapper}}
                    >
                        <Text
                            style={{...authenticationStyles.colorPrimary_1, ...authenticationStyles.buttonText,}}> open
                            gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.takePhoto}
                        style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.backgroundWhite, ...authenticationStyles.wrapper}}
                    >
                        <Text
                            style={{...authenticationStyles.colorPrimary_1, ...authenticationStyles.buttonText,}}> take
                            a new
                            photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.validForm} onPress={this.takePhoto}
                                      style={{...authenticationStyles.button, ...authenticationStyles.userInput, ...authenticationStyles.wrapper}}>
                        <LinearGradient
                            colors={this.getDoneButtonColors()}
                            style={{...authenticationStyles.button, ...commonStyles.userInput, ...authenticationStyles.wrapper}}>
                            <Text style={{...commonStyles.colorWhite, ...authenticationStyles.buttonText}}> done </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    getDoneButtonColors() {
        if (this.state.validForm) {
            return this.validFormColors;
        }
        return this.invalidFormColors;
    }

    componentDidMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            _getLocationAsync().then(res=>{this.setState(res)});
        }
        getPermissionAsync();
    }

    pickImage = async () => {
        let result = await _pickImage();
        this.setState(result);
    };


    takePhoto = async () => {
        let result = await _takePhoto();
        this.setState(result);
    };
}
