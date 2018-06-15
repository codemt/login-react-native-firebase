import firebase from 'firebase';
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCNX8sskqYKyLqDTU9i8NEGiQ6S1PlLNaY",
    authDomain: "wedapp-6c17d.firebaseapp.com",
    databaseURL: "https://wedapp-6c17d.firebaseio.com",
    projectId: "wedapp-6c17d",
    storageBucket: "wedapp-6c17d.appspot.com",
    messagingSenderId: "969907395450"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
