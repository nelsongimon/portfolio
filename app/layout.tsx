import LanguageProvider from "@/context/LanguageContext";
import TopLeftImage from "@/components/TopLeftImage";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import "./globals.css";
import { Metadata } from "next";
// import FrameMotionProvider from "@/providers/FrameMotionProvider";


const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
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
          <div className="page text-white relative">
            <div className="h-full pt-[200px] lg:pt-[150px]">
              <Navbar />
              <Header />
              <TopLeftImage />
              {children}
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
