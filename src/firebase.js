import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBR5hiq1aMgw5R8DNvMw4diQCGIwsYlRSk",
  authDomain: "optometria-ef150.firebaseapp.com",
  databaseURL: "https://optometria-ef150.firebaseio.com",
  projectId: "optometria-ef150",
  storageBucket: "optometria-ef150.appspot.com",
  messagingSenderId: "624404834393",
  appId: "1:624404834393:web:983baa73bdd7eccf022948",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
