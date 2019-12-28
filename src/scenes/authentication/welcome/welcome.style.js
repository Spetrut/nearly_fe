import {StyleSheet} from 'react-native';
import {Colors, Mixins, Typography} from "../../../styles/index";

export default StyleSheet.create({
    logo: {
        ...Typography.FONT_BOLD,
        fontSize:Typography.FONT_SIZE_128,
        ...Mixins.padding(50,0,0,0)
    },
    socialLoginText: {
        color: Colors.DARK_GREY
    },
    mainView:{
        alignItems: "center",
        height:'55%'
    },
    buttonView:{
        alignItems: "center",
        width: '100%',
       height: '25%'
    },
    socialView:{
        alignItems: "center"
    }
});
