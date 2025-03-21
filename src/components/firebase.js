import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GithubAuthProvider} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmenSX2SrPmXIoB_gg6DhzNKVSp0pZIJE",
  authDomain: "arctic-keyword-273204.firebaseapp.com",
  databaseURL: "https://arctic-keyword-273204.firebaseio.com",
  projectId: "arctic-keyword-273204",
  storageBucket: "arctic-keyword-273204.appspot.com",
  messagingSenderId: "926013073071",
  appId: "1:926013073071:web:801b022c29457496a1965a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);


export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        authProvider: "local",
        email: user.email,
      });
    }

  } catch (err) {
    console.error(err);
  }
}

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
      const userData = docs.docs[0].data();
      const profileName = userData.name;
      console.log("Profile Name:", profileName);
    console.log("Profile Name:", profileName);
    console.log( "Successfully LoggedIn")
  } catch (err) {
    console.error(err);
  }
};

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const GitHubProvider = new GithubAuthProvider();
export const signInWithGitHub = async () => {
  try {
    const res = await signInWithPopup(auth, GitHubProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "github",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};