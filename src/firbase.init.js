import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUqffUjkOo3YO6xMELscrvVlfyAF_TGO0",
  authDomain: "ema-john-98943.firebaseapp.com",
  projectId: "ema-john-98943",
  storageBucket: "ema-john-98943.appspot.com",
  messagingSenderId: "809588610522",
  appId: "1:809588610522:web:50b1c965d2b31a5f021ce3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
