import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword ,GoogleAuthProvider,  applyActionCode, sendEmailVerification} from "firebase/auth";
import { auth, db } from "./firebase";


export const doCreateUserWithEmailandPassword = async (email, password) => {
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;
    } catch (e) {
        throw e;
    }

};

export const doSignInWithEmailandPassword = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    } catch (error) {
        throw error;
    }
};


export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth , provider);

    return result;
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email) =>{
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) =>{
    return updatePassword(auth.currentUser, password);
};
