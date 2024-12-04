import { auth } from "../libs/firebase/firebase";

// // log in status observer
auth.onAuthStateChanged((user) => {
  if (user) {
    if (!localStorage.getItem("isLoggedIn")) {
      localStorage.setItem("isLoggedIn", true.toString());
    }
  } else {
    if (localStorage.getItem("isLoggedIn")) {
      localStorage.clear();
    }
  }
});

export const loggedIn = () => localStorage.getItem("isLoggedIn") === "true";
