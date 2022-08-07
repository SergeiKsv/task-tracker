import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,} from "firebase/auth";
  
  import {
  getFirestore,query,
  getDocs,
  collection,
  where,
  addDoc,} from "firebase/firestore";
  import { initializeApp } from "firebase/app";

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  }


  const firebaseApp=initializeApp(firebaseConfig);
  const auth=getAuth();
  const db=getFirestore(firebaseApp);
  
  const googleProvider=new GoogleAuthProvider();

interface UserInfo{
  displayName: string|null|undefined,
  email:string|null|undefined,
  uid:string|undefined
}

const initState:UserInfo = {
  displayName: null,
  email: null,
  uid: ""
};

 export  const signWithGoogle=createAsyncThunk('signInGoogle',async ()=>{
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      const userData:UserInfo={
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      }
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      return userData;
    } catch (err:any) {
      console.error(err);
      alert(err.message);
    }
  }
  );

 export const registerWithEmailAndPassword =createAsyncThunk("registerEmailPAssword", async(userData:any) => {
    try {
      const {name,email,password}=userData;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name:name,
        authProvider: "local",
        email:email
      });
      return user;
    } catch (err:any) {
      console.error(err);
      alert(err.message);
    }
  });

 const authReducer = createSlice({
  name:'auth',
  initialState:initState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(signWithGoogle.fulfilled,(state,action)=>{
      state.email=action.payload?.email
      state.displayName=action.payload?.displayName
      state.uid=action.payload?.uid
    })
    builder.addCase(registerWithEmailAndPassword.fulfilled,(state,action)=>{
      state.email=action.payload?.email
      state.displayName=action.payload?.displayName
      state.uid=action.payload?.uid
    })
  },
});

export default authReducer.reducer