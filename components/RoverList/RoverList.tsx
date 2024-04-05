"use client";

import { headers } from "next/headers";
import { getAllRovers } from "../../app/server/rovers";
import Modal from "../Modal";
import RoverItem from "../RoverItem";
import useRoversData from "@/app/hooks/useRoversDatacomponents";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Skeleton from "../Skeleton";

export default function RoverList() {
  const { rovers, loading } = useRoversData();
  const { refresh } = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {loading ? <Skeleton /> : null}
      {rovers.map((rover) => (
        <RoverItem key={rover.id} rover={rover} />
      ))}
      {/* <Modal visible={true} onClose={() => {}} /> */}
    </div>
  );
}
