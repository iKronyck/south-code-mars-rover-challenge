"use client";
import OutsideClickHandler from "react-outside-click-handler";
import Select from "./Select";
import useFilterForm from "@/app/hooks/useFilterFormcomponents";
import Input from "./Input";

type TModal = {
  visible: boolean;
};

export default function Modal({ visible }: TModal) {
  const {
    rover,
    rovers,
    camera,
    cameras,
    filter,
    filters,
    filterTypeVal,
    isSaving,
    onChangeRover,
    onChangeCamera,
    onChangeFilter,
    onChangeFilterTypeVal,
    onHandleAddBookmark,
  } = useFilterForm();
  if (!visible) return null;
  return (
    <div className="bg-background-shadow testing flex fixed left-0 right-0 top-0 bottom-0 z-[100] max-w-full max-h-screen justify-center items-center">
      <OutsideClickHandler onOutsideClick={() => null}>
        <div className={`w-96 md:w-[529px] bg-white rounded-lg h-auto pb-4`}>
          <header className="flex flex-row justify-between items-center p-5">
            <h2 className="font-bold text-2xl">Search</h2>
            <i className="fa-sharp fa-solid fa-xmark text-gray-700 text-xl cursor-pointer" />
          </header>
          <div className="bg-gray-100 h-[1px] w-full" />
          <div className="mx-5 mt-5 outline-dashed outline-2 outline-offset-2 rounded-md outline-gray-100 p-3">
            <Select
              name="bookmark"
              value={""}
              onChange={onChangeRover}
              label="Bookmars"
              options={rovers}
              placeholder="Select a bookmark"
            />
          </div>
          <div className="mx-5 mt-5 outline-dashed outline-2 outline-offset-2 rounded-md outline-gray-100 p-3 grid grid-cols-2 gap-4">
            <Select
              name="rover"
              value={rover}
              onChange={onChangeRover}
              label="Rover"
              options={rovers}
              placeholder="Select a rover"
            />
            <Select
              name="camera"
              value={camera}
              onChange={onChangeCamera}
              label="Camera"
              options={cameras}
              placeholder="Select a camera"
            />
            <div className={filter === "" ? "col-span-2" : ""}>
              <Select
                name="filter"
                value={filter}
                onChange={onChangeFilter}
                label="Date filter"
                options={filters}
                placeholder="Select a filter"
              />
            </div>
            {filter !== "" ? (
              <Input
                label={filter === "earth_date" ? "Earth date" : "Sol date"}
                name={filter}
                type={filter === "earth_date" ? "date" : "number"}
                value={filterTypeVal}
                onChange={onChangeFilterTypeVal}
              />
            ) : null}
            {isSaving ? (
              <div className="col-span-2">
                <Input
                  label="Bookmark name"
                  name={"bookmark-name"}
                  type="text"
                  value={filterTypeVal}
                  onChange={onChangeFilterTypeVal}
                />
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-4 mx-5 mt-5">
            <button
              type="button"
              className="hover:bg-orange outline-none outline-2 outline-offset-2 rounded-md outline-gray-100 hover:outline-orange"
            >
              <p className="hover:text-white">Filter</p>
            </button>
            <button
              type="button"
              className={`flex outline-none outline-2 outline-offset-2 rounded-md outline-orange p-3 flex-row justify-center items-center ${
                isSaving && "bg-orange"
              }`}
              onClick={onHandleAddBookmark}
            >
              <i
                className={`text-orange fa-solid fa-bookmark mr-3 ${
                  isSaving && "text-white"
                }`}
              />
              <p className={`text-orange ${isSaving && "text-white"}`}>
                {isSaving ? "Save bookmark" : "Add to bookmarks"}
              </p>
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
