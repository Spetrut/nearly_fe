import {StyleSheet} from 'react-native';
import {Colors, Mixins, Typography} from "../../styles";

export default StyleSheet.create({

    formView: {
        ...Mixins.padding(10,0,0,0),
        flex: 2,
        alignItems: 'center',
        width: '100%'
    },
    inputsView: {
        flex: 2,
        alignItems: 'center',
        width: '100%'
    },
    imageView:{
        flex: 3,
        alignItems: 'center',
        width: '100%'
    },
    image: {
        height: Mixins.scaleSize(200),
        width: Mixins.scaleSize(300),
        borderRadius: 4,
        borderWidth:1,
        borderColor:Colors.PRIMARY_1
    },
    buttonsView: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },

    locationIconView:{
        ...Mixins.padding(10,10,10,10),
        width:'80%',
        alignItems:'center',
        flexDirection: 'row',
    },

    locationIcon:{
        height: Mixins.scaleSize(20),
        width: Mixins.scaleSize(20),
    }
});
