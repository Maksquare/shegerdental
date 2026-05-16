import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingIcon from "@/components/FloatingIcon";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Texas Homecare",
  description: "Hospital level care at the comfort of your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased`}
      >
             <div className="pt-28">

        {children}
        <WhatsAppButton/>
             </div>
      
      </body>
    </html>
  );
}
