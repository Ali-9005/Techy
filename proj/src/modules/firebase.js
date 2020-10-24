import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyBPmkhgWA7ASKOgFTgjNIPaKrj_CKhLsCA",
  authDomain: "techy-6b609.firebaseapp.com",
  databaseURL: "https://techy-6b609.firebaseio.com",
  projectId: "techy-6b609",
  storageBucket: "techy-6b609.appspot.com",
  messagingSenderId: "338637467041",
  appId: "1:338637467041:web:2df1050f31074285a4afe0",
  measurementId: "G-9907WM2GZL",
});

export const auth = fire.auth();
export default fire;