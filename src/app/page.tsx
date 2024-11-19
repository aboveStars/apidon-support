import { Metadata } from "next";

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

export default function page() {
  return (
    <div className="flex w-screen h-screen justify-center content-center items-center text-center flex-col gap-8 bg-white dark:bg-black p-14">
      <text className="text-4xl font-bold text-black dark:text-white">
        Apidon Support
      </text>
      <text className="text-black dark:text-white">
        Select a button below to get help with the topic you need assistance
        with.
      </text>
      <div className="flex flex-row gap-5 items-center content-center justify-center">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="mailto:support@apidon.com?subject=Help%20Request&body=Please%20describe%20your%20issue."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
