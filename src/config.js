import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD9BvVjKH_XC8bPuINomQO8BNJaDJTCRLI",
    authDomain: "myapp-27325.firebaseapp.com",
    databaseURL: "https://myapp-27325.firebaseio.com",
    projectId: "myapp-27325",
    storageBucket: "myapp-27325.appspot.com",
    messagingSenderId: "567472018068",
    appId: "1:567472018068:web:55aeac338433b993"
};

let app = Firebase.initializeApp(config)
export const db = app.database()