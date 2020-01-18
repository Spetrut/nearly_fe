import Fire from "../Fire";

export const uploadProfilePicture = (image) =>{
    return  Fire.shared.uploadAvatar(image);
};

export const getUserById =() =>{
    return Fire.shared.getUserById();
};
