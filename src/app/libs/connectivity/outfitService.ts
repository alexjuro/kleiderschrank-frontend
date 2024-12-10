import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import callAPI from "./customFetch";

export async function createOutfit(
  clothingIdList: number[],
  router: AppRouterInstance
) {
  try {
    const data: String = await callAPI(router, "outfit", {
      method: "POST",
      body: JSON.stringify({ clothingIdList: clothingIdList }),
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getOutfits(
  closetId: number,
  inLaundry: boolean | null,
  router: AppRouterInstance
) {
  try {
    const data: String = await callAPI(router, "outfit", {
      method: "GET",
      body: JSON.stringify({ closetId: closetId, inLaundry: inLaundry }),
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getSingleOutfit(id: number, router: AppRouterInstance) {
  try {
    const data: String = await callAPI(router, `outfit/single?id=${id}`, {
      method: "GET",
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function updateOutfit(
  id: number,
  clothingIdList: number[],
  router: AppRouterInstance
) {
  try {
    const data: String = await callAPI(router, "outfit", {
      method: "PATCH",
      body: JSON.stringify({ id: id, clothingIdList: clothingIdList }),
    });
    return data;
  } catch (err) {
    throw err;
  }
}

export async function deleteOutfit(id: number, router: AppRouterInstance) {
  try {
    const data: String = await callAPI(router, `outfit?id=${id}`, {
      method: "DELETE",
    });
    return data;
  } catch (err) {
    throw err;
  }
}
