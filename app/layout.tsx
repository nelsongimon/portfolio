import LanguageProvider from "@/context/LanguageContext";
import TopLeftImage from "@/components/TopLeftImage";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import "./globals.css";
// import FrameMotionProvider from "@/providers/FrameMotionProvider";


const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Nelson Gimon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={sora.className}>
        <LanguageProvider>
          <div className="page bg-indigo-950 text-white relative">
            <Navbar />
            <Header />
            <TopLeftImage />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
