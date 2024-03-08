import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen h-screen relative">
      <Image
        className="absolute w-full h-full"
        alt="background image of mars"
        src="/img/mars-walppaper.jpeg"
        fill
        priority
      />
      <div className="flex bg-blue-400 w-full h-full">
        <h1 className="text-white z-10">Hello</h1>
      </div>
    </main>
  );
}
