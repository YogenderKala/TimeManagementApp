import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCR8u1i8NGr7c_55D0aZs4769Gvrre5K5s",
  authDomain: "timemanagementapp-e3e89.firebaseapp.com",
  projectId: "timemanagementapp-e3e89",
  storageBucket: "timemanagementapp-e3e89.appspot.com",
  messagingSenderId: "488034321629",
  appId: "1:488034321629:web:b673d83ba7994242844734",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext); //custom hook to use firebase context

export const FirebaseProvider = (props) => {
  const db = getFirestore(firebaseApp);
  //function to sign up a new user
  const signUpUser = async (email, password) => {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  //fuction to sign in an existing user
  const signInUser = async (email, password) => {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  //funtion to sign out user
  const signOutUser = async () => {
    return await signOut(firebaseAuth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUser,
        signInUser,
        signOutUser,
        db,
        firebaseAuth,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
