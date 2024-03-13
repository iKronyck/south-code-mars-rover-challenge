import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/fonts/nasalization-rg.otf",
  display: "swap",
});

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 style={myFont.style} className="text-[32px] uppercase text-orange">
          Mars rover
        </h1>
      </div>
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow" />
        <div />
      </div>
    </nav>
  );
}
