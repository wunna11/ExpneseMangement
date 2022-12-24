import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCO49MC87sEgAMqxgcTnmK622xrn_ThzF8",
  authDomain: "expensemangementreactnative.firebaseapp.com",
  projectId: "expensemangementreactnative",
  storageBucket: "expensemangementreactnative.appspot.com",
  messagingSenderId: "1038805670363",
  appId: "1:1038805670363:web:e0002eee2b6f8e76916ffe",
  measurementId: "G-J4X80E99J8"
};


let app = firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .settings({ experimentalForceLongPolling: true, merge: true });

export { firebase };
