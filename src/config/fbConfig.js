import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvbA04_MD0M7tdnm74GGa_ctQOSwJLpa8",
    authDomain: "recipe-redux1.firebaseapp.com",
    projectId: "recipe-redux1",
    storageBucket: "recipe-redux1.appspot.com",
    messagingSenderId: "39195716212",
    appId: "1:39195716212:web:5a74439a803b1c04ae7f21",
    measurementId: "G-MTB4HNNYCW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export default firebase;