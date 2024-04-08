import { TPhoto } from "../types/global";

export async function getAllRovers(
  page: number,
  query: string = "latest_photos?"
): Promise<TPhoto[]> {
  try {
    const data = await fetch(
      `${process.env.API_URL}${query}&page=${page}&api_key=${process.env.API_KEY}`
    );
    const rovers = await data.json();
    return rovers.latest_photos ?? rovers.photos ?? [];
  } catch (error) {
    throw Error("Error getting the data." + error);
  }
}
