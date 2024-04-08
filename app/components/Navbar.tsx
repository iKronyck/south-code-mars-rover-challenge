"use client";
import localFont from "next/font/local";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Drawer from "@/app/components/Drawercomponents";
import Link from "next/link";

const myFont = localFont({
  src: "../../public/fonts/nasalization-rg.otf",
  display: "swap",
});

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <nav className="flex items-center justify-between  p-6">
      <Link
        href="/"
        className="flex items-center flex-shrink-0 text-white mr-6"
      >
        <h1 style={myFont.style} className="text-[32px] uppercase text-orange">
          Mars rover
        </h1>
      </Link>
      <div className="flex-grow flex w-auto">
        <div className="text-sm flex-grow" />
        <IconButton
          aria-label="Search"
          className="rounded-full bg-black"
          bg="#eb601d"
          onClick={onOpen}
          color="#fff"
          icon={<SearchIcon />}
        />
        <div />
      </div>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </nav>
  );
}
