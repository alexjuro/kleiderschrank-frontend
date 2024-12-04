import { auth } from "../libs/firebase/firebase";

// // log in status observer
auth.onAuthStateChanged((user) => {
  console.log("observer generiert");
  if (user) {
    console.log("Observer: User vorhanden", user);
    if (!localStorage.getItem("isLoggedIn")) {
      localStorage.setItem("isLoggedIn", true.toString());
    }
  } else {
    if (localStorage.getItem("isLoggedIn")) {
      localStorage.clear();
    }
    console.log("Observer: kein User eingeloggt");
  }
});

export const loggedIn = () => localStorage.getItem("isLoggedIn") === "true";
