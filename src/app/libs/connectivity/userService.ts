import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import callAPI from "./customFetch";

export async function getOwnUser(router: AppRouterInstance) {
  try {
    const data: User = await callAPI(router, "user", {
      method: "GET",
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function createUser(router: AppRouterInstance) {
  try {
    const data: User = await callAPI(router, "user", {
      method: "POST",
    });
    return data;
  } catch (err) {
    throw err;
  }
}
