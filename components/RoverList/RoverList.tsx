"use client";

import RoverItem from "../RoverItem";
import useRoversData from "@/app/hooks/useRoversDatacomponents";
import Skeleton from "../Skeleton";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@chakra-ui/react";

export default function RoverList() {
  const { ref, inView } = useInView();
  const { rovers, loading, canFetch, isFetching, fetched, getMoreData } =
    useRoversData();

  useEffect(() => {
    if (!isFetching && canFetch && fetched && inView) getMoreData();
  }, [inView, fetched, canFetch, getMoreData, loading, isFetching]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? <Skeleton /> : null}
        {rovers &&
          rovers.map((rover) => <RoverItem key={rover.id} rover={rover} />)}
      </div>
      {!loading && fetched && canFetch && rovers.length > 0 ? (
        <div className="flex w-full mt-8 justify-center">
          <Spinner
            ref={ref}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange"
            size="xl"
          />
        </div>
      ) : null}
    </div>
  );
}
