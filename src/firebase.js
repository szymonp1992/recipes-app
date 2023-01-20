// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjaur7x-AHGEsuLWeAM63AzZl1Fqsvgg4",
  authDomain: "recipes-database-9f754.firebaseapp.com",
  databaseURL: "https://recipes-database-9f754-default-rtdb.firebaseio.com",
  projectId: "recipes-database-9f754",
  storageBucket: "recipes-database-9f754.appspot.com",
  messagingSenderId: "598702548134",
  appId: "1:598702548134:web:0e92c6bd20a7fc13acc067",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);

export { storage };
