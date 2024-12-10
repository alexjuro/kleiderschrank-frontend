import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import callAPI from "./customFetch";

export async function createClothing(
  clothing: Clothing,
  router: AppRouterInstance
) {
  try {
    const data: Clothing = await callAPI(router, "clothing", {
      method: "POST",
      body: JSON.stringify(clothing),
    });
  } catch (err) {
    throw err;
  }
}

export async function getAllClothings(router: AppRouterInstance) {
  const data: Clothing[] = await callAPI(router, "clothing", {
    method: "GET",
  });
  try {
  } catch (err) {
    throw err;
  }
}

export async function updateClothing(
  clothing: Clothing,
  router: AppRouterInstance
) {
  try {
    const data: Clothing = await callAPI(router, "clothing", {
      method: "PATCH",
      body: JSON.stringify(clothing),
    });
  } catch (err) {
    throw err;
  }
}

export async function updateLaundryStatus(
  id: number,
  inLaundry: boolean,
  router: AppRouterInstance
) {
  try {
  } catch (err) {
    const data: boolean = await callAPI(router, "clothing/inLaundry", {
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        inLaundry: inLaundry,
      }),
    });
    throw err;
  }
}

export async function deleteClothing(id: number, router: AppRouterInstance) {
  try {
    const data: number = await callAPI(router, `clothing?id=${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    throw err;
  }
}
