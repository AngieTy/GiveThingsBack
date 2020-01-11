import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZWZPFNwpgDLUHsYb8iF8IEyX55VVi-qY",
  authDomain: "give-things-back.firebaseapp.com",
  databaseURL: "https://give-things-back.firebaseio.com",
  projectId: "give-things-back",
  storageBucket: "give-things-back.appspot.com",
  messagingSenderId: "682669788224",
  appId: "1:682669788224:web:2ff7e99a0eed18bd3723a5",
  measurementId: "G-Z78ENDE5SK"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
