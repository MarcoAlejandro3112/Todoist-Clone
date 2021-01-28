import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBtLmtigzRlQJ-JMRYQPM72ciZvwEnRg78",
    authDomain: "todoist-clone-58551.firebaseapp.com",
    databaseURL: "https://todoist-clone-58551-default-rtdb.firebaseio.com",
    projectId: "todoist-clone-58551",
    storageBucket: "todoist-clone-58551.appspot.com",
    messagingSenderId: "978658007786",
    appId: "1:978658007786:web:36400ec9db983553fcd593"
});

export { firebaseConfig as firebase }