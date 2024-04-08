import Image from "next/image";
import { TPhoto } from "@/app/types/globalcomponents";

type TRoverItem = {
  rover: TPhoto;
};

export default function RoverItem({
  rover: { camera, earth_date, img_src, rover, sol },
}: TRoverItem) {
  return (
    <div className="rounded overflow-hidden shadow-lg relative w-full bg-white">
      <Image
        className="w-full max-w-full h-56"
        width={100}
        height={256}
        style={{ width: "100%" }}
        alt=""
        src={img_src}
      />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 text-orange">
          {camera.name ?? ""}
          <span className="font-light">{`(${rover.name})`}</span>
        </h1>
        <p className="text-base text-black">{camera.full_name ?? ""}</p>
      </div>
      <div className="flex flex-row justify-between px-6 pb-4 pt-2 text-black">
        <span className="flex flex-row items-center">
          <i className="fa-duotone fa-sun text-3xl text-orange" />
          <h2 className="ml-3">{sol ?? "--"}</h2>
        </span>
        <span className="flex  flex-row items-center rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          <i className="fa-duotone fa-earth-americas text-3xl text-orange" />
          <h2 className="ml-3">{earth_date ?? "--"}</h2>
        </span>
      </div>
    </div>
  );
}
