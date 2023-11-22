// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// 인증
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnvaFqqEsZO7mLhC8O3WPOgHqcVRKHwgA",
  authDomain: "react-native-login-f53fc.firebaseapp.com",
  projectId: "react-native-login-f53fc",
  storageBucket: "react-native-login-f53fc.appspot.com",
  messagingSenderId: "73634552437",
  appId: "1:73634552437:web:f2d6ecac364447c966763c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
