import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error during Google Sign-In:", error);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("user successfully logged out");
  } catch (error) {
    console.log("error white logging out user: ", error);
  }
};