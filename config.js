import firebase from "firebase"

 var firebaseConfig = {
  apiKey: "AIzaSyCRfAtXllxNXEgCp-YGBiTMHkiPNLnzIFY",
  authDomain: "attendance-app-cb5d7.firebaseapp.com",
  projectId: "attendance-app-cb5d7",
  storageBucket: "attendance-app-cb5d7.appspot.com",
  messagingSenderId: "1075282188169",
  appId: "1:1075282188169:web:c4e0b9a13eb99941ac3358"
};

  firebase.initializeApp(firebaseConfig)


export default firebase.database()