"use client";

import { logOut } from "../libs/firebase/auth";
import { redirect, useRouter } from "next/navigation";
import { loggedIn } from "../context/auth";

export default function Kleiderschrank() {
  const router = useRouter();

  if (!loggedIn) {
    redirect("/login");
  }

  const handleLogOut = async () => {
    try {
      const res = await logOut();
      console.log("LogOut result", res);
      router.push("/login");
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  return (
    <main>
      <h1>diese seite sollte nicht besuchbar sein, wenn man ausgeloggt ist</h1>
      <button onClick={handleLogOut}>ausloggen</button>
    </main>
  );
}
