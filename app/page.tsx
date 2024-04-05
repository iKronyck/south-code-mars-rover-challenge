import RoverList from "@/components/RoverList/RoverListcomponents";

export default function Home() {
  return (
    <section className="grid mx-5 md:mx-10">
      <RoverList />
      {/* <button
        className="bg-white font-bold py-2 px-3 rounded-full fixed bottom-4 right-4"
        type="button"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
      >
        <i className="fa-duotone fa-magnifying-glass text-orange text-xl" />
      </button> */}
    </section>
  );
}
