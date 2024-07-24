// ------------- import external dependencies ---------------
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// --------------- import internal dependencies --------------
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import "@/css/main.css";

export const metadata: Metadata = {
  title: "User Search Library",
  description: "Library to search for users across github",
};

const poppins = Poppins({ weight: "400", preload: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
