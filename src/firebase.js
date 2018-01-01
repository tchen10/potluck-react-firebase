import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDwcDIJX3cipl1ID_uP-X68iqNRSQGbGTE",
    authDomain: "fun-food-friends-25ee5.firebaseapp.com",
    databaseURL: "https://fun-food-friends-25ee5.firebaseio.com",
    projectId: "fun-food-friends-25ee5",
    storageBucket: "fun-food-friends-25ee5.appspot.com",
    messagingSenderId: "78283638547"
  };
const db = firebase.initializeApp(config).database()
export default db
