import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZM2Lmpw_H_272l8TwZBLMHldUED5K31k",
  authDomain: "resume-builder-69370.firebaseapp.com",
  projectId: "resume-builder-69370",
  storageBucket: "resume-builder-69370.firebasestorage.app",
  messagingSenderId: "442162455044",
  appId: "1:442162455044:web:064fdd00d9a662908a0b51",
  measurementId: "G-580E0KEN1Q"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();