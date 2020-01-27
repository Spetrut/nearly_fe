import {StyleSheet} from 'react-native';
import {Colors, Mixins, Typography} from "../../styles";

export default StyleSheet.create({
    formView: {
        ...Mixins.padding(30, 0, 0, 0),
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: Mixins.scaleSize(350),
    },
    // inputsView: {
    //     alignItems: 'center',
    //     width: '100%',
    // },

    image: {
        width: '100%',
        height: Mixins.scaleSize(350),
        borderRadius: 4
    },
    buttonsView: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
    },

    locationIconView: {
        ...Mixins.padding(10, 10, 10, 10),
        width: '80%',
        alignItems: 'center',
        flexDirection: 'row',
    },

    locationIcon: {
        height: Mixins.scaleSize(20),
        width: Mixins.scaleSize(20),
    }
});
