import {StyleSheet} from 'react-native';
import {Colors, Mixins, Typography} from "../../styles/index";

export default StyleSheet.create({
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
    backgroundWhite:{
        backgroundColor: Colors.WHITE
    },
    colorPrimary_1:{
        color: Colors.PRIMARY_1,
    },
    colorPrimary_2:{
        color: Colors.PRIMARY_2
    },
    wrapper:{
        marginVertical:Mixins.scaleSize(5)
    },
    mainCallToAction: {
        color: Colors.WHITE,
        ...Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE_24,
    },
    textView: {
        height: '40%',
        width: '80%',
        marginBottom: 100
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
        marginBottom:15,
        width: '80%',
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_46,
        ...Mixins.padding(50,0,0,0)
    },
});
