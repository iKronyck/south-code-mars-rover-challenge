// "use server";
import { useEffect, useState } from "react";
import { getAllRovers } from "../server/rovers";
import { TPhoto } from "../types/global";
import { usePathname, useSearchParams } from "next/navigation";

export default function useRoversData() {
  const [rovers, setRovers] = useState<TPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, serLoadingMore] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getData = async () => {
    setLoading(true);
    const currentPage = Number(searchParams.get("page")) ?? 1;
    const camera = searchParams.get("camera");
    const earth_date = searchParams.getAll("earth_date");
    const sol = searchParams.get("sol");
    let localRovers = [];
    if (camera) {
      let query = `photos?camera=${camera}`;
      if (sol) query += `&sol=${sol}`;
      if (earth_date) query += `&earth_date=${earth_date}`;
      localRovers = await getAllRovers(currentPage, query);
      setLoading(false);
      setRovers(localRovers ?? []);
    } else {
      localRovers = await getAllRovers(currentPage);
      setLoading(false);
      setRovers(localRovers ?? []);
    }
  };

  useEffect(() => {
    getData();
  }, [pathname, searchParams]);

  return { rovers, loading };
}
