import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const options={
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
};

export const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }
    }
};

export const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(options);
    if (!result.cancelled) {
        return { image: result.uri };
    }
};

export const _takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync(options);
    if (!result.cancelled) {
        return { image: result.uri };
    }
};

