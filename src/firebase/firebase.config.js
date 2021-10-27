import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.init"

const initAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initAuthentication;