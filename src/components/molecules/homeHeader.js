import React from "react";
import {Text, View} from "react-native";
import {Location} from "../atoms/atoms";
import {Colors} from "../../styles";
import Fire from "../../Fire"

const HomeHeader = props => {

    let locationView=null;
    if(props.showLocationView){
        locationView=  <Location  locationIconViewStyle={props.locationIconViewStyle} locationIconStyle={props.locationIconStyle}
                                  locationIconTextStyle={props.locationIconTextStyle} location={props.location}/>
    }
    if(props.showLogOut)
    {
        locationView= <View style={props.usernameViewStyle}><Text  onPress={() => {Fire.shared.signOut();}}
                                                                   style={{color:Colors.PRIMARY_1,fontSize:16}}>log out</Text></View>
    }
    return (
        <View style={props.viewStyle}>
            <Text style={props.logoStyle}>Nearly</Text>
            {locationView}
        </View>
    );
};

export default HomeHeader;
