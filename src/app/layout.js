import { Fustat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './../components/Navbar';


const fustat = Fustat({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust based on available weights
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "rent-yard",
  description: "Rent-Yard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fustat.className} >
      <body>
         <Navbar/>
        {children}
      </body>
    </html>
  );
}
