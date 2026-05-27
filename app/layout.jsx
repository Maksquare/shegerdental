import { Cormorant_Garamond, Jost, Italiana } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Sheger Dental Clinic | Premium Dental Care in Addis Ababa",
    template: "%s | Sheger Dental Clinic",
  },
  description:
    "Experience world-class dental care at Sheger Dental Clinic. From cosmetic dentistry to advanced oral surgery, we deliver excellence with a gentle touch.",
  keywords: [
    "dental clinic Addis Ababa",
    "Sheger Dental",
    "cosmetic dentistry Ethiopia",
    "teeth whitening",
    "dental implants",
    "orthodontics Addis Ababa",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sheger Dental Clinic | Premium Dental Care in Addis Ababa",
    description:
      "Experience world-class dental care at Sheger Dental Clinic. Excellence, precision, and comfort — every visit.",
    type: "website",
    locale: "en_ET",
    siteName: "Sheger Dental Clinic",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${jost.variable} ${italiana.variable} antialiased`}
      >
        <div>
          {children}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}