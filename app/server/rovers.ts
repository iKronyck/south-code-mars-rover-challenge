import { TPhoto } from "../types/global";

export async function getAllRovers(): Promise<TPhoto[]> {
  try {
    const data = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&page=1&api_key=4AEnZ1PAQ5VLJbhpKSlW7pnmQpt09jPxFnWSornU"
    );
    const rovers = await data.json();
    return rovers.latest_photos ?? [];
  } catch (error) {
    throw Error("Error getting the data.");
  }
}
