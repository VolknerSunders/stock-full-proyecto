import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoqsZ6gg6QhqeUyMrKkjNQWHzcOvlpBHM",
    authDomain: "stock-full-db.firebaseapp.com",
    projectId: "stock-full-db",
    storageBucket: "stock-full-db.appspot.com",
    messagingSenderId: "503488330933",
    appId: "1:503488330933:web:1e1edc5fae77b105d9d2fc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'user', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error){
            console.log('error al crear usuario', error.message);
        }
    }
    return userDocRef;
  }