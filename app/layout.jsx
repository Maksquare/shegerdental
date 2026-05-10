import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";
import FloatingIcon from "@/components/FloatingIcon";
import WhatsAppButton from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],

});

export const metadata = {
  title: "Fewzan Homecare",
  description: "Hospital level care at the comfort of your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${barlow.variable} antialiased`}
      >
             <div className="pt-28">

        {children}
        <WhatsAppButton/>
             </div>
      
      </body>
    </html>
  );
}
