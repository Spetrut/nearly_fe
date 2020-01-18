import * as authenticationService from "../../../services/http/authentication.service";

export const  loginWithFacebook = async()=>{
    try {
        authenticationService.loginWithFacebook();
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
};
