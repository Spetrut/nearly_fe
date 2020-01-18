import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import { appId } from "../../../facebook.config";
import Fire from "../Fire";

export const loginWithFacebook = async () => {
  await Facebook.initializeAsync(appId);
  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile"]
  });
  if (type === "success") {
    await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase
      .auth()
      .signInWithCredential(credential)
      .catch(err => console.log(err));
  } else {
    // type === 'cancel'
  }
};

export const emailSignUp = ({ email, password, username }) => {
  Fire.shared.createUserWithEmail({ email, password, username });
};
