import {StyleSheet} from "react-native";
import {Mixins, Typography, Colors} from "../../styles";

export default StyleSheet.create({
    userDetailsView: {
        width: '100%',
        alignItems: 'center',
        paddingTop: Mixins.scaleSize(50),
        paddingBottom: Mixins.scaleSize(30)

    },
    userProfileImageStyle: {
        height: Mixins.scaleSize(150),
        width: Mixins.scaleSize(150),
        borderRadius: 70,
        marginBottom: Mixins.scaleSize(10)
    },
    usernameStyle: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_32
    },
    // linearGradient: {
    //     height: Mixins.scaleSize(45),
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    // linearGradientText: {
    //     fontSize: Typography.FONT_SIZE_32
    // },
    // linearGradientView: {
    //     width: "100%",
    // },

    editIconView: {
        padding: Mixins.scaleSize(10),
        borderWidth: 1,
        borderColor: Colors.PRIMARY_2,
        position: 'absolute',
        borderRadius: 40,
        top: Mixins.scaleSize(150),
        right: Mixins.scaleSize(80)
    },
    editIcon: {
        height: Mixins.scaleSize(15),
        width: Mixins.scaleSize(15),
    }
});
