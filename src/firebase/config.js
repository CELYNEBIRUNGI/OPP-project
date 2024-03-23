import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBetriJqNlFzzJsy0JZosI9vgA9ql1a52k",
  authDomain: "nopp-576c6.firebaseapp.com",
  projectId: "nopp-576c6",
  storageBucket: "nopp-576c6.appspot.com",
  messagingSenderId: "421955072390",
  appId: "1:421955072390:web:ab85067ae240b9dcdebc07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://nopp-576c6.appspot.com");

export { storage };
