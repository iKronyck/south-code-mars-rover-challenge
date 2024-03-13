import RoverList from "@/components/RoverList/RoverListcomponents";
import Skeleton from "@/components/Skeletoncomponents";
import { Suspense } from "react";

export default async function Home() {
  return (
    <section className="mx-5 md:mx-10">
      <Suspense fallback={<Skeleton />}>
        <RoverList />
      </Suspense>
    </section>
  );
}
