  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCcl7o9Ra6Q4knqv0N5wcrgS2e7KIIf7d8",
    authDomain: "testverify-8066a.firebaseapp.com",
    projectId: "testverify-8066a",
    storageBucket: "testverify-8066a.appspot.com",
    messagingSenderId: "574851475158",
    appId: "1:574851475158:web:8cbc463de024d07036cb77",

  };

  // Initialize Firebase

  // const app = initializeApp(firebaseConfig);
  // const db = firebase.firestore();



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
