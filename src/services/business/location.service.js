import * as Permissions from "expo-permissions/build/Permissions";
import * as Location from "expo-location/build/Location";
import Constants from "expo-constants/build/Constants";

export const _getUserLocation = async () =>{

    if (Platform.OS === 'android' && !Constants.isDevice) {
       return {location:"Timișoara, România"};
    } else {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if ( status !== 'granted') {
            return  {location:''};
        }
        let geocodeLocation = await Location.getCurrentPositionAsync({});
        let location = await Location.reverseGeocodeAsync({
            latitude: geocodeLocation.coords.latitude,
            longitude: geocodeLocation.coords.longitude
        });
        return {location:location[0].city+', '+location[0].country};
    }
};
