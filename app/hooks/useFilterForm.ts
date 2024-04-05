import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

enum ERover {
  CURIOSITY = "curiosity",
  OPPORTUNITY = "opportunity",
  SPIRIT = "spirit",
}

const CURIOSITY_CAMERAS = [
  "FHAZ",
  "RHAZ",
  "MAST",
  "CHEMCAM",
  "MAHLI",
  "MARDI",
  "NAVCAM",
];
const OPPORTUNITY_CAMERAS = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];
const SPIRIT_CAMERAS = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];

const rovers = [ERover.CURIOSITY, ERover.OPPORTUNITY, ERover.SPIRIT];
const filters = ["earth_date", "sol"];

export default function useFilterForm() {
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [filter, setFilter] = useState("");
  const [sol, setSol] = useState("");
  const [filterTypeVal, setFilterTypeVal] = useState("");
  const [isSaving, setSaving] = useState(false);
  const { replace, refresh, push, prefetch } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [cameras, setCameras] = useState<string[]>([]);

  const onChangeRover = (value: string) => {
    setRover(value);

    if (value === ERover.CURIOSITY) setCameras(CURIOSITY_CAMERAS);
    else if (value === ERover.OPPORTUNITY) setCameras(OPPORTUNITY_CAMERAS);
    else if (value === ERover.SPIRIT) setCameras(SPIRIT_CAMERAS);
    else setCameras([]);
  };
  const onChangeCamera = (value: string) => setCamera(value);
  const onChangeFilter = (value: string) => setFilter(value);
  const onChangeSol = (value: string) => setSol(value);
  const onChangeFilterTypeVal = (value: string) => setFilterTypeVal(value);

  const onHandleAddBookmark = () => {
    setSaving((value) => !value);
  };

  const filterData = () => {
    const params = new URLSearchParams(searchParams);
    if (camera) params.set("camera", camera);
    if (filter) params.set(filter, filterTypeVal);
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    rover,
    rovers,
    camera,
    cameras,
    filter,
    filters,
    sol,
    filterTypeVal,
    isSaving,
    onChangeRover,
    onChangeCamera,
    onChangeFilter,
    onChangeSol,
    onChangeFilterTypeVal,
    onHandleAddBookmark,
    filterData,
  };
}
