import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyDiI48En8NMieHupfxBD26p_kAIsdEThIc",
    authDomain: "gsw-react.firebaseapp.com",
    databaseURL: "https://gsw-react.firebaseio.com",
    projectId: "gsw-react",
    storageBucket: "gsw-react.appspot.com",
    messagingSenderId: "633947602241"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseGames = firebaseDB.ref('games');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseGames,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}
