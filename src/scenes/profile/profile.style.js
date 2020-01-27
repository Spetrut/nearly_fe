import {StyleSheet} from "react-native";
import {Mixins, Typography, Colors} from "../../styles";

export default StyleSheet.create({

    headerView: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Colors.SECONDARY_2,
        ...Mixins.padding(35, 16, 10, 18)
    },
    userDetailsView: {
        //flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: Mixins.scaleSize(2),
        paddingBottom: Mixins.scaleSize(2),
        backgroundColor: Colors.SECONDARY_2
    },
    userProfileView: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0, 0.60)',
       // backgroundColor: Colors.BLACK,
        height: 250,
        // flexDirection:'column',
        justifyContent: 'flex-end'
    },
    userProfileImageStyle: {
        height: Mixins.scaleSize(80),
        width: Mixins.scaleSize(80),
        //  width:'100%',
        borderRadius: 70,
        // alignSelf:'flex-end',
        marginBottom: Mixins.scaleSize(20),
        marginLeft: 20
    },
    usernameStyle: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_46
    },
    logOutButtonView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    logOutButtonStyle: {
        ...Typography.FONT_BOLD,
        fontSize: 18
    },
    editIconView: {
        backgroundColor: Colors.SECONDARY_3,
        padding: Mixins.scaleSize(5),
        borderWidth: 1,
        borderColor: Colors.PRIMARY_1,
        position: 'absolute',
        borderRadius: 40,
        bottom:20,
        left:80
       // top: Mixins.scaleSize(75),
        //right: Mixins.scaleSize(140)
    },
    editIcon: {
        height: Mixins.scaleSize(10),
        width: Mixins.scaleSize(10),
    },

    userView: {
        flexDirection: 'column-reverse',
        //flex:2,
        width: '100%',
    }
});
