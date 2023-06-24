import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB8ClqIW03HYvK9pRr0RsQgadz8md1actg",
    authDomain: "basic-53507.firebaseapp.com",
    projectId: "basic-53507",
    storageBucket: "basic-53507.appspot.com",
    messagingSenderId: "812358227460",
    appId: "1:812358227460:web:5be13b98cd34cf186c8751",
    measurementId: "G-DRMN9NVL3E"
}
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db };
  
