// "use server";
import { useEffect, useState } from "react";
import { getAllRovers } from "../server/rovers";
import { TPhoto } from "../types/global";
import { usePathname, useSearchParams } from "next/navigation";

export default function useRoversData() {
  const [rovers, setRovers] = useState<TPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [fetched, setFetched] = useState(false);
  const [canFetch, setCanFetch] = useState(true);
  const [isFetching, setFetching] = useState(false);

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
    if (localRovers.length <= 0) setCanFetch(false);
    setFetched(true);
  };

  const getMoreData = async () => {
    setFetching(true);

    const camera = searchParams.get("camera");
    const earth_date = searchParams.getAll("earth_date");
    const sol = searchParams.get("sol");
    let localRovers: TPhoto[] = [];
    if (camera) {
      let query = `photos?camera=${camera}`;
      if (sol) query += `&sol=${sol}`;
      if (earth_date) query += `&earth_date=${earth_date}`;
      localRovers = await getAllRovers(page + 1, query);
      setLoading(false);
      if (localRovers.length > 0) {
        const allValues = [...rovers] as TPhoto[];
        setRovers(allValues.concat(localRovers));
      }
    } else {
      localRovers = await getAllRovers(page + 1);
      setLoading(false);
      if (localRovers.length > 0) {
        const allValues = [...rovers] as TPhoto[];
        setRovers(allValues.concat(localRovers));
      }
    }
    if (localRovers.length <= 0) setCanFetch(false);
    setPage((value) => value + 1);
    setFetching(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return { rovers, loading, isFetching, fetched, canFetch, getMoreData };
}
