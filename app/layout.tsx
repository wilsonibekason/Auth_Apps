"use client";

import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import { Auth0Provider } from "@auth0/auth0-react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: " Onyaneucheya Maryjane Onyinye",
//   description: " Design And Implementation of Multi Factor Security System",
// };

// const domain = process.env.NEXT_APP_AUTH0_DOMAIN as string;
// const client_Id = process.env.NEXT_APP_AUTH0_CLIENT_ID as string;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FpjsProvider
          loadOptions={{
            apiKey: "yAIokXYwDXA44Vv8Y48R",
          }}
        >
          <Auth0Provider
            domain={"dev-yshm8xjcgl04au2s.us.auth0.com"}
            clientId={"QVDukP3834gDA80IFTLCbPtU7JmW0Vht"}
          >
            {children}
          </Auth0Provider>
        </FpjsProvider>
        <Toaster />
      </body>
    </html>
  );
}
