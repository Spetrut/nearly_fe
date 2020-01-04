import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export const _getLocationAsync = async () => {
    
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if ( status !== 'granted') {
        return {
            errorMessage: 'Permission to access location was denied',
        };
    }
    let geocodeLocation = await Location.getCurrentPositionAsync({});
    let location = await Location.reverseGeocodeAsync({
        latitude: geocodeLocation.coords.latitude,
        longitude: geocodeLocation.coords.longitude
    });
    return {location:location[0]};
};
