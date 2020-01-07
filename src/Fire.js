import firebase from "firebase";
import * as Facebook from "expo-facebook";

const FirebaseKeys = {
    apiKey: "AIzaSyCHuSdvETmyLwY5mxx8yI6SCMDrcaBBJRA",
    authDomain: "nearly-7c7b2.firebaseapp.com",
    databaseURL: "https://nearly-7c7b2.firebaseio.com",
    projectId: "nearly-7c7b2",
    storageBucket: "nearly-7c7b2.appspot.com",
    messagingSenderId: "318878935327",
    appId: "1:318878935327:web:58a8796569cf7b3dd3a82a"
};

class Fire {
    constructor() {
        firebase.initializeApp(FirebaseKeys);
    }

    addPost = async ({description, location, localUri}) => {
        const remoteUri = await this.uploadPhotoAsync(localUri, `photos/${this.uid}/${Date.now()}`);
        const user = await this.getUserById();
        return new Promise((res, rej) => {
            this.firestore
                .collection("posts")
                .add({
                    creatorPhoto:user.avatar,
                    creatorUsername:user.username,
                    creatorUid:user.uid,
                    description,
                    location,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    image: remoteUri
                }).then(ref => {
                res(ref);
            }).catch(error => {
                rej(error);
            });
        });
    };


    uploadAvatar = async ({localUri}) =>{
        const fireUser= firebase.auth().currentUser;
        const remoteUri = await this.uploadAvatarPlease(localUri);
        var db=this.firestore;

        return this.firestore.collection("users").where("uid","==",fireUser.uid).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.id, " => ", doc.data());
                   db.collection("users").doc(doc.id).update({avatar: remoteUri});
                });
            }).catch(err=>{
                console.log(err.message)
            })

    };



    uploadPhotoAsync = (uri, filename) => {
        return new Promise(async (res, rej) => {

            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase.storage().ref(filename).put(file);
            upload.on(
                "state_changed",
                snapshot => {
                },
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    uploadAvatarPlease = async uri => {

        const path = `photos/${this.uid}/${Date.now()}.jpg`;
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();
            let upload = firebase
                .storage()
                .ref(path)
                .put(file);
            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };


    getPostsFromLocation(location) {
       // console.log(location);
        return firebase
            .firestore()
            .collection('posts').where("location", "==", location)
            .get()
            .then(function (querySnapshot) {
                let posts = querySnapshot.docs.map(doc => doc.data());
                // debugger
                return posts.sort((a,b)=> b.timestamp-a.timestamp);
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error)
            })
    };


    getPostsFromUser(){
        const fireUser= firebase.auth().currentUser;

        return firebase
            .firestore()
            .collection('posts').where("creatorUid", "==", fireUser.uid)
            .get()
            .then(function (querySnapshot) {
                let posts = querySnapshot.docs.map(doc => doc.data());
                // debugger
                return posts.sort((a,b)=> b.timestamp-a.timestamp);
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error)
            })
    }

    getUserById(){
        const fireUser= firebase.auth().currentUser;
        debugger
        return firebase
            .firestore()
            .collection('users').where("uid", "==", fireUser.uid)
            .get()
            .then(function (querySnapshot) {
                let user = querySnapshot.docs.map(doc => doc.data());
                // debugger
                return user[0]
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error)
            })
    }

    createUser = async user => {
        //let remoteUri = null;
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            let db = this.firestore.collection("users").doc(this.uid);
            db.set({
                uid:this.uid,
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
            await Facebook.initializeAsync('1564485277022519');
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                firebase.auth().signInAndRetrieveDataWithCredential(credential).then(data => {
                    let {photoURL} = data.user;
                    console.log(data.user);

                    let db = this.firestore.collection("users").doc(this.uid);
                    db.set({
                        uid:this.uid,
                        username: data.user.displayName,
                        email: data.user.email,
                        avatar: null
                    });
                    if (photoURL) {
                        let largerImage = photoURL + "?height=600";
                        // this.uploadFacebookPicture(largerImage);
                      // let req=' https://graph.facebook.com/'+data.user.uid+'/picture?height=1000&width=1000';
                        fetch(largerImage).then(imageRes=>{
                            const imgFile = new Blob([imageRes.data]);
                            this.uploadPhotoAsync(imageRes, `avatars/${this.uid}`).
                            then(res=>
                                db.set({avatar: res},
                                    {merge: true}));
                        })

                    }

                }).catch(err => console.log(err));

            } else {
                // type === 'cancel'
            }
        } catch ({message}) {
            alert(`Facebook Login Error: ${message}`);
        }
    };

    uploadFacebookPicture = async image => {
        let remoteUri;
        remoteUri = await this.uploadPhotoAsync(image, `avatars/${this.uid}`);
        db.set({avatar: remoteUri}, {merge: true});
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
