import {StyleSheet} from "react-native";
import {Mixins, Typography, Colors} from "../../styles";

export default StyleSheet.create({
    userDetailsView: {
        width: '100%',
        alignItems: 'center',
        paddingTop: Mixins.scaleSize(2),
        paddingBottom: Mixins.scaleSize(2),
        backgroundColor:Colors.SECONDARY_3
    },
    userProfileImageStyle: {
        height: Mixins.scaleSize(100),
        width: Mixins.scaleSize(100),
        borderRadius: 70,
        marginBottom: Mixins.scaleSize(10)
    },
    usernameStyle: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_32
    },
    usernameViewStyle: {
        width: '75%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    editIconView: {
        backgroundColor:Colors.SECONDARY_3,
        padding: Mixins.scaleSize(10),
        borderWidth: 1,
        borderColor: Colors.PRIMARY_2,
        position: 'absolute',
        borderRadius: 40,
        top: Mixins.scaleSize(75),
        right: Mixins.scaleSize(140)
    },
    editIcon: {
        height: Mixins.scaleSize(10),
        width: Mixins.scaleSize(10),
    }
});
