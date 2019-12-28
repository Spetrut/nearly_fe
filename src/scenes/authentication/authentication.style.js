import {StyleSheet} from 'react-native';
import {Colors, Mixins, Typography} from "../../styles/index";
import {PRIMARY_2, WHITE} from "../../styles/colors";

export default StyleSheet.create({
    screen: {
        backgroundColor: Colors.SECONDARY,
        flex: 1,
        color: Colors.WHITE,
        alignSelf: 'stretch',
        alignItems: "center"
    },
    userInput:{
        width: '80%',
        height: Mixins.scaleSize(45),
        borderRadius: 20,
    },
    textInput:{
        paddingLeft: Mixins.scaleSize(20),
        borderColor: Colors.WHITE,
        borderWidth: Mixins.scaleSize(2),
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        ...Typography.FONT_BOLD,
        fontSize:Typography.FONT_SIZE_16,
    },
    colorWhite:{
        color: Colors.WHITE,
    },
    backgroundWhite:{
        backgroundColor: Colors.WHITE
    },
    colorPrimary_1:{
        color: Colors.PRIMARY_1,
    },
    colorPrimary_2:{
        color: PRIMARY_2
    },
    wrapper:{
        marginVertical:Mixins.scaleSize(5)
    },
    mainCallToAction: {
        ...Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE_16,
    },
    textView: {
        height: '40%',
        width: '80%'
    },
    inputView: {
        alignItems: "center",
        width: '100%',
        height: '30%'
    },
    buttonView: {
        alignItems: "center",
        width: '100%'
    },
    greeting: {
        width: '80%',
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_46,
        ...Mixins.padding(50,0,0,0)
    },
});
