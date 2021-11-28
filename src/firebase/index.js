import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC5hRMZcizsmk8Xh-TMMJxuj6uXtl7c33E",
    authDomain: "uc-ecommerce.firebaseapp.com",
    projectId: "uc-ecommerce",
    storageBucket: "uc-ecommerce.appspot.com",
    messagingSenderId: "666418438980",
    appId: "1:666418438980:web:33ddc86009fa6a17752d11"
  };
    
  const app = initializeApp(firebaseConfig);
  export const getFirebase = () => app;
  
  export { getFirestore };


