"use client";

import RoverItem from "../RoverItem";
import useRoversData from "@/app/hooks/useRoversDatacomponents";
import Skeleton from "../Skeleton";
import { Suspense } from "react";

export default function RoverList() {
  const { rovers, loading } = useRoversData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {loading ? <Skeleton /> : null}
      {!loading &&
        rovers.map((rover) => <RoverItem key={rover.id} rover={rover} />)}
    </div>
  );
}
