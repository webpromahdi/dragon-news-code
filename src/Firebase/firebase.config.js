import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaRUia5issNg63TL0rrSHfj_wRSoKf42c",
  authDomain: "dragon-news-auth-83a6b.firebaseapp.com",
  projectId: "dragon-news-auth-83a6b",
  storageBucket: "dragon-news-auth-83a6b.firebasestorage.app",
  messagingSenderId: "207037618176",
  appId: "1:207037618176:web:1491fea8f1ff10f7f1a0e5"
};


const app = initializeApp(firebaseConfig);

export default app;