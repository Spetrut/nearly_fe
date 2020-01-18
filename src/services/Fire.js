import * as firebase from "firebase";
import "firebase/firestore";
import {firebaseConfig} from "../../firebase.config";
import * as Facebook from "expo-facebook";
import {appId} from "../../facebook.config";

class Fire {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }

    createUserWithEmail = async user => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password);
            let db = this.firestore.collection("users").doc(this.uid);
            db.set({
                uid: this.uid,
                username: user.username,
                email: user.email,
                avatar: null
            });
        } catch (error) {
            alert("Error: ", error);
        }
    };

    createUserWithFacebook = async () => {
        try {
            await Facebook.initializeAsync(appId);
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                firebase.auth().signInAndRetrieveDataWithCredential(credential).then(data => {
                    let db = this.firestore.collection("users").doc(this.uid);
                    db.set({
                        uid: this.uid,
                        username: data.user.displayName,
                        email: data.user.email,
                        avatar: null
                    });
                }).catch(err => console.log(err));
            }
        } catch ({message}) {
            alert(`Facebook Login Error: ${message}`);
        }
    };


    signOut = () => {
        firebase.auth().signOut();
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;
