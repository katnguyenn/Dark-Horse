import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class Firebase {
  constructor() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDQILNBmT5GeYj3-iW_ApYHfOiAf31tx2M',
      authDomain: 'dark-horse-bands.firebaseapp.com',
      projectId: 'dark-horse-bands',
      storageBucket: 'dark-horse-bands.appspot.com',
      messagingSenderId: '1019088420601',
      appId: '1:1019088420601:web:ef56bfadbea5b12e176c28',
      measurementId: 'G-B5F0CSQWX7',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }
  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  currentUser() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
  console.log('signed in with email!');
};
