import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cred Club Clone",
  description: "",
};
export const assetBaseURL = "https://web-images.credcdn.in/v2/_next/assets/";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
