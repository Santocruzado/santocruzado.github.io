import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/Navigation";

const inter = Poppins({subsets:["latin"], weight:['100', '200', '400', '500', '700', '900']});

export const metadata: Metadata = {
  title: "NextJS-00",
  description: "my-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
