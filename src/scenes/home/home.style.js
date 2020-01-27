import {StyleSheet} from 'react-native';
import {Colors,Mixins, Typography} from "../../styles";

export default StyleSheet.create({
    logo:{
        ...Typography.FONT_BOLD,
        fontSize:Typography.FONT_SIZE_32,
    },
    header:{
       // flexDirection: 'row',
        width:'100%',
        backgroundColor:Colors.SECONDARY_2,
        ...Mixins.padding(35,16,10,18)
    },
    locationIconView:{
        width:'100%',
        //alignItems:'center',
        flexDirection: 'row',
       // justifyContent:'flex-end'
    },
    locationIcon:{
        height: Mixins.scaleSize(20),
        width: Mixins.scaleSize(20),
    },
    optionsView:{
        marginTop:25,
        flexDirection: 'row',
        width:'100%',
        alignItems:'center',
    },
    latestView:{
        flex:1,
        marginLeft:15
    },
    popularView:{
        flex:1,
        marginRight:15,
        //alignItems:'center',
        flexDirection: 'row',
        justifyContent:'flex-end'
    }
});
