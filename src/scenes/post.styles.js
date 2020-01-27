import {StyleSheet} from "react-native";
import {Mixins, Typography, Colors} from "../styles";

export default StyleSheet.create({

    listView: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        ...Mixins.padding(30, 0, 0, 0)
    },
    postContainer: {
        width: '100%',
        alignItems: 'center'
    },
    postView: {
        width: "100%",
        //backgroundColor: Colors.SECONDARY_2,
        // ...Mixins.boxShadow(),
        // borderRadius: 10,
        // borderWidth:1,
        paddingBottom: Mixins.scaleSize(10),
        marginBottom: Mixins.scaleSize(30)
    },
    descriptionTextStyle: {
        ...Mixins.margin(15, 0, 0, 20)
    },
    creatorDetailsView: {
        flexDirection: 'row',
        alignItems: 'center',
        ...Mixins.margin(5, 0, 5, 15),
        //position:'absolute',
        // zIndex:1,
        //bottom:Mixins.scaleSize(125),
        // left:Mixins.scaleSize(28),
    },
    creatorProfileImageStyle: {
        height: Mixins.scaleSize(45),
        width: Mixins.scaleSize(45),
        borderRadius: 40,
        borderWidth: Mixins.scaleSize(2),
        borderColor: Colors.PRIMARY_1,
        marginRight: Mixins.scaleSize(10),
    },

    imageStyle: {
        width: "100%",
        height: Mixins.scaleSize(350),
        // borderTopLeftRadius:10,
        // borderTopRightRadius:10
    },
    likeView: {
        flexDirection: 'row',
        ...Mixins.margin(15, 0, 0, 20)
    },
    likeIcon: {
        marginRight: Mixins.scaleSize(5),
        height: Mixins.scaleSize(30),
        width: Mixins.scaleSize(30),
    },
    creatorUsername: {
        ...Typography.FONT_BOLD,
    },
});
