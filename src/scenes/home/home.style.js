import {StyleSheet} from 'react-native';
import {Colors,Mixins, Typography} from "../../styles";

export default StyleSheet.create({
    logo:{
        ...Typography.FONT_BOLD,
        fontSize:Typography.FONT_SIZE_32,
    },
    header:{
        flexDirection: 'row',
        width:'100%',
        backgroundColor:Colors.SECONDARY_3,
        ...Mixins.padding(30,16,10,18)
    },
    locationIconView:{
        width:'75%',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    locationIcon:{
        height: Mixins.scaleSize(20),
        width: Mixins.scaleSize(20),
    },
    locationIconText:{

    }
});
