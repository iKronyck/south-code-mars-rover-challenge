import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbarcomponents";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mars Rover - Southern Code",
  description: "Southern Code Frontend Challenge",
  icons: {
    icon: {
      url: "../app/favicon.ico",
      type: "image/x-icon",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ChakraProvider disableGlobalStyle>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
