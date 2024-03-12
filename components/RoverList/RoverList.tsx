import { getAllRovers } from "../../app/server/rovers";
import RoverItem from "../RoverItem";

export default async function RoverList() {
  const rovers = await getAllRovers();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {rovers.map((rover) => (
        <RoverItem key={rover.id} rover={rover} />
      ))}
    </div>
  );
}
