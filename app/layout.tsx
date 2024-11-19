import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import "../global.css";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Paulo Santos | Personal Website",
    template: "%s | Paulo Santos",
  },
  description: "Personal website and portfolio of Paulo Santos",
  openGraph: {
    title: "Paulo Santos | Personal Website",
    description: "Personal website and portfolio of Paulo Santos",
    url: "https://paulo-ssantos.updeploy.tech",
    siteName: "Paulo Santos | Personal Website",
    images: [
      {
        url: "https://paulo-ssantos.updeploy.tech/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Paulo Santos | Personal Website",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
