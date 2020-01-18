import * as firebase from "firebase";
import "firebase/firestore";
import {firebaseConfig} from "../../firebase.config";

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
