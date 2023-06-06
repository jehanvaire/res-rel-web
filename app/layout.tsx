"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="La plateforme de ressources relationnelles"
        />
        <meta
          name="keywords"
          content="ressources, relationnelles, plateforme, ressources relationnelles"
        />
        <meta name="author" content="Ressources Relationnelles" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ressources Relationnelles</title>
        <link rel="icon" href="/assets/icon.png" />
      </head>
      <body className={poppins.className}>
        <NextUIProvider>
          <Header />
          <main className="container">{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
