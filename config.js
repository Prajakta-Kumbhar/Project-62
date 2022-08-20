import firebase from "firebase";

//initialize your database

const firebaseConfig = {
  apiKey: "AIzaSyCidDwlx4w4vi0TkeQTf09dhDhwr5v0m1Q",
  authDomain: "new-pro-2069c.firebaseapp.com",
  databaseURL: "https://new-pro-2069c-default-rtdb.firebaseio.com",
  projectId: "new-pro-2069c",
  storageBucket: "new-pro-2069c.appspot.com",
  messagingSenderId: "164173389538",
  appId: "1:164173389538:web:aae123a5d7eabff46908bb"
};


  firebase.initializeApp(firebaseConfig)

  
  export default firebase.database()
 

  