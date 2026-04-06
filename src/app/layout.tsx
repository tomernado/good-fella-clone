import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good Fella — Frontend Development Studio | Websites That Move",
  description:
    "Good Fella is a frontend development studio that works as your dedicated team. One monthly fee, no contracts, and no hourly tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistMono.variable} antialiased`}
    >
      <head>
        {/* Adobe Typekit – aktiv-grotesk */}
        <link rel="stylesheet" href="https://use.typekit.net/tdy7azi.css" />
      </head>
      <body className="min-h-svh bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
