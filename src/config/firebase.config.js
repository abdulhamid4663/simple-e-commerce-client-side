import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHXEcjunRzl-r-RHdleWjjC4ejRyOyrlY",
  authDomain: "diyafah-auth.firebaseapp.com",
  projectId: "diyafah-auth",
  storageBucket: "diyafah-auth.appspot.com",
  messagingSenderId: "938255720872",
  appId: "1:938255720872:web:8b7c55e789831894bd7d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;