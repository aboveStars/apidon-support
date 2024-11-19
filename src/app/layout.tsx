import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Apidon Support",
  description: "Make Every Event Unique",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/images/android-icon-48x48.png",
      href: "/images/android-icon-48x48.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/images/android-icon-48x48.png",
      href: "/images/android-icon-48x48.png",
    },
  ],
  openGraph: {
    title: "Apidon • Make Every Event Unique",
    description: "Make Every Event Unique",
    url: "https://apidon.com",
    siteName: "Apidon",
    images: [
      {
        url: "https://apidon.com/images/og.png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
