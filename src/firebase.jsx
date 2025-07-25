import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDydBi5F5NSAFo27WoZcXsVYq74g9tsVE",
  authDomain: "layers-f869f.firebaseapp.com",
  projectId: "layers-f869f",
  storageBucket: "layers-f869f.firebasestorage.app",
  messagingSenderId: "492010005260",
  appId: "1:492010005260:web:da287c087b5979ac441f29",
  measurementId: "G-N3KBREXHTZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
