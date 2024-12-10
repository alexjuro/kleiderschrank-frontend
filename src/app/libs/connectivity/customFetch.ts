import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { auth } from "../firebase/firebase";

/**
 * custom Fetch
 * @returns the data or throws an Error with the status Code
 */
export default async function callAPI(
  router: AppRouterInstance,
  url: string,
  options = {}
) {
  const user = auth.currentUser;
  if (user != null) {
    const token = await user.getIdToken(true);
    const headers = {
      ...options,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const res = await fetch(url, { ...options, headers });

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  } else {
    console.error("user not logged in, redirecting to /login");
    router.push("/login");
  }
}
